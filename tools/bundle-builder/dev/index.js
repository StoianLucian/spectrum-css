/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const path = require("path");

const gulp = require("gulp");
const rename = require("gulp-rename");
const logger = require("gulplog");

const browserSync = require("browser-sync");

const docs = require("@spectrum-css/documentation/index.js");

const dirs = require("../lib/dirs");
const subrunner = require("../subrunner");

function getPackageFromPath(filePath) {
	return filePath.match(`${dirs.components}\/(.*?)\/`)[1];
}

// run buildLite on a selected set of packages that depend on commons
// yay: faster than 'rebuild everything' approach
// boo: must add new packages here as commons grows
function buildDepenenciesOfCommons() {
	const dependentComponents = [
		`${dirs.components}/actionbutton`,
		`${dirs.components}/button`,
		`${dirs.components}/clearbutton`,
		`${dirs.components}/closebutton`,
		`${dirs.components}/infieldbutton`,
		`${dirs.components}/logicbutton`,
		`${dirs.components}/picker`,
		`${dirs.components}/pickerbutton`,
	];
	return subrunner.runTaskOnPackages("build", dependentComponents);
}

function copyPackages() {
	return gulp
		.src([
			`${dirs.components}/*/package.json`,
			`${dirs.components}/*/dist/**`,
			`!${dirs.components}/*/dist/docs/**`,
		])
		.pipe(
			rename(function (file) {
				file.dirname = file.dirname.replace("/dist", "");
			})
		)
		.pipe(gulp.dest("dist/components/"));
}

function serve() {
	let PORT = 3000;

	if (process.env.BROWSERSYNC_PORT) {
		PORT = process.env.BROWSERSYNC_PORT;
		logger.info(
			`Setting '${PORT} as port for browsersync, which hopefully is valid`
		);
	}

	if (process.env.BROWSERSYNC_OPEN === "true") {
		logger.info("New browser instance will open");
	}

	browserSync({
		startPath: "index.html",
		server: `${process.cwd()}/dist/`,
		notify: process.env.BROWSERSYNC_NOTIFY === "true" ? true : false,
		open: process.env.BROWSERSYNC_OPEN === "true" ? true : false,
		port: PORT,
	});
}

/*
  Watch for changes to globs matching files within packages, execute task for that package, and copy/inject specified files
*/
function watchWithinPackages(glob, task, files) {
	logger.debug(`Watching ${glob}, will run ${task} and stream ${files}`);

	let watcher = gulp.watch(
		glob,
		{
			// Otherwise we get infinite loops because chokidar gets all crazy with symlinked deps
			followSymlinks: false,
		},
		function handleChanged(done) {
			if (!changedFile) {
				done();
				return;
			}

			let packageName = getPackageFromPath(changedFile);
			let packageDir = path.dirname(require.resolve(`@spectrum-css/${packageName}/package.json`));

			if (typeof task === "function") {
				task(changedFile, packageName, (err) => {
					done(err);
					changedFile = null;
				});
			} else {
				subrunner.runComponentTask(packageDir, task, (err) => {
					if (err) {
						changedFile = null;
						return done(err);
					}

					// Copy files
					gulp
						.src(`${packageDir}/dist/${files}`)
						.pipe(gulp.dest(`dist/components/${packageName}/`))
						.on("end", () => {
							logger.debug(`Injecting files from ${packageName}/:\n  ${files}`);

							// Inject
							gulp
								.src(`dist/components/${packageName}/${files}`)
								.pipe(browserSync.stream());

							changedFile = null;

							done();
						})
						.on("error", (err) => {
							changedFile = null;

							done(err);
						});
				});
			}
		}
	);

	let changedFile = null;
	watcher.on("change", (filePath) => {
		logger.debug(`Got change for ${filePath}`);

		if (changedFile === null) {
			changedFile = filePath;
		}
	});
}

function reload(cb) {
	browserSync.reload();
	if (cb) {
		cb();
	}
}

function watchSite() {
	gulp.watch(`${dirs.site}/*.pug`, gulp.series(docs.buildDocs_pages, reload));

	gulp.watch(
		`${dirs.site}/includes/*.pug`,
		gulp.series(docs.build, reload)
	);

	gulp.watch(
		[`${dirs.site}/templates/siteComponent.pug`, `${dirs.site}/util.js`],
		gulp.series(docs.build, reload)
	);

	gulp.watch(
		[`${dirs.site}/resources/css/*.css`, `${dirs.site}/resources/js/*.js`],
		gulp.series(
			docs.buildDocs_copyFreshResources,
			function injectSiteResources() {
				return gulp
					.src(["dist/css/**/*.css", "dist/js/**/*.js"])
					.pipe(browserSync.stream());
			}
		)
	);
}

function watchCommons() {
	gulp.watch(
		[`${dirs.components}/commons/*.css`],
		gulp.series(
			buildDepenenciesOfCommons,
			copyPackages,
			reload
		)
	);
}

function watch() {
	serve();

	watchCommons();

	watchWithinPackages(
		`${dirs.components}/*/{index,skin}.css`,
		"build",
		"*.css"
	);
	watchWithinPackages(
		`${dirs.components}/*/themes/{spectrum,express}.css`,
		"build",
		"*.css"
	);

	watchWithinPackages(
		[
			`${dirs.components}/*/metadata/*.yml`,
		],
		(_, package, done) => {
			const packageDir = path.dirname(require.resolve(`@spectrum-css/${package}/package.json`));
			// Do this as gulp tasks to avoid premature stream termination
			try {
				gulp.series(
					// Get data first so nav builds
					docs.buildDocs_getData,
					buildDocs_forDep = () => docs.buildDocs_forDep(packageDir),
				)();
				// this catches yaml parsing errors
				// should stop the series from running
			} catch (error) {
				done(error);
			} finally {
				// we have to do this
				// or gulp will get wedged by the error
				done();
				reload();
			}
		}
	);

	watchSite();
}

exports.watch = watch;

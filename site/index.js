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

const fs = require("fs");
const fsp = fs.promises;
const path = require("path");

const gulp = require("gulp");
const pug = require("gulp-pug");
const data = require("gulp-data");

const pugCompiler = require("pug");
const yaml = require("js-yaml");
const through = require("through2");
const ext = require("replace-ext");
const lunr = require("lunr");
const npmFetch = require("npm-registry-fetch");

const dirs = require("../tools/bundle-builder/lib/dirs");
const depUtils = require("../tools/bundle-builder/lib/depUtils");

require("colors");

const minimumDeps = [
	"icon",
	"statuslight",
	"link",
	"page",
	"site",
	"typography",
	"tooltip",
	"sidenav",
	"actionbutton",
	"button",
	"textfield",
	"clearbutton",
	"search",
	"menu",
	"fieldlabel",
	"picker",
	"popover",
	"underlay",
	"card",
	"divider",
	"illustratedmessage",
	"accordion",
	"table",
];

const templateData = {
	nav: [],
	pkg: require("package.json"),
};

async function buildDocs_forDep(package) {
	const dnaVars = require("@spectrum-css/vars");

	const dirName = path.dirname(require.resolve(path.join(package, "package.json")));
	const dependencyOrder = await depUtils.getPackageDependencyOrder(dirName);

	return new Promise((resolve, reject) => {
		const files = fg.sync(`${dirName}/metadata/*.yml`, { allowEmpty: true });

		files.forEach((file) => {
			const componentDeps = [
				...new Set([
					...dependencyOrder.map((dep) => dep.split("/").pop()) ?? [],
					package,
				])
			];

			const pkgPath = path.join(dirs.components, package.split("/").pop(), "package.json");
			if (!fs.existsSync(pkgPath)) return;

			const pkg = require(pkgPath);
			const docsDeps = [
				...minimumDeps,
				...componentDeps
			]?.filter((dep, i) => docsDeps.indexOf(dep) === i);

			const data = await npmFetch.json(pkg.name);
			const rawDate = data.time[pkg.version ?? "latest"];
			const releaseDate = new Date(rawDate).toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			}) ?? "Unreleased";

			return {
				util: require(`${dirs.site}/util`),
				dnaVars,
				...templateData ?? {},
				pageURL: path.basename(file.basename, ".yml") + ".html",
				dependencyOrder: docsDeps,
				releaseDate,
				pkg,
			};
		})

		const component = yaml.load(String(file.contents));
		if (!component.id) {
			// Use the example file name
			component.id = path.basename(file.basename, ".yml");
		}

		const templatePath = `${dirs.site}/templates/siteComponent.pug`;
		if (!fs.existsSync(templatePath)) {
			return cb(new Error(`Template not found: ${templatePath}`));
		}

		const compiled = pugCompiler.renderFile(templatePath, {
			component,
			...(file.data ?? {}),
		});
		if (compiled instanceof Error) {
			return cb(compiled);
		}

		file.path = ext(file.path, ".html");
		file.contents = Buffer.from(compiled);
		cb(null, file);

		// .pipe(gulp.dest("dist/"))
		// .on("end", resolve)
		// .on("error", reject);
	});
}

// Combined
async function buildDocs_individualPackages() {
	const dependencies = await depUtils.getFolderDependencyOrder(dirs.components);
	return Promise.all(dependencies.map(buildDocs_forDep));
}

function buildDocs_generateIndex() {
	return gulp
		.src([
			`${dirs.components}/*/metadata/*.yml`,
		])
		.pipe(
			(function () {
				let docs = [];
				let store = {};
				let latestFile = null;
				function readYML(file, _, cb) {
					const {
						name,
						description,
					} = yaml.load(String(file.contents));
					const component = file.dirname.replace("/metadata", "").split("/").pop();
					const href = ext(file.basename, ".html");

					docs.push({ href, name, description });
					store[href] = { href, name, component, description };

					latestFile = file;

					cb();
				}

				function endStream(cb) {
					let indexFile = latestFile.clone({ contents: false });
					indexFile.path = path.join(latestFile.base, "index.json");

					let index = lunr(function () {
						this.ref("href");
						this.field("name", { boost: 10 });
						this.field("description");

						docs.forEach(function (doc) {
							this.add(doc);
						}, this);
					});

					// Note: could merge main index here using technique from https://www.garysieling.com/blog/building-a-full-text-index-in-javascript

					indexFile.contents = Buffer.from(JSON.stringify(index));
					this.push(indexFile);

					let storeFile = latestFile.clone({ contents: false });
					storeFile.path = path.join(latestFile.base, "store.json");
					storeFile.contents = Buffer.from(JSON.stringify(store));
					this.push(storeFile);

					cb();
				}

				return through.obj(readYML, endStream);
			})()
		)
		.pipe(gulp.dest("dist/"));
}

function buildDocs_getData() {
	let nav = [];
	return gulp
		.src([
			`${dirs.components}/*/metadata/*.yml`,
		])
		.pipe(
			through.obj(function readYML(file, _, cb) {
				const {
					name,
					hide = false,
					description,
				} = yaml.load(String(file.contents));

				nav.push({
					name: name,
					component: file.dirname.replace("/metadata", "").split("/").pop(),
					hide: hide,
					href: ext(file.basename, ".html"),
					description: description,
				});

				cb(null, file);
			})
		)
		.on("end", function () {
			templateData.nav = nav.sort(function (a, b) {
				return a.name <= b.name ? -1 : 1;
			});
		});
}

function buildDocs_copyResources() {
	return gulp.src(`${dirs.site}/dist/**`).pipe(gulp.dest("dist/"));
}

function buildDocs_copyFreshResources() {
	return gulp.src(`${dirs.site}/resources/**`).pipe(gulp.dest("dist/"));
}

function buildDocs_html() {
	return gulp
		.src(`${dirs.site}/*.pug`)
		.pipe(
			data(function (file) {
				return {
					util: require(`${dirs.site}/util`),
					pageURL: path.basename(file.basename, ".pug") + ".html",
					dependencyOrder: minimumDeps,
				};
			})
		)
		.pipe(
			pug({ locals: templateData })
		)
		.pipe(gulp.dest("dist/"));
}

// Used in dev commands
exports.buildDocs_getData = buildDocs_getData;
exports.buildDocs_copyFreshResources = buildDocs_copyFreshResources;
exports.buildDocs_html = buildDocs_html;
exports.buildDocs_copyResources = buildDocs_copyResources;
exports.buildDocs_forDep = buildDocs_forDep;
exports.buildDocs_pages = gulp.series(
	buildDocs_getData,
	buildDocs_html
);

// Used in top-level docs build command
exports.build = gulp.series(
	buildDocs_getData,
	gulp.parallel(
		buildDocs_generateIndex,
		buildDocs_individualPackages,
		buildDocs_copyResources,
		buildDocs_html
	)
);

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

const builder = require("@spectrum-css/bundle-builder");

function buildDocs_resources() {
	return gulp
		.src(path.join(__dirname, "resources/**"))
		.pipe(gulp.dest(path.join(__dirname, "../dist/")));
}

function buildDocs_loadicons() {
	return gulp
		.src(require.resolve("loadicons"))
		.pipe(gulp.dest(path.join(__dirname, "../dist/js/loadicons/")));
}

function buildDocs_lunr() {
	return gulp
		.src(require.resolve("lunr"))
		.pipe(gulp.dest(path.join(__dirname, "../dist/js/lunr/")));
}

function buildDocs_prism() {
	return gulp
		.src([
			`${path.dirname(require.resolve("prismjs"))}/themes/prism.css`,
			`${path.dirname(require.resolve("prismjs"))}/themes/prism-dark.css`,
		])
		.pipe(gulp.dest(path.join(__dirname, "../dist/css/prism/")));
}

function buildDocs_tokens() {
	return gulp
		.src([
			require.resolve("@spectrum-css/tokens"),
		])
		.pipe(gulp.dest(path.join(__dirname, "../dist/components/tokens/")));
}

function buildDocs_workflowIcons() {
	return gulp
		.src(
			path.join(
				path.dirname(require.resolve("@adobe/spectrum-css-workflow-icons")),
				"spectrum-icons.svg"
			),
		)
		.pipe(gulp.dest(path.join(__dirname, "../dist/img/")));
}

function buildDocs_uiIcons() {
	return gulp
		.src(require.resolve("@spectrum-css/ui-icons"))
		.pipe(gulp.dest(path.join(__dirname, "../dist/img/")));
}


const copySiteResources = gulp.parallel(
	buildDocs_resources,
	buildDocs_tokens,
	buildDocs_loadicons,
	buildDocs_lunr,
	buildDocs_workflowIcons,
	buildDocs_uiIcons,
	buildDocs_prism
);

exports.dev = gulp.series(copySiteResources, builder.dev);
exports.buildDocs = gulp.parallel(builder.buildDocs, copySiteResources);

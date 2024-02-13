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

const docs = require("@spectrum-css/documentation/index.js");

const { watch } = require("./dev");
const { runTaskOnAllComponents } = require("./subrunner");
const { copyVars } = require("./vars");

const buildComponents = () => runTaskOnAllComponents("build");

exports.buildDocs = () => Promise.all([
	docs.build(),
	copyVars(),
	copyPackages(),
]);

exports.default =
	exports.build =
		() => buildComponents().then(exports.buildDocs);

exports.dev =
	() => buildComponents().then(exports.buildDocs).then(watch);

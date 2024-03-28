/*!
 * Copyright 2023 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const path = require("path");
const {kebabCase} = require("lodash");

const generateFileConfig = require("./utilities/generate-file-config.js");
const CSSSetsFormatter = require("./utilities/css-sets-formatter.js");

const StyleDictionary = require("style-dictionary");

const CSSOpenTypeTransform =
	require("style-dictionary-sets").CSSOpenTypeTransform;

StyleDictionary.registerTransform(CSSOpenTypeTransform);

StyleDictionary.registerTransform({
  type: "name",
  name: "name/kebab",
  transformer: (token, options) => {
    const tokenSets = token.path.filter((_, idx, array) => array[idx - 1] == "sets");
    return kebabCase([options.prefix, token.path[0], ...tokenSets].join(" "));
  },
});

StyleDictionary.registerTransform({
  type: "attribute",
  name: "attribute/sets",
  matcher: (token) => token.path.includes("sets"),
  transformer: (token) => {
    return {
      sets: token.path.filter(
        (_, index, array) => array[index - 1] == "sets"
      ),
    };
  },
});
StyleDictionary.registerFormat(CSSSetsFormatter);

/**
 * @note This references the package.json because we want the root folder and
 * not a nested folder which might be returned if the `main` property
 * in the package.json is present.
 */
const tokensPath = require.resolve("@adobe/spectrum-tokens/package.json");
const tokensDir = path.dirname(tokensPath);
// const setNames = ["desktop", "mobile"]; // , "light", "dark", "darkest"];

module.exports = {
	/* Why are we using source? Because it matches style-dictionary format */
	source: [`${tokensDir}/src/*.json`],
	platforms: {
		CSS: {
			buildPath: "dist/css/",
			transforms: [
				"attribute/sets",
				"name/kebab",
				CSSOpenTypeTransform.name,
			],
			prefix: "spectrum",
			files: [
				generateFileConfig(),
				// ...["spectrum", "express"].map((subSystemName) =>
				// 	generateFileConfig({ subSystemName })
				// ),
				// ...["desktop", "mobile"].map((setName) =>
				// 	[
				// 		generateFileConfig({ setName }),
				// 		generateFileConfig({
				// 			setName,
				// 			subSystemName: "spectrum",
				// 		}),
				// 		generateFileConfig({
				// 			setName,
				// 			subSystemName: "express",
				// 		}),
				// 	]
				// ).flat(),
			],
		},
	},
};

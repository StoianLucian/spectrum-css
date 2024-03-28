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

const fs = require("fs");
const path = require("path");

/**
 *
 * @param {{}} config
 * @param {"desktop"|"mobile"} config.scale
 * @param {"spectrum"|"express"} config.theme
 * @returns {import('style-dictionary').File}
 */
module.exports = function ({ scale, theme } = {}) {
	const isShared = !theme;
	const isSpectrum = !theme || (theme && theme === "spectrum");
	const isScale = scale && ["desktop", "mobile"].some(context => scale === context);

	let selector = ".spectrum";

	let scope;
	if (isScale) {
		scope =
			{
				desktop: "medium",
				mobile: "large",
			}[scale];

		selector += `.spectrum--${scope}`;
	}

	// postfix the selector with the subsystem name
	if (!isSpectrum) selector += `.spectrum--${theme}`;

	return {
		// className,
		// packageName,
		destination: !isScale && isShared ? "global-vars.css" : `${theme ? `${theme}/` : ""}${scope}-vars.css`,
		format: "css/sets",
		// Returns true if the token should be included in the rendered data set
		filter: (token) => {
			const { path } = token;

			// Fetch the sets for this token
			const tokenSets = [...new Set(path.filter((_, idx, array) => array[idx - 1] == "sets"))];

			/* We don't process wireframe values */
			if (tokenSets.includes("wireframe")) return false;

			/* Lightest and darkest values are deprecated */
			if (["lightest", "darkest"].some(color => tokenSets.includes(color))) return false;

			if (["desktop", "mobile"].some(s => tokenSets.includes(s))) return isScale;
			if (tokenSets.includes("express")) return !isSpectrum;
			if (tokenSets.includes("spectrum")) return isSpectrum;

			// Everything remaining is included if it's a "shared" output file
			return isShared;
		},
		options: {
			showFileHeader: true,
			fileHeader: () => {
				const copyright = fs.readFileSync(path.join(__dirname, "../../COPYRIGHT"));
				return [copyright, "/* This file is generated from @adobe/spectrum-tokens; ${dictionary.file} */"];
			},
			outputReferences: false,
			// [key: string]: any
			selector,
			sets: [scale, theme].filter(Boolean),
		},
	};
};

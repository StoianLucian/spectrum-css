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

/**
 * What do we want to do here
 *
 * For values that have a light and dark value, i.e.,
 * gray-50: { sets: { light: { value: rgb(255,255,255) }, dark: { value: rbg(29,29,29) } } }
 *
 * as a light-dark() value:
 * —-spectrum-gray-50: light-dark(rgb(255,255,255), rgb(29,29,29));
 *
 * under .spectrum or :root
 */
module.exports = {
	name: "css/sets",
	// dictionary -> keys: 'properties', 'allProperties', 'tokens', 'allTokens', 'getReferences', 'usesReference', '_properties'
	formatter: ({ dictionary, platform, _, options }) => {
		// Remove curly braces from the output
		const cleanResult = (result) => {
			if (result.startsWith("{") && result.endsWith("}")) {
				return `var(--${platform.prefix}-${result.replace(/(\{|\})/g, "")})`;
			} else return result;
		};

		const valueFormatter = (token, { key, context } = {}) => {
			/* We can't do anything without a token value */
			if (!token) return;

			console.log(key, token, context);
			if (typeof token === "string") return cleanResult(token);
			if (typeof token === "object") {
				const alias = token.path?.[0];
				if (alias && alias !== key) {
					return cleanResult(`{${alias}}`);
				}
			}

			if (token.ref) {
				if (typeof token.ref === "string") return token.ref;
				if (context) {
					let value = token.ref.sets[context];

					if (value && value.path && value.path.length) {
						return cleanResult(value.path[0]);
					}

					value = token.ref.sets[platform.prefix].ref.sets[context];

					if (value && value.path && value.path.length) {
						return cleanResult(value.path[0]);
					}
				}
			}

			/* Check if the original values used a reference value */
			if (token.value) return token.value;
		};

		const resultSet = new Map();

		Object.entries(dictionary.tokens).forEach(([key, token]) => {
			const name = `${platform.prefix}-${key}`;

			if (typeof token.value === "string") {
				resultSet.set(name, cleanResult(token.value));
				return;
			}

			const sets = token.value?.sets;
			const variants = sets ? Object.keys(sets) : [];

			if (variants.length && ["light", "dark"].some(c => variants.includes(c))) {
				const lightValue = valueFormatter(sets.light, { key, context: 'light' });
				const darkValue = valueFormatter(sets.dark, { key, context: 'dark' });

				// If the light & dark values are the same, just use the first value
				if (lightValue === darkValue) {
					resultSet.set(name, lightValue);
				} else {
					resultSet.set(name, `light-dark(${lightValue}, ${darkValue})`);
				}

				return;
			}

			/* Skip this entry if it has variants other than whats supported here */
			if (variants.length) return;

			resultSet.set(name, valueFormatter(token.value, { key, prefix: platform.prefix }));
		});

		const resultList = [];
		resultSet.forEach((value, key) => {
			if (!value) return;

			// Just add it to the result list
			if (typeof value === "string") {
				resultList.push(`--${key}: ${value}`);
				return;
			}

			if (value.light && value.dark) {
				resultList.push(`--${key}: light-dark(${value.light}, ${value.dark})`);
				return;
			}

			console.log("Unknown value", value);
		});

		const selector = options.selector ? options.selector : ":root";

		return `${selector} {\n  color-scheme: light dark;\n\n  ${resultList.join(`;\n  `)}\n}\n`;
	},
};

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
		const valueFormatter = (token, context = undefined) => {
			/* We can't do anything without a token value */
			if (!token) return;

			/* Check if the original values used a reference value */
			if (token.original && !token.original?.ref && typeof token.value !== "undefined") {
				return token.value;
			}

			if (context && token.sets && token.sets[context]) {
				return valueFormatter(token.sets[context], context);
			} else if (context && token.sets && token.sets.spectrum && token.sets.spectrum.sets[context]) {
				return valueFormatter(token.sets.spectrum.sets[context], context);
			}

			// console.log('valueFormatter', token);

			/* If it was a referenced value, let's determine the custom property name */
			const resultParts = token.original.ref
				.substring(1, token.original.ref.length - 1)
				.split(".");

			/* Remove the prefix if it appears in the result */
			if (platform.prefix) resultParts.splice(0, 0, platform.prefix);

			return `var(--${resultParts.join("-")})`;
		};

		const resultSet = new Map();

		Object.entries(dictionary.properties).forEach(([key, value]) => {
			const name = `${platform.prefix}-${key}`;
			const variants = value.sets ? Object.keys(value.sets) : [];

			if (key.includes('background-layer-1-color')) {
				console.log(dictionary.usesReference(value), dictionary.getReferences(value));
				console.log(value.sets.light.sets.light, value.sets.light.ref.sets.light);
			}

			if (variants.length && ["light", "dark"].some(c => variants.includes(c))) {
				const lightValue = valueFormatter(value.sets.light, 'light');
				const darkValue = valueFormatter(value.sets.dark, 'dark');

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

			resultSet.set(name, valueFormatter(value));
		});

		// dictionary.allTokens.forEach((token) => {
		// 	const name = new Set([
		// 		platform.prefix,
		// 		...(token.path?.filter(part => part !== "sets") ?? []),
		// 	].filter(Boolean));

		// 	/* Convert light/dark to the light/dark function */
		// 	if (["light", "dark"].some(color => name.has(color))) {
		// 		// Pull out the light/dark string from the variable name
		// 		const customPropertyName = [...name].filter(item => !["light", "dark"].some(color => item === color));

		// 		let data = {};
		// 		if (resultSet.has(customPropertyName.join("-"))) {
		// 			data = resultSet.get(customPropertyName.join("-"));
		// 		}

		// 		resultSet.set(customPropertyName.join("-"), {
		// 			...data,
		// 			[name.has("dark") ? "dark" : "light"]: valueFormatter(token, platform, dictionary),
		// 		});
		// 	} else {
		// 		resultSet.set([...name].join("-"), valueFormatter(token, platform, dictionary));
		// 	}
		// });

		const resultList = [];
		resultSet.forEach((value, key) => {
			// Just add it to the result list
			if (typeof value === "string") {
				resultList.push(`--${key}: ${value}`);
			} else {
				resultList.push(`--${key}: light-dark(${value.light}, ${value.dark})`);
			}
		});

		const selector = options.selector ? options.selector : ":root";

		return `${selector} {\n  color-scheme: light dark;\n\n  ${resultList.join(`;\n  `)}\n}\n`;
	},
};

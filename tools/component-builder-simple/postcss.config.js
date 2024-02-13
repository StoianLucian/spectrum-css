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

module.exports = ({ options = {} }) => {
    const {
        splitinatorConfig = {
            noFlatVariables: false,
            noSelectors: false,
        },
        additionalPlugins = [],
    } = options;

    return {
        ...options,
		plugins: [
            require("postcss-import"),
            require("postcss-extend"),
            require("postcss-nested"),
            require("postcss-splitinator")({
                processIdentifier: (identifier) => {
                    if (identifier === "express") {
                        return "spectrum--express";
                    }
                    return identifier;
                },
                ...splitinatorConfig,
            }),
            ...additionalPlugins,
            require("postcss-hover-media-feature"),
            require("postcss-calc"),
            require("postcss-dropunusedvars")({ fix: false }),
            require("postcss-dropdupedvars"),
            require("postcss-discard-empty"),
            require("at-rule-packer"),
            require("autoprefixer")({}),
            require("postcss-sorting")({
                order: ["custom-properties", "declarations", "at-rules", "rules"],
                "properties-order": "alphabetical",
            }),
            /* Merges _adjacent_ rules only */
            require("postcss-merge-rules"),
            /* Combines all duplicated selectors */
            require("postcss-combine-duplicated-selectors")({}),
            /* Remove all duplicate copyrights and add a single one at the top */
            require("postcss-discard-comments")({
                removeAllButFirst: true,
                remove: (comment) => {
                    return (
                        ["Copyright"].some((str) => comment.includes(str)) ||
                        comment.trim() === ""
                    );
                },
            }),
            /* After cleaning up comments, remove all empty rules */
            require("postcss-discard-empty")(),
            /* Ensure the license is at the top of the file */
            require("postcss-licensing")({
                filename: "../../COPYRIGHT",
                skipIfEmpty: true,
            }),
		],
	};
};

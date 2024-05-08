import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { makeDecorator } from "@storybook/preview-api";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withVariantsWrapper = makeDecorator({
	name: "withVariantsWrapper",
	parameterName: "variants",
	wrapper: (StoryFn, context) => {
		const { argTypes = {}, args = {} } = context;

		const isTestingPreview = window.isChromatic();
		const variants = [];

		variants.push({
			name: undefined,
			args: {},
		});

		Object.entries(argTypes).forEach(([key, details]) => {
			if (!details) return;
			if (details.table?.category !== "Variant") return;
			if (details.options?.length > 0) {
				details.options.forEach(opt => {
					variants.push({
						name: `${details.name} ${opt}`,
						args: {
							[key]: opt,
						}
					});
				});
				return;
			}
			if (details.control?.type !== "boolean") return;
			variants.push({
				name: details.name,
				args: {
					[key]: true
				}
			});
		});

		// If there are no size options, return the story
		if (!variants.length || !isTestingPreview) return html`${StoryFn(context)}`;

		return html`
		<div
			data-scoped-container="variants"
			style=${styleMap({
				"display": "flex",
				"flex-direction": "column",
				"gap": "12px",
			})}
		>
			${variants.map((details, idx) => {
				// Reset args to original dataset
				context.args = args;

				// Override for this example
				Object.entries(details.args).forEach(([key, value]) => context.args[key] = value);

				return html`
				<div style=${styleMap({
					"margin-block-start": idx > 0 ? "24px" : undefined,
					"border-block-start": idx > 0 ? "1px solid var(--spectrum-gray-400)" : undefined,
				})}>
					${when(details.name, () => Typography({
						semantics: "heading",
						size: "s",
						content: [details.name],
						customStyles: {
							"margin-block": "12px",
						},
					}))}
					<div data-preview-styles> ${StoryFn(context)} </div>
				</div>`;
			})}
		</div>`;
	},
});

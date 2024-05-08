import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { makeDecorator } from "@storybook/preview-api";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withSizingWrapper = makeDecorator({
	name: "withSizingWrapper",
	parameterName: "sizing",
	wrapper: (StoryFn, context) => {
		const { argTypes = {} } = context;

		// If there are no size options, return the story
		if (!argTypes.size) return html`${StoryFn(context)}`;

		const isTestingPreview = window.isChromatic();
		const sizes = argTypes.size.options ?? [];

		if (sizes.length === 0 || !isTestingPreview) return html`${StoryFn(context)}`;

		const sizeMap = {
			xxs: "Extra-extra-small",
			xs: "Extra-small",
			s: "Small",
			m: "Medium",
			l: "Large",
			xl: "Extra-large",
			xxl: "Extra-extra-large",
		};

		return html`
		<div data-scoped-container="sizes" style=${styleMap({
			"display": "flex",
			"flex-direction": "column",
			"min-inline-size": "max-content",
			"inline-size": "400px",
			"gap": "12px",
		})}>
			${sizes.map((size) => {
				context.args.size = size;
				return html`
					<div>
						${Typography({
							semantics: "heading",
							size: "xs",
							content: [sizeMap[size]],
							customStyles: {
								"margin": "8px 0 2px",
							},
						})}
						<div
							style=${styleMap({
								"padding": "6px",
								"border": "1px solid var(--spectrum-gray-600)",
								"border-radius": "4px",
							})}
							data-preview-styles
						>
							${StoryFn(context)}
						</div>
					</div>
				`;
			})}
		</div>`;
	},
});

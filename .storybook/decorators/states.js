import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { makeDecorator } from "@storybook/preview-api";

import { Template as Typography } from "@spectrum-css/typography/stories/template";

/**
 * @todo: Need a way to validate combinations of states
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 **/
export const withStatesWrapper = makeDecorator({
	name: "withStatesWrapper",
	parameterName: "states",
	wrapper: (StoryFn, context) => {
		const { argTypes = {} } = context;

		const states = new Map();

		states.set('default', {
			name: undefined,
		});

		Object.entries(argTypes).forEach(([key, details]) => {
			if (!details) return;
			if (details.table?.category !== "State") return;
			if (details.control?.type !== "boolean") {
				console.log(`Cannot generate state preview automatically for non-boolean states: ${details.name}`);
				return;
			}

			states.set(key, details);
		});

		// If there are no size options, return the story
		if (!states.size) return html`${StoryFn(context)}`;

		if (!window.isChromatic()) return html`${StoryFn(context)}`;

		return html`
		<div
			data-scoped-container="states"
			style=${styleMap({
				"display": "flex",
				"flex-direction": "column",
				"gap": "12px",
			})}
		>
			${[...states.entries()].map(([key, details]) => {
				context.args[key] = true;

				// Set all other states to false
				[...states.keys()].filter(v => v !== key).forEach(k => context.args[k] = false);

				return html`
					<div data-value=${key}>
						${when(details.name, () => Typography({
							semantics: "heading",
							size: "xxs",
							content: [`${details.name} state`],
							customStyles: {
								"margin-block": "4px 2px",
							},
						}))}
						<div style=${styleMap({
							"padding": "4px",
							"border": "1px solid var(--spectrum-gray-400)",
							"border-radius": "4px",
						})} data-preview-styles> ${StoryFn(context)} </div>
					</div>
				`;
			})}
		</div>`;
	},
});

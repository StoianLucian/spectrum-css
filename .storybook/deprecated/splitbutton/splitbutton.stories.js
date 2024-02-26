import { Template } from "@spectrum-css/splitbutton/stories/template.js";

import { hrefTo } from '@storybook/addon-links';

import "@spectrum-css/vars/dist/spectrum-large.css";
import "@spectrum-css/vars/dist/spectrum-medium.css";

import "@spectrum-css/vars/dist/spectrum-dark.css";
import "@spectrum-css/vars/dist/spectrum-darkest.css";
import "@spectrum-css/vars/dist/spectrum-light.css";

import "@spectrum-css/vars/dist/spectrum-global.css";

import "@spectrum-css/expressvars/dist/spectrum-large.css";
import "@spectrum-css/expressvars/dist/spectrum-medium.css";

import "@spectrum-css/expressvars/dist/spectrum-dark.css";
import "@spectrum-css/expressvars/dist/spectrum-darkest.css";
import "@spectrum-css/expressvars/dist/spectrum-light.css";

import "@spectrum-css/expressvars/dist/spectrum-global.css";

/**
 * A split button surfaces an immediately invokable action via it's main button, as well as a list of alternative actions in its toggle-able menu overlay.
*/
export default {
	title: "Deprecated/Split button",
	component: "SplitButton",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: { disable: true },
			options: ["m"],
			control: "select",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: { disable: true },
			options: ["accent", "primary", "secondary"],
			control: "select",
		},
		position: {
			name: "Position",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["right", "left"],
			control: "select",
		},
		iconName: { table: { disable: true } },
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
	},
	args: {
		rootClass: "spectrum-SplitButton",
		size: "m",
		position: "right",
		label: "Split Button",
		variant: "accent",
		treatment: "fill",
		iconName: "ChevronDown100",
	},
	parameters: {
		actions: {
			handles: [],
		},
		chromatic: { disable: true },
		badgesConfig: {
			deprecated: {
				tooltip: {
					desc: "Use a button group to show any additional actions related to the most critical action. Reference Spectrum documentation for more information.",
					links: [
						{
							title: 'Button group',
							href: await hrefTo('Components/Button group'),
						},
						{
							title: 'Spectrum documentation',
							href: "https://spectrum.corp.adobe.com/page/button-group/#Use-a-button-group-to-show-additional-actions",
						}
					]
				}
			},
		},
		badges: ["deprecated"],
	},
};

export const Default = Template.bind({});
Default.args = {};

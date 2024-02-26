import { Template } from "@spectrum-css/quickaction/stories/template.js";

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

export default {
	title: "Deprecated/Quick actions",
	component: "QuickAction",
	argTypes: {
		content: { table: { disable: true } },
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		position: {
			name: "Position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["left", "right"],
		},
		textOnly: {
			name: "Text only action buttons",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-QuickActions",
		isOpen: true,
		textOnly: false,
		content: [
			{
				iconName: "Edit",
				label: "Edit",
			},
			{
				iconName: "Copy",
				label: "Copy",
			},
			{
				iconName: "Delete",
				label: "Delete",
			},
		],
	},
	parameters: {
		actions: {
			handles: [],
		},
		chromatic: { disable: true },
		badgesConfig: {
			deprecated: {
				tooltip: {
					desc: "Use an action bar to allow users to perform actions on either a single or multiple items at the same time, instead.",
					links: [
						{
							title: 'Action bar',
							href: await hrefTo('Components/Action bar'),
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

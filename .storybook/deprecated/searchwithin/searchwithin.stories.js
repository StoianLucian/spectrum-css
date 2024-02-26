import { Template } from "@spectrum-css/searchwithin/stories/template.js";

import { hrefTo } from '@storybook/addon-links';

import { default as PickerStories } from "@spectrum-css/picker/stories/picker.stories.js";
const ignoreProps = ["rootClass", "position", "isRounded"];

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
	title: "Deprecated/Search within",
	component: "SearchWithin",
	argTypes: {
		...Object.entries(PickerStories.argTypes).reduce((acc, [key, value]) => {
			if (ignoreProps.includes(key)) return acc;
			if (["size"].includes(key))
				value.table = {
					...value.table,
					category: "Shared settings",
				};
			else
				value.table = {
					...value.table,
					category: "Picker settings",
				};
			return { ...acc, [key]: value };
		}, {}),
	},
	args: {
		rootClass: "spectrum-SearchWithin",
		isOpen: false,
		isQuiet: false,
		isDisabled: false,
		size: "m",
		label: "All",
	},
	parameters: {
		actions: {
			handles: [],
		},
		chromatic: { disable: true },
		badgesConfig: {
			deprecated: {
				tooltip: {
					desc: "Use a search field with a separate control to filter the search instead.",
					links: [
						{
							title: 'Search field',
							href: await hrefTo('Components/Search'),
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

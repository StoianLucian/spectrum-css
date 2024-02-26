import { Template } from "@spectrum-css/cyclebutton/stories/template";

import { default as ActionButtonStories } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";

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
 * The cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example.
*/
export default {
	title: "Deprecated/Cycle button",
	component: "CycleButton",
	argTypes: {
		size: ActionButtonStories?.argTypes?.size ?? {},
		initialIcon: {
			...(IconStories?.argTypes?.iconName ?? {}),
			name: "Initial icon",
			type: { name: "string", required: true },
			if: false,
		},
		selectedIcon: {
			...(IconStories?.argTypes?.iconName ?? {}),
			name: "Selected icon",
			if: false,
		},
		isSelected: ActionButtonStories?.argTypes?.isSelected ?? {},
		isDisabled: ActionButtonStories?.argTypes?.isDisabled ?? {},
	},
	args: {
		rootClass: "spectrum-CycleButton",
		size: "m",
		initialIcon: "Play",
		selectedIcon: "Pause",
	},
	parameters: {
		actions: {
			handles: [...(ActionButtonStories?.parameters?.actions?.handles ?? [])],
		},
		chromatic: { disable: true },
		badgesConfig: {
			deprecated: {
				tooltip: {
					desc: "Use the quiet variant of action button with the appropriate icon(s) instead. Any icon swapping that happens on-click/on-key should be handled by the implementation.",
					links: [
						{
							title: 'Action button',
							href: await hrefTo('Components/Action button/Quiet'),
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

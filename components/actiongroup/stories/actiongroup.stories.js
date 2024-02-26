import { Template } from "./template";

import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";

/**
 * The action group component is a collection of action buttons.
 */
export default {
	title: "Components/Action group",
	component: "ActionGroup",
	argTypes: {
		areQuiet: ActionButton.argTypes.isQuiet,
		areEmphasized: ActionButton.argTypes.isEmphasized,
		staticColors: ActionButton.argTypes.staticColor,
		content: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l", "xl"],
			control: "select",
		},
		vertical: {
			name: "Vertical layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		compact: {
			name: "Compact layout",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		justified: {
			name: "Justified",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-ActionGroup",
		size: "m",
		areQuiet: ActionButton.args.isQuiet,
		areEmphasized: ActionButton.args.isEmphasized,
		staticColors: ActionButton.args.staticColor,
		vertical: false,
		compact: false,
		justified: false,
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
				isSelected: true,
			},
		],
	},
	parameters: {
		actions: {
			handles: [...ActionButton.parameters.actions.handles],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/file/MPtRIVRzPp2VHiEplwXL2X/S-%2F-Desktop?type=design&node-id=3320%3A5274&mode=design&t=DBHnFzHwPDzCjf83-1",
		},
	},
};

export const Default = Template.bind({});
Default.args = {};


export const Compact = Template.bind({});
Compact.args = {
	compact: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
	vertical: true,
};

export const VerticalCompact = Template.bind({});
VerticalCompact.args = {
	vertical: true,
	compact: true,
};

export const Justified = Template.bind({});
Justified.args = {
	justified: true,
};

export const Quiet = Template.bind({});
Quiet.args = {
	areQuiet: true,
};

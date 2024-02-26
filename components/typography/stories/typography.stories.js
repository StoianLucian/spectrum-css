import { Template } from "./template";

import { html } from "lit";

/**
 * Spectrum Typography is broken out into several separate components.
 */
export default {
	title: "Components/Typography",
	component: "Typography",
	argTypes: {
		reduceMotion: { table: { disable: true } },
		semantics: {
			name: "Semantic type",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				disable: true,
			},
			options: ["heading", "body", "detail", "code"],
			control: "inline-radio",
		},
		size: {
			name: "Size",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"],
			control: "select",
		},
		variant: {
			name: "Variant",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["strong", "emphasized"],
			control: "inline-check",
		},
		glyph: {
			name: "Glyph style",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["serif", "sans-serif"],
			control: "inline-radio",
			if: { arg: "semantics", neq: "code" },
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Typography",
		size: "m",
		glyph: "sans-serif",
	},
	parameters: {
		actions: {
			handles: [],
		},
		design: {
			type: "figma",
			url: "https://www.figma.com/file/MPtRIVRzPp2VHiEplwXL2X/S-%2F-Desktop?type=design&node-id=5410%3A29301&mode=design&t=DBHnFzHwPDzCjf83-1",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	content: [
		{
			semantics: "heading",
			rootClass: "spectrum-Heading",
			content: ["Aliquet Mauris Eu"],
		},
		{
			semantics: "body",
			rootClass: "spectrum-Body",
			content: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
			],
		},
		{
			semantics: "body",
			rootClass: "spectrum-Body",
			content: [
				"Ut et lectus finibus, aliquet mauris eu, tincidunt mi. Donec scelerisque orci sit amet venenatis luctus. Morbi eget lacus est. Duis iaculis magna quis aliquam lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			],
		},
	],
};

export const Heading = (args) => {
	return html`${["xxs", "xs", "s", "m", "l", "xl", "xxl", "xxxl"]
		.reverse()
		.map((size) => {
			return Template({
				...args,
				content: [size, " - ", ...args.content, html`<br />`],
				size,
			});
		})}`;
};

Heading.argTypes = {
	weight: {
		name: "Weight",
		type: { name: "string" },
		table: {
			type: { summary: "string" },
			category: "Component",
		},
		options: ["heavy", "light"],
		control: "inline-radio",
	},
	size: { table: { disable: true } },
};
Heading.args = {
	semantics: "heading",
	content: ["Aliquet Mauris Eu"],
};
Heading.parameters = {
	design: {
		url: "https://www.figma.com/file/MPtRIVRzPp2VHiEplwXL2X/S-%2F-Desktop?type=design&node-id=5410%3A29461&mode=design&t=DBHnFzHwPDzCjf83-1"
	}
};

export const Body = (args) => {
	return html`${["xs", "s", "m", "l", "xl", "xxl", "xxxl"]
		.reverse()
		.map((size) => {
			return Template({
				...args,
				content: [size, " - ", ...args.content, html`<br />`],
				size,
			});
		})}`;
};
Body.argTypes = {
	size: {
		name: "Size",
		options: ["xs", "s", "m", "l", "xl", "xxl", "xxxl"],
		table: { disable: true },
	},
};
Body.args = {
	semantics: "body",
	content: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend est mollis ligula lobortis, tempus ultricies sapien lacinia. Nulla ut turpis velit. Sed finibus dapibus diam et sollicitudin. Phasellus in ipsum nec ante elementum congue eget in leo. Morbi eleifend justo non rutrum venenatis. Fusce cursus et lectus eu facilisis. Ut laoreet felis in magna dignissim feugiat.",
	],
};
Body.parameters = {
	design: {
		url: "https://www.figma.com/file/MPtRIVRzPp2VHiEplwXL2X/S-%2F-Desktop?type=design&node-id=5410%3A29510&mode=design&t=DBHnFzHwPDzCjf83-1"
	}
};

export const Detail = (args) => {
	return html`${["s", "m", "l", "xl"].reverse().map((size) => {
		return Template({
			...args,
			content: [size, " - ", ...args.content, html`<br />`],
			size,
		});
	})}`;
};
Detail.argTypes = {
	size: {
		name: "Size",
		options: ["s", "m", "l", "xl"],
		table: { disable: true },
	},
	weight: {
		name: "Weight",
		type: { name: "string" },
		table: {
			type: { summary: "string" },
			category: "Component",
		},
		options: ["light"],
		control: "radio",
	},
};
Detail.args = {
	semantics: "detail",
	content: ["Aliquet Mauris Eu"],
};
Detail.parameters = {
	design: {
		url: "https://www.figma.com/file/MPtRIVRzPp2VHiEplwXL2X/S-%2F-Desktop?type=design&node-id=5410%3A29525&mode=design&t=DBHnFzHwPDzCjf83-1"
	}
};

export const Code = (args) => {
	return html`${["xs", "s", "m", "l", "xl"].reverse().map((size) => {
		return Template({
			...args,
			content: [size, " - ", ...args.content, html`<br />`],
			size,
		});
	})}`;
};
Code.argTypes = {
	size: {
		name: "Size",
		options: ["xs", "s", "m", "l", "xl"],
		table: { disable: true },
	},
};
Code.args = {
	semantics: "code",
	content: ["console.log('Hello World!');"],
};
Code.parameters = {
	design: {
		url: "https://www.figma.com/file/MPtRIVRzPp2VHiEplwXL2X/S-%2F-Desktop?type=design&node-id=5410%3A29542&mode=design&t=DBHnFzHwPDzCjf83-1"
	}
};

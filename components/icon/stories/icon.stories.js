import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template } from "./template";
import { uiIconsWithDirections, uniqueUiIcons, workflowIcons } from "./utilities.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

/**
 * The icons component contains all UI icons used for components as well as the CSS for UI and workflow icons.
 */
export default {
	title: "Components/Icon",
	component: "Icon",
	argTypes: {
		/* Turn off express theme for icon preview b/c they use a separate icon set */
		express: { table: { disable: true } },
		reducedMotion: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: sizes,
			control: "select",
			if: { arg: "setName", eq: "workflow" },
		},
		showLabel: {
			name: "Show icon name",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
		},
		setName: {
			name: "Icon set",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: ["ui", "workflow"],
			control: "inline-radio",
		},
		iconName: {
			name: "Workflow icons",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: workflowIcons,
			control: "select",
			if: { arg: "setName", eq: "workflow" },
		},
		uiIconName: {
			name: "UI icons",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			options: uiIconsWithDirections,
			control: "select",
			if: { arg: "setName", eq: "ui" },
		},
		fill: {
			name: "Fill color",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",
			},
			control: "color",
		},
		useRef: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Icon",
		setName: "workflow",
		iconName: "ABC",
		size: "xxl",
		showLabel: false,
	},
	parameters: {
		status: {
			type: "migrated",
		},
	},
};

const printFullSet = (args) => html`
	${when(args.setName === "workflow", () => {
		return workflowIcons.sort().map((iconName) => printIconSet({ ...args, iconName }));
	}, () => {
		return uiIconsWithDirections.sort().map((iconName) => printIconSet({ ...args, iconName }));
	})}
`;

const printIconSet = (args) => {
	if (!args.showLabel && !window.isChromatic()) {
		return Template({
			iconName: args.iconName ?? args.uiIconName,
			setName: args.setName ?? (args.uiIconName ? "ui" : "workflow"),
			size: "xxl",
			useRef: true,
			...args,
		});
	}

	return html`
		<div
			style=${styleMap({
				"display": "flex",
				"align-items": "center",
				"justify-content": "space-between",
				"gap": "12px",
				"flex-flow": "column nowrap",
			})}
		>
			${Template({
				iconName: args.iconName ?? args.uiIconName,
				setName: args.setName ?? (args.uiIconName ? "ui" : "workflow"),
				size: "xxl",
				useRef: true,
				...args,
			})}
			${Typography({
				semantics: "body",
				size: "xxs",
				content: [
					args.iconName ?? args.uiIconName
				],
			})}
		</div>
	`;
};

export const Default = (args) => {
	if (!window.isChromatic()) return printIconSet(args);
	return html`
	<div style=${styleMap({
		"display": "flex",
		"gap": "12px",
	})}>
		<div>
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["Workflow icons"],
				customStyles: {
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				}
			})}
			<div
				style=${styleMap({
				"display": "grid",
				"grid-template-columns": `repeat(${sizes.length}, 50px)`,
				"gap": "16px",
				"border": "1px solid var(--spectrum-gray-200)",
				"border-radius": "4px",
				"padding": "16px",
				"margin-block-end": "32px",
			})}
			>
				${sizes.map(scale => {
					return Typography({
						semantics: "detail",
						size: "s",
						content: [scale],
						customStyles: {
							"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
						}
					});
				})}
				${[
					"Add",
					"ArrowDown",
					"ArrowLeft",
					"ArrowRight",
					"ArrowUp",
					"Asterisk",
					"Checkmark",
					"ChevronDown",
					"ChevronLeft",
					"ChevronRight",
					"ChevronUp",
					"DragHandle",
					"LinkOut",
				].map((iconName, idx) => html`
					${sizes.map((size) => Template({
						...args,
						setName: "workflow",
						useRef: false,
						iconName, size,
						fill: idx % 5 === 0 ? "var(--spectrum-negative-content-color-default)" : undefined
					}))}
				`)}
			</div>
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "l",
				content: ["UI icons"],
				customStyles: {
					"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
				}
			})}
			<div
				style=${styleMap({
				"display": "grid",
				"grid-template-columns": "repeat(8, 50px)",
				"gap": "16px",
				"border": "1px solid var(--spectrum-gray-200)",
				"border-radius": "4px",
				"padding": "16px",
			})}
			>
				${["50", "75", "100", "200", "300", "400", "500", "600"].map(scale => Typography({
					semantics: "detail",
					size: "s",
					content: [scale],
					customStyles: {
						"--mod-detail-font-color": "var(--spectrum-seafoam-900)",
					}
				}))}
				${uniqueUiIcons.sort().reduce((print, iconName) => {
				let output = Array(8).fill(html`<span></span>`);
				["50", "75", "100", "200", "300", "400", "500", "600"].forEach((scale, idx) => {
					if (uiIconsWithDirections.includes(`${iconName}${scale}`)) {
						output[idx] = Template({
							...args,
							setName: "ui",
							useRef: false,
							iconName: `${iconName}${scale}`,
						});
					}
				});
				print.push(...output);
				return print;
			}, [])}
			</div>
		</div>
</div>
	`;
};
Default.args = {
	showLabel: false,
};

export const Workflow = printFullSet.bind({});
Workflow.args = {
	setName: "workflow",
	useRef: true,
	showLabel: true,
};
Workflow.argTypes = {
	setName: { table: { disable: true } },
	iconName: { table: { disable: true } },
};
Workflow.decorators = [
	(StoryFn, context) => html`
		<div
			style=${styleMap({
				"display": "grid",
				"grid-template-columns": "repeat(auto-fill, minmax(140px, 1fr))",
				"gap": "16px",
				"padding": "32px",
			})}
		>
			${StoryFn(context)}
		</div>
	`,
];

export const UI =  printFullSet.bind({});
UI.args = {
	setName: "ui",
	useRef: true,
	showLabel: true,
};
UI.argTypes = {
	setName: { table: { disable: true } },
	uiIconName: { table: { disable: true } },
};
UI.decorators = [
	(StoryFn, context) => html`
		<div
			style=${styleMap({
				"display": "grid",
				"grid-template-columns": "repeat(auto-fill, minmax(140px, 1fr))",
				"gap": "16px",
				"padding": "32px",
			})}
		>
			${StoryFn(context)}
		</div>
	`,
];

import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as Button } from "@spectrum-css/button/stories/template.js";

import "@spectrum-css/splitbutton/dist/index-vars.css";
import "@spectrum-css/splitbutton/dist/vars.css";

export const Template = ({
	rootClass = "spectrum-SplitButton",
	customClasses = [],
	customFirstButtonClasses = [],
	customLastButtonClasses = [],
	size = "m",
	variant = "cta",
	iconName = "ChevronDown100",
	labelIconName = undefined,
	position = "right",
	label = "Split Button",
	...globals
}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--left`]:
					typeof position !== "undefined" && position === "left",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
		>
			${Button({
				...globals,
				variant,
				size,
				iconName: position === "right"
					? typeof labelIconName != "undefined" ? labelIconName : undefined
					: iconName,
				label: position === "right" ? label : undefined,
				hideLabel: position === "right" ? false : true,
				customClasses: [
					position === "right"
						? `${rootClass}-action`
						: `${rootClass}-trigger`,
					...customFirstButtonClasses
				],
				customLabelClasses: [
					`${rootClass}-label`,
				],
				customIconClasses: [
					`${rootClass}-icon`,
				]
			})}
			${Button({
				...globals,
				variant,
				size,
				iconName: position === "right"
					? iconName
					: typeof labelIconName != "undefined" ? labelIconName : undefined,
				iconAfterLabel: true,
				label: position === "right" ? undefined : label,
				hideLabel: position === "right" ? true : false,
				customClasses: [
					position === "right"
						? `${rootClass}-trigger`
						: `${rootClass}-action`,
					...customLastButtonClasses
				],
				customLabelClasses: [
					`${rootClass}-label`,
				],
				customIconClasses: [
					`${rootClass}-icon`,
				]
			})}
		</div>
	`;
};

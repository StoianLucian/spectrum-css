import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { Template as Typography } from "@spectrum-css/typography/stories/template.js";
import { Template } from "./template";

export default {
	title: "Components/Alert banner",
	description:
		"The Alert banner show pressing and high-signal messages, such as system alerts. They’re meant to be noticed and prompt users to take action.",
	component: "AlertBanner",
	subtitle: "Testing",
	argTypes: {
		isOpen: {
			name: "Open",
			description: "Determines whether the banner is visible or hidden.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		text: {
			name: "Text",
			description: "Text of the message displayed within the alert banner.",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				disable: false,
				category: "Content",
			},
			control: { type: "text" },
		},
		variant: {
			name: "Semantic variants",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
				defaultValue: { summary: "neutral" },
			},
			options: ["neutral", "info", "negative"],
			control: "radio",
		},
		actionButtonText: {
			name: "Action button text",
			description: "Label text for the optional action button. When empty, the action button does not display.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
	},
	args: {
		rootClass: "spectrum-AlertBanner",
		isOpen: true,
		variant: "neutral",
		actionButtonText: "Action",
		text: "Your trial has expired",
	},
	parameters: {
		actions: {
			handles: ["click .spectrum-AlertBanner button"],
		},
		status: {
			type: "migrated",
		},
	},
};

const AlertBannerGroup = (args) => {
	return html`
		<div style="display: flex; flex-direction: column; gap: 1rem">
			${!window.isChromatic() ? Template(args) : html`
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["All variants with button, including wrapping"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: ".3rem",
						})}
					>
						${Template(args)}
						${Template({
							...args,
							variant: "info",
							text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software.",
						})}
						${Template({
							...args,
							variant: "negative",
							text: "Connection interupted. Check your network to continue.",
						})}
					</div>
				</div>
				<div class="spectrum-Typography">
					${Typography({
						semantics: "detail",
						size: "l",
						content: ["All variants without button"],
					})}
					<div
						style=${styleMap({
							display: "flex",
							flexDirection: "column",
							gap: ".3rem",
						})}
					>
						${Template({
							...args,
							actionButtonText: "",
						})}
						${Template({
							...args,
							variant: "info",
							text: "Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software.",
							actionButtonText: "",
						})}
						${Template({
							...args,
							variant: "negative",
							text: "Connection interupted. Check your network to continue.",
							actionButtonText: "",
						})}
					</div>
				</div>
			`}
		</div>
	`;
};

export const Default = AlertBannerGroup.bind({});
Default.args = {};

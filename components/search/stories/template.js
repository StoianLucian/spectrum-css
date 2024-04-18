import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import { Template as ClearButton } from "@spectrum-css/clearbutton/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Search",
	customClasses = [],
	isDisabled = false,
	isFocused = false,
	isKeyboardFocused = false,
	inputValue = "",
	size,
	...globals
}) => html`
	<form
		class=${classMap({
			[rootClass]: true,
			[`${rootClass}--size${size?.toUpperCase()}`]:
				typeof size !== "undefined",
			"is-disabled": isDisabled,
			"is-keyboardFocused": isKeyboardFocused,
			...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
		})}
	>
		${TextField({
			...globals,
			isDisabled,
			size,
			customClasses: [`${rootClass}-textfield`, isFocused && "is-focused"],
			iconName: "Magnify",
			type: "search",
			placeholder: "Search",
			name: "search",
			customInputClasses: [`${rootClass}-input`, isKeyboardFocused && "is-keyboardFocused"],
			customIconClasses: [`${rootClass}-icon`],
			autocomplete: false,
			value: inputValue,
		})}
		${ClearButton({
			...globals,
			isDisabled,
			size,
			customClasses: [`${rootClass}-clearButton`],
		})}
	</form>
`;

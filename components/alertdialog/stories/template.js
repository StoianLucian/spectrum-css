import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { when } from "lit/directives/when.js";

import { useArgs } from "@storybook/preview-api";

import { Template as Button } from "@spectrum-css/button/stories/template.js";
import { Template as ButtonGroup } from "@spectrum-css/buttongroup/stories/template.js";
import { Template as Divider } from "@spectrum-css/divider/stories/template.js";
import { Template as Icon } from "@spectrum-css/icon/stories/template.js";
import { Template as Modal } from "@spectrum-css/modal/stories/template.js";
import { Template as Underlay } from "@spectrum-css/underlay/stories/template.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-AlertDialog",
	isOpen = true,
	heading = true,
	content = true,
	customClasses = [],
	buttons,
	variant,
	icon = false,
	id,
}) => {
	const [, updateArgs] = useArgs();

	const Dialog = html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--${variant}`]: true,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      id=${ifDefined(id)}
      role="dialog"
      tabindex="-1"
      aria-modal="true"
      aria-labelledby="dialog_label"
    >
      <div class="${rootClass}-grid">
      <div class="${rootClass}-header">
        <h1 class="${rootClass}-heading" id="dialog_label">${heading}</h1>
        ${when(icon, () => Icon({
          size: "m",
          iconName: "Alert",
          customClasses: [`${rootClass}-icon`],
        })) }
      </div>
      ${Divider({
        horizontal: true,
        customClasses: [`${rootClass}-divider`],
      })}
      <section class="${rootClass}-content">${content}</section>
      ${ButtonGroup({
        items: buttons,
        onclick: () => {
          updateArgs({ isOpen: !isOpen });
        },
      })}
      </div>
    </div>
  `;

	return  html`
    ${Underlay({ isOpen })}
    ${Button({
      size: "m",
      variant: "secondary",
      label: "Click to open Alert Dialog",
      treatment: "outline",
      customClasses: [],
      customStyles: {
        "position": "absolute",
        "inset-inline-start": "50%",
        "inset-block-start": "50%",
        "transform": "translate(-50%, -50%)",
      },
      onclick: () => {
        updateArgs({ isOpen: !isOpen });
      },
    })}
    ${Modal({
      isOpen,
      content: Dialog,
    })}
      `;
};

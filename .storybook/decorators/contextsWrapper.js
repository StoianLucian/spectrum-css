import { makeDecorator, useEffect } from "@storybook/preview-api";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args, argTypes, viewMode, id } = context;

		const getDefaultValue = (type) => {
			if (!type) return null;
			if (type.defaultValue) return type.defaultValue;
			return type.options ? type.options[0] : null;
		};

		// This property informs which context stylesheets to source
		//    but does not source a stylesheet for itself
		/** @type boolean */
		const isExpress = args.express
			? args.express
			: getDefaultValue(argTypes.express);
		/** @type string */
		const color = args.color ? args.color : getDefaultValue(argTypes.color) ?? "light";
		/** @type string */
		const scale = args.scale ? args.scale : getDefaultValue(argTypes.scale) ?? "medium";

		const colors = ["light", "dark"];
		const scales = ["medium", "large"];

		useEffect(() => {
			let containers = [document.body];

			const roots = [
				...document.querySelectorAll(`#story--${id}`),
				...document.querySelectorAll(`#story--${id}--primary`)
			];
			if (viewMode === "docs" && roots.length > 0) {
				containers = roots.map(root => root.closest(".docs-story") ?? root);
			}

			for (const container of containers) {
				container.classList.toggle("spectrum", true);

				container.classList.toggle("spectrum--express", isExpress);

				for (const c of colors) {
					container.classList.toggle(`spectrum--${c}`, c === color);
				}

				for (const s of scales) {
					container.classList.toggle(`spectrum--${s}`, s === scale);
				}

				// Change background color when demonstrating static color options.
				if (args.staticColor === "black") {
					container.style.background = "var(--spectrum-examples-gradient-static-black)";
				}
				else if (args.staticColor === "white" || args.isStaticWhite === true) {
					container.style.background = "var(--spectrum-examples-gradient-static-white)";
				}
				else {
					container.style.removeProperty("background");
				}
			}
		}, [color, scale, isExpress, args.staticColor, args.isStaticWhite]);

		return StoryFn(context);
	},
});

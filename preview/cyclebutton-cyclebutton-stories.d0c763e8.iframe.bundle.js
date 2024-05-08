/*! For license information please see cyclebutton-cyclebutton-stories.d0c763e8.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[9802,948],{"./deprecated/cyclebutton/cyclebutton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cyclebutton_stories});var actionbutton_stories=__webpack_require__("../components/actionbutton/stories/actionbutton.stories.js"),template=__webpack_require__("../components/actionbutton/stories/template.js"),icon_stories=__webpack_require__("../components/icon/stories/icon.stories.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),lit=__webpack_require__("../node_modules/lit/index.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),index_vars=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../node_modules/@spectrum-css/cyclebutton/dist/index-vars.css"),index_vars_default=__webpack_require__.n(index_vars),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(index_vars_default(),options);var vars=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../node_modules/@spectrum-css/cyclebutton/dist/vars.css"),vars_default=__webpack_require__.n(vars),vars_options={attributes:{"data-source":"processed"}};vars_options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(vars_default(),vars_options);const cyclebutton_stories={title:"Deprecated/Cycle button",component:"CycleButton",argTypes:{size:actionbutton_stories.default?.argTypes?.size??{},initialIcon:{...icon_stories.default?.argTypes?.iconName??{},name:"Initial icon",type:{name:"string",required:!0},if:!1},selectedIcon:{...icon_stories.default?.argTypes?.iconName??{},name:"Selected icon",if:!1},isSelected:actionbutton_stories.default?.argTypes?.isSelected??{},isDisabled:actionbutton_stories.default?.argTypes?.isDisabled??{}},args:{rootClass:"spectrum-CycleButton",size:"m",initialIcon:"Play",selectedIcon:"Pause"},parameters:{actions:{handles:[...actionbutton_stories.default?.parameters?.actions?.handles??[]]},chromatic:{disable:!0},status:{type:"deprecated"},docs:{description:{component:"**This component is deprecated.** Please use the quiet variant of action button with the appropriate icon(s) instead. Any icon swapping that happens on-click/on-key should be handled by the implementation.\n\nThe cycle button component is an action button that cycles through two different icons, a play that then changes to a pause, for example."}}}},Default=(({rootClass="spectrum-CycleButton",customClasses=[],size="m",isDisabled=!1,onclick,...globals})=>{const[{selectedIcon="Pause",initialIcon="Play"},updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();return lit.qy`
        <!-- Note: These dimensions don't change in express theme -->
        <style>
            :root, .spectrum--medium { --spectrum-global-dimension-size-85: 7px; }
            .spectrum--large { --spectrum-global-dimension-size-85: 9px; }
        </style>
        ${(0,template.B)({...globals,customClasses:[rootClass,...customClasses],isQuiet:!0,isDisabled,size,iconName:initialIcon,iconSet:"workflow",onclick:onclick??function(){isDisabled||updateArgs({initialIcon:selectedIcon,selectedIcon:initialIcon})}})}
    `}).bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(({\n  rootClass = "spectrum-CycleButton",\n  customClasses = [],\n  size = "m",\n  isDisabled = false,\n  onclick,\n  ...globals\n}) => {\n  const [{\n    selectedIcon = "Pause",\n    initialIcon = "Play"\n  }, updateArgs] = useArgs();\n  return html`\n        \x3c!-- Note: These dimensions don\'t change in express theme --\x3e\n        <style>\n            :root, .spectrum--medium { --spectrum-global-dimension-size-85: 7px; }\n            .spectrum--large { --spectrum-global-dimension-size-85: 9px; }\n        </style>\n        ${ActionButton({\n    ...globals,\n    customClasses: [rootClass, ...customClasses],\n    isQuiet: true,\n    isDisabled,\n    size,\n    iconName: initialIcon,\n    iconSet: "workflow",\n    onclick: onclick ?? function () {\n      if (isDisabled) return;\n      updateArgs({\n        initialIcon: selectedIcon,\n        selectedIcon: initialIcon\n      });\n    }\n  })}\n    `;\n}).bind({})',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../node_modules/@spectrum-css/cyclebutton/dist/index-vars.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/cyclebutton/dist/index-vars.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../node_modules/@spectrum-css/cyclebutton/dist/vars.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/cyclebutton/dist/vars.css"},"../node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})}}]);
//# sourceMappingURL=cyclebutton-cyclebutton-stories.d0c763e8.iframe.bundle.js.map
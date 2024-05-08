/*! For license information please see assetlist-stories-assetlist-stories.118fff4e.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[8042,948,8402],{"../components/assetlist/stories/assetlist.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _template__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../components/assetlist/stories/template.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Asset list",component:"AssetList",argTypes:{items:{table:{disable:!0}}},args:{rootClass:"spectrum-AssetList"},parameters:{actions:{handles:[...__webpack_require__("../components/checkbox/stories/checkbox.stories.js").default.parameters.actions.handles]},status:{type:"migrated"},docs:{description:{component:"A selectable list of assets, often used inside of miller columns."}}}},Default=_template__WEBPACK_IMPORTED_MODULE_0__.B.bind({});Default.args={items:[{image:"example-ava.png",label:"Shantanu.jpg",isSelectable:!0,ariaLabelledBy:"assetitemlabel-1",checkboxId:"checkbox-1"},{iconName:"Document",label:"Resource allocation documentation should truncate",isSelectable:!0,ariaLabelledby:"assetitemlabel-2",checkboxId:"checkbox-2"},{iconName:"Folder",label:"Front-end Projects",isSelectable:!0,isBranch:!0,isSelected:!0,ariaLabelledby:"assetitemlabel-3",checkboxId:"checkbox-3"},{iconName:"Folder",label:"Downloads",isSelectable:!0,isBranch:!0,isSelected:!1,isNavigated:!0,ariaLabelledby:"assetitemlabel-4",checkboxId:"checkbox-4"}]};const __namedExportsOrder=["Default"]},"../components/checkbox/stories/checkbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/lit/index.js"),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/checkbox/stories/template.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Checkbox",component:"Checkbox",argTypes:{size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["s","m","l","xl"],control:"select"},label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:{type:"text"}},isEmphasized:{name:"Emphasized styling",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:{type:"boolean"}},isInvalid:{name:"Invalid",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isChecked:{name:"Checked",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:{type:"boolean"}},isIndeterminate:{name:"Checkbox indeterminate",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isReadOnly:{name:"Read only",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"}},args:{rootClass:"spectrum-Checkbox",size:"m",label:"Checkbox",isChecked:!1,isDisabled:!1,isEmphasized:!1,isIndeterminate:!1,isInvalid:!1,isReadOnly:!1},parameters:{actions:{handles:['click input[type="checkbox"]']},status:{type:"migrated"},docs:{description:{component:"Checkboxes allow users to select multiple items from a list of individual items, or mark one individual item as selected."}}}},Default=(args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <div style="display: flex; flex-direction: column; padding: 16px">
        ${(0,_template__WEBPACK_IMPORTED_MODULE_1__.B)({...args,iconName:void 0})}
        ${(0,_template__WEBPACK_IMPORTED_MODULE_1__.B)({...args,isChecked:!0})}
        ${(0,_template__WEBPACK_IMPORTED_MODULE_1__.B)({...args,isIndeterminate:!0})}
            ${(0,_template__WEBPACK_IMPORTED_MODULE_1__.B)({...args,isDisabled:!0})}
        ${(0,_template__WEBPACK_IMPORTED_MODULE_1__.B)({...args,label:"Checkbox with wrapping label text",customStyles:{"max-inline-size":"100px"}})}
    </div>
`).bind({});Default.args={id:"default-checkbox"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => html`\n    <div style="display: flex; flex-direction: column; padding: 16px">\n        ${Template({\n  ...args,\n  iconName: undefined\n})}\n        ${Template({\n  ...args,\n  isChecked: true\n})}\n        ${Template({\n  ...args,\n  isIndeterminate: true\n})}\n            ${Template({\n  ...args,\n  isDisabled: true\n})}\n        ${Template({\n  ...args,\n  label: "Checkbox with wrapping label text",\n  customStyles: {\n    "max-inline-size": "100px"\n  }\n})}\n    </div>\n`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/assetlist/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/assetlist/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/checkbox/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/checkbox/index.css"},"../components/assetlist/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),when=__webpack_require__("../node_modules/lit-html/directives/when.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),template=__webpack_require__("../components/checkbox/stories/template.js"),stories_template=__webpack_require__("../components/icon/stories/template.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),assetlist=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/assetlist/index.css"),assetlist_default=__webpack_require__.n(assetlist),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(assetlist_default(),options);const Template=({rootClass="spectrum-AssetList",items=[],customClasses=[],id,...globals})=>{if(!items)return lit.qy``;const[,updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();return lit.qy`
		<ul
			class=${(0,class_map.H)({[rootClass]:!0,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
			id=${(0,if_defined.J)(id)}
		>
			${items.map((item=>(({rootClass="spectrum-AssetList-item",image,iconName,label,checkboxId,ariaLabelledby,isNavigated=!1,isSelectable=!1,isSelected=!1,isBranch=!1,onclick=()=>{},...globals})=>lit.qy`
	<li
		class=${(0,class_map.H)({[rootClass]:!0,"is-selectable":isSelectable,"is-selected":isSelected,"is-branch":isBranch,"is-navigated":isNavigated})}
		@click=${onclick}
		tabindex="0"
	>
		${(0,when.z)(isSelectable,(()=>(0,template.B)({...globals,size:"m",isChecked:isSelected,ariaLabelledby,id:checkboxId,customClasses:[`${rootClass}Selector`]})))}
		${(0,when.z)(image,(()=>lit.qy`<img src=${image} class="${rootClass}Thumbnail" alt="asset image thumbnail" />`))}
		${(0,when.z)(iconName,(()=>(0,stories_template.B)({iconName,customClasses:[`${rootClass}Thumbnail`],...globals})))}
		${(0,when.z)(label,(()=>lit.qy`<span class="${rootClass}Label">${label}</span>`))}
		${(0,when.z)(!isSelectable&&!isBranch,(()=>(0,template.B)({...globals,size:"m",isChecked:isSelected,ariaLabelledby,id:checkboxId,customClasses:[`${rootClass}Selector`]})))}
		${(0,when.z)(isBranch,(()=>(0,stories_template.B)({iconName:"ChevronRight100",customClasses:[`${rootClass}ChildIndicator`],...globals})))}
	</li>
`)({rootClass:`${rootClass}-item`,onclick:()=>{item.isDisabled||(item.isSelected=!item.isSelected,updateArgs({items}))},...item,...globals})))}
		</ul>
	`}},"../components/checkbox/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),when=__webpack_require__("../node_modules/lit-html/directives/when.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),template=__webpack_require__("../components/icon/stories/template.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),cjs_ruleSet_1_rules_10_use_2_components_checkbox=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/checkbox/index.css"),checkbox_default=__webpack_require__.n(cjs_ruleSet_1_rules_10_use_2_components_checkbox),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(checkbox_default(),options);const Template=({rootClass="spectrum-Checkbox",size="m",label,isChecked=!1,isEmphasized=!1,isIndeterminate=!1,isDisabled=!1,isInvalid=!1,isReadOnly=!1,title,value,id,ariaLabelledby,customStyles={},customClasses=[],...globals})=>{const[,updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();let iconSize="75";switch(size){case"s":iconSize="50";break;case"l":iconSize="100";break;case"xl":iconSize="200";break;default:iconSize="75"}return lit.qy`
		<label
			class=${(0,class_map.H)({[rootClass]:!0,[`${rootClass}--size${size?.toUpperCase()}`]:void 0!==size,[`${rootClass}--emphasized`]:isEmphasized,"is-indeterminate":isIndeterminate,"is-disabled":isDisabled||isReadOnly,"is-invalid":isInvalid,"is-readOnly":isReadOnly,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
			id=${(0,if_defined.J)(id)}
			style=${(0,if_defined.J)((0,style_map.W)(customStyles))}
		>
			<input
				type="checkbox"
				class="${rootClass}-input"
				aria-labelledby=${(0,if_defined.J)(ariaLabelledby)}
				?checked=${isChecked}
				?disabled=${isDisabled||isReadOnly}
				title=${(0,if_defined.J)(title)}
				value=${(0,if_defined.J)(value)}
				@change=${()=>{isDisabled||updateArgs({isChecked:!isChecked})}}
				id=${(0,if_defined.J)(id?`${id}-input`:void 0)}
			/>
			<span class="${rootClass}-box">
				${(0,template.B)({...globals,size,iconName:`Checkmark${iconSize}`,customClasses:[`${rootClass}-checkmark`]})}
				${(0,template.B)({...globals,size,iconName:`Dash${iconSize}`,customClasses:[`${rootClass}-partialCheckmark`]})}
			</span>
			${(0,when.z)(label,(()=>lit.qy`<span class="${rootClass}-label">${label}</span>`))}
		</label>
	`}},"../node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"../node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js");const n="important",i=" !"+n,o=(0,directive.u$)(class extends directive.WL{constructor(t){if(super(t),t.type!==directive.OA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e}}return lit_html.c0}})}}]);
//# sourceMappingURL=assetlist-stories-assetlist-stories.118fff4e.iframe.bundle.js.map
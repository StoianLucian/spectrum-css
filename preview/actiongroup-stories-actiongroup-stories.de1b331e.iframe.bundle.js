/*! For license information please see actiongroup-stories-actiongroup-stories.de1b331e.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[2942,948],{"../components/actiongroup/stories/actiongroup.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Compact:()=>Compact,Default:()=>Default,Justified:()=>Justified,Quiet:()=>Quiet,Vertical:()=>Vertical,VerticalCompact:()=>VerticalCompact,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _template__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../components/actiongroup/stories/template.js"),_spectrum_css_actionbutton_stories_actionbutton_stories_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/actionbutton/stories/actionbutton.stories.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Action group",component:"ActionGroup",argTypes:{areQuiet:_spectrum_css_actionbutton_stories_actionbutton_stories_js__WEBPACK_IMPORTED_MODULE_1__.default.argTypes.isQuiet,areEmphasized:_spectrum_css_actionbutton_stories_actionbutton_stories_js__WEBPACK_IMPORTED_MODULE_1__.default.argTypes.isEmphasized,staticColor:_spectrum_css_actionbutton_stories_actionbutton_stories_js__WEBPACK_IMPORTED_MODULE_1__.default.argTypes.staticColor,content:{table:{disable:!0}},size:{name:"Size",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["xs","s","m","l","xl"],control:"select"},vertical:{name:"Vertical layout",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},compact:{name:"Compact layout",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},justified:{name:"Justified",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Advanced"},control:"boolean"}},args:{rootClass:"spectrum-ActionGroup",size:"m",areQuiet:_spectrum_css_actionbutton_stories_actionbutton_stories_js__WEBPACK_IMPORTED_MODULE_1__.default.args.isQuiet,areEmphasized:_spectrum_css_actionbutton_stories_actionbutton_stories_js__WEBPACK_IMPORTED_MODULE_1__.default.args.isEmphasized,staticColor:_spectrum_css_actionbutton_stories_actionbutton_stories_js__WEBPACK_IMPORTED_MODULE_1__.default.args.staticColor,vertical:!1,compact:!1,justified:!1},parameters:{actions:{handles:[..._spectrum_css_actionbutton_stories_actionbutton_stories_js__WEBPACK_IMPORTED_MODULE_1__.default.parameters.actions.handles]},status:{type:"migrated"},docs:{description:{component:"The action group component is a collection of action buttons."}}}},items=[{iconName:"Edit",label:"Edit"},{iconName:"Copy",label:"Copy"},{iconName:"Delete",label:"Delete",isSelected:!0}],Default=_template__WEBPACK_IMPORTED_MODULE_0__.B.bind({});Default.args={content:items};const Compact=_template__WEBPACK_IMPORTED_MODULE_0__.B.bind({});Compact.args={compact:!0,content:items};const Vertical=_template__WEBPACK_IMPORTED_MODULE_0__.B.bind({});Vertical.args={vertical:!0,content:items};const VerticalCompact=_template__WEBPACK_IMPORTED_MODULE_0__.B.bind({});VerticalCompact.args={vertical:!0,compact:!0,content:items};const Justified=_template__WEBPACK_IMPORTED_MODULE_0__.B.bind({});Justified.args={justified:!0,content:items};const Quiet=_template__WEBPACK_IMPORTED_MODULE_0__.B.bind({});Quiet.args={areQuiet:!0,content:items};const __namedExportsOrder=["Default","Compact","Vertical","VerticalCompact","Justified","Quiet"]},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/actiongroup/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/actiongroup/index.css"},"../components/actiongroup/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),template=__webpack_require__("../components/actionbutton/stories/template.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),actiongroup=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/actiongroup/index.css"),actiongroup_default=__webpack_require__.n(actiongroup),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(actiongroup_default(),options);const Template=({rootClass="spectrum-ActionGroup",size="m",areQuiet=!1,areEmphasized=!1,vertical=!1,compact=!1,justified=!1,staticColor,content=[],customClasses=[],...globals})=>lit.qy`
		<div
			class=${(0,class_map.H)({[rootClass]:!0,[`${rootClass}--size${size?.toUpperCase()}`]:void 0!==size,[`${rootClass}--quiet`]:areQuiet,[`${rootClass}--vertical`]:vertical,[`${rootClass}--compact`]:compact,[`${rootClass}--justified`]:justified,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
		>
			${content.map((item=>{switch(typeof item){case"object":return(0,template.B)({...globals,size,iconName:item.iconName,isQuiet:areQuiet||item.isQuiet,isEmphasized:areEmphasized||item.isEmphasized,staticColor:staticColor??item.staticColor,customClasses:[`${rootClass}-item`]});case"function":return item({...globals,size});default:return item}}))}
		</div>
	`},"../node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})}}]);
//# sourceMappingURL=actiongroup-stories-actiongroup-stories.de1b331e.iframe.bundle.js.map
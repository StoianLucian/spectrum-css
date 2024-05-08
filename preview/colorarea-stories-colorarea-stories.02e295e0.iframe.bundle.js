/*! For license information please see colorarea-stories-colorarea-stories.02e295e0.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[1830],{"../components/colorarea/stories/colorarea.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSize:()=>CustomSize,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>colorarea_stories});var template=__webpack_require__("../components/colorhandle/stories/template.js"),lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),colorarea=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/colorarea/index.css"),colorarea_default=__webpack_require__.n(colorarea),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(colorarea_default(),options);const Template=({rootClass="spectrum-ColorArea",customClasses=[],customStyles={},isDisabled=!1,isFocused=!1,customWidth,customHeight,...globals})=>lit.qy`
	<div
		class=${(0,class_map.H)({[rootClass]:!0,"is-disabled":isDisabled,"is-focused":isFocused,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
		style=${(0,style_map.W)({"--mod-colorarea-height":customHeight,"--mod-colorarea-width":customWidth,...customStyles})}
	>
		<div
			class="spectrum-ColorArea-gradient"
			style=${(0,style_map.W)({background:"linear-gradient(to top, black 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, white 0%, rgba(0, 0, 0, 0) 100%), rgba(255, 0, 0)"})}
		></div>
		${(0,template.B)({...globals,isDisabled,customClasses:[`${rootClass}-handle`],customStyles:{"--spectrum-picked-color":"rgba(255, 0, 0)",transform:customWidth?"translate(var(--mod-colorarea-width), 0)":void 0}})}
		<input
			type="range"
			class="spectrum-ColorArea-slider"
			name="x"
			aria-label="saturation and value"
			min="0"
			max="1"
			step="0.01"
		/>
		<input
			type="range"
			class="spectrum-ColorArea-slider"
			name="y"
			aria-label="saturation and value"
			min="0"
			max="1"
			step="0.01"
		/>
	</div>
`,colorarea_stories={title:"Components/Color area",component:"ColorArea",argTypes:{customWidth:{table:{disable:!0}},customHeight:{table:{disable:!0}},handlePosition:{table:{disable:!0}},isDisabled:{name:"Disabled",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isFocused:{name:"Focused",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean",if:{arg:"isDisabled",truthy:!1}}},args:{rootClass:"spectrum-ColorArea",isDisabled:!1,isFocused:!1},parameters:{actions:{handles:[]},status:{type:"migrated"},docs:{description:{component:"The color area component allows users to visually select two properties of a color simultaneously. It's commonly used together with a color slider or color wheel."}}}},Default=Template.bind({});Default.args={};const CustomSize=Template.bind({});CustomSize.args={customWidth:"80px",customHeight:"80px"};const __namedExportsOrder=["Default","CustomSize"]},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/colorarea/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/colorarea/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/colorhandle/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/colorhandle/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/opacitycheckerboard/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/opacitycheckerboard/index.css"},"../components/colorhandle/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var template=__webpack_require__("../components/opacitycheckerboard/stories/template.js"),lit=__webpack_require__("../node_modules/lit/index.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),colorhandle=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/colorhandle/index.css"),colorhandle_default=__webpack_require__.n(colorhandle),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(colorhandle_default(),options);const Template=({rootClass="spectrum-ColorHandle",customClasses=[],isDisabled=!1,isFocused=!1,customStyles={"--spectrum-picked-color":"rgba(255, 0, 0, 0.5)"},...globals})=>(0,template.B)({...globals,customClasses:[`${rootClass}`,...!isDisabled&&isFocused?["is-focused"]:[],...isDisabled?["is-disabled"]:[],...customClasses],content:[lit.qy`<div class="${rootClass}-inner"></div>`],customStyles})},"../components/opacitycheckerboard/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),opacitycheckerboard=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/opacitycheckerboard/index.css"),opacitycheckerboard_default=__webpack_require__.n(opacitycheckerboard),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(opacitycheckerboard_default(),options);const Template=({rootClass="spectrum-OpacityCheckerboard",backgroundPosition,customClasses=[],customStyles={},id,content=[],role})=>lit.qy`
	<div
		class=${(0,class_map.H)({[rootClass]:!0,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
		style=${(0,if_defined.J)((0,style_map.W)({"--mod-opacity-checkerboard-position":backgroundPosition,...customStyles}))}
		role=${(0,if_defined.J)(role)}
		id=${(0,if_defined.J)(id)}
	>
		${content}
	</div>`},"../node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OA:()=>t,WL:()=>i,u$:()=>e});const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"../node_modules/lit-html/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>e});var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/lit-html/lit-html.js"),_directive_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/lit-html/directive.js");const e=(0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.u$)(class extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.WL{constructor(t){if(super(t),t.type!==_directive_js__WEBPACK_IMPORTED_MODULE_1__.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.c0}})},"../node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__.H});var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/lit-html/directives/class-map.js")},"../node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js");const o=o=>o??lit_html.s6},"../node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js");const n="important",i=" !"+n,o=(0,directive.u$)(class extends directive.WL{constructor(t){if(super(t),t.type!==directive.OA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e}}return lit_html.c0}})}}]);
//# sourceMappingURL=colorarea-stories-colorarea-stories.02e295e0.iframe.bundle.js.map
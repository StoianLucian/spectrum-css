/*! For license information please see tooltip-stories-tooltip-stories.410c3b99.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunk_spectrum_css_preview=globalThis.webpackChunk_spectrum_css_preview||[]).push([[7786,948],{"../components/tooltip/stories/tooltip.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../components/typography/stories/template.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/lit/index.js"),lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/lit/directives/style-map.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../node_modules/lit-html/directives/when.js"),_template__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../components/tooltip/stories/template.js");const placementOptions=["top","top-left","top-right","top-start","top-end","bottom","bottom-left","bottom-right","bottom-start","bottom-end","right","right-bottom","right-top","left","left-bottom","left-top","start","start-top","start-bottom","end","end-top","end-bottom"],__WEBPACK_DEFAULT_EXPORT__={title:"Components/Tooltip",component:"Tooltip",argTypes:{label:{name:"Label",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"text"},variant:{name:"Variant",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["neutral","info","positive","negative"],control:"inline-radio"},placement:{name:"Placement",description:"The placement of the tooltip relative to the source. Note that placements that start with Left/Right do not change with text direction, but Start/End placements do.",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:placementOptions,control:"select"},isOpen:{name:"Open",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State"},control:"boolean"},isFocused:{name:"Focused",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"State",disable:!0},control:"boolean",if:{arg:"showOnHover",truthy:!0}},showOnHover:{name:"Show tooltip on hover (.u-tooltip-showOnHover &)",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component",disable:!0},control:"boolean"}},args:{rootClass:"spectrum-Tooltip",isOpen:!0,isFocused:!1,showOnHover:!1,variant:"neutral",label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"},parameters:{actions:{handles:[]},status:{type:"migrated"}},decorators:[(Story,context)=>lit__WEBPACK_IMPORTED_MODULE_1__.qy`
            <style>
                .spectrum-Detail { display: inline-block; }
                .spectrum-Typography > div {
                    border: 1px solid var(--spectrum-gray-200);
                    border-radius: 4px;
                    padding: 0 14px 14px;
                    /* Why seafoam? Because it separates it from the component styles. */
                    --mod-detail-font-color: var(--spectrum-seafoam-900);
                }
            </style>
            <div
                style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__.W)({display:"flex","flex-direction":"column","align-items":"flex-start",gap:"16px","--mod-detail-margin-end":"4.8px"})}
            >
                ${Story(context)}
            </div>
        `]},Default=(args=>lit__WEBPACK_IMPORTED_MODULE_1__.qy`
    ${window.isChromatic()?lit__WEBPACK_IMPORTED_MODULE_1__.qy`
            ${placementOptions.map((option=>{const optionDescription=()=>option.startsWith("start")||option.startsWith("end")?"Changes side with text direction (like a logical property)":option.startsWith("left")||option.startsWith("right")?"Text direction does not effect the position":null;return lit__WEBPACK_IMPORTED_MODULE_1__.qy`
                    <div class="spectrum-Typography">
                        ${(0,_spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_0__.B)({semantics:"detail",size:"l",content:[`${option}`]})}
                        <div
                            style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_2__.W)({display:"flex","flex-direction":"column",gap:"4.8px"})}
                            >
                            ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_4__.z)(null!==optionDescription(),(()=>lit__WEBPACK_IMPORTED_MODULE_1__.qy`
                                ${(0,_spectrum_css_typography_stories_template_js__WEBPACK_IMPORTED_MODULE_0__.B)({semantics:"detail",size:"s",content:[`${optionDescription()}`]})}
                            `))}
                            ${(0,_template__WEBPACK_IMPORTED_MODULE_3__.B)({...args,placement:option})}
                        </div>
                    </div>
                `}))}`:(0,_template__WEBPACK_IMPORTED_MODULE_3__.B)(args)}
`).bind({});Default.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => html`\n    ${window.isChromatic() ? html`\n            ${placementOptions.map(option => {\n  const optionDescription = () => {\n    if (option.startsWith("start") || option.startsWith("end")) return "Changes side with text direction (like a logical property)";\n    if (option.startsWith("left") || option.startsWith("right")) return "Text direction does not effect the position";\n    return null;\n  };\n  return html`\n                    <div class="spectrum-Typography">\n                        ${Typography({\n    semantics: "detail",\n    size: "l",\n    content: [`${option}`]\n  })}\n                        <div\n                            style=${styleMap({\n    "display": "flex",\n    "flex-direction": "column",\n    "gap": "4.8px"\n  })}\n                            >\n                            ${when(optionDescription() !== null, () => html`\n                                ${Typography({\n    semantics: "detail",\n    size: "s",\n    content: [`${optionDescription()}`]\n  })}\n                            `)}\n                            ${Template({\n    ...args,\n    placement: option\n  })}\n                        </div>\n                    </div>\n                `;\n})}` : Template(args)}\n`',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/tooltip/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/tooltip/index.css"},"../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/typography/index.css":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"assets/css/components/typography/index.css"},"../components/tooltip/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),when=__webpack_require__("../node_modules/lit-html/directives/when.js"),template=__webpack_require__("../components/icon/stories/template.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),tooltip=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/tooltip/index.css"),tooltip_default=__webpack_require__.n(tooltip),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(tooltip_default(),options);const Template=({rootClass="spectrum-Tooltip",label,variant="neutral",placement,isOpen=!0,isFocused=!1})=>{let variantIcon;return"info"===variant?variantIcon="Info":"positive"===variant?variantIcon="CheckmarkCircle":"negative"===variant&&(variantIcon="Alert"),lit.qy`
		<span
			class=${(0,class_map.H)({[rootClass]:!0,[`${rootClass}--${variant}`]:void 0!==variant&&"neutral"!==variant,[`${rootClass}--${placement}`]:void 0!==placement,"is-open":isOpen,"is-focused":isFocused})}
		>
			${(0,when.z)(variantIcon,(()=>(0,template.B)({iconName:variantIcon,size:"m",customClasses:[`${rootClass}-typeIcon`]})))}
			${(0,when.z)(label,(()=>lit.qy`<span class="${rootClass}-label">${label}</span>`))}
			<span class="${rootClass}-tip"></span>
		</span>
	`}},"../components/typography/stories/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>Template});var lit=__webpack_require__("../node_modules/lit/index.js"),class_map=__webpack_require__("../node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("../node_modules/lit/directives/if-defined.js"),style_map=__webpack_require__("../node_modules/lit/directives/style-map.js"),when=__webpack_require__("../node_modules/lit-html/directives/when.js"),capitalize=__webpack_require__("../node_modules/lodash-es/capitalize.js"),injectStylesIntoLinkTag=__webpack_require__("../node_modules/style-loader/dist/runtime/injectStylesIntoLinkTag.js"),injectStylesIntoLinkTag_default=__webpack_require__.n(injectStylesIntoLinkTag),insertBySelector=__webpack_require__("../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),typography=__webpack_require__("../node_modules/file-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[10].use[2]!../components/typography/index.css"),typography_default=__webpack_require__.n(typography),options={attributes:{"data-source":"processed"}};options.insert=insertBySelector_default().bind(null,"head");injectStylesIntoLinkTag_default()(typography_default(),options);const Template=({rootClass="spectrum-Typography",semantics="body",size="m",variant,weight,glyph="sans-serif",id,content=[],customClasses=[],customStyles={}})=>{Array.isArray(content)||(content=[content]);const contentLength=content.length;if(0===contentLength)return lit.qy``;const processedContent=lit.qy`
		${content.map((c=>{if("string"!=typeof c&&"object"==typeof c&&!c._$litType$)return Template({rootClass,semantics,size,variant,weight,glyph,id,customClasses,...c});if(void 0===semantics)return lit.qy`
					<div
						class=${(0,class_map.H)({"spectrum-Typography":!0,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})})}
						id=${(0,if_defined.J)(id)}
					>${c}</div>`;rootClass=`spectrum-${(0,capitalize.A)(semantics)}`;const classes={[rootClass]:!0,[`${rootClass}--${glyph}`]:void 0!==semantics&&void 0!==glyph&&"sans-serif"!==glyph,[`${rootClass}--size${size?.toUpperCase()}`]:void 0!==semantics&&void 0!==size,[`${rootClass}--${weight}`]:void 0!==semantics&&void 0!==weight,...customClasses.reduce(((a,c)=>({...a,[c]:!0})),{})};return variant&&Array.isArray(variant)&&(["strong","emphasized"].every((i=>variant.includes(i)))?c=lit.qy`<span
						class=${(0,class_map.H)({[`${rootClass}-strong`]:!0,[`${rootClass}-emphasized`]:!0})}
						>${c}</span
					>`:variant.includes("strong")?c=lit.qy`<strong
						class=${(0,class_map.H)({[`${rootClass}-strong`]:!0})}
						>${c}</strong
					>`:variant.includes("emphasized")&&(c=lit.qy`<em
						class=${(0,class_map.H)({[`${rootClass}-emphasized`]:!0})}
						>${c}</em
					>`)),"heading"===semantics?lit.qy`
					<h2 class=${(0,class_map.H)(classes)} style=${(0,if_defined.J)((0,style_map.W)(customStyles))} id=${(0,if_defined.J)(id)}>${c}</h2>
				`:"body"===semantics?lit.qy`
					<p class=${(0,class_map.H)(classes)} style=${(0,if_defined.J)((0,style_map.W)(customStyles))} id=${(0,if_defined.J)(id)}>${c}</p>
				`:"code"===semantics?lit.qy`
					<code class=${(0,class_map.H)(classes)} style=${(0,if_defined.J)((0,style_map.W)(customStyles))} id=${(0,if_defined.J)(id)}>${c}</code>
				`:lit.qy`
				<span class=${(0,class_map.H)(classes)} style=${(0,if_defined.J)((0,style_map.W)(customStyles))} id=${(0,if_defined.J)(id)}>${c}</span>
			`}))}
	`;return lit.qy`${(0,when.z)(contentLength>1,(()=>lit.qy`<div class="spectrum-Typography" id=${(0,if_defined.J)(id)}>${processedContent}</div>`),(()=>processedContent))}`}},"../node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"../node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>o});var lit_html=__webpack_require__("../node_modules/lit-html/lit-html.js"),directive=__webpack_require__("../node_modules/lit-html/directive.js");const n="important",i=" !"+n,o=(0,directive.u$)(class extends directive.WL{constructor(t){if(super(t),t.type!==directive.OA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e}}return lit_html.c0}})},"../node_modules/lodash-es/capitalize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lodash_es_capitalize});var lodash_es_toString=__webpack_require__("../node_modules/lodash-es/toString.js");const _baseSlice=function baseSlice(array,start,end){var index=-1,length=array.length;start<0&&(start=-start>length?0:length+start),(end=end>length?length:end)<0&&(end+=length),length=start>end?0:end-start>>>0,start>>>=0;for(var result=Array(length);++index<length;)result[index]=array[index+start];return result};const _castSlice=function castSlice(array,start,end){var length=array.length;return end=void 0===end?length:end,!start&&end>=length?array:_baseSlice(array,start,end)};var reHasUnicode=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");const _hasUnicode=function hasUnicode(string){return reHasUnicode.test(string)};const _asciiToArray=function asciiToArray(string){return string.split("")};var rsAstral="[\\ud800-\\udfff]",rsCombo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsNonAstral="[^\\ud800-\\udfff]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",reOptMod="(?:"+rsCombo+"|"+rsFitz+")"+"?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g");const _unicodeToArray=function unicodeToArray(string){return string.match(reUnicode)||[]};const _stringToArray=function stringToArray(string){return _hasUnicode(string)?_unicodeToArray(string):_asciiToArray(string)};const lodash_es_upperFirst=function createCaseFirst(methodName){return function(string){string=(0,lodash_es_toString.A)(string);var strSymbols=_hasUnicode(string)?_stringToArray(string):void 0,chr=strSymbols?strSymbols[0]:string.charAt(0),trailing=strSymbols?_castSlice(strSymbols,1).join(""):string.slice(1);return chr[methodName]()+trailing}}("toUpperCase");const lodash_es_capitalize=function capitalize(string){return lodash_es_upperFirst((0,lodash_es_toString.A)(string).toLowerCase())}},"../node_modules/lodash-es/toString.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lodash_es_toString});const _freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g;var freeSelf="object"==typeof self&&self&&self.Object===Object&&self;const _Symbol=(_freeGlobal||freeSelf||Function("return this")()).Symbol;const _arrayMap=function arrayMap(array,iteratee){for(var index=-1,length=null==array?0:array.length,result=Array(length);++index<length;)result[index]=iteratee(array[index],index,array);return result};const lodash_es_isArray=Array.isArray;var objectProto=Object.prototype,_getRawTag_hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;const _getRawTag=function getRawTag(value){var isOwn=_getRawTag_hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=void 0;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result};var _objectToString_nativeObjectToString=Object.prototype.toString;const _objectToString=function objectToString(value){return _objectToString_nativeObjectToString.call(value)};var _baseGetTag_symToStringTag=_Symbol?_Symbol.toStringTag:void 0;const _baseGetTag=function baseGetTag(value){return null==value?void 0===value?"[object Undefined]":"[object Null]":_baseGetTag_symToStringTag&&_baseGetTag_symToStringTag in Object(value)?_getRawTag(value):_objectToString(value)};const lodash_es_isObjectLike=function isObjectLike(value){return null!=value&&"object"==typeof value};const lodash_es_isSymbol=function isSymbol(value){return"symbol"==typeof value||lodash_es_isObjectLike(value)&&"[object Symbol]"==_baseGetTag(value)};var symbolProto=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;const _baseToString=function baseToString(value){if("string"==typeof value)return value;if(lodash_es_isArray(value))return _arrayMap(value,baseToString)+"";if(lodash_es_isSymbol(value))return symbolToString?symbolToString.call(value):"";var result=value+"";return"0"==result&&1/value==-Infinity?"-0":result};const lodash_es_toString=function toString_toString(value){return null==value?"":_baseToString(value)}}}]);
//# sourceMappingURL=tooltip-stories-tooltip-stories.410c3b99.iframe.bundle.js.map
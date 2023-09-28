"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[4480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(5321);function l(e){let{version:t,severity:r,hasConfig:l,hasFix:o,isDeprecated:i}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:l,hasFix:o,isDeprecated:i}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function l(e){let{severity:t,version:r,hasConfig:l,hasFix:o,isDeprecated:i}=e;const s=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${s}`},s),n.createElement(a,{hasConfig:l,hasFix:o,isDeprecated:i}))}},7205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),l=r(9729);const o={},i=void 0,s={unversionedId:"rules/common/double-literal-format",id:"rules/common/double-literal-format",title:"double-literal-format",description:"Checks that double literals should begin with 0. instead of just ., and should not end with a trailing 0. Helps keep a consistent style of numeric literals and decrease potential typos.",source:"@site/docs/rules/common/double-literal-format.mdx",sourceDirName:"rules/common",slug:"/rules/common/double-literal-format",permalink:"/flutterando_metrics/docs/rules/common/double-literal-format",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/common/double-literal-format.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"binary-expression-operand-order",permalink:"/flutterando_metrics/docs/rules/common/binary-expression-operand-order"},next:{title:"format-comment",permalink:"/flutterando_metrics/docs/rules/common/format-comment"}},d={},c=[{value:"Redundant leading &#39;0&#39;",id:"redundant-leading-0",level:3},{value:"Literal begin with &#39;.&#39;",id:"literal-begin-with-",level:3},{value:"Redundant trailing &#39;0&#39;",id:"redundant-trailing-0",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{version:"1.5.0",severity:"style",hasFix:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Checks that double literals should begin with ",(0,a.kt)("inlineCode",{parentName:"p"},"0.")," instead of just ",(0,a.kt)("inlineCode",{parentName:"p"},"."),", and should not end with a trailing ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),". Helps keep a consistent style of numeric literals and decrease potential typos."),(0,a.kt)("h3",{id:"redundant-leading-0"},"Redundant leading '0'"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 05.23, b = 03.6e+15, c = -012.2, d = -001.1e-15;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 5.23, b = 3.6e+15, c = -12.2, d = -1.1e-15;\n")),(0,a.kt)("h3",{id:"literal-begin-with-"},"Literal begin with '.'"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = .257, b = .16e+5, c = -.259, d = -.14e-5;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.257, b = 0.16e+5, c = -0.259, d = -0.14e-5;\n")),(0,a.kt)("h3",{id:"redundant-trailing-0"},"Redundant trailing '0'"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.210, b = 0.100e+5, c = -0.250, d = -0.400e-5;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.21, b = 0.1e+5, c = -0.25, d = -0.4e-5;\n")))}m.isMDXComponent=!0}}]);
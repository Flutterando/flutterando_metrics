"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(5321);function i(e){let{version:t,severity:n,hasConfig:i,hasFix:l,isDeprecated:o}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:i,hasFix:l,isDeprecated:o}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:t,version:n,hasConfig:i,hasFix:l,isDeprecated:o}=e;const s=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${s}`},s),r.createElement(a,{hasConfig:i,hasFix:l,isDeprecated:o}))}},6665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(9729);const l={},o=void 0,s={unversionedId:"rules/common/prefer-correct-identifier-length",id:"rules/common/prefer-correct-identifier-length",title:"prefer-correct-identifier-length",description:"The rule checks the length of variable names in classes, functions, extensions, mixins, and also checks the value of enum.",source:"@site/docs/rules/common/prefer-correct-identifier-length.mdx",sourceDirName:"rules/common",slug:"/rules/common/prefer-correct-identifier-length",permalink:"/flutterando_metrics/docs/rules/common/prefer-correct-identifier-length",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/common/prefer-correct-identifier-length.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"prefer-conditional-expressions",permalink:"/flutterando_metrics/docs/rules/common/prefer-conditional-expressions"},next:{title:"prefer-correct-test-file-name",permalink:"/flutterando_metrics/docs/rules/common/prefer-correct-test-file-name"}},c={},p=[{value:"\u2699\ufe0f Config example",id:"\ufe0f-config-example",level:3},{value:"Example",id:"example",level:3}],u={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{version:"4.5.0",severity:"style",hasConfig:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"The rule checks the length of variable names in classes, functions, extensions, mixins, and also checks the value of enum."),(0,a.kt)("p",null,"The rule can be configured using fields ",(0,a.kt)("inlineCode",{parentName:"p"},"max-identifier-length")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"min-identifier-length"),". By\ndefault ",(0,a.kt)("inlineCode",{parentName:"p"},"max-identifier-length = 300")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"min-identifier-length = 3"),". You can also add\nexceptions ",(0,a.kt)("inlineCode",{parentName:"p"},"exceptions"),"."),(0,a.kt)("h3",{id:"\ufe0f-config-example"},"\u2699\ufe0f Config example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"flutterando_metrics:\n  ...\n  rules:\n    ...\n    - prefer-correct-identifier-length:\n        exceptions: [ 'a' ]\n        max-identifier-length: 30\n        min-identifier-length: 4\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"\nvar x = 0; // length equals 1\nvar multiplatformConfigurationPoint = 0; // length equals 31\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"\nvar property = 0; // length equals 8\nvar multiplatformConfiguration = 0; // length equals 26\n")))}f.isMDXComponent=!0}}]);
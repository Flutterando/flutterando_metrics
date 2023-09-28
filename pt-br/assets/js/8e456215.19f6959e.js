"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[7029],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(5321);function o(e){let{version:t,severity:r,hasConfig:o,hasFix:i,isDeprecated:l}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:t,severity:r,hasConfig:o,hasFix:i,isDeprecated:l}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);function a(e){let{hasConfig:t,hasFix:r,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:t,version:r,hasConfig:o,hasFix:i,isDeprecated:l}=e;const s=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${s}`},s),n.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:l}))}},6429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(9729);const i={},l=void 0,s={unversionedId:"rules/common/arguments-ordering",id:"rules/common/arguments-ordering",title:"arguments-ordering",description:"Enforces named argument order in function and constructor invocations to be the same as corresponding named parameter declaration order.",source:"@site/docs/rules/common/arguments-ordering.mdx",sourceDirName:"rules/common",slug:"/rules/common/arguments-ordering",permalink:"/flutterando_metrics/pt-br/docs/rules/common/arguments-ordering",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/common/arguments-ordering.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Rules",permalink:"/flutterando_metrics/pt-br/docs/rules/"},next:{title:"avoid-banned-imports",permalink:"/flutterando_metrics/pt-br/docs/rules/common/avoid-banned-imports"}},c={},u=[{value:"\u2699\ufe0f Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],m={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"5.1.0",severity:"style",hasConfig:!0,hasFix:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Enforces named argument order in function and constructor invocations to be the same as corresponding named parameter declaration order."),(0,a.kt)("p",null,"The rule can be used together with ",(0,a.kt)("a",{parentName:"p",href:"https://dart-lang.github.io/linter/lints/sort_child_properties_last.html"},"sort_child_properties_last")," rule by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"child-last: true")," in rule configuration."),(0,a.kt)("h3",{id:"config-example"},"\u2699\ufe0f Config example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"flutterando_metrics:\n  ...\n  rules:\n    ...\n    - arguments-ordering:\n        child-last: true\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Person buildPerson({ String name, String surname, String age });\n\n// LINT\nfinal person = buildPerson(age: 42, surname: 'The Pooh', name: 'Winnie');\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Person buildPerson({ String name, String surname, String age });\n\nfinal person = buildPerson(name: 'Winnie', surname: 'The Pooh', age: 42);\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[6326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(5321);function o(e){let{version:t,severity:n,hasConfig:o,hasFix:l,isDeprecated:s}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:o,hasFix:l,isDeprecated:s}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:t,version:n,hasConfig:o,hasFix:l,isDeprecated:s}=e;const i=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${i}`},i),r.createElement(a,{hasConfig:o,hasFix:l,isDeprecated:s}))}},2246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(9729);const l={},s=void 0,i={unversionedId:"rules/common/tag-name",id:"rules/common/tag-name",title:"tag-name",description:"Warns when tag name does not match class name.",source:"@site/docs/rules/common/tag-name.mdx",sourceDirName:"rules/common",slug:"/rules/common/tag-name",permalink:"/flutterando_metrics/docs/rules/common/tag-name",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/common/tag-name.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"prefer-trailing-comma",permalink:"/flutterando_metrics/docs/rules/common/prefer-trailing-comma"},next:{title:"always-remove-listener",permalink:"/flutterando_metrics/docs/rules/flutter/always-remove-listener"}},c={},m=[{value:"\u2699\ufe0f Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"4.12.0",severity:"warning",hasConfig:!0,hasFix:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns when tag name does not match class name."),(0,a.kt)("h3",{id:"config-example"},"\u2699\ufe0f Config example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"flutterando_metrics:\n  ...\n  rules:\n    ...\n    - tag-name:\n        var-names: [_kTag]\n        strip-prefix: _\n        strip-postfix: State\n    ...\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Apple {\n  static const _kTag = 'Orange'; // LINT\n}\n\nclass _OrangeState {\n  static const _kTag = 'Apple'; // LINT\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Apple {\n  static const _kTag = 'Apple';\n}\n\nclass _OrangeState {\n  static const _kTag = 'Orange';\n}\n")))}d.isMDXComponent=!0}}]);
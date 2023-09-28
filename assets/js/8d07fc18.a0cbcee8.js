"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(5321);function i(e){let{version:t,severity:n,hasConfig:i,hasFix:o,isDeprecated:s}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:i,hasFix:o,isDeprecated:s}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:t,version:n,hasConfig:i,hasFix:o,isDeprecated:s}=e;const l=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${l}`},l),r.createElement(a,{hasConfig:i,hasFix:o,isDeprecated:s}))}},6612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),i=n(9729);const o={},s=void 0,l={unversionedId:"rules/common/avoid-non-ascii-symbols",id:"rules/common/avoid-non-ascii-symbols",title:"avoid-non-ascii-symbols",description:"Warns when a string literal contains non ascii characters. This might indicate that the string was not localized.",source:"@site/docs/rules/common/avoid-non-ascii-symbols.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-non-ascii-symbols",permalink:"/flutterando_metrics/docs/rules/common/avoid-non-ascii-symbols",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/common/avoid-non-ascii-symbols.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-nested-conditional-expressions",permalink:"/flutterando_metrics/docs/rules/common/avoid-nested-conditional-expressions"},next:{title:"avoid-non-null-assertion",permalink:"/flutterando_metrics/docs/rules/common/avoid-non-null-assertion"}},c={},m=[{value:"Example",id:"example",level:3}],u={toc:m},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{version:"4.15.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns when a string literal contains non ascii characters. This might indicate that the string was not localized."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final chinese = 'hello \u6c49\u5b57'; // LINT\nfinal russian = 'hello \u043f\u0440\u0438\u0432\u0435\u0442'; // LINT\nfinal withSomeNonAsciiSymbols = '#!$_&-  \xe9\xe8  ;\u221e\xa5\u20a4\u20ac'; // LINT\nfinal misspelling = 'inform@tiv\u20ac'; // LINT\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final english = 'hello';\nfinal someGenericSymbols ='!@#$%^';\n")))}p.isMDXComponent=!0}}]);
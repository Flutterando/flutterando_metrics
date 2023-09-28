"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[9697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(5321);function o(e){let{version:t,severity:n,hasConfig:o,hasFix:i,isDeprecated:l}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:o,hasFix:i,isDeprecated:l}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:t,version:n,hasConfig:o,hasFix:i,isDeprecated:l}=e;const s=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${s}`},s),r.createElement(a,{hasConfig:o,hasFix:i,isDeprecated:l}))}},8913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=n(9729);const i={},l=void 0,s={unversionedId:"rules/angular/component-annotation-arguments-ordering",id:"rules/angular/component-annotation-arguments-ordering",title:"component-annotation-arguments-ordering",description:"Enforces Angular @Component annotation arguments ordering.",source:"@site/docs/rules/angular/component-annotation-arguments-ordering.mdx",sourceDirName:"rules/angular",slug:"/rules/angular/component-annotation-arguments-ordering",permalink:"/flutterando_metrics/docs/rules/angular/component-annotation-arguments-ordering",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/angular/component-annotation-arguments-ordering.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-preserve-whitespace-false",permalink:"/flutterando_metrics/docs/rules/angular/avoid-preserve-whitespace-false"},next:{title:"prefer-on-push-cd-strategy",permalink:"/flutterando_metrics/docs/rules/angular/prefer-on-push-cd-strategy"}},c={},u=[{value:"\u2699\ufe0f Config example",id:"config-example",level:3}],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"1.9.0",severity:"style",hasConfig:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Enforces Angular ",(0,a.kt)("inlineCode",{parentName:"p"},"@Component")," annotation arguments ordering."),(0,a.kt)("p",null,"The value for ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," may be an array consisting of the following strings (default order listed):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"selector"),(0,a.kt)("li",{parentName:"ul"},"templates"),(0,a.kt)("li",{parentName:"ul"},"styles"),(0,a.kt)("li",{parentName:"ul"},"directives"),(0,a.kt)("li",{parentName:"ul"},"pipes"),(0,a.kt)("li",{parentName:"ul"},"providers"),(0,a.kt)("li",{parentName:"ul"},"encapsulation"),(0,a.kt)("li",{parentName:"ul"},"visibility"),(0,a.kt)("li",{parentName:"ul"},"exports"),(0,a.kt)("li",{parentName:"ul"},"change-detection")),(0,a.kt)("h3",{id:"config-example"},"\u2699\ufe0f Config example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"flutterando_metrics:\n  ...\n  rules:\n    ...\n    - component-annotation-arguments-ordering:\n        order:\n          - selector\n          - templates\n          - change-detection\n")))}d.isMDXComponent=!0}}]);
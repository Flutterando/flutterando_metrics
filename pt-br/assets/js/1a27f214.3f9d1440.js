"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[5193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=s,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:s,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),s=r(5321);function a(e){let{version:t,severity:r,hasConfig:a,hasFix:o,isDeprecated:l}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(s.Z,{version:t,severity:r,hasConfig:a,hasFix:o,isDeprecated:l}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function s(e){let{hasConfig:t,hasFix:r,isDeprecated:s}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),s&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function a(e){let{severity:t,version:r,hasConfig:a,hasFix:o,isDeprecated:l}=e;const c=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:`rule-severity ${c}`},c),n.createElement(s,{hasConfig:a,hasFix:o,isDeprecated:l}))}},4447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),s=(r(7294),r(3905)),a=r(9729);const o={},l=void 0,c={unversionedId:"rules/flutter/prefer-correct-edge-insets-constructor",id:"rules/flutter/prefer-correct-edge-insets-constructor",title:"prefer-correct-edge-insets-constructor",description:"If any value, passed to EdgeInsets.fromLTRB, equals 0, then EdgeInsets.fromLTRB should be replaced with EdgeInsets.only passing all non-zero values. If passed values are symmetric, then EdgeInsets.fromLTRB or EdgeInsets.only should be replaced with EdgeInsets.symmetric.",source:"@site/docs/rules/flutter/prefer-correct-edge-insets-constructor.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/prefer-correct-edge-insets-constructor",permalink:"/flutterando_metrics/pt-br/docs/rules/flutter/prefer-correct-edge-insets-constructor",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/flutter/prefer-correct-edge-insets-constructor.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"prefer-const-border-radius",permalink:"/flutterando_metrics/pt-br/docs/rules/flutter/prefer-const-border-radius"},next:{title:"prefer-extracting-callbacks",permalink:"/flutterando_metrics/pt-br/docs/rules/flutter/prefer-extracting-callbacks"}},i={},u=[{value:"Example",id:"example",level:3}],d={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{version:"4.17.0",severity:"style",hasFix:!0,mdxType:"RuleDetails"}),(0,s.kt)("p",null,"If any value, passed to EdgeInsets.fromLTRB, equals 0, then EdgeInsets.fromLTRB should be replaced with EdgeInsets.only passing all non-zero values. If passed values are symmetric, then EdgeInsets.fromLTRB or EdgeInsets.only should be replaced with EdgeInsets.symmetric."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"EdgeInsets.fromLTRB(8, 0, 8, 0)\nEdgeInsets.fromLTRB (8, 0, 0, 0)\nEdgeInsets.only(left: 16, right: 16)\nEdgeInsets.fromLTRB(8, 8, 8, 8)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"EdgeInsets.symmetric(horizontal: 8)\nEdgeInsets.only(left: 8)\nEdgeInsets.symmetric(horizontal: 16)\nEdgeInsets.all(8)\n")))}f.isMDXComponent=!0}}]);
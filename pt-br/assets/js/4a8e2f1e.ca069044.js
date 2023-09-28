"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[7178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(5321);function l(e){let{version:t,severity:n,hasConfig:l,hasFix:i,isDeprecated:o}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:l,hasFix:i,isDeprecated:o}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function l(e){let{severity:t,version:n,hasConfig:l,hasFix:i,isDeprecated:o}=e;const s=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${s}`},s),r.createElement(a,{hasConfig:l,hasFix:i,isDeprecated:o}))}},6673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),l=n(9729);const i={},o=void 0,s={unversionedId:"rules/common/prefer-match-file-name",id:"rules/common/prefer-match-file-name",title:"prefer-match-file-name",description:"Warns if the file name does not match the name of the first public class / mixin / extension / enum in the file or a private one if there are no public entries.",source:"@site/docs/rules/common/prefer-match-file-name.mdx",sourceDirName:"rules/common",slug:"/rules/common/prefer-match-file-name",permalink:"/flutterando_metrics/pt-br/docs/rules/common/prefer-match-file-name",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/common/prefer-match-file-name.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"prefer-last",permalink:"/flutterando_metrics/pt-br/docs/rules/common/prefer-last"},next:{title:"prefer-moving-to-variable",permalink:"/flutterando_metrics/pt-br/docs/rules/common/prefer-moving-to-variable"}},c={},m=[{value:"Example",id:"example",level:3},{value:"Example 1 One class in the file",id:"example-1-one-class-in-the-file",level:4},{value:"Example 2 Multiple class in the file",id:"example-2-multiple-class-in-the-file",level:4}],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{version:"4.2.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns if the file name does not match the name of the first public class / mixin / extension / enum in the file or a private one if there are no public entries."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For this rule it's recommended to exclude the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," folder.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"flutterando_metrics:\n  ...\n  rules:\n    ...\n    - prefer-match-file-name:\n        exclude:\n          - test/**\n    ...\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h4",{id:"example-1-one-class-in-the-file"},"Example 1 One class in the file"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("p",null,"File name: ",(0,a.kt)("strong",{parentName:"p"},"some_widget.dart")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class SomeOtherWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("p",null,"File name: ",(0,a.kt)("strong",{parentName:"p"},"some_widget.dart")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class SomeWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n")),(0,a.kt)("h4",{id:"example-2-multiple-class-in-the-file"},"Example 2 Multiple class in the file"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("p",null,"File name: ",(0,a.kt)("strong",{parentName:"p"},"some_other_widget.dart")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class _SomeOtherWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n\nclass SomeWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("p",null,"File name: ",(0,a.kt)("strong",{parentName:"p"},"some_widget.dart")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class _SomeOtherWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n\nclass SomeWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n")))}u.isMDXComponent=!0}}]);
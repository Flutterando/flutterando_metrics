"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[9385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),g=a,f=c["".concat(u,".").concat(g)]||c[g]||d[g]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},l="Analyzer Plugin",o={unversionedId:"analyzer-plugin",id:"analyzer-plugin",title:"Analyzer Plugin",description:"Flutterando Metrics can be used as a plugin for the Dart analyzer. All issues produced by provided rules or anti-patterns will be highlighted in IDE.",source:"@site/docs/analyzer-plugin.md",sourceDirName:".",slug:"/analyzer-plugin",permalink:"/flutterando_metrics/pt-br/docs/analyzer-plugin",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/analyzer-plugin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Configuration",permalink:"/flutterando_metrics/pt-br/docs/getting-started/configuration"},next:{title:"CLI",permalink:"/flutterando_metrics/pt-br/docs/cli/"}},u={},p=[{value:"Applying quick fixes",id:"applying-quick-fixes",level:2},{value:"Troubleshooting the plugin integration",id:"troubleshooting-the-plugin-integration",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"analyzer-plugin"},"Analyzer Plugin"),(0,a.kt)("p",null,"Flutterando Metrics can be used as a plugin for the Dart ",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/analyzer"},(0,a.kt)("inlineCode",{parentName:"a"},"analyzer")),". All issues produced by provided rules or anti-patterns will be highlighted in IDE."),(0,a.kt)("p",null,"To enable the plugin integration add ",(0,a.kt)("inlineCode",{parentName:"p"},"flutterando_metrics")," entry to the analyzer plugins list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="analysis_options.yaml"',title:'"analysis_options.yaml"'},"analyzer:\n  plugins:\n    - flutterando_metrics\n\nflutterando_metrics: ... # package configuration\n")),(0,a.kt)("p",null,"Plugin integration supports all IDE that are supported by the analyzer itself."),(0,a.kt)("h2",{id:"applying-quick-fixes"},"Applying quick fixes"),(0,a.kt)("p",null,"Rules that marked with a ",(0,a.kt)("inlineCode",{parentName:"p"},"has auto-fix")," badge have auto-fixes available through the IDE context menu. VS Code example:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"VS Code example",src:n(2292).Z,width:"600",height:"398"})),(0,a.kt)("h2",{id:"troubleshooting-the-plugin-integration"},"Troubleshooting the plugin integration"),(0,a.kt)("p",null,"If you have a problem with the plugin, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Flutterando/flutterando_metrics/blob/master/TROUBLESHOOTING.md"},"troubleshooting docs"),"."))}d.isMDXComponent=!0},2292:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quick-fix-176662f6292ac0c547d15f7c24a2da53.gif"}}]);
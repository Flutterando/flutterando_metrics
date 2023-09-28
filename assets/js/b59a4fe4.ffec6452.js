"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},l="Maintainability Index",o={unversionedId:"metrics/maintainability-index",id:"metrics/maintainability-index",title:"Maintainability Index",description:"Maintainability Index is a software metric which measures how maintainable (easy to support and change) the source code is. The maintainability index is calculated as a factored formula consisting of Source Lines Of Code, Cyclomatic Complexity and Halstead Volume.",source:"@site/docs/metrics/maintainability-index.md",sourceDirName:"metrics",slug:"/metrics/maintainability-index",permalink:"/flutterando_metrics/docs/metrics/maintainability-index",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/metrics/maintainability-index.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Lines of Code",permalink:"/flutterando_metrics/docs/metrics/lines-of-code"},next:{title:"Maximum Nesting",permalink:"/flutterando_metrics/docs/metrics/maximum-nesting-level"}},c={},s=[{value:"Config example",id:"config-example",level:2},{value:"Example",id:"example",level:2}],m={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"maintainability-index"},"Maintainability Index"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Maintainability Index")," is a software metric which measures how maintainable (easy to support and change) the source code is. The maintainability index is calculated as a factored formula consisting of ",(0,i.kt)("inlineCode",{parentName:"p"},"Source Lines Of Code"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Cyclomatic Complexity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Halstead Volume"),"."),(0,i.kt)("p",null,"The original formula:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"MI = 171 \u2212 5.2 * log(HALVOL) \u2212 0.23 * log(CYCLO) \u2212 16.2 * log(SLOC)\n")),(0,i.kt)("p",null,"We use Microsoft Visual Studio version with a shifted scale (0 to 100) derivative:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"MI = max(0, (171 \u2212 5.2 * log(HALVOL) \u2212 0.23 * log(CYCLO) \u2212 16.2 * log(SLOC)) * 100 / 171)\n")),(0,i.kt)("h2",{id:"config-example"},"Config example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"flutterando_metrics:\n  ...\n  metrics:\n    ...\n    maintainability-index: 50\n    ...\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"MetricComputationResult<int> computeImplementation(\n  Declaration node,\n  Iterable<ScopedClassDeclaration> classDeclarations,\n  Iterable<ScopedFunctionDeclaration> functionDeclarations,\n  InternalResolvedUnitResult source,\n  Iterable<MetricValue> otherMetricsValues,\n) {\n  final halVol = otherMetricsValues.firstWhere(\n    (value) => value.metricsId == HalsteadVolumeMetric.metricId,\n  );\n\n  final cyclomatic = otherMetricsValues.firstWhere(\n    (value) => value.metricsId == CyclomaticComplexityMetric.metricId,\n  );\n\n  final sloc = otherMetricsValues.firstWhere(\n    (value) => value.metricsId == SourceLinesOfCodeMetric.metricId,\n  );\n\n  final halVolScale = log(max(1, halVol.value));\n  final cycloScale = cyclomatic.value;\n  final slocScale = log(max(1, sloc.value));\n\n  final maintainabilityIndex =\n      (171 - halVolScale * 5.2 - cycloScale * 0.23 - slocScale * 16.2) / 171;\n\n  return MetricComputationResult(\n    value: (maintainabilityIndex * 100).clamp(0, 100).ceil(),\n  );\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Maintainability Index")," for the example function is ",(0,i.kt)("strong",{parentName:"p"},"56"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Maintainability Index is still a very experimental metric, and should not be taken into account as seriously as the other metrics.")))}p.isMDXComponent=!0}}]);
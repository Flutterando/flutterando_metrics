"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[6017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=o,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="Cyclomatic Complexity",l={unversionedId:"metrics/cyclomatic-complexity",id:"metrics/cyclomatic-complexity",title:"Cyclomatic Complexity",description:"Number of linearly independent paths through a block of code. Conditional operators or loops increases the number of paths in a code. The more paths, the higher the number of test cases that need to be implemented. The metric complies with McCabe's original definition:",source:"@site/docs/metrics/cyclomatic-complexity.md",sourceDirName:"metrics",slug:"/metrics/cyclomatic-complexity",permalink:"/flutterando_metrics/docs/metrics/cyclomatic-complexity",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/metrics/cyclomatic-complexity.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Metrics",permalink:"/flutterando_metrics/docs/metrics/"},next:{title:"Halstead Volume",permalink:"/flutterando_metrics/docs/metrics/halstead-volume"}},c={},p=[{value:"Config example",id:"config-example",level:2},{value:"Example",id:"example",level:2}],m={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cyclomatic-complexity"},"Cyclomatic Complexity"),(0,o.kt)("p",null,"Number of linearly independent paths through a block of code. Conditional operators or loops increases the number of paths in a code. The more paths, the higher the number of test cases that need to be implemented. The metric complies with McCabe's original definition:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Methods have a base complexity of 1."),(0,o.kt)("li",{parentName:"ul"},"every control flow statement (",(0,o.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"catch"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"throw"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"do"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"break"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"continue"),") and conditional expression (",(0,o.kt)("inlineCode",{parentName:"li"},"? ... : ..."),") increase complexity"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"else"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"finally")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," don't count"),(0,o.kt)("li",{parentName:"ul"},"some operators like ",(0,o.kt)("inlineCode",{parentName:"li"},"&&"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"||"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"?."),", ",(0,o.kt)("inlineCode",{parentName:"li"},"??")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"??=")," also increase complexity")),(0,o.kt)("h2",{id:"config-example"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"flutterando_metrics:\n  ...\n  metrics:\n    ...\n    cyclomatic-complexity: 20\n    ...\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void visitBlock(Token firstToken, Token lastToken) {\n  const tokenTypes = [\n    TokenType.AMPERSAND_AMPERSAND,\n    TokenType.BAR_BAR,\n    TokenType.QUESTION_PERIOD,\n    TokenType.QUESTION_QUESTION,\n    TokenType.QUESTION_QUESTION_EQ,\n  ];\n\n  var token = firstToken;\n  while (token != lastToken) {\n    if (token.matchesAny(tokenTypes)) {\n      _increaseComplexity(token);\n    }\n\n    token = token.next;\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cyclomatic Complexity")," for the example function is ",(0,o.kt)("strong",{parentName:"p"},"3"),"."))}d.isMDXComponent=!0}}]);
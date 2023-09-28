"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return r?o.createElement(g,i(i({ref:t},d),{},{components:r})):o.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={},i="M\xe9todo Longo",s={unversionedId:"metrics/anti-patterns/long-method",id:"metrics/anti-patterns/long-method",title:"M\xe9todo Longo",description:"Blocos longos de c\xf3digo s\xe3o dif\xedceis de reutilizar e entender porque geralmente s\xe3o respons\xe1veis por mais de uma coisa. Separar esses em v\xe1rios blocos curtos com nomes adequados ajuda a reutilizar o seu c\xf3digo e entender melhor sem ler o corpo dos m\xe9todos.",source:"@site/i18n/pt-br/docusaurus-plugin-content-docs/current/metrics/anti-patterns/long-method.md",sourceDirName:"metrics/anti-patterns",slug:"/metrics/anti-patterns/long-method",permalink:"/flutterando_metrics/pt-br/docs/metrics/anti-patterns/long-method",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/metrics/anti-patterns/long-method.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Anti-padr\xf5es",permalink:"/flutterando_metrics/pt-br/docs/metrics/anti-patterns/"},next:{title:"Lista Longa de Par\xe2metros",permalink:"/flutterando_metrics/pt-br/docs/metrics/anti-patterns/long-parameter-list"}},c={},l=[{value:"Estrat\xe9gia de detec\xe7\xe3o",id:"detection-strategy",level:2},{value:"Exce\xe7\xf5es",id:"exceptions",level:2}],d={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"m\xe9todo-longo"},"M\xe9todo Longo"),(0,n.kt)("p",null,"Blocos longos de c\xf3digo s\xe3o dif\xedceis de reutilizar e entender porque geralmente s\xe3o respons\xe1veis por mais de uma coisa. Separar esses em v\xe1rios blocos curtos com nomes adequados ajuda a reutilizar o seu c\xf3digo e entender melhor sem ler o corpo dos m\xe9todos."),(0,n.kt)("p",null,"Linhas de c\xf3digo com coment\xe1rios de esclarecimento geralmente s\xe3o um sinal de poss\xedvel extra\xe7\xe3o de m\xe9todo, porque voc\xea pode nomear o m\xe9todo extra\xeddo de uma maneira que cubra a descri\xe7\xe3o do coment\xe1rio e, em seguida, remover o coment\xe1rio. Mesmo coment\xe1rios para uma linha s\xe3o um sinal de extra\xe7\xe3o de m\xe9todo."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Para encurtar um m\xe9todo, basta aplicar o comando ",(0,n.kt)("strong",{parentName:"li"},"Extract Method"),"."),(0,n.kt)("li",{parentName:"ul"},"Se vari\xe1veis locais e par\xe2metros impedem uma extra\xe7\xe3o de m\xe9todo, aplique os comandos ",(0,n.kt)("strong",{parentName:"li"},"Replace Temp with Query"),", ",(0,n.kt)("strong",{parentName:"li"},"Introduce Parameter Object")," ou ",(0,n.kt)("strong",{parentName:"li"},"Preserve Whole Object"),"."),(0,n.kt)("li",{parentName:"ul"},"Declara\xe7\xf5es condicionais ou loops indicam a possibilidade de extra\xe7\xe3o de m\xe9todo. Use o comando ",(0,n.kt)("strong",{parentName:"li"},"Decompose Conditional")," para express\xf5es condicionais e ",(0,n.kt)("strong",{parentName:"li"},"Extract Method")," para loops.")),(0,n.kt)("h2",{id:"detection-strategy"},"Estrat\xe9gia de detec\xe7\xe3o"),(0,n.kt)("p",null,"Usa o valor de ",(0,n.kt)("a",{parentName:"p",href:"/flutterando_metrics/pt-br/docs/metrics/source-lines-of-code"},(0,n.kt)("inlineCode",{parentName:"a"},"Source lines of Code"))," e compara-o com o limite configurado."),(0,n.kt)("h2",{id:"exceptions"},"Exce\xe7\xf5es"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"M\xe9todo de constru\xe7\xe3o de widget Flutter.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"P.S. Usamos a terminologia do livro ",(0,n.kt)("strong",{parentName:"p"},"Refactoring Improving the Design of Existing Code")," de ",(0,n.kt)("em",{parentName:"p"},"Martin Fowler"),"."))}p.isMDXComponent=!0}}]);
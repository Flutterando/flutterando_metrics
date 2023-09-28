"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5410:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},l="D\xedvida T\xe9cnica",i={unversionedId:"metrics/technical_debt",id:"metrics/technical_debt",title:"D\xedvida T\xe9cnica",description:"O custo do retrabalho adicional causado pela escolha de uma solu\xe7\xe3o f\xe1cil (limitada) agora, em vez de usar uma abordagem melhor que levaria mais tempo. A m\xe9trica contabiliza a d\xedvida com base no padr\xe3o:",source:"@site/i18n/pt-br/docusaurus-plugin-content-docs/current/metrics/technical_debt.md",sourceDirName:"metrics",slug:"/metrics/technical_debt",permalink:"/flutterando_metrics/pt-br/docs/metrics/technical_debt",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/metrics/technical_debt.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Linhas de C\xf3digo Fonte",permalink:"/flutterando_metrics/pt-br/docs/metrics/source-lines-of-code"},next:{title:"Peso de uma Classe",permalink:"/flutterando_metrics/pt-br/docs/metrics/weight-of-class"}},c={},s=[{value:"Exemplo de configura\xe7\xe3o",id:"config-example",level:2},{value:"Exemplo",id:"example",level:2}],d={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"d\xedvida-t\xe9cnica"},"D\xedvida T\xe9cnica"),(0,r.kt)("p",null,"O custo do retrabalho adicional causado pela escolha de uma solu\xe7\xe3o f\xe1cil (limitada) agora, em vez de usar uma abordagem melhor que levaria mais tempo. A m\xe9trica contabiliza a d\xedvida com base no padr\xe3o:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"coment\xe1rio todo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void fooBar() {\n  // TODO: precisa migrar para o logger\n  debugPrint('log');\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"coment\xe1rio suprimindo regras")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// ignore_for_file: unused_local_variable\n\nvoid fooBar() {\n  // ignore: invalid_assignment\n  int x = '';\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"convers\xe3o para ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"void fooBar() {\n  final a = Foo() as dynamic;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"coment\xe1rio de anota\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"li"},"Deprecated"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"@Deprecated('Use a classe Bar')\nclass Foo {}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arquivos n\xe3o migrados para nullsafety")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// @dart=2.9\n\nvoid fooBar() {\n  debugPrint('log');\n}\n")),(0,r.kt)("p",null,"Voc\xea pode configurar o custo de cada caso suportado e especificar o tipo de unidade da d\xedvida."),(0,r.kt)("h2",{id:"config-example"},"Exemplo de configura\xe7\xe3o"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'flutterando_metrics:\n  ...\n  metrics:\n    ...\n    technical-debt:\n      threshold: 1\n      todo-cost: 161\n      ignore-cost: 320\n      ignore-for-file-cost: 396\n      as-dynamic-cost: 322\n      deprecated-annotations-cost: 37\n      file-nullsafety-migration-cost: 41\n      unit-type: "USD"\n    ...\n')),(0,r.kt)("h2",{id:"example"},"Exemplo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"// @dart=2.9\n\n// ignore_for_file: always_declare_return_types\n\n@Deprecated('Use a classe Bar')\nclass Foo {}\n\n// TODO(desenvolvedor): coment\xe1rio estilo flutter\nvoid fooBar() {\n  // ignore: always_put_control_body_on_new_line\n  final a = Foo() as dynamic;\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D\xedvida T\xe9cnica")," para a fun\xe7\xe3o do exemplo \xe9 ",(0,r.kt)("strong",{parentName:"p"},"955 USD"),"."))}p.isMDXComponent=!0}}]);
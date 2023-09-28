"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[3101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(5321);function i(e){let{version:t,severity:n,hasConfig:i,hasFix:s,isDeprecated:o}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:i,hasFix:s,isDeprecated:o}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:t,version:n,hasConfig:i,hasFix:s,isDeprecated:o}=e;const l=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${l}`},l),r.createElement(a,{hasConfig:i,hasFix:s,isDeprecated:o}))}},9503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),i=n(9729);const s={},o=void 0,l={unversionedId:"rules/flutter/avoid-unnecessary-setstate",id:"rules/flutter/avoid-unnecessary-setstate",title:"avoid-unnecessary-setstate",description:"Warns when setState is called inside initState, didUpdateWidget or build methods and when it's called from a sync method that is called inside those methods.",source:"@site/docs/rules/flutter/avoid-unnecessary-setstate.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/avoid-unnecessary-setstate",permalink:"/flutterando_metrics/pt-br/docs/rules/flutter/avoid-unnecessary-setstate",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/rules/flutter/avoid-unnecessary-setstate.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-shrink-wrap-in-lists",permalink:"/flutterando_metrics/pt-br/docs/rules/flutter/avoid-shrink-wrap-in-lists"},next:{title:"avoid-wrapping-in-padding",permalink:"/flutterando_metrics/pt-br/docs/rules/flutter/avoid-wrapping-in-padding"}},d={},c=[{value:"Example",id:"example",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{version:"4.0.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Warns when ",(0,a.kt)("inlineCode",{parentName:"p"},"setState")," is called inside ",(0,a.kt)("inlineCode",{parentName:"p"},"initState"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"didUpdateWidget")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," methods and when it's called from a ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," method that is called inside those methods."),(0,a.kt)("p",null,"Calling setState in those cases will lead to an additional widget rerender which is bad for performance."),(0,a.kt)("p",null,"Consider changing state directly without calling ",(0,a.kt)("inlineCode",{parentName:"p"},"setState"),"."),(0,a.kt)("p",null,"Additional resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/53363774/importance-of-calling-setstate-inside-initstate/53373017#53373017"},"https://stackoverflow.com/questions/53363774/importance-of-calling-setstate-inside-initstate/53373017#53373017"))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class MyWidget extends StatefulWidget {\n  @override\n  _MyWidgetState createState() => _MyWidgetState();\n}\n\nclass _MyWidgetState extends State<MyWidget> {\n  String myString = \'\';\n\n  @override\n  void initState() {\n    super.initState();\n\n    // LINT\n    setState(() {\n      myString = "Hello";\n    });\n\n    if (condition) {\n      // LINT\n      setState(() {\n        myString = "Hello";\n      });\n    }\n\n    myStateUpdateMethod(); // LINT\n  }\n\n  @override\n  void didUpdateWidget(MyWidget oldWidget) {\n    // LINT\n    setState(() {\n      myString = "Hello";\n    });\n  }\n\n  void myStateUpdateMethod() {\n    setState(() {\n      myString = "Hello";\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    // LINT\n    setState(() {\n      myString = "Hello";\n    });\n\n    if (condition) {\n      // LINT\n      setState(() {\n        myString = "Hello";\n      });\n    }\n\n    myStateUpdateMethod(); // LINT\n\n    return ElevatedButton(\n      onPressed: () => myStateUpdateMethod(),\n      onLongPress: () {\n        setState(() {\n          myString = data;\n        });\n      },\n      child: Text(\'PRESS\'),\n    );\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'class MyWidget extends StatefulWidget {\n  @override\n  _MyWidgetState createState() => _MyWidgetState();\n}\n\nclass _MyWidgetState extends State<MyWidget> {\n  String myString = \'\';\n\n  final classWithMethod = SomeClassWithMethod();\n\n  @override\n  void initState() {\n    super.initState();\n\n    myString = "Hello";\n\n    classWithMethod.myMethod();\n    myAsyncMethod();\n  }\n\n  @override\n  void didUpdateWidget(MyWidget oldWidget) {\n    myString = "Hello";\n  }\n\n  void myStateUpdateMethod() {\n    setState(() {\n      myString = "Hello";\n    });\n  }\n\n  Future<void> myAsyncMethod() async {\n    final data = await service.fetchData();\n\n    setState(() {\n      myString = data;\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    myAsyncMethod();\n\n    return ElevatedButton(\n      onPressed: () => myStateUpdateMethod(),\n      onLongPress: () {\n        setState(() {\n          myString = data;\n        });\n      },\n      child: Text(\'PRESS\'),\n    );\n  }\n}\n')))}m.isMDXComponent=!0}}]);
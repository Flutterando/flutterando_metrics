"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[8154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},l="Check unused code",i={unversionedId:"cli/check-unused-code",id:"cli/check-unused-code",title:"Check unused code",description:"Checks unused classes, functions, top level variables, extensions, enums, mixins and type aliases.",source:"@site/docs/cli/check-unused-code.md",sourceDirName:"cli",slug:"/cli/check-unused-code",permalink:"/flutterando_metrics/docs/cli/check-unused-code",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/cli/check-unused-code.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Check unnecessary nullable parameters",permalink:"/flutterando_metrics/docs/cli/check-unnecessary-nullable"},next:{title:"Check unused files",permalink:"/flutterando_metrics/docs/cli/check-unused-files"}},s={},u=[{value:"Suppressing the command",id:"suppressing-the-command",level:2},{value:"Monorepo support",id:"monorepo-support",level:2},{value:"Output example",id:"output-example",level:2},{value:"Console",id:"console",level:3},{value:"JSON",id:"json",level:3},{value:"The <strong>root</strong> object fields are",id:"the-root-object-fields-are",level:4},{value:"The <strong>unusedCode</strong> object fields are",id:"the-unusedcode-object-fields-are",level:4},{value:"The <strong>issue</strong> object fields are",id:"the-issue-object-fields-are",level:4}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-unused-code"},"Check unused code"),(0,o.kt)("p",null,"Checks unused classes, functions, top level variables, extensions, enums, mixins and type aliases."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," current implementation doesn't check for particular class methods usage. Also, it treats code, that is imported with not named conditional imports as unused. This will be fixed in the future releases."),(0,o.kt)("p",null,"To execute the command, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ dart run flutterando_metrics:metrics check-unused-code lib\n\n# or for a Flutter package\n$ flutter pub run flutterando_metrics:metrics check-unused-code lib\n")),(0,o.kt)("p",null,"Full command description:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage: metrics check-unused-code [arguments] <directories>\n-h, --help                                       Print this usage information.\n\n\n-r, --reporter=<console>                         The format of the output of the analysis.\n                                                 [console (default), json]\n    --report-to-file=<path/to/report.json>       The path, where a JSON file with the analysis result will be placed (only for the JSON reporter).\n\n-c, --print-config                               Print resolved config.\n\n\n    --root-folder=<./>                           Root folder.\n                                                 (defaults to current directory)\n    --sdk-path=<directory-path>                  Dart SDK directory path.\n                                                 Should be provided only when you run the application as compiled executable(https://dart.dev/tools/dart-compile#exe) and automatic Dart SDK path detection fails.\n    --exclude=<{/**.g.dart,/**.freezed.dart}>    File paths in Glob syntax to be exclude.\n                                                 (defaults to "{/**.g.dart,/**.freezed.dart}")\n\n\n    --no-congratulate                            Don\'t show output even when there are no issues.\n\n\n    --[no-]monorepo                              Treat all exported code as unused by default.\n\n\n    --[no-]fatal-unused                          Treat find unused file as fatal.\n')),(0,o.kt)("h2",{id:"suppressing-the-command"},"Suppressing the command"),(0,o.kt)("p",null,"In order to suppress the command add the ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore: unused-code")," comment. To suppress for an entire file add ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore_for_file: unused-code")," to the beginning of a file."),(0,o.kt)("h2",{id:"monorepo-support"},"Monorepo support"),(0,o.kt)("p",null,"By default the command treats all code that is exported from the package as used. To disable this behavior use ",(0,o.kt)("inlineCode",{parentName:"p"},"--monorepo")," flag. This might be useful when all the packages in your repository are only used within the repository and are not published to the pub."),(0,o.kt)("h2",{id:"output-example"},"Output example"),(0,o.kt)("h3",{id:"console"},"Console"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--reporter=console")," to enable this format."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Console",src:n(2784).Z,width:"1448",height:"762"})),(0,o.kt)("h3",{id:"json"},"JSON"),(0,o.kt)("p",null,"The reporter prints a single JSON object containing meta information and the unused code file paths. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--reporter=json")," to enable this format."),(0,o.kt)("h4",{id:"the-root-object-fields-are"},"The ",(0,o.kt)("strong",{parentName:"h4"},"root")," object fields are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatVersion")," - an integer representing the format version (will be incremented each time the serialization format changes)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp")," - a creation time of the report in YYYY-MM-DD HH:MM:SS format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unusedCode")," - an array of ",(0,o.kt)("a",{parentName:"li",href:"#the-unusedcode-object-fields-are"},"unused code issues"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "formatVersion": 2,\n  "timestamp": "2021-04-11 14:44:42",\n  "unusedCode": [\n    {\n      ...\n    },\n    {\n      ...\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"the-unusedcode-object-fields-are"},"The ",(0,o.kt)("strong",{parentName:"h4"},"unusedCode")," object fields are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," - a relative path of the unused file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"issues")," - an array of ",(0,o.kt)("a",{parentName:"li",href:"#the-issue-object-fields-are"},"issues")," detected in the target file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "path": "lib/src/some/file.dart",\n  "issues": [\n    ...\n  ],\n}\n')),(0,o.kt)("h4",{id:"the-issue-object-fields-are"},"The ",(0,o.kt)("strong",{parentName:"h4"},"issue")," object fields are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"declarationType")," - unused declaration type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"declarationName")," - unused declaration name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"offset")," - a zero-based offset of the class member location in the source"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"line")," - a zero-based line of the class member  location in the source"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"column")," - a zero-based column of class member  the location in the source")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "declarationType": "extension",\n  "declarationName": "StringX",\n  "offset": 156,\n  "line": 7,\n  "column": 1\n}\n')))}p.isMDXComponent=!0},2784:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/unused-code-console-report-edce3548ff4340f05609022297d06b8e.png"}}]);
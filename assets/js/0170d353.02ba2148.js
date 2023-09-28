"use strict";(self.webpackChunkflutterando_metrics_website=self.webpackChunkflutterando_metrics_website||[]).push([[2375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},l="Check unused files",i={unversionedId:"cli/check-unused-files",id:"cli/check-unused-files",title:"Check unused files",description:"Checks unused *.dart files. To execute the command, run",source:"@site/docs/cli/check-unused-files.md",sourceDirName:"cli",slug:"/cli/check-unused-files",permalink:"/flutterando_metrics/docs/cli/check-unused-files",draft:!1,editUrl:"https://github.com/Flutterando/flutterando_metrics/tree/master/website/docs/cli/check-unused-files.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Check unused code",permalink:"/flutterando_metrics/docs/cli/check-unused-code"},next:{title:"Check unused l10n",permalink:"/flutterando_metrics/docs/cli/check-unused-l10n"}},s={},u=[{value:"Suppressing the command",id:"suppressing-the-command",level:2},{value:"Monorepo support",id:"monorepo-support",level:2},{value:"Output example",id:"output-example",level:2},{value:"Console",id:"console",level:3},{value:"JSON",id:"json",level:3},{value:"The <strong>root</strong> object fields are",id:"the-root-object-fields-are",level:4},{value:"The <strong>unusedFiles</strong> object fields are",id:"the-unused-files-object-fields-are",level:4}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"check-unused-files"},"Check unused files"),(0,o.kt)("p",null,"Checks unused ",(0,o.kt)("inlineCode",{parentName:"p"},"*.dart")," files. To execute the command, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ dart run flutterando_metrics:metrics check-unused-files lib\n\n# or for a Flutter package\n$ flutter pub run flutterando_metrics:metrics check-unused-files lib\n")),(0,o.kt)("p",null,"Full command description:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Usage: metrics check-unused-files [arguments...] <directories>\n\n-h, --help                                       Print this usage information.\n\n\n-r, --reporter=<console>                         The format of the output of the analysis.\n                                                 [console (default), json]\n\n-c, --print-config                               Print resolved config.\n\n\n    --root-folder=<./>                           Root folder.\n                                                 (defaults to current directory)\n    --sdk-path=<directory-path>                  Dart SDK directory path.\n                                                 Should be provided only when you run the application as compiled executable(https://dart.dev/tools/dart-compile#exe) and automatic Dart SDK path detection fails.\n    --exclude=<{/**.g.dart,/**.freezed.dart}>    File paths in Glob syntax to be exclude.\n                                                 (defaults to "{/**.g.dart,/**.freezed.dart}")\n\n\n    --no-congratulate                            Don\'t show output even when there are no issues.\n\n\n    --[no-]fatal-unused                          Treat find unused file as fatal.\n\n-d, --[no-]delete-files                          Delete all unused files.\n')),(0,o.kt)("h2",{id:"suppressing-the-command"},"Suppressing the command"),(0,o.kt)("p",null,"In order to suppress the command add ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore_for_file: unused-files")," to the beginning of a file."),(0,o.kt)("h2",{id:"monorepo-support"},"Monorepo support"),(0,o.kt)("p",null,"By default the command treats all files that are exported from the package as used. To disable this behavior use ",(0,o.kt)("inlineCode",{parentName:"p"},"--monorepo")," flag. This might be useful when all the packages in your repository are only used within the repository and are not published to the pub."),(0,o.kt)("h2",{id:"output-example"},"Output example"),(0,o.kt)("h3",{id:"console"},"Console"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--reporter=console")," to enable this format."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Console",src:n(3613).Z,width:"1540",height:"136"})),(0,o.kt)("h3",{id:"json"},"JSON"),(0,o.kt)("p",null,"The reporter prints a single JSON object containing meta information and the unused file paths. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--reporter=json")," to enable this format."),(0,o.kt)("h4",{id:"the-root-object-fields-are"},"The ",(0,o.kt)("strong",{parentName:"h4"},"root")," object fields are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"formatVersion")," - an integer representing the format version (will be incremented each time the serialization format changes)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp")," - a creation time of the report in YYYY-MM-DD HH:MM:SS format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unusedFiles")," - an array of ",(0,o.kt)("a",{parentName:"li",href:"#the-unused-files-object-fields-are"},"unused files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"automaticallyDeleted")," - an indication of unused files being automatically deleted")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "formatVersion": 2,\n  "timestamp": "2021-04-11 14:44:42",\n  "unusedFiles": [\n    {\n      ...\n    },\n    {\n      ...\n    },\n    {\n      ...\n    }\n  ],\n  "automaticallyDeleted": false\n}\n')),(0,o.kt)("h4",{id:"the-unused-files-object-fields-are"},"The ",(0,o.kt)("strong",{parentName:"h4"},"unusedFiles")," object fields are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," - a relative path of the unused file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "path": "lib/src/some/file.dart",\n}\n')))}p.isMDXComponent=!0},3613:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/unused-files-console-report-8823699e3f7a3d1dcec8bec0f613b204.png"}}]);
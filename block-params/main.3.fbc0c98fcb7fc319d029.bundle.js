(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,a,t){t(14),t(38),e.exports=t(35)},32:function(e,a,t){var n={"./0-title.mdx":39,"./01-about.md":40,"./02-content.md":33,"./03-thanks.md":34};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=32},33:function(e,a,t){"use strict";t.r(a),t.d(a,"slides",(function(){return s})),t.d(a,"fusumaProps",(function(){return p})),t.d(a,"default",(function(){return b}));var n=t(2),r=t.n(n),l=t(1);function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s=[function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Block Params とは ?"),Object(l.a)("p",null,"Kotlin、Ruby、Groovy をインスパイアした構文の簡略化を実現する仕様です。",Object(l.a)("br",{parentName:"p"}),"\n","(最近だと SwiftUI で注目を浴びたように思います)"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"複数のパラメータをとる関数である場合"),Object(l.a)("p",null,"関数呼び出しで最後のパラメータが関数の場合、括弧を省略しブロックのみを渡すことができます。"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"fn(1) {\n  // ...\n}\n")),Object(l.a)("p",null,"👇"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"fn(1, () => {\n  // ...\n});\n")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"パラメータが単一の関数である場合"),Object(l.a)("p",null,"呼び出す対象が単一の関数のみを受け取るシグネチャである場合、括弧を丸ごと省略することができる。"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a {\n  // ...\n}\n")),Object(l.a)("p",null,"👇"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(() => {\n  // ...\n});\n")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"ネスト"),Object(l.a)("p",null,"Block Params のネストを有効にしたいが、現在まだ検討段階とのこと。"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"親のブロックを参照する例"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(1) {\n  ::b(2) {\n    // ...\n  }\n}\n")),Object(l.a)("p",null,"👇"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(1, __parent__ => {\n  __parent__.b(2, __parent__ => {\n    // ...\n  });\n});\n")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"ブロックへと引数を渡す例"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(1) do (foo) {\n  // ...\n}\n")),Object(l.a)("p",null,"👇"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(1, foo => {\n  // ...\n});\n")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"ユースケース"),Object(l.a)("p",null,"実際に使用した際のイメージを掴みやすくするサンプルコードを幾つか抜粋。"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,Object(l.a)("inlineCode",{parentName:"h3"},"Swift's defer")),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),'defer (100) {\n  // internally calls setTimeout(100)\n  alert("hello world");\n}\n')),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html#ID514"}),"Error Handling — The Swift Programming Language (Swift 5.1)")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,Object(l.a)("inlineCode",{parentName:"h3"},"C#'s foreach")),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"// works on arrays, maps and streams\nforeach (array) do (item) {\n  console.log(item);\n}\n")),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach-in"}),"C# foreach statement | Microsoft Docs")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,Object(l.a)("inlineCode",{parentName:"h3"},"kotlin's templates")),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),'let body = html {\n  ::head {\n    ::title("Hello World!") {}\n  }\n  ::body {\n    ::div {\n      ::span("Welcome to my Blog!") {}\n    }\n    for (page of ["contact", "guestbook"]) {\n      ::a({href: `${page}.html`}) { span(`${page}`) } {}\n    }\n  }\n}\n')),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://kotlinlang.org/docs/reference/type-safe-builders.html"}),"Type-Safe Builders - Kotlin Programming Language")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"完了値の扱い"),Object(l.a)("p",null,"Block Params が値を返す場合、",Object(l.a)("br",{parentName:"p"}),"\n","呼び出し元の関数へと値を返すことが望ましい (Like Kotlin) が、",Object(l.a)("br",{parentName:"p"}),"\n","どのようになるのかはまだ検討中。"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"let result = foreach (numbers) do (number) {\n  number * 2 // gets returned to foreach\n}\n")),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://github.com/tc39/proposal-do-expressions"}),"do expressions")," や ",Object(l.a)("a",o({parentName:"p"},{href:"https://github.com/rbuckton/proposal-statements-as-expressions#compound-statements"}),"statement-like expressions")," のセマンティクスを借りたものが",Object(l.a)("br",{parentName:"p"}),"\n","現実的な落とし所になりそう 🤔"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"その他の検討事項"),Object(l.a)("p",null,"既存の言語仕様との兼ね合いや、",Object(l.a)("br",{parentName:"p"}),"\n","理想状態と実現方法の落とし所が見つかっていない部分を",Object(l.a)("br",{parentName:"p"}),"\n","模索をしているように見えます。"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Scoping"),Object(l.a)("li",{parentName:"ul"},"Bindings"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"return")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"continue")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"break"))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"もっとたくさんのサンプルコードが見たい"),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://github.com/samuelgoto/proposal-block-params/tree/master/test"}),"test")," ディレクトリの中にあるコードが読んでいていて楽しいです。"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"所感"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"遊び心のある構文で個人的には好き"),Object(l.a)("li",{parentName:"ul"},"簡略化された構文の上に、ユースケースによっては実用性 (可読性含む) が感じられる"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"https://github.com/samuelgoto/proposal-block-params/commit/b7eb00a2d48c3d681d8277b44d6409c70d2f5de0"}),"2017/08/04")," に初めてまともなコミットがあってからも、まだまだ検討事項は多く見える")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Related Proposal & Discussion"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"https://github.com/rbuckton/proposal-statements-as-expressions"}),"Proposal to Explore ECMAScript Statements as Expressions")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"https://github.com/tc39/proposal-do-expressions"}),"ECMAScript proposal: do expressions")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"https://web.archive.org/web/20161123223104/http://wiki.ecmascript.org/doku.php?id=strawman:block_lambda_revival"}),"block lambdas")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"http://wirfs-brock.com/allen/files/jshistory/continue-break-lambda.pdf"}),"Allen's considerations on break and continue")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"http://yehudakatz.com/2012/01/10/javascript-needs-blocks/"}),"javascript needs blocks by @wycats"))))}],p=[{classes:"current"},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],u={slides:s},i="wrapper";function b(e){var a=e.components,t=c(e,["components"]);return Object(l.a)(i,o({},u,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("h2",null,"Block Params とは ?"),Object(l.a)("p",null,"Kotlin、Ruby、Groovy をインスパイアした構文の簡略化を実現する仕様です。",Object(l.a)("br",{parentName:"p"}),"\n","(最近だと SwiftUI で注目を浴びたように思います)"),Object(l.a)("hr",null),Object(l.a)("h2",null,"複数のパラメータをとる関数である場合"),Object(l.a)("p",null,"関数呼び出しで最後のパラメータが関数の場合、括弧を省略しブロックのみを渡すことができます。"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"fn(1) {\n  // ...\n}\n")),Object(l.a)("p",null,"👇"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"fn(1, () => {\n  // ...\n});\n")),Object(l.a)("hr",null),Object(l.a)("h2",null,"パラメータが単一の関数である場合"),Object(l.a)("p",null,"呼び出す対象が単一の関数のみを受け取るシグネチャである場合、括弧を丸ごと省略することができる。"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a {\n  // ...\n}\n")),Object(l.a)("p",null,"👇"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(() => {\n  // ...\n});\n")),Object(l.a)("hr",null),Object(l.a)("h2",null,"ネスト"),Object(l.a)("p",null,"Block Params のネストを有効にしたいが、現在まだ検討段階とのこと。"),Object(l.a)("hr",null),Object(l.a)("h3",null,"親のブロックを参照する例"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(1) {\n  ::b(2) {\n    // ...\n  }\n}\n")),Object(l.a)("p",null,"👇"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(1, __parent__ => {\n  __parent__.b(2, __parent__ => {\n    // ...\n  });\n});\n")),Object(l.a)("hr",null),Object(l.a)("h3",null,"ブロックへと引数を渡す例"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(1) do (foo) {\n  // ...\n}\n")),Object(l.a)("p",null,"👇"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"a(1, foo => {\n  // ...\n});\n")),Object(l.a)("hr",null),Object(l.a)("h2",null,"ユースケース"),Object(l.a)("p",null,"実際に使用した際のイメージを掴みやすくするサンプルコードを幾つか抜粋。"),Object(l.a)("hr",null),Object(l.a)("h3",null,Object(l.a)("inlineCode",{parentName:"h3"},"Swift's defer")),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),'defer (100) {\n  // internally calls setTimeout(100)\n  alert("hello world");\n}\n')),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html#ID514"}),"Error Handling — The Swift Programming Language (Swift 5.1)")),Object(l.a)("hr",null),Object(l.a)("h3",null,Object(l.a)("inlineCode",{parentName:"h3"},"C#'s foreach")),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"// works on arrays, maps and streams\nforeach (array) do (item) {\n  console.log(item);\n}\n")),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach-in"}),"C# foreach statement | Microsoft Docs")),Object(l.a)("hr",null),Object(l.a)("h3",null,Object(l.a)("inlineCode",{parentName:"h3"},"kotlin's templates")),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),'let body = html {\n  ::head {\n    ::title("Hello World!") {}\n  }\n  ::body {\n    ::div {\n      ::span("Welcome to my Blog!") {}\n    }\n    for (page of ["contact", "guestbook"]) {\n      ::a({href: `${page}.html`}) { span(`${page}`) } {}\n    }\n  }\n}\n')),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://kotlinlang.org/docs/reference/type-safe-builders.html"}),"Type-Safe Builders - Kotlin Programming Language")),Object(l.a)("hr",null),Object(l.a)("h2",null,"完了値の扱い"),Object(l.a)("p",null,"Block Params が値を返す場合、",Object(l.a)("br",{parentName:"p"}),"\n","呼び出し元の関数へと値を返すことが望ましい (Like Kotlin) が、",Object(l.a)("br",{parentName:"p"}),"\n","どのようになるのかはまだ検討中。"),Object(l.a)("pre",null,Object(l.a)("code",o({parentName:"pre"},{className:"language-javascript"}),"let result = foreach (numbers) do (number) {\n  number * 2 // gets returned to foreach\n}\n")),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://github.com/tc39/proposal-do-expressions"}),"do expressions")," や ",Object(l.a)("a",o({parentName:"p"},{href:"https://github.com/rbuckton/proposal-statements-as-expressions#compound-statements"}),"statement-like expressions")," のセマンティクスを借りたものが",Object(l.a)("br",{parentName:"p"}),"\n","現実的な落とし所になりそう 🤔"),Object(l.a)("hr",null),Object(l.a)("h2",null,"その他の検討事項"),Object(l.a)("p",null,"既存の言語仕様との兼ね合いや、",Object(l.a)("br",{parentName:"p"}),"\n","理想状態と実現方法の落とし所が見つかっていない部分を",Object(l.a)("br",{parentName:"p"}),"\n","模索をしているように見えます。"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Scoping"),Object(l.a)("li",{parentName:"ul"},"Bindings"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"return")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"continue")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"break"))),Object(l.a)("hr",null),Object(l.a)("h2",null,"もっとたくさんのサンプルコードが見たい"),Object(l.a)("p",null,Object(l.a)("a",o({parentName:"p"},{href:"https://github.com/samuelgoto/proposal-block-params/tree/master/test"}),"test")," ディレクトリの中にあるコードが読んでいていて楽しいです。"),Object(l.a)("hr",null),Object(l.a)("h2",null,"所感"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"遊び心のある構文で個人的には好き"),Object(l.a)("li",{parentName:"ul"},"簡略化された構文の上に、ユースケースによっては実用性 (可読性含む) が感じられる"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"https://github.com/samuelgoto/proposal-block-params/commit/b7eb00a2d48c3d681d8277b44d6409c70d2f5de0"}),"2017/08/04")," に初めてまともなコミットがあってからも、まだまだ検討事項は多く見える")),Object(l.a)("hr",null),Object(l.a)("h2",null,"Related Proposal & Discussion"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"https://github.com/rbuckton/proposal-statements-as-expressions"}),"Proposal to Explore ECMAScript Statements as Expressions")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"https://github.com/tc39/proposal-do-expressions"}),"ECMAScript proposal: do expressions")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"https://web.archive.org/web/20161123223104/http://wiki.ecmascript.org/doku.php?id=strawman:block_lambda_revival"}),"block lambdas")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"http://wirfs-brock.com/allen/files/jshistory/continue-break-lambda.pdf"}),"Allen's considerations on break and continue")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",o({parentName:"li"},{href:"http://yehudakatz.com/2012/01/10/javascript-needs-blocks/"}),"javascript needs blocks by @wycats"))))}b.isMDXComponent=!0},34:function(e,a,t){"use strict";t.r(a),t.d(a,"slides",(function(){return s})),t.d(a,"fusumaProps",(function(){return p})),t.d(a,"default",(function(){return b}));var n=t(2),r=t.n(n),l=t(1);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=[function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h1",null,"Thank you 🐶 !"))}],p=[{classes:"title"}],u={slides:s},i="wrapper";function b(e){var a=e.components,t=o(e,["components"]);return Object(l.a)(i,c({},u,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("h1",null,"Thank you 🐶 !"))}b.isMDXComponent=!0},36:function(e,a,t){var n=t(37);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};t(3)(n,r);n.locals&&(e.exports=n.locals)},37:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=function(e){var a=e.stage,t=e.proposal,n=e.description,l=e.repository;return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"content-left"},r.a.createElement("h1",null,t),r.a.createElement("p",{className:"text-intro"},n),r.a.createElement("ul",{className:"description"},r.a.createElement("li",null,r.a.createElement("strong",null,"Stage"),": ",a),r.a.createElement("li",null,r.a.createElement("strong",null,"Repository"),":"," ",r.a.createElement("a",{href:l.url,target:"_blank",rel:"noopener noreferrer"},l.name)),r.a.createElement("li",null,r.a.createElement("strong",null,"Date"),": 2019/10/09"),r.a.createElement("li",null,r.a.createElement("strong",null,"#tc39_study"),": TC39 Proposals LT 大会"))))},c=t(1);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,"slides",(function(){return p})),t.d(a,"fusumaProps",(function(){return u})),t.d(a,"default",(function(){return m}));var p=[function(e){return Object(c.a)(r.a.Fragment,null,Object(c.a)(l,(n="Title",(t="mdxType")in(a={stage:1,proposal:"Block Params",description:"A syntactical simplification in JS to enable DSLs",repository:{name:"samuelgoto/proposal-block-params",url:"https://github.com/samuelgoto/proposal-block-params"},mdxType:"Title"})?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a)));var a,t,n}],u=[{classes:"fullscreen title"}],i={slides:p},b="wrapper";function m(e){var a=e.components,t=s(e,["components"]);return Object(c.a)(b,o({},i,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)(l,{stage:1,proposal:"Block Params",description:"A syntactical simplification in JS to enable DSLs",repository:{name:"samuelgoto/proposal-block-params",url:"https://github.com/samuelgoto/proposal-block-params"},mdxType:"Title"}))}m.isMDXComponent=!0},40:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=function(){return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"cta"},r.a.createElement("div",{className:"number"},r.a.createElement("img",{src:"https://avatars0.githubusercontent.com/u/5393238?s=460&v=4",width:200,height:200})),r.a.createElement("div",{className:"benefit"},r.a.createElement("p",{className:"text-subtitle"},"About me"),r.a.createElement("h3",null,"わだまる / tsuyoshiwada"),r.a.createElement("p",{className:"text-intro"},"Web Developer (CyberAgent CATS).",r.a.createElement("br",null),"GitHub:"," ",r.a.createElement("a",{href:"https://github.com/tsuyoshiwada",target:"_blank",rel:"noopener noreferrer"},"tsuyoshiwada"),", Twitter:"," ",r.a.createElement("a",{href:"https://twitter.com/wadackel",target:"_blank",rel:"noopener noreferrer"},"@wadackel")))))},c=t(1);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(a,"slides",(function(){return p})),t.d(a,"fusumaProps",(function(){return u})),t.d(a,"default",(function(){return m}));var p=[function(e){return Object(c.a)(r.a.Fragment,null,Object(c.a)(l,(n="About",(t="mdxType")in(a={mdxType:"About"})?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n,a)));var a,t,n}],u=[{classes:"about"}],i={slides:p},b="wrapper";function m(e){var a=e.components,t=s(e,["components"]);return Object(c.a)(b,o({},i,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)(l,{mdxType:"About"}))}m.isMDXComponent=!0}},[[13,5,6]],[0,8]]);
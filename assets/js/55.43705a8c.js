(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{548:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("生活上常見的 Adapter 模式的例子好比是電源轉接頭等，把原本不相容的類別套至系統上或是需要的類別中。")]),t._v(" "),a("h2",{attrs:{id:"設計模式-adapter-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設計模式-adapter-模式"}},[t._v("#")]),t._v(" 設計模式：Adapter 模式")]),t._v(" "),a("p",[t._v("建立新的介面，讓不相容的介面可以一起合作。")]),t._v(" "),a("blockquote",[a("p",[t._v("《 DESSIGN PATTERNS 》：將一個類別的介面轉換成客戶希望的另一個介面。Adapter 模式使原本由於介面不相容而不能一起工作的類別可以一起工作。")])]),t._v(" "),a("h3",{attrs:{id:"多型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多型"}},[t._v("#")]),t._v(" 多型")]),t._v(" "),a("p",[t._v("在了解 Adapter 模式前，我們可以先來複習一下物件導向-多型(Polymorphism)的概念。")]),t._v(" "),a("blockquote",[a("p",[t._v("維基百科：多型指為不同資料類型的實體提供統一的介面。")])]),t._v(" "),a("p",[t._v("可以透過定義一個較為抽象的方法，讓子類別"),a("span",{staticStyle:{color:"red"}},[t._v("繼承")]),t._v("，子類別再透過各自的行為完善該方法的實作。")]),t._v(" "),a("h4",{attrs:{id:"範例程式碼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#範例程式碼"}},[t._v("#")]),t._v(" 範例程式碼")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    conosle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'move'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    conosle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'run'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 覆寫父類別 Animal.move() 的內容")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bird")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    conosle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fly'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 覆寫父類別 Animal.move() 的內容")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Dog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子類別 Dog 物件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bird "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bird")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子類別 Bird 物件")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("act")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("animal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因為多型，所以參數統一傳入該物件")]),t._v("\n  animal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因為多型及覆寫，所以實際執行的方法為子類別的方法內容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("act")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("act")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bird"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("h3",{attrs:{id:"現在問題來了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#現在問題來了"}},[t._v("#")]),t._v(" 現在問題來了？")]),t._v(" "),a("p",[t._v("加入新的動物 - 貓，要跟隔壁老王的貓一樣可以跳來跳去。當然，身為研發者就必須去看看老王的貓是怎麼跳的，發現其實老王是利用第三方開源工具來實現貓跳的動作：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第三方函數行為 其實跟我們要的新的動物 Cat 的 move() 行為是一致的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThirdCat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    conosl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jump'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("於是乎，因為時間的關係，沒辦法自己實作貓跳的動作，所以我們也用了這個第三方套件。但發現：")]),t._v(" "),a("ol",[a("li",[t._v("名稱甚至參數清單與我們的介面不同。")]),t._v(" "),a("li",[t._v("我們沒辦法從 Animal 衍生出來。")])]),t._v(" "),a("p",[t._v("也就是說我不能直接使用 ThirdCat，因為我想保持著 Animal 多型行為。而我們也不可能去改動第三方套件的東西，怕會有 side effect。")]),t._v(" "),a("p",[t._v("但需要的東西就在眼前，怎麼辦？")]),t._v(" "),a("h3",{attrs:{id:"想辦法轉換"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#想辦法轉換"}},[t._v("#")]),t._v(" 想辦法轉換")]),t._v(" "),a("p",[t._v("我們同樣建立一個新類別 Cat，繼承自 Animal，但在實作 move 方法時，我們在裡面對第三方套件的方法進行包裝，轉換成我們需要的介面形式。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 覆寫父類別 Animal.move() 的內容")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThirdCat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("move")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("可以看到我們，已經成功的把我們想要的方法從第三方套件轉換至我們的系統中。來看一下關係圖：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/LaF0DxD.png",alt:""}})]),t._v(" "),a("h5",{attrs:{id:"adapter-cat-類別包裝了-thirdcat-類別。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adapter-cat-類別包裝了-thirdcat-類別。"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("Adapter: Cat 類別包裝了 ThirdCat 類別。")])])]),t._v(" "),a("p",[t._v("透過使用 Adapter 模式，我們可以繼續使用 Animal。")]),t._v(" "),a("h3",{attrs:{id:"結構圖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#結構圖"}},[t._v("#")]),t._v(" 結構圖：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/iVbZZrn.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"adapter-特徵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adapter-特徵"}},[t._v("#")]),t._v(" Adapter 特徵：")]),t._v(" "),a("ol",[a("li",[t._v("將不相容於本身介面的系統或類別，透過 Adapter Pattern，把第三方套件的介面轉換成原有的介面。")]),t._v(" "),a("li",[t._v("大大的增加程式的復用性、靈活性。")]),t._v(" "),a("li",[t._v("減少對於核心程式碼的改動。")]),t._v(" "),a("li",[a("strong",[t._v("Adapter 最常見的用途就是保持多型")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"缺點"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺點"}},[t._v("#")]),t._v(" 缺點")]),t._v(" "),a("ol",[a("li",[t._v("過於使用會讓系統很混雜。")]),t._v(" "),a("li",[t._v("某些程式語言")])]),t._v(" "),a("h3",{attrs:{id:"使用時機"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用時機"}},[t._v("#")]),t._v(" 使用時機")]),t._v(" "),a("ul",[a("li",[t._v("需要使用既有的類別功能，但該類別的介面與目前使用的類別介面不符的時候。")]),t._v(" "),a("li",[t._v("需要使用多個類別的現有功能，而一一去繼承每個類別的介面並不實際的時候。")]),t._v(" "),a("li",[t._v("需要使用第三方函式庫的類別功能，而沒有原始碼且無法改動第三方函式庫的時候。")])]),t._v(" "),a("h2",{attrs:{id:"結論"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#結論"}},[t._v("#")]),t._v(" 結論")]),t._v(" "),a("p",[t._v("Adapter 模式是一個很常見的設計模式，他將一個或多個類別的介面轉換成我們需要類別所具備的另一個介面。建立新的類別，並包裝 (wrapping) 原有的類別方法，如此一來就可以得到相容於系統的類別或物件了。")]),t._v(" "),a("h5",{attrs:{id:"參考資源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#參考資源"}},[t._v("#")]),t._v(" 參考資源")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1694172",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计模式(8)[JS版]）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://rongli.gitbooks.io/design-pattern/content/chapter6.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chapter 6 適配器模式(Adapter Pattern)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://ithelp.ithome.com.tw/articles/10219666",target:"_blank",rel:"noopener noreferrer"}},[t._v("[Design Pattern] Adapter 配接器模式"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=2PKQtcJjYvc&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc&index=8&ab_channel=ChristopherOkhravi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Facade Pattern – Design Patterns (ep 9)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
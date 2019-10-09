<!-- classes: current -->

## Block Params とは ?

Kotlin、Ruby、Groovy をインスパイアした構文の簡略化を実現する仕様です。  
(最近だと SwiftUI で注目を浴びたように思います)

---

## 複数のパラメータをとる関数である場合

関数呼び出しで最後のパラメータが関数の場合、括弧を省略しブロックのみを渡すことができます。

```javascript
fn(1) {
  // ...
}
```

:point_down:

```javascript
fn(1, () => {
  // ...
});
```

---

## パラメータが単一の関数である場合

呼び出す対象が単一の関数のみを受け取るシグネチャである場合、括弧を丸ごと省略することができる。

```javascript
a {
  // ...
}
```

:point_down:

```javascript
a(() => {
  // ...
});
```

---

## ネスト

Block Params のネストを有効にしたいが、現在まだ検討段階とのこと。

---

### 親のブロックを参照する例

```javascript
a(1) {
  ::b(2) {
    // ...
  }
}
```

:point_down:

```javascript
a(1, __parent__ => {
  __parent__.b(2, __parent__ => {
    // ...
  });
});
```

---

### ブロックへと引数を渡す例

```javascript
a(1) do (foo) {
  // ...
}
```

:point_down:

```javascript
a(1, foo => {
  // ...
});
```

---

## ユースケース

実際に使用した際のイメージを掴みやすくするサンプルコードを幾つか抜粋。

---

### `Swift's defer`

```javascript
defer (100) {
  // internally calls setTimeout(100)
  alert("hello world");
}
```

[Error Handling — The Swift Programming Language (Swift 5.1)](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html#ID514)

---

### `C#'s foreach`

```javascript
// works on arrays, maps and streams
foreach (array) do (item) {
  console.log(item);
}
```

[C# foreach statement | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/foreach-in)

---

### `kotlin's templates`

```javascript
let body = html {
  ::head {
    ::title("Hello World!") {}
  }
  ::body {
    ::div {
      ::span("Welcome to my Blog!") {}
    }
    for (page of ["contact", "guestbook"]) {
      ::a({href: `${page}.html`}) { span(`${page}`) } {}
    }
  }
}
```

[Type-Safe Builders - Kotlin Programming Language](https://kotlinlang.org/docs/reference/type-safe-builders.html)

---

## 完了値の扱い

Block Params が値を返す場合、  
呼び出し元の関数へと値を返すことが望ましい (Like Kotlin) が、  
どのようになるのかはまだ検討中。

```javascript
let result = foreach (numbers) do (number) {
  number * 2 // gets returned to foreach
}
```

[do expressions](https://github.com/tc39/proposal-do-expressions) や [statement-like expressions](https://github.com/rbuckton/proposal-statements-as-expressions#compound-statements) のセマンティクスを借りたものが  
現実的な落とし所になりそう :thinking_face:

---

## その他の検討事項

既存の言語仕様との兼ね合いや、  
理想状態と実現方法の落とし所が見つかっていない部分を  
模索をしているように見えます。

- Scoping
- Bindings
- `return`
- `continue`
- `break`

---

## もっとたくさんのサンプルコードが見たい

[test](https://github.com/samuelgoto/proposal-block-params/tree/master/test) ディレクトリの中にあるコードが読んでいていて楽しいです。

---

## 所感

- 遊び心のある構文で個人的には好き
- 簡略化された構文の上に、ユースケースによっては実用性 (可読性含む) が感じられる
- [2017/08/04](https://github.com/samuelgoto/proposal-block-params/commit/b7eb00a2d48c3d681d8277b44d6409c70d2f5de0) に初めてまともなコミットがあってからも、まだまだ検討事項は多く見える

---

## Related Proposal & Discussion

- [Proposal to Explore ECMAScript Statements as Expressions](https://github.com/rbuckton/proposal-statements-as-expressions)
- [ECMAScript proposal: do expressions](https://github.com/tc39/proposal-do-expressions)
- [block lambdas](https://web.archive.org/web/20161123223104/http://wiki.ecmascript.org/doku.php?id=strawman:block_lambda_revival)
- [Allen's considerations on break and continue](http://wirfs-brock.com/allen/files/jshistory/continue-break-lambda.pdf)
- [javascript needs blocks by @wycats](http://yehudakatz.com/2012/01/10/javascript-needs-blocks/)

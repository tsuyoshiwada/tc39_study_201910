<!-- classes: current -->

## Wavy Dot とは ?

Pleasant Notation for Promise Pipelining  
Promise Pipelining に対する糖衣構文の提供

---

## Promise Pipelining :thinking_face: ?

---

_やや主題から外れるためざっくりと..._

リモートオブジェクトに対する操作の呼び出しをパイプライン化することが目的。

`Promise` のみ使う場合と異なり、非同期で受け取る値が返ってくる前に、  
計算済み (Handled) の値を得ることができたりします。  
(非同期の完了値を実際に受け取ろうとしたタイミングで初めて遅延が発生する)

---

## proposal-eventual-send

別途仕様の提案が以下に上がっているものとなります。

[tc39-transfer/proposal-eventual-send](https://github.com/tc39-transfer/proposal-eventual-send)

---

## `HandledPromise` の概要

実際に Promise Pipelining を実現するために  
`HandledPromise` コンストラクタが追加されます。

---

まず注目するのは `HandledPromise` コンストラクタが持つ Static Method。  
仕様に上がっている Static Method とそれらがどのような挙動を取るかの一覧です。

---

```javascript
HandledPromise.get(p, prop);
// -> p.then(t => t[prop])

HandledPromise.has(p, prop);
// -> p.then(t => prop in t)

HandledPromise.set(p, prop, value);
// -> p.then(t => (t[prop] = value))

HandledPromise.delete(p, prop);
// -> p.then(t => delete t[prop])

HandledPromise.applyFunction(p, args);
// -> p.then(t => t(...args))

HandledPromise.applyMethod(p, prop, args);
// -> p.then(t => t[prop](...args))
```

---

基本的な操作に加えて、非同期処理の結果を必要としない場合に  
コストを低減させるための `SendOnly` という  
バリエーションも提案に含まれています。

```javascript
HandledPromise.getSendOnly(p, prop);
HandledPromise.hasSendOnly(p, prop);
HandledPromise.setSendOnly(p, prop, value);
HandledPromise.deleteSendOnly(p, prop);
HandledPromise.applyFunctionSendOnly(p, args);
HandledPromise.applyMethodSendOnly(p, prop, args);
```

---

`HandledPromise` コンストラクタを初期化した場合、  
`Promise.prototype` と同様の結果を受け取ることになります。

`HandledPromise.prototype` に対しては  
Static Method と同じように  
`get`、`has` などの **トラップ** を実装することが可能です。

---

## 本題

冒頭で紹介した通り、  
Wavy Dot は Promise Pipelining を実現する [proposal-eventual-send](https://github.com/Agoric/proposal-eventual-send) (`HandledPromise`) を  
フォローアップするための構文仕様です。

---

## 構文

Wavy Dot は [Optional Chaining](https://tc39.es/proposal-optional-chaining/) や `.` と  
同じ優先順位を持つ中置演算子で `~.` と表現します。

| 構文                   | 内部メソッド                          |
| :--------------------- | :------------------------------------ |
| `p ~. name`            | `p.[[GetSend]]('name')`               |
| `p ~. name = value`    | `p.[[SetSend]]('name', value)`        |
| `delete p ~. name`     | `p.[[DeleteSend]]('name')`            |
| `p ~. (...args)`       | `p.[[ApplySend]](args)`               |
| `p ~. name(...args)`   | `p.[[ApplyMethodSend]]('name', args)` |
| `p ~. [prop]`          | `p.[[GetSend]](prop)`                 |
| `p ~. [prop] = value`  | `p.[[SetSend]](prop, value)`          |
| `delete p ~. [prop]`   | `p.[[DeleteSend]](prop)`              |
| `p ~. [prop](...args)` | `p.[[ApplyMethodSend]](prop, args)`   |

---

式の値が明らかに無視される構文コンテキストにおいては  
内部で各メソッドに対応した `SendOnly` を使用します。

---

## Prototype

用意されている [Babel playground](https://babeljs.io/repl/build/11698/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=B4PwdADgFAngNAAgF6II4EoBQowG0CWAurIkljicueFFgGYDcmmd24EbeRnECAvAgBunAoX5DMAEwCmAG2kAXaQhwcZ8pSvCjmOTAgQcA9EYQA5APYIAhgFcFFgLbWF-AMYIAztMfuLsiwA7BHxA7wAnVyCwXQN9BCMAKgQ6CytE03ZME3MrOwdnVw9vXzd_IJCw6Uj8aMwgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.6.2%2Bpr.10115&externalPlugins=babel-plugin-syntax-eventual-send%407.6.2) が分かりやすかったため幾つか抜粋。

---

```javascript
x~.p
```

:point_down:

```javascript
HandledPromise.get(x, "p");
```

---

```javascript
x~.p = v
```

:point_down:

```javascript
HandledPromise.set(x, "p", v);
```

---

```javascript
delete x~.p
```

:point_down:

```javascript
HandledPromise.delete(x, "p");
```

---

```javascript
x~.p(y, z, q)
```

:point_down:

```javascript
HandledPromise.applyMethod(x, "p", [y, z, q]);
```

---

```javascript
x~.()
```

:point_down:

```javascript
HandledPromise.apply(x, []);
```

---

## 所感

- 仕様内に TypeScript との競合を避けるための一文がある
- Wavy Dot 自体の仕様についての紹介ではなくて、ほとんどが `HandledPromise` の話になってしまいました
- `HandledPromise` のプリミティブな API を使って、便利で高速なライブラリ等が出てくるような気がして胸アツでした

---

## Related Proposal & Discussion

- [Babel playground](https://babeljs.io/repl/build/11698/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=B4PwdADgFAngNAAgF6II4EoBQowG0CWAurIkljicueFFgGYDcmmd24EbeRnECAvAgBunAoX5DMAEwCmAG2kAXaQhwcZ8pSvCjmOTAgQcA9EYQA5APYIAhgFcFFgLbWF-AMYIAztMfuLsiwA7BHxA7wAnVyCwXQN9BCMAKgQ6CytE03ZME3MrOwdnVw9vXzd_IJCw6Uj8aMwgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.6.2%2Bpr.10115&externalPlugins=babel-plugin-syntax-eventual-send%407.6.2)
- [tc39-transfer/proposal-eventual-send: TC39 Eventual Send proposal](https://github.com/tc39-transfer/proposal-eventual-send)
- [Eventual Send: JS Support for Promise Pipelining - YouTube](https://www.youtube.com/watch?v=UXR0O-CufTk&list=PLzDw4TTug5O0ywHrOz4VevVTYr6Kj_KtW)

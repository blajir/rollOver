# rollOver
ロールオーバーのシンプルなプラグイン
##使い方

    $('.hover').rollOver();

対象のDOM要素に対して、実行します。
## 必要とするもの
・jQuery 1.7以上
## プラグインオプション
```fade: true ```

画像の切り替えを`fadeOut` `fadeIn`で表示することができます。デフォルト値はfalse

***

```duration: 800 ```

fadeオプション時の画像の切り替わる時間を変更することができます。

***

```easing: 'linear' ```

fadeオプション時の画像の切り替わる速度を変更することができます。デフォルト値は`linear`

***

```suffix_replace: '_on'```

置き換える画像の接尾辞を変更することができます。デフォルト値は`_on`

***

```opacity: '0.75'```

ロールオーバーで画像を透過させるオプションです。デフォルト値はfalse。

## デモページ
[基本サンプル](https://blajir.github.io/rollOver/)

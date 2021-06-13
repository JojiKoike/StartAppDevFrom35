---
title: AtomのGolang開発用設定
date: 2018-01-01T02:52:24.000Z
category : 
description: AtomのGolang開発のための設定手順をご紹介いたします。
tags: ['Atom', 'Go', 'Golang']
thumbnail:
hero:
---

# 本レッスンのゴール
AtomのGo言語開発用設定を行い、簡単なプログラムを作成し動作確認する
# 想定環境
以下の環境を想定しています。

OS : MacOSX High Sierra （バージョン 10.13.4）
# 前提条件
<ul>
 	Golangがインストールされている事
 	Atomがインストールされている事
</ul>
<div class="attention">

各手順はそれぞれ、下記リンク先を参照してください。
<ul>
 	<a href="https://startappdevfrom35.com/godevenvformacos/">Golangインストール</a>手順
 	<a href="https://startappdevfrom35.com/atominstallformacos/">Atomインストール手順</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ul>
 	依存パッケージインストール
 	Atomの関連パッケージインストール
 	動作確認
</ul>
# インストール作業
## 1． 依存パッケージインストール
Atomのプラグイン側から必要とされるGoの依存パッケージ及び関連ツールを
以下のコマンドでインストールします。

```
$ go get golang.org/x/tools/cmd/goimports
$ go get github.com/nsf/gocode
$ go get github.com/rogpeppe/godef

$ brew install go-delve/delve/delve
```"

## 2． Atomの関連パッケージインストール
以下のコマンドで、Atomの関連パッケージをインストールします。

```
$ apm install go-plus
$ apm install godef 
```"

## 3． 動作確認
以下のコマンドでGOHOME/src下に適当なフォルダー（本記事ではtest）を作成します。

```
$ mkdir $GOPATH/src/test
```"

次にAtomを起動し、作成したフォルダーを開き、Goのソースファイル
（本記事では、ファイル名：test.go）を作成し、以下のコードを記述します。

[code language="python"]
package main

import &quot;fmt&quot;

func main() {
fmt.Println(&quot;Test&quot;)
}
[/code]

ファイルを保存すると、自動的にコードの整形、チェック、コンパイルが走ります。
特にエラーが無ければ、以下の様な画面になります。

<img class="alignnone wp-image-526 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/cf65a1e80c510215a22223c5507c7f5a-1024x604.png" alt="" width="747" height="441" />

最後に、Terminalから以下のコマンドを実行し、以下の様な出力が得られれば動作確認完了です。

```
$ go run test.go
Test
```"


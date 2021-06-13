---
title: Go開発環境構築（MacOS編）
date: 2018-01-01T00:00:38.000Z
category : 
description: Homebrewとgoenvを利用してMacOSXにGolangの開発環境を構築する手順をご紹介いたします。
tags: ['Go', 'goenv', 'Golang', 'Homebrew']
thumbnail:
hero:
---

# 本レッスンのゴール
Go言語の開発環境を構築し、バージョン出力が得られるまでをゴールとします。
# 想定環境
以下の環境を想定しています。

OS : MacOSX High Sierra （バージョン 10.13.4）
# 前提条件
<ul>
 	Homebrewがインストールされている事。
</ul>
<div class="attention">

HomeBrewのインストール方法については、以下のリンク先を参照して下さい。
<ul>
 	<a href="https://startappdevfrom35.com/homebrewinstall/">HomeBrewのインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ul>
 	goenvのインストール
 	Goのインストール
 	環境変数GOHOMEの設定
</ul>
# インストール作業
## 1． goenvのインストール
端末で以下のコマンドを実行します。

```
$ brew install goenv
```"

次に、~/.bash_profileに以下を追加します。

```
# For goenv
export PATH=&quot;$HOME/.goenv/bin:$PATH&quot;
eval &quot;$(goenv init -)&quot;
```"

<div class="point">~/.bash_profileへの変更を即反映させるには、source ~/.bash_profile を実行します。</div>
## 2． Goのインストール
以下のコマンドで、インストール可能なGoのバージョンを確認します。

```
$ goenv install -l
  ....
 1.9.5
 1.10.0
 1.10beta2
 1.10rc1
 1.10rc2
 1.10.1
```"

今回は、2018年5月11日現在の最新安定板1.10.1をインストールします。
以下のコマンドでインストールし、有効なバージョンを設定します。

```
$ goenv install 1.10.1 
$ goenv global 1.10.1
```"

適切なバージョンのGoが機能するかを以下のコマンドで確認します。

```
$ go version
```"

上記のコマンドで、次のように出力されればインストール成功です。

```
go version go1.10.1 darwin/amd64
```"

## 3. 環境変数GOHOMEの設定
Go言語では、<span class="highlight">ワークスペース</span>というディレクトリ下で開発作業を行ないます。
このディレクトリ下に、ソースコード、外部ライブラリー、コンパイル済み実行ファイルなど、
開発に必要なものから出力まで、全てが格納されます。
ワークスペースはどこでもいいのですが、大体、$HOME/goが一般的なようです。
本サイトでも、特別な指定がない限り、$HOME/goをワークスペースに指定します。
まず、以下のコマンドで、$HOME直下に、goディレクトリを作成します。

```
$ mkdir $HOME/go
```"

次に、~/.bash_profileに以下を追加します。

```
# For golang
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```"

これで、Goの開発環境構築は完了です。

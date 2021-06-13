---
title: anyenvとgoenvによる、複数バージョン共存、切替可能なGolang開発環境の構築（MacOS編）
date: 2019-12-31T07:14:45.000Z
category: Go
description: goenvによる複数バージョン共存、切替可能なGolang開発環境構築手順をご紹介します。goenv自体は、anyenvにより導入します。
tags: ["anyenv", "goenv", "Golang"]
thumbnail: "./Go-Logo_Blue.png"
hero: "./Go-Logo_Blue.png"
---

# 本レッスンのゴール

- goenv による複数バージョン共存、切替可能な Golang 開発環境構築と、その正常動作確認

# 想定環境

以下の環境を想定しています。

- OS : MacOSX Mojave （バージョン 10.14.6）

# 前提条件

- anyenv がインストールされている事。

<attention>

anyenv のインストール方法については、以下のリンク先を参照して下さい。

<ul>
 	<a href="https://startappdevfrom35.com/anyenv_install/">anyenvによる複数言語開発環境構築の準備</a>
</ul>
</attention>

# 全体の流れ

以下の流れで進めます。

1.  goenv のインストール
2.  Go のインストール
3.  環境変数 GOHOME の設定

<adsense></adsense>

# セットアップ

## 1. goenv のインストール

端末で以下のコマンドを実行します。

```bash
$ anyenv install goenv
```

以下のコマンドで、バージョンコードが出力されれば、goenv のインストールは成功です。

```bash

$ goenv --version
goenv 2.0.0beta11

```

## 2． Go のインストール

以下のコマンドで、インストール可能な Go のバージョンを確認します。

```bash

$ goenv install -l
Available versions:
1.2.2
1.3.0
....
1.12.1
1.12.2
1.12.3
1.12.4
1.12.5
1.12.6
1.12.7
1.12.8
1.12.9
1.13.0
1.13beta1
1.13rc1
1.13rc2
```

今回は、2019 年 9 月 23 日現在の最新安定板 1.13.0 をインストールします。<br/>
以下のコマンドでインストールし、システム全体で、デフォルトで使用するバージョンを設定します。

```bash

$ goenv install 1.13.0
$ goenv global 1.13.0
$ goenv version
1.13.0 (set by /Users/hogehoge/.anyenv/envs/goenv/version)

```

次に、goenv で導入し、設定したバージョンの go がデフォルトで使用される事を、以下のコマンドで確認します。

```bash

$ which go
/Users/hogehoge/.anyenv/envs/goenv/shims/go
$ go version
go version go1.13 darwin/amd64

```

<attention>
which go の出力結果が/usr/bin/go等になっている場合は、
anyenvの設定に失敗している可能性がありますので、<br/>
<a href="https://startappdevfrom35.com/anyenv_install/">こちら（anyenvによる複数言語環境構築の準備）</a>
を参考に、環境変数設定周りを見直してください。</attention>

ここまでで、Go のインストールは完了です。

## 3. 環境変数 GOHOME の設定

Go 言語では、<highlight>ワークスペース</highlight>というディレクトリ下で開発作業を行ないます。
このディレクトリ下に、ソースコード、外部ライブラリー、コンパイル済み実行ファイルなど、
開発に必要なものから出力まで、全てが格納されます。
ワークスペースはどこでもいいのですが、大体、$HOME/goが一般的なようです。
本サイトでも、特別な指定がない限り、$HOME/go をワークスペースに指定します。
まず、以下のコマンドで、$HOME 直下に、go ディレクトリを作成します。

```bash

$ mkdir $HOME/go
```

次に、~/.bash_profile に、以下のように環境変数 GOHOME を追記します。

<div class="attention">goenv 2.0.0 beta6以降では、goenv側でGOPATHを自動設定します。（デフォルトは~/go）
これを無効化し、環境変数で設定したGOPATHの方を有効にするために、
export GOENV_DISABLE_GOPATH=1を加えます。以下の記載例は、goenv 2.0.0 beta6以降の想定です。</div>

```bash
# For golang

export GOENV_DISABLE_GOPATH=1
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

```

これで、anyenv と goenv による Golang 開発環境の構築は完了です。

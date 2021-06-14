---
title: Go開発環境構築（MacOS編）
date: 2018-01-01T00:00:38.000Z
category: Golang
description: Homebrewとgoenvを利用してMacOSXにGolangの開発環境を構築する手順をご紹介いたします。
tags: ["Go", "goenv", "Golang", "Homebrew"]
thumbnail: "./Go-Logo_Blue.png"
hero: "./Go-Logo_Blue.png"
---

# 本レッスンのゴール

- Go 言語の開発環境を構築し、バージョン出力が得られるまでをゴールとします。

# 想定環境

以下の環境を想定しています。

- OS : MacOSX High Sierra （バージョン 10.13.4）

# 前提条件

- Homebrew がインストールされている事。

<attention>

HomeBrew のインストール方法については、以下のリンク先を参照して下さい。

- <a href="https://startappdevfrom35.com/homebrewinstall/">HomeBrew のインストール</a>

</attention>

# 全体の流れ

以下の流れで進めます。

1. goenv のインストール
2. Go のインストール
3. 環境変数 GOHOME の設定

# インストール作業

## 1． goenv のインストール

端末で以下のコマンドを実行します。

```bash
$ brew install goenv
```

次に、~/.bash_profile に以下を追加します。

```bash

# For goenv

export PATH=&quot;$HOME/.goenv/bin:$PATH&quot;
eval &quot;$(goenv init -)&quot;

```

<point>
~/.bash_profileへの変更を即反映させるには、

```bash
source ~/.bash_profile
```

を実行します。

</point>

## 2． Go のインストール

以下のコマンドで、インストール可能な Go のバージョンを確認します。

```bash

$ goenv install -l
....
1.9.5
1.10.0
1.10beta2
1.10rc1
1.10rc2
1.10.1

```

今回は、2018 年 5 月 11 日現在の最新安定板 1.10.1 をインストールします。
以下のコマンドでインストールし、有効なバージョンを設定します。

```bash

$ goenv install 1.10.1
$ goenv global 1.10.1

```

適切なバージョンの Go が機能するかを以下のコマンドで確認します。

```bash

$ go version

```

上記のコマンドで、次のように出力されればインストール成功です。

```bash

go version go1.10.1 darwin/amd64

```

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

次に、~/.bash_profile に以下を追加します。

```bash

# For golang

export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

```

これで、Go の開発環境構築は完了です。

---
title: jenvによる複数バージョン共存、切り替え可能なJava開発環境の構築 (MacOS編)
date: 2019-12-30T11:22:30.000Z
category: Java
description: jenvを用いた、複数のバージョンのJava開発環境（JDK：Java Development Kit）の共存とバージョン切替可能なJava開発環境構築手順をご紹介します。
tags: ["anyenv", "Java", "jdk", "jenv"]
thumbnail: "./JavaLogo.png"
hero: "./JavaLogo.png"
---

# 本レッスンのゴール

複数バージョンの Java 開発環境（JDK : Java Development KIt)をインストールし、
デフォルトで使用するバージョンを切り替えて動作を確認する

# 想定環境

以下の環境を想定しています。

- OS : MacOSX Mojave （バージョン 10.14.6）

# 前提条件

- anyenv がインストールされている事。
-     brewがインストールされている事。

<attention>

各インストール方法については、以下のリンク先を参照して下さい。

- <a href="https://startappdevfrom35.com/anyenv_install/" target="_blank" rel="noopener noreferrer">anyenv のインストール</a>
- <a href="https://startappdevfrom35.com/homebrewinstall/">Homebrew のインストール</a>

</attention>

# 全体の流れ

以下の流れで進めます。

1. jenv のインストール
2. JDK のインストール
3. jenv の設定
4. 動作確認

# インストール作業

## 1． jenv のインストール

複数バージョンの共存、切替のために、jenv を導入します。端末で以下のコマンドを実行します。

```bash
$ anyenv install jenv
```

以下のコマンドでバージョンコードが出力されれば、jenv のインストールは成功です。

```bash

$ jenv --version
jenv 0.5.2-10-g5a20be6

```

## 2． JDK のインストール

pyenv 等と異なり、<highlight>jenv は言語環境のダウンロード、インストール機能を持たない</highlight>為、
JDK のインストールについては brew で行います。
ここでは、Ver.8 系最新と、Ver.12 系最新をそれぞれインストールします。
なお、JDK は Oracle をはじめとして様々な提供元がありますが、
無償かつ比較的ポピュラーと思われる OpenJDK をインストールします。

以下のコマンドでまず、Ver.8 系最新をインストールします。

```bash

$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8
....
Password: ログインパスワードを入力
adoptopenjdk8 was successfully installed!

```

続けて、Ver.12 系最新を以下のコマンドでインストールします。

```bash

$ brew cask install adoptopenjdk12
....
Password: ログインパスワードを入力
adoptopenjdk12 was successfully installed!

```

ここまでで、JDK のインストールは完了しました。

## 3． jenv の設定

まず、先程インストールした JDK を jenv に認識させる設定をします。

以下のコマンドで、各バージョンのディレクトリ名を確認します。

```bash

$ ls /Library/Java/JavaVirtualMachines
adoptopenjdk-12.jdk adoptopenjdk-8.jdk

```

それぞれのバージョンのディレクトリ名が確認できたところで、
以下のコマンドで、インストールした JDK を jenv に認識させます。

```bash

$ jenv add /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
1.8 added
1.8.0.222 added
openjdk64-1.8.0.222 added
$ jend add /Library/Java/JavaVirtualMachines/adoptopenjdk-12.jdk/Contents/Home
12.0 added
12.0.1 added
openjdk64-12.0.1 added

```

<attention>
環境により若干の出力の違いがあります。
</attention>

以下のコマンドで、正常に認識されている事を確認します。

```bash

$ jenv versions
system (set by /Users/hogehoge/.anyenv/envs/jenv/version)
1.8
1.8.0.222
12.0
12.0.1
openjdk64-1.8.0.222
openjdk64-12.0.1

```

以下のコマンドでデフォルトのバージョンを設定します。

```bash
$ jenv global 1.8.0.222
$ jenv versions
system
1.8
1.8.0.222 (set by /Users/hogehoge/.anyenv/envs/jenv/version)
12.0
12.0.1
openjdk64-1.8.0.222
openjdk64-12.0.1
```

## 4． 動作確認

最後に、以下のコマンドで、jenv で設定した java が呼ばれる事を確認します。

```bash
$ which java
/Users/hogehoge/.anyenv/envs/jenv/shims/java
$ java -version
openjdk version &quot;1.8.0_222&quot;
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_222-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.222-b10, mixed mode)

```

以上で、jenv による Java 環境構築の完了です。

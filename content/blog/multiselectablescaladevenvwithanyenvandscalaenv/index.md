---
title: anyenvとscalaenvで構築する、複数バージョン共存、切替可能なScala開発環境構築
date: 2019-01-02T00:56:59.000Z
category:
description: scalaenvを用いて、複数バージョンが共存、切替可能なScala開発環境の構築手順をご紹介します。scalaenvの導入はanyenvを用います。
tags: ["anyenv", "Scala", "scalaenv"]
thumbnail:
hero:
---

# 本レッスンのゴール

scalaenv による複数バージョン共存、切替可能な Scala (JVM 上で稼働するバージョン）開発環境構築と、その正常動作確認

<div class="attention">ScalaはJVM(Java Virtual Machine)で稼働するバージョンの他、Node.js環境下で動作するScalaJS, LLVM上で動作するScalaNative等の種類があります。本記事では、JVMで稼働するScalaを扱う事とします。</div>
# 想定環境
以下の環境を想定しています。

OS : MacOSX Mojave （バージョン 10.14.6）

# 前提条件

<ul>
 	anyenvがインストールされている事。
 	Javaがインストールされている事。
</ul>
<div class="attention">

anyenv 及び Java インストール方法については、以下のリンク先を参照して下さい。

<ul>
 	<a href="https://startappdevfrom35.com/anyenv_install/">anyenvによる複数言語開発環境構築の準備</a>
 	<a href="https://startappdevfrom35.com/multiversionjavadevenv/">jenvによる複数バージョン共存、切り替え可能なJava開発環境の構築 (MacOS編)</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	scalaenvのインストール
 	Scalaのインストール
 	動作確認
</ol>
# インストール作業
## 1． scalaenvのインストール
端末で以下のコマンドを実行します。

````
$ anyenv install scalaenv
```"

以下のコマンドで、バージョンコードが出力されれば、scalaenvのインストールは成功です。

````

$ scalaenv --version
scalaenv 0.1.4

```"

## 2． Scalaのインストール
以下のコマンドで、インストール可能なScalaのバージョンを確認します。

```

$ scalaenv install -l
Available versions:
dotty-0.1.2-RC1
dotty-0.2.0-RC1
dotty-0.3.0-RC1
....
scala-2.12.3
scala-2.12.4
scala-2.12.5
scala-2.12.6
scala-2.12.7
scala-2.12.8
scala-2.13.0

```"

今回は、2019年9月24日現在のscalaenvでインストール可能な最新安定板scala-2.13.0をインストールします。
以下のコマンドでインストールし、システム全体で、デフォルトで使用するバージョンを設定します。

```

$ scalaenv install scala-2.13.0
$ scalaenv global scala-2.13.0
$ scalaenv version
scala-2.13.0 (set by /Users/hogehoge/.anyenv/envs/scalaenv/version)

```"

次に、scalaenvで導入し、設定したバージョンのScalaがデフォルトで使用される事を、以下のコマンドで確認します。

```

$ which scala
/Users/hogehoge/.anyenv/envs/scalaenv/shims/scala
$ scala --version
Scala code runner version 2.13.0 -- Copyright 2002-2019, LAMP/EPFL and Lightbend, Inc.

```"

<div class="attention">which scala の出力結果が/usr/bin/scala等になっている場合は、
anyenvの設定に失敗している可能性がありますので、
<a href="https://startappdevfrom35.com/anyenv_install/">anyenvによる複数言語環境構築の準備</a>
を参考に、環境変数設定周りを見直してください。</div>
<div>ここまでで、scalaのインストールは完了です。</div>
## 3. 動作確認
以下のコマンド、Scalaのインタラクティブシェル（REPL）を立ち上げます。

```

$ scala
Welcome to Scala 2.13.0 (OpenJDK 64-Bit Server VM, Java 1.8.0_222).
Type in expressions for evaluation. Or try :help.
scala&gt;

```"

プロンプトに続けて、以下のようにコードを入力し、正常に出力されれば、動作確認は完了です。

```

scala&gt; val msg: String = &quot;Hello world&quot;
msg: String = Hello, World
scala&gt; println(msg)
Hello, World

```"

これで、anyenvとscalaenvによるScala開発環境の構築は完了です。
```

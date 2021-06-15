---
title: anyenvとsbtenvで、複数バージョンのsbtを共存、切替可能な環境を構築する。
date: 2019-01-03T00:58:20.000Z
category: SBT
description: sbtenvで複数バージョンのsbtが共存、切替可能な環境を構築する手順をご紹介します。
tags: ["anyenv", "sbt", "sbtenv"]
thumbnail: "./sbt-logo.png"
hero: "./sbt-logo.png"
---

# 本レッスンのゴール

- sbtenv で複数バージョンの sbt が共存、切替可能な環境を構築し、動作確認を行う。

<point>sbt とは Simple Build Tool（Scala Build Tool ではない）の略で、テスト、パッケージング、依存性解決等を行うビルドツールの一つです。依存性定義等のスクリプト（build.sbt ファイル）は Scala で記述します。Java における Gradle, Maven のようなものです。Scala での開発においては欠かせないツールですので、Scala での開発を行う場合は是非いれておきましょう。</point>

# 想定環境

以下の環境を想定しています。

- OS : MacOSX Mojave （バージョン 10.14.6）

# 前提条件

- anyenv がインストールされている事。
- Scala がインストールされている事。

<attention>

anyenv 及び Scala のインストール方法については、以下のリンク先を参照して下さい。

- <a href="https://startappdevfrom35.com/anyenv_install/">anyenv による複数言語開発環境構築の準備</a>
- <a href="https://startappdevfrom35.com/multiselectablescaladevenvwithanyenvandscalaenv/">anyenv と scalaenv で構築する、複数バージョン共存、切替可能な Scala 開発環境構築</a>

</attention>

# 全体の流れ

以下の流れで進めます。

1.  sbtenv のインストール
2.  sbt のインストール
3.  動作確認

<adsense></adsense>

# インストール作業

## 1． sbtenv のインストール

端末で以下のコマンドを実行します。

```bash
$ anyenv install sbtenv
```

以下のコマンドで、バージョンコードが出力されれば、sbtenv のインストールは成功です。

```bash

$ sbtenv --version
sbtenv 0.0.15-11-gc9e96e6

```

## 2． sbt のインストール

以下のコマンドで、インストール可能な sbt のバージョンを確認します。

```bash

$ sbtenv install -l
All available versions:
sbt-0.12.1
sbt-0.12.2
sbt-0.12.3
sbt-0.12.4
...
sbt-1.1.1
sbt-1.2.0
sbt-1.2.1
sbt-1.2.3
sbt-1.2.4
sbt-1.2.6
sbt-1.2.7
sbt-1.2.8

```

今回は、2019 年 9 月 26 日現在の sbtenv でインストール可能な最新安定板 sbt-1.2.8 をインストールします。
以下のコマンドでインストールし、システム全体で、デフォルトで使用するバージョンを設定します。

```bash

$ sbtenv install sbt-1.2.8
$ sbtenv global sbt-1.2.8
$ sbtenv version
sbt-1.2.8 (set by /Users/hogehoge/.anyenv/envs/sbtenv/version)

```

次に、sbt で導入した sbt がデフォルトで使用される事を、以下のコマンドで確認します。

```bash

$ which sbt
/Users/hogehoge/.anyenv/envs/sbtenv/shims/sbt

```

<attention>which scala の出力結果が/usr/bin/sbt 等になっている場合は、
anyenv の設定に失敗している可能性がありますので、
<a href="https://startappdevfrom35.com/anyenv_install/">anyenv による複数言語環境構築の準備</a>
を参考に、環境変数設定周りを見直してください。</attention>
ここまでで、sbt のインストールは完了です。

## 3. 動作確認

以下のコマンド、sbt のインタラクティブシェルを立ち上げます。

```bash

$ sbt
[info] Updated file /Users/hogehoge/project/build.properties: set sbt.version to 1.2.8
[info] Loading settings for project global-plugins from idea.sbt ...
[info] Loading global plugins from /Users/hogehoge/.sbt/1.0/plugins
[info] Loading project definition from /Users/hogehoge/project
[info] Updating ProjectRef(uri(&quot;file:/Users/hogehoge/project/&quot;), &quot;hogehoge-build&quot;)...
[info] Done updating.
[info] Set current project to hogehoge (in build file:/Users/hogehoge/)
[info] sbt server started at local:///Users/hogehoge/.sbt/1.0/server/f9e87e5646c3834945a2/sock

```

プロンプトに続けて、以下のようにコードを入力し、正常に出力されれば、動作確認は完了です。

```bash

sbt:hogehoge&gt;about
[info] This is sbt 1.2.8
[info] The current project is ProjectRef(uri(&quot;file:/Users/hogehoge/&quot;), &quot;hogehoge&quot;) 0.1.0-SNAPSHOT
[info] The current project is built against Scala 2.12.7
[info] Available Plugins
[info] - sbt.ScriptedPlugin
[info] - sbt.plugins.CorePlugin
[info] - sbt.plugins.Giter8TemplatePlugin
[info] - sbt.plugins.IvyPlugin
[info] - sbt.plugins.JUnitXmlReportPlugin
[info] - sbt.plugins.JvmPlugin
[info] - sbt.plugins.SbtPlugin
[info] sbt, sbt plugins, and build definitions are using Scala 2.12.7

```

これで、anyenv と sbtenv による sbt 開発環境の構築は完了です。

---
title: Node.js開発環境構築（Windows編）
date: 2018-01-02T23:20:46.000Z
category: node.js
description: Chocolateyを用いて、バージョン選択可能なNode.js開発環境をWindowsに構築する手順をご紹介いたします。
tags: ["Chocolatey", "Node.js", "Windows"]
thumbnail: "./1280px-Node.js_logo.svg.png"
hero: "./1280px-Node.js_logo.svg.png"
---

# 本レッスンのゴール

- 様々なバージョンが共存可能な Node.js 開発環境を構築し、バージョン出力が得られるまでをゴールとします。

# 想定環境

以下の環境を想定しています。

- OS : Windows 10 64bit (Fall Creators Update 適用済）

# 前提条件

- Chocolatey がインストールされている事。

<attention>

Chocolatey のインストール方法については、以下のリンク先を参照して下さい。

- <a href="https://startappdevfrom35.com/chocolateyinstall/">Chocolatey のインストール</a>

</attention>

# 全体の流れ

以下の流れで進めます。

1. nodist のインストール
2. Node.js のインストール

# 作業

## 1. nodist のインストール

<highlight>管理者として実行する</highlight>で PowerShell を起動し、以下のコマンドを実行します。

```powershell
choco install nodist
```

途中、以下のような質問があるので、Y と入力してリターンキーを押下します。

```powershell
Do you want to run the script?([Y]es/[N]o/[P]rint): Y
```

しばらくすると、インストーラーのダウンロードに続いて、インストールが行われます。
以下のような出力があれば、インストール完了です。

```powershell
The install of nodist was successful.
Software installed as 'exe', install location is likely default.
```

## 2. Node.js のインストール

続いて以下のコマンドを実行して、インストール可能な Node.js のバージョンのリストを取得します。

```powershell
nodist dist
```

次に、以下のコマンドを実行して、本記事執筆時点（2018 年 4 月 17 日）の

LTS 最新版(v.8.11.1)をインストールします。

```powershell
nodist + 8.11.1
```

次に、インストールされたバージョンの Node.js を以下のコマンドで有効化します。

```powershell
nodist 8.11.1
```

最後に、以下のコマンドで、現在有効な Node.js のバージョンを確認します。

```powershell
node -v
```

以下のように出力されたら、インストール完了です。

```powershell
v8.11.1
```

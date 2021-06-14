---
title: Python開発環境構築（Windows編）
date: 2018-01-07T00:00:13.000Z
category: Python
description: Chocolateyを用いてPython開発環境をWindowsに構築する手順をご紹介いたします。
tags: ["choco", "Python", "Windows"]
thumbnail: "./python-logo-e1524649366544.png"
hero: "./python-logo-e1524649366544.png"
---

# 本レッスンのゴール

Python3 系の開発環境を構築し、バージョン出力が得られるまでをゴールとします。

# 想定環境

以下の環境を想定しています。

- OS: Windows 10 64bit (Fall Creators Update 適用済み）

# 前提条件

- Chocolatey がインストールされている事。

<attention>

インストール方法は、以下をご参照ください。

-     <a href="https://startappdevfrom35.com/chocolateyinstall/">Chocolateyのインストール</a>

</attention>

# 全体の流れ

以下の流れで進めます。

- Python のインストール
- 動作確認

# 作業

## 1. Python のインストール

「<span class="highlight">管理者として実行する</span>」で PowerShell を起動し、以下のコマンドを実行します。

```powershell
choco install python
```

途中、以下のような質問があるので、Y と入力してリターンキーを押下します。

```powershell
Do you want to run the script?([Y]es/[N]o/[P]rint): Y
```

以下のような出力があれば、Python のインストールは成功です。

```powershell
The install of python3 was successful.
Software installed as 'exe', install location is likely default.
```

## 2. 動作確認

PowerShell を再起動し、以下のコマンドを実行します。

```powershell
python --version
```

以下のように、インストールされた Python のバージョンが出力されれば、無事動作確認完了です。

```powershell
Python 3.6.5
```

<attention>出力される Python のバージョンは一例です。実施した時の安定最新版がインストールされます。</attention>

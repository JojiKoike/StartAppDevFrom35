---
title: Python開発環境構築（Windows編）
date: 2018-01-07T00:00:13.000Z
category : 
description: Chocolateyを用いてPython開発環境をWindowsに構築する手順をご紹介いたします。
tags: ['choco', 'Python', 'Windows']
thumbnail:
hero:
---

# 本レッスンのゴール
Python3系の開発環境を構築し、バージョン出力が得られるまでをゴールとします。
# 想定環境
以下の環境を想定しています。
<ul>
 	OS: Windows 10 64bit (Fall Creators Update適用済み）
</ul>
# 前提条件
<ul>
 	Chocolateyがインストールされている事。
</ul>
<div class="attention">

インストール方法は、以下をご参照ください。
<ul>
 	<a href="https://startappdevfrom35.com/chocolateyinstall/">Chocolateyのインストール
</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ul>
 	Pythonのインストール
 	動作確認
</ul>
# 作業
## 1. Pythonのインストール
「<span class="highlight">管理者として実行する</span>」でPowerShellを起動し、以下のコマンドを実行します。

[powershell]
choco install python
[/powershell]

途中、以下のような質問があるので、Yと入力してリターンキーを押下します。

[powershell]
Do you want to run the script?([Y]es/[N]o/[P]rint): Y
[/powershell]

以下のような出力があれば、Pythonのインストールは成功です。

[powershell]
 The install of python3 was successful.
  Software installed as 'exe', install location is likely default.
[/powershell]

## 2. 動作確認
PowerShellを再起動し、以下のコマンドを実行します。

[powershell]
python --version
[/powershell]

以下のように、インストールされたPythonのバージョンが出力されれば、無事動作確認完了です。

[powershell]
Python 3.6.5
[/powershell]

<div class="point">出力されるPythonのバージョンは一例です。実施した時の安定最新版がインストールされます。</div>

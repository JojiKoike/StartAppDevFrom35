---
title: Node.js開発環境構築（Windows編）
date: 2018-01-02T23:20:46.000Z
category : 
description: Chocolateyを用いて、バージョン選択可能なNode.js開発環境をWindowsに構築する手順をご紹介いたします。
tags: ['Chocolatey', 'Node.js', 'Windows']
thumbnail:
hero:
---

# 本レッスンのゴール
様々なバージョンが共存可能なNode.js開発環境を構築し、バージョン出力が得られるまでをゴールとします。
# 想定環境
以下の環境を想定しています。
<ul>
 	OS : Windows 10 64bit (Fall Creators Update適用済）
</ul>
# 前提条件
<ul>
 	Chocolateyがインストールされている事。
</ul>
<div class="attention">

Chocolateyのインストール方法については、以下のリンク先を参照して下さい。
<ul>
 	<a href="https://startappdevfrom35.com/chocolateyinstall/">Chocolateyのインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ul>
 	nodistのインストール
 	Node.jsのインストール
</ul>
# 作業
## 1. nodistのインストール
「管理者として実行する」でPowerShellを起動し、以下のコマンドを実行します。

[powershell]
choco install nodist
[/powershell]


途中、以下のような質問があるので、Yと入力してリターンキーを押下します。

[powershell] 
Do you want to run the script?([Y]es/[N]o/[P]rint): Y 
[/powershell]

しばらくすると、インストーラーのダウンロードに続いて、インストールが行われます。
以下のような出力があれば、インストール完了です。

[powershell]
 The install of nodist was successful.
 Software installed as 'exe', install location is likely default.
[/powershell]

## 2. Node.jsのインストール
続いて以下のコマンドを実行して、インストール可能なNode.jsのバージョンのリストを取得します。

[powershell]
nodist dist
[/powershell]

次に、以下のコマンドを実行して、本記事執筆時点（2018年4月17日）の

LTS最新版(v.8.11.1)をインストールします。

[powershell]
nodist + 8.11.1
[/powershell]

次に、インストールされたバージョンのNode.jsを以下のコマンドで有効化します。

[powershell]
nodist 8.11.1
[/powershell]

最後に、以下のコマンドで、現在有効なNode.jsのバージョンを確認します。

[powershell]
node -v
[/powershell]

以下のように出力されたら、インストール完了です。

[powershell]
v8.11.1
[/powershell]


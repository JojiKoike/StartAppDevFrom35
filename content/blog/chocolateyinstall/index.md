---
title: Chocolateyのインストール
date: 2018-01-06T23:57:09.000Z
category : 
description: Windows向けパッケージ管理ツールChocolateryのインストール手順をご紹介いたします。
tags: ['Chocolatey', 'Windows']
thumbnail:
hero:
---

# 本レッスンのゴール
Windows向けパッケージ管理ツールChocolateyのインストールと動作確認
# 想定環境
以下の環境を想定しています。
<ul>
 	Windows 10 64bit (Fall Creators Update適用）
</ul>
# 全体の流れ
以下の流れで進めます。
<ul>
 	Chocolateyのインストール
 	動作確認
</ul>
# 作業
## 1. Chocolateyのインストール
Powershellを「<span class="highlight">管理者として実行する</span>」で起動し、以下のコマンドを実行します。

[powershell]
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
[/powershell]

以下のような出力があれば、Chocolateyのインストール完了です。

[powershell]
Chocolatey (choco.exe) is now ready.
You can call choco from anywhere, command line or powershell by typing choco.
[/powershell]

## 2. 動作確認
続いて、Powershellにて、以下のコマンドを実行します。

[powershell]
choco /?
[/powershell]

chocoコマンドの使い方が表示され、最後に

[powershell]
Chocolatey v0.10.10
[/powershell]

のように、インストールしたChocolateyのバージョンが表示されていれば、動作確認は無事完了です。

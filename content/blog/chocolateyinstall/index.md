---
title: Chocolateyのインストール
date: 2018-01-06T23:57:09.000Z
category: Chocolatey
description: Windows向けパッケージ管理ツールChocolateryのインストール手順をご紹介いたします。
tags: ["Chocolatey", "Windows"]
thumbnail: "./chocolatey_logo-e1523713916789.png"
hero: "./chocolatey_logo-e1523713916789.png"
---

# 本レッスンのゴール

- Windows 向けパッケージ管理ツール Chocolatey のインストールと動作確認

# 想定環境

以下の環境を想定しています。

- Windows 10 64bit (Fall Creators Update 適用）

# 全体の流れ

以下の流れで進めます。

1. Chocolatey のインストール
2. 動作確認

# 作業

## 1. Chocolatey のインストール

Powershell を「<span class="highlight">管理者として実行する</span>」で起動し、以下のコマンドを実行します。

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

以下のような出力があれば、Chocolatey のインストール完了です。

```powershell
Chocolatey (choco.exe) is now ready.
You can call choco from anywhere, command line or powershell by typing choco.
```

## 2. 動作確認

続いて、Powershell にて、以下のコマンドを実行します。

```powershell
choco /?
```

choco コマンドの使い方が表示され、最後に

```powershell
Chocolatey v0.10.10
```

のように、インストールした Chocolatey のバージョンが表示されていれば、動作確認は無事完了です。

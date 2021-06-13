---
title: Homebrewのインストール
date: 2018-01-01T21:10:07.000Z
category: Homebrew
description: MacOS向けパッケージ管理ツールHomebrewのインストール方法をご紹介いたします。
tags: ["Brew-file", "Homebrew", "Homebrew-Cask"]
thumbnail: "./homebrew-256x256.png"
hero: "./homebrew-256x256.png"
---

# 本記事のゴール

- brew コマンドでパッケージのインストールが出来るようになる。

- brew コマンドによるインストール情報をファイルに出力出来るようにする。

# 想定環境

以下の艦橋を想定しています。

- OS : MacOSX High Sierra （バージョン 10.13.14）

# 全体の流れ

以下の流れで進めます。

1. Xcode のインストール

2. Command Line Tools のインストール

3. Homebrew のインストール

4. Brewfile の生成

<adsense></adsense>

# 作業

## 1. Xcode のインストール

AppStore をより Xcode を検索、インストールします。（時間かかります）

##  2. Command Line Tools のインストール

端末を起動し、以下のコマンドを実行します。

```bash
$ xcode-select --install
```

##  3. Homebrew のインストール

端末で以下のコマンドを実行します。

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

次に、以下のコマンドで、正常にインストール出来た事を確認します。

```bash
$ brew doctor
```

次のように出力されれば OK です。

```bash
Your system is ready to brew.
```

これで、アプリケーションを brew コマンドでインストール出来るようになりました。

##  4. Brew-file の生成

以下のコマンドで、Brew-file をインストールします。

```bash
$ brew install rcmdnk/file/brew-file
```

次に、パッケージのインストール、アンインストールの度に、自動的にインストール情報（Brewfile）を更新するように、以下の記述を~/.bash_profile（zsh は~/.zshrc） に追記します。

```bash
if [ -f $(brew --prefix)/etc/brew-wrap ];then
  source $(brew --prefix)/etc/brew-wrap
fi
```

最後に、以下のコマンドで、現在のインストール情報を Brewfile に書き出します。

```bash
brew file init
```

以上で、完了です。

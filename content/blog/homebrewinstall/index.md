---
title: Homebrewのインストール
date: 2018-01-01T21:10:07.000Z
category : 
description: MacOS向けパッケージ管理ツールHomebrewのインストール方法をご紹介いたします。
tags: ['Brew-file', 'Homebrew', 'Homebrew-Cask']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	 brewコマンドでパッケージのインストールが出来るようになる。
 	 brewコマンドによるインストール情報をファイルに出力出来るようにする。
</ul>
# 想定環境
以下の艦橋を想定しています。
<ul>
 	 OS : MacOSX High Sierra （バージョン 10.13.14）
</ul>
# 全体の流れ
以下の流れで進めます。
<ul>
 	Xcodeのインストール
 	Command Line Toolsのインストール
 	Homebrewのインストール
 	Brewfileの生成
</ul>
# 作業
## 1. Xcodeのインストール
AppStoreをよりXcodeを検索、インストールします。（時間かかります）
##  2. Command Line Toolsのインストール
端末を起動し、以下のコマンドを実行します。

```
$ xcode-select --install
```"

##  3. Homebrewのインストール
端末で以下のコマンドを実行します。

```$ /usr/bin/ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot; ```"

次に、以下のコマンドで、正常にインストール出来た事を確認します。

```
$ brew doctor
```"

次のように出力されればOKです。

``` Your system is ready to brew. ```"

これだけだと、コマンドラインのアプリケーションしかインストール出来ないので、
Homebrew-Caskを以下のコマンドで導入し、Chrome、Firefoxなどの
GUIアプリケーションのインストールも出来るようにします。

``` $ brew tap caskroom/cask ```"

これで、CUI、GUI両方のアプリケーションが、brewコマンドでインストール出来るようになりました。
##  4. Brew-fileの生成
以下のコマンドで、Brew-fileをインストールします。

```
$ brew install rcmdnk/file/brew-file
```"

次に、パッケージのインストール、アンインストールの度に、自動的にインストール情報（Brewfile）を更新するように、
以下の記述を~/.bash_profileに追記します。

```
if [ -f $(brew --prefix)/etc/brew-wrap ];then
  source $(brew --prefix)/etc/brew-wrap
fi
```"

最後に、以下のコマンドで、現在のインストール情報をBrewfileに書き出します。

```
brew file init
```"

以上で、完了です。

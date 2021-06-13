---
title: PyCharmインストール（MacOS編）
date: 2018-01-02T21:21:41.000Z
category : 
description: 
tags: ['Mac', 'PyCharm', 'Python']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	Python統合開発環境PyCharmのインストール
 	動作確認をかねて、簡単なPythonプログラムの作成と実行
</ul>
# 想定環境
以下の環境を想定しています。
<ul>
 	OS : MacOSX High Sierra （バージョン 10.13.14）
</ul>
# 前提条件
<ul>
 	Homebrew-Caskがインストールされている事。
 	Pythonがインストールされている事。
</ul>
<div class="attention">

それぞれのインストール方法については、以下のリンク先を参照して下さい。
<ul>
 	<a href="https://startappdevfrom35.com/homebrewinstall/">HomeBrewのインストール</a>
 	<a href="https://startappdevfrom35.com/pythondevenvformacos/">Pythonのインストール</a>
</ul>
</div>
#  全体の流れ
以下の流れで進めます。
<ul>
 	PyCharmのインストール
 	PyCharmの動作確認
</ul>
# 作業
## 1. PyCharmのインストール
端末を起動し、以下のコマンドを実行します。

尚、ここでは、無料版のPyCharm Community Editionをインストールするものとします。

```
$ brew cask install pycharm-ce
```"

<div class="point">

有料版のPyCharmをインストールする場合は、以下のコマンドを実行します。

```
brew cask install pycharm
```"

</div>
<div>特にエラー等出力されず、コマンドの実行が完了すれば、インストールは完了です。</div>
## 2. PyCharmの動作確認
1. Finder-&gt;アプリケーションを開き、PyCharmのアイコンをクリックしてPyCharmを起動します。

<img class="alignnone wp-image-133 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/5d8bb045aec473bc35214fc33e21cada.png" alt="" width="770" height="329" />

&nbsp;

2. 「Create New Project」をクリックします。

<img class="alignnone wp-image-114 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/39fae9609344905bed3ae82d77e3f372.png" alt="" width="665" height="483" />

3.  「Create」ボタンを押下します。

<img class="alignnone wp-image-118 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/70617e67552eccd81f1a514898376dfd.png" alt="" width="668" height="481" />

4. プロジェクトルートフォルダーを右クリック→New→Python Fileをクリック

<img class="alignnone wp-image-119 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/60b3429a0b34316ca41510c606a8cc11-1024x640.png" alt="" width="747" height="467" />

5. 適当なファイル名を入力し、「OK」ボタンを押下

<img class="alignnone wp-image-120 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/110da0727e8cb719bc111635080d11a3.png" alt="" width="353" height="142" />

6. 以下のコードを記述

[python]
print(&quot;Hello, World&quot;)
[/python]

7. 左下よりTerminalを起動

<img class="alignnone wp-image-121 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/10e2162b70ecda67a443036852787335-1024x640.png" alt="" width="747" height="467" />

8. ターミナルに以下のコマンドを入力

```
$ python ファイル名.py
```"

以下のように出力されれば、動作確認完了

```
Hello World!
```"


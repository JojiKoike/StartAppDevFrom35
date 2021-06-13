---
title: Atomインストール（MacOS編）
date: 2018-01-03T12:50:49.000Z
category : 
description: Github製高機能テキストエディタAtomのHomebrew-Caskを活用したインストール方法をご紹介いたします。
tags: ['Atom', 'Homebrew-Cask']
thumbnail:
hero:
---

# 本レッスンのゴール
GitHub製高機能テキストエディターAtomのインストール完了
# 想定環境
以下の環境を想定しています。
<ul>
 	OS : MacOSX High Sierra （バージョン 10.13.14）
</ul>
# 前提条件
<ul>
 	Homebrew-Caskがインストールされている事。
</ul>
<div class="attention">

インストール方法については、以下のリンク先を参照して下さい。
<ul>
 	<a href="https://startappdevfrom35.com/homebrewinstall/">HomeBrewのインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ul>
 	 Atomのインストール
 	 Atomの起動確認
</ul>
# 作業
## 1. Atomのインストール
端末を起動し、以下のコマンドを実行します。

``` $ brew cask install atom ```"

特にエラー等出力されず、コマンドの実行が完了すれば、インストール完了です。
## 2. Atomの起動確認
1.  Finder-&gt;アプリケーションを開き、AtomのアイコンをクリックしてAtomを起動します。

<img class="alignnone wp-image-134 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/426d62841b8cd51184b5e750c7f7e79a.png" alt="" width="772" height="326" />

&nbsp;

2. 以下の画面が表示されれば、Atomの起動確認完了です。

<img class="alignnone wp-image-131 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/4c47bbd8cdacaa66261b6e82682c4d61-1024x640.png" alt="" width="747" height="467" />
<div class="point">ここから更に、用途に合わせてプラグインを入れたりするのですが、後日、React開発環境を整える記事にて紹介させていただきます。</div>

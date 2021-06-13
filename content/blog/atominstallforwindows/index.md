---
title: Atomのインストール（Windows編）
date: 2018-01-01T23:00:59.000Z
category : 
description: Chocolateyを用いてGithub製高機能テキストエディタAtomをWindowsにインストールする手順をご紹介いたします。
tags: ['Atom', 'Chocolatey', 'Windows']
thumbnail:
hero:
---

# 本レッスンのゴール
GitHub製高機能テキストエディターAtomのインストール完了
# 想定環境
以下の環境を想定しています。
<ul>
 	OS : Windows 10 64bit (Fall Creators Update適用済）
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
 	 Atomのインストール
 	 Atomの起動確認
</ul>
# 作業
## 1. Atomのインストール
PowerShellを起動し、以下のコマンドを実行します。

[powershell] 
choco install atom 
[/powershell]

途中、以下のような質問があるので、Yと入力してリターンキーを押下します。

[powershell] 
Do you want to run the script?([Y]es/[N]o/[P]rint): Y 
[/powershell]

しばらくすると、インストーラーのダウンロードに続いて、インストールが行われます。
以下のような出力があれば、インストール完了です。

[powershell]
The install of atom was successful.
Software installed as 'exe', install location is likely default.
[/powershell]

## 2. Atomの起動確認
1.  AtomのアイコンをクリックしてAtomを起動します。

<img class="alignnone wp-image-229 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/67e53da00b66701fbeae2876c8482043.png" alt="" width="98" height="70" />

2. 以下の画面が表示されれば、Atomの起動確認完了です。

<img class="alignnone wp-image-230 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/627225f2cd2e7e381045292fdd70857e-1024x583.png" alt="" width="747" height="425" />
<div class="point">ここから更に、用途に合わせてプラグインを入れたりするのですが、後日、React開発環境を整える記事にて紹介させていただきます。</div>

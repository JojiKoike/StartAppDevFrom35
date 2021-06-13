---
title: PyCharmインストール（Windows編）
date: 2018-12-31T23:50:51.000Z
category:
description: Chocolateyを用いてPyCharmをWindowsにインストールする手順をご紹介いたします。
tags: ["PyCharm", "Python", "Windows"]
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
 	OS : Windows 10 64bit (Fall Creators Update適用済）
</ul>

# 前提条件

<ul>
 	Chocolateyがインストールされている事。
 	Pythonがインストールされている事。
</ul>

<attention>

それぞれのインストール方法については、以下のリンク先を参照して下さい。

- <a href="https://startappdevfrom35.com/chocolateyinstall/">Chocolatey のインストール</a>
- <a href="https://startappdevfrom35.com/pythondevenvinstallforwindows/">Python のインストール</a>

</attention>

#   全体の流れ

以下の流れで進めます。

1. PyCharm のインストール
2. PyCharm の動作確認

# 作業

## 1. PyCharm のインストール

「<highlight>管理者として実行する</highlight>」で PowerShell を起動し、以下のコマンドを実行します。

尚、ここでは、無料版の<span class="highlight">PyCharm Community Edition</span>をインストールするものとします。

```powershell
choco install pycharm-community
```

<point>

有料版の PyCharm Professional をインストールする場合は、以下のコマンドを実行します。

```
choco install pycharm
```

</point>

途中、以下のような質問があるので、Y と入力してリターンキーを押下します。

```
Do you want to run the script?([Y]es/[N]o/[P]rint): Y
```

しばらくすると、インストーラーのダウンロードに続いて、インストールが行われます。
以下のような出力があれば、インストール完了です。

```
The install of pycharm-community was successful.
Software installed as 'exe', install location is likely default.
```

## 2. PyCharm の動作確認

1. PyCharm を起動します。

2. （初回起動時のみ）以下のダイアログが表示されたら、

「<span class="highlight">Do not import settings</span>」にチェックを入れて、「OK」ボタンを押下します。

<img class="alignnone wp-image-209 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/d7f3d5288ce81d38d80c0447e83585a2.png" alt="" width="431" height="167" />

3. （初回起動時のみ）好みの方を選択して、「<span class="highlight">Next Featured Plugins</span>」ボタンを押下します。

<img class="alignnone wp-image-210 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/85df101fb919ee411816bbd35b923907.png" alt="" width="809" height="675" />

&nbsp;

4. インストールしたいプラグインの「Install」ボタンを押下します。

今回は特に何もインストールせず、「<span class="highlight">Start using PyCharm</span>」ボタンを押下して

PyCharm を起動します。

<img class="alignnone wp-image-211 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/cb24279a50669689572506b0597ac74e.png" alt="" width="809" height="672" />

5. 「<span class="highlight">Create New Project</span>」をクリックします。

<img class="alignnone wp-image-212 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/a2c611a6a74d554ae835583dfdb9c2af.png" alt="" width="667" height="486" />

６.  <span class="highlight">Location にプロジェクトのディレクトリのフルパスを入力</span>し、「Create」ボタンを押下します。

<img class="alignnone wp-image-213 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/a3ae9179d242a1cf3e586d22a439b335.png" alt="" width="779" height="485" />

7. プロジェクトルートフォルダーを右クリック →New→Python File をクリック

<img class="alignnone wp-image-214 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/14413d6a5690b624b6733cbb32641d0d-1024x583.png" alt="" width="747" height="425" />

8. 以下のダイアログが表示されるので、適当なファイル名を入力し、「OK」ボタンを押下

<img class="alignnone wp-image-215 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/44588d2c21fdbbce3341a11a85663655.png" alt="" width="345" height="162" />

9. 以下のコードを記述

```python
print(&quot;Hello, World&quot;)
```

10. 左下より Terminal を起動し、以下のコマンドを入力

```powershell
$ python trial.py
```

以下のように出力されれば、動作確認完了です。

```powershell
Hello World!
```

<img class="alignnone wp-image-216 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/fa9e124a6960cb33e0985c3df376554d-1024x584.png" alt="" width="747" height="426" />

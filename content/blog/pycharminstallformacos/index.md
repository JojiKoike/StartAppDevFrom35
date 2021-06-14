---
title: PyCharmインストール（MacOS編）
date: 2018-01-02T21:21:41.000Z
category: Python
description: Python開発で非常に協力なIDE、PyCharmのインストール方法を説明します。
tags: ["Mac", "PyCharm", "Python"]
thumbnail: "./pycharm-logo-e1523332070358.png"
hero: "./pycharm-logo-e1523332070358.png"
---

# 本レッスンのゴール

- Python 統合開発環境 PyCharm のインストール
- 動作確認をかねて、簡単な Python プログラムの作成と実行

# 想定環境

以下の環境を想定しています。

- OS : MacOSX High Sierra （バージョン 10.13.14）

# 前提条件

- Homebrew-Cask がインストールされている事。
- Python がインストールされている事。

<attention>

それぞれのインストール方法については、以下のリンク先を参照して下さい。

- <a href="https://startappdevfrom35.com/homebrewinstall/">HomeBrew のインストール</a>
- <a href="https://startappdevfrom35.com/pythondevenvformacos/">Python のインストール</a>

</attention>

#   全体の流れ

以下の流れで進めます。

- PyCharm のインストール
- PyCharm の動作確認

# 作業

## 1. PyCharm のインストール

端末を起動し、以下のコマンドを実行します。

尚、ここでは、無料版の PyCharm Community Edition をインストールするものとします。

```bash
$ brew cask install pycharm-ce
```

<point>

有料版の PyCharm をインストールする場合は、以下のコマンドを実行します。

```bash
$ brew cask install pycharm
```

</point>

特にエラー等出力されず、コ
マンドの実行が完了すれば、インストールは完了です。

## 2. PyCharm の動作確認

1.Finder->アプリケーションを開き、PyCharm のアイコンをクリックして PyCharm を起動します。

![PyCharm起動](5d8bb045aec473bc35214fc33e21cada.png)

2.「Create New Project」をクリックします。

![Create New Project](39fae9609344905bed3ae82d77e3f372.png)

3.「Create」ボタンを押下します。

![Create](70617e67552eccd81f1a514898376dfd.png)

4.プロジェクトルートフォルダーを右クリック →New→Python File をクリック

![Python File](60b3429a0b34316ca41510c606a8cc11.png)

5.適当なファイル名を入力し、「OK」ボタンを押下

![OK](110da0727e8cb719bc111635080d11a3.png)

6.以下のコードを記述

```python
print(`Hello, World`)
```

7.左下より Terminal を起動

<img class="alignnone wp-image-121 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/10e2162b70ecda67a443036852787335-1024x640.png" alt="" width="747" height="467" />

8.ターミナルに以下のコマンドを入力

```bash
$ python ファイル名.py
```

以下のように出力されれば、動作確認完了

```bash
Hello World!
```

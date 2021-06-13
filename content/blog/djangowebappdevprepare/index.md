---
title: DjangoWebアプリ開発（足場作り）
date: 2018-01-04T20:23:30.000Z
category : 
description: DjangoによるWebアプリ開発開始の準備の手順を、PyCharmを使った例を使ってご紹介いたします。
tags: ['Django', 'PyCharm', 'Python']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	フルスタックWebアプリケーションフレームワークDjangoによるWebアプリケーション開発プロジェクトの作成
</ul>
# 前提条件
<ul>
 	Python3.4以降がインストールされている事。（必須）
 	PyCharmがインストールされている事。（推奨）
</ul>
<div class="attention">

インストール方法について、それぞれ以下のリンク先をご参照ください。
<ol>
 	MacOSの方
</ol>
<ul>
 	<a href="https://startappdevfrom35.com/pythondevenvformacos/">MacOSへのPythonインストール</a>
 	<a href="https://startappdevfrom35.com/pycharminstallformacos/">MacOSへのPyCharmインストール</a>
</ul>
2. Windowsの方
<ul>
 	<a href="https://startappdevfrom35.com/pythondevenvinstallforwindows/">WindowsへのPythonインストール</a>
 	<a href="https://startappdevfrom35.com/pycharminstallforwindows/">WindowsへのPyCharmインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ul>
 	プロジェクト固有のPython実行環境構築
 	(PyCharm使用の場合）PyCharmプロジェクト作成
 	プロジェクトに Django導入
 	Djangoプロジェクト作成
 	動作確認
</ul>
# 作業
## 1. プロジェクト固有のPython実行環境構築
プロジェクト用のディレクトリを作成し、作成したディレクトリで以下のコマンドを実行します。

```
$ python -m venv venv
```"

&nbsp;
## 2. PyCharmプロジェクト作成
PyCharmを起動し、「Open」をクリック、

<img class="alignnone wp-image-149 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/ffc462a8abe209d4699fb705cfe05e13.png" alt="" width="776" height="481" />

先ほどのディレクトリを選択。以下のような画面が出ればOK。

<img class="alignnone wp-image-150 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/7c5dc0bccc7f97ae49443f972faeebf4-1024x640.png" alt="" width="747" height="467" />
## 3. Django導入
左下のメニューより、Terminalを起動します。

<img class="alignnone wp-image-151 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/eadc4de1dfbe9249682238f6f08dae4f-1024x640.png" alt="" width="747" height="467" />

下のようにTerminalが起動したら、以下のコマンドでDjangoをプロジェクトに導入します。

``` $ pip install django ```"

<img class="alignnone wp-image-152 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/74a37b432d0db87c57b1d82611ae2862-1024x640.png" alt="" width="747" height="467" />

以下のように出力されれば、Djangoのプロジェクトへの導入は完了です。

```
Successfully installed django-2.0.4 pytz-2018.4
```"

## 4. Djangoプロジェクト作成
3.の作業に続いて、PyCharmのTerminalにて、以下のコマンドを実行します。

``` 
$ django-admin startproject mysite 
```"

<div class="point">mysiteはプロジェクト名です。ここではmysiteとして説明を進めます。</div>
<div>以下のように、プロジェクト名のフォルダと配下にファイルが生成されていれば、</div>
<div>Djangoプロジェクト作成完了です。</div>
<div><img class="alignnone wp-image-154 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/3209ab2450de3515048a3e2286f5953b-1024x640.png" alt="" width="747" height="467" /></div>
## 5. 動作確認
続いてPyCharmのTerminalにて以下のコマンドを実行し、

Django組み込みのテスト用サーバーを起動します。

```
$ cd mysite
$ python manage.py runserver
```"

以下のような出力が出れば、サーバーが無事起動しています。

```
Performing system checks...

System check identified no issues (0 silenced).

You have 14 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.

April 12, 2018 - 11:11:37
Django version 2.0.4, using settings 'mysite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```"

<div class="attention">以下のような警告がありますが、これはデータベースにデータをマイグレーション（移行）していない為に生じるものです。
今回の動作確認ではとりあえず必要ありませんので、一旦無視して進めて下さい。
You have 14 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions. Run 'python manage.py migrate' to apply them.</div>
最後に、ブラウザを起動し、http://127.0.0.1:8000にアクセスし、

以下のような画面が表示されれば、DjangoによるWebアプリケーション開発の準備は完了です。

&nbsp;

次からはいよいよ、このプロジェクトに、Webアプリケーションを実装します。

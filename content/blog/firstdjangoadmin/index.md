---
title: DjangoWebアプリ開発（はじめてのDjango Admin）
date: 2018-01-02T00:40:50.000Z
category : 
description: Djangoに搭載されているDjango Adminという管理者機能を使って、作成したDBのテーブルにレコードを新規作成、参照、編集、削除を行うまでの手順をご紹介します。
tags: ['Django Admin']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	Django Adminで、DBのテーブルのレコードを作成、参照、編集、削除ができるようになる。
</ul>
# 前提条件
<ul>
 	Modelを実装し、DBにマイグレーション済みである事。
</ul>
<div class="attention">

Modelの実装方法ならびにDBへのマイグレーション方法は、以下をご参照ください。
<ul>
 	<a href="https://startappdevfrom35.com/djangofirstdbappdbbuild/" target="_blank" rel="noopener">Modelの実装ならびにマイグレーション手順</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	Django AdminのSuperuser Account作成
 	Django Adminの管理対象Model追加
 	動作確認
</ol>
# 作業
## 1. Django AdminのSuperuser Account作成
PyCharmのTerminalにて、manage,pyのあるディレクトリに移動し、
以下のコマンドを実行します。

```
$ python manage.py createsuperuser
```"

Usernameを尋ねられるので、入力してEnterを押下します。
ここでは、AdminUserとして進めます。

```
Username (leave blank to use 'UserName'): AdminUser
```"

（注：'UserName'は、現在OSにログイン中のユーザー名が表示されます。）

次に、E-mailアドレスを尋ねられるので、入力してEnterを押下します。
ここでは、adminuser@admin.comとして進めます。

```
Email address: adminuser@admin.com
```"

最後に、設定するパスワードを２回尋ねられるので、
２回とも同じパスワードを入力し、Enterを押下します。

```
Password:********
Password (again):********
```"

（注：********の部分は実際には表示されません。）

尚、Passwordなど、ありふれた単語を設定しようとすると、
以下の警告が表示され、再度入力を促されるので、
推測されにくい文字列を入力してください。

```
This password is too common.
```"

以下の表示が出力されれば、Superuser Accountの作成は完了です。

```
Superuser created successfully.
```"

## 2. Django Adminの管理対象Model追加
次に、myapp/admin.pyに以下の記述を加え、Django Adminの管理対象Modelを追加します。

[python]
from django.contrib import admin

from .models import IncomeCategory, Income

admin.site.register(IncomeCategory)
admin.site.register(Income)
[/python]

## 3. 動作確認
manage.pyのあるディレクトリにて以下のコマンドを実行し、
Django組み込みのテスト用サーバーを起動します。

```
$ python manage.py runserver
```"

ブラウザを立ち上げ、URLにhttp://127.0.0.1:8000/adminと入力して
Enterを押下すると、以下の画面が表示されるので、
手順1で作成したSuperuser AccountのUsernameとPasswordを入力し
「Log in」ボタンを押下します。

<img class="wp-image-407 size-large alignnone" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/FireShot-Capture-13-Log-in-I-Django-site-admin-http___127.0.0.1_8000_admin_login__next_admin_-1024x562.png" alt="" width="747" height="410" />

ログインに成功すると、以下のような画面が表示されます。

<img class="alignnone wp-image-409 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-14-Site-administration-I-Django-site-admin-http___127.0.0.1_8000_admin_-1024x526.png" alt="" width="747" height="384" />

ここでは、MYAPPの「Income categorys」モデルについて操作を行なってまいります。
まずは、レコードの新規作成です。
先ほどの画面で、MYAPPの「Income categorys」の「<span class="highlight">+Add</span>」をクリックすると、
以下のような画面が表示されるので、Nameの所に入力して「<span class="highlight">SAVE</span>」ボタンを押下
してください。

<img class="alignnone wp-image-411 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-15-Add-income-category-I_-http___127.0.0.1_8000_admin_myapp_incomecategory_add_-1024x526.png" alt="" width="747" height="384" />

以下のような画面が表示されれば、新規レコード作成は成功です。

<img class="alignnone wp-image-412 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-16-Select-income-category-to_-http___127.0.0.1_8000_admin_myapp_incomecategory_-1024x526.png" alt="" width="747" height="384" />
次に、先程の画面で、「INCOME CATEGORY」下の「InceomCategory object (...)」
をクリックすると、以下のような画面が表示されます。

<img class="alignnone wp-image-415 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-17-Change-income-category-I-Django-site-a_-http___127.0.0.1_8000_admin_myapp_-1024x526.png" alt="" width="747" height="384" />

NAMEに、先ほど入力した文字列が表示されている事が確認出来ると思います。
これで、レコード参照も成功です。
次に、レコード更新を行います。以下のように、NAMEの所に別の文字列を入力し、
「SAVE」ボタンを押下します。（ここでは仮に、個人事業収入とします。）

<img class="alignnone wp-image-416 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-18-Change-income-category-I-Django-site-a_-http___127.0.0.1_8000_admin_myapp_-1024x526.png" alt="" width="747" height="384" />

すると、新規登録時と同じように、次のような画面が表示されます。

<img class="alignnone wp-image-417 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-19-Select-income-category-to_-http___127.0.0.1_8000_admin_myapp_incomecategory_-1024x526.png" alt="" width="747" height="384" />

この画面の、「INCOME CATEGORY」下の「InceomCategory object (...)」をクリックすると、
以下のような画面が表示され、NAMEの所に先ほど入力した文字列が表示されていれば
レコード更新成功です。

<img class="alignnone wp-image-418 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-20-Change-income-category-I-Django-site-a_-http___127.0.0.1_8000_admin_myapp_-1024x526.png" alt="" width="747" height="384" />

最後に、レコード削除を行います。先程の画面で、「<span class="highlight">DELETE</span>」ボタンを押下します。

すると、以下のような画面が表示され、本当に消しても良いのか尋ねられるので、

「<span class="highlight">Yes, I'm sure.</span>」ボタンを押下します。

<img class="alignnone wp-image-420 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-21-Are-you-sure_-I-Django-site-admin_-http___127.0.0.1_8000_admin_myapp_-1-1024x526.png" alt="" width="747" height="384" />

すると以下のような画面が表示され、レコードが削除されている事が確認出来るかと思います。

<img class="alignnone wp-image-422 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-22-Select-income-category-to_-http___127.0.0.1_8000_admin_myapp_incomecategory_-1024x526.png" alt="" width="747" height="384" />

以上で、Django Adminを使ったDBのレコード新規登録、参照、更新、削除の
動作確認は完了です。

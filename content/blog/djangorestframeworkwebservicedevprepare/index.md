---
title: Django REST frameworkによるWebサービス開発（足場作り）
date: 2018-01-03T06:30:29.000Z
category : 
description: PostgreSQLをデータベースに用いる、Django REST frameworkによるWebサービス開発のプロジェクト作成手順をご紹介いたします。
tags: ['Django', 'Django REST framework', 'PostgreSQL']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	Django REST frameworkによるWebサービス開発の足場作り
</ul>
# 前提条件
<ul>
 	Python3.4以降がインストールされている事。（必須）
 	PostgreSQLがインストールされ、起動している事。（必須）
 	PyCharmがインストールされている事。（推奨）
</ul>
<div class="attention">

インストール方法について、それぞれ以下のリンク先をご参照ください。

1. Macな方
<ul>
 	<a href="https://startappdevfrom35.com/pythondevenvformacos/">MacOSへのPythonインストール</a>
 	<a href="https://startappdevfrom35.com/postgresqlinstallformac/">PostgreSQLのインストール</a>
 	<a href="https://startappdevfrom35.com/pycharminstallformacos/">MacOSへのPyCharmインストール</a>
</ul>
2. Windowsな方
<ul>
 	<a href="https://startappdevfrom35.com/pythondevenvinstallforwindows/">WindowsへのPythonインストール</a>
 	<a href="https://startappdevfrom35.com/pycharminstallforwindows/">WindowsへのPyCharmインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	プロジェクト用のデータベース作成
 	プロジェクト固有のPython実行環境構築
 	(PyCharm使用の場合）PyCharmプロジェクト作成
 	ライブラリー群の導入
 	Djangoプロジェクト作成
 	動作確認
</ol>
# アクション
## 1. プロジェクト用データベース作成
まず、以下のコマンドで、プロジェクト用のデータベースユーザーを作成します。
尚、<span class="highlight">パスワードを２回尋ねられるので、2回とも同じ文字列を入力して下さい。</span>

``` 
$ createuser -S -d -R -P djangorestuser 
Enter password for new role: 
Enter it again: 
```"

<div class="point">

それぞれのオプションの意味は以下の通りです。
<ul>
 	-S : スーパーユーザー権限を与えない
 	-d : データベース作成権限を与える
 	-R : ユーザー作成権限を与えない
 	-P : パスワードを設定する
</ul>
</div>
ユーザーが作成された事を、以下の様に確認します。

```
$ psql postgres
psql (10.3)
Type &quot;help&quot; for help.

postgres=# \du
                                      List of roles
   Role name    |                         Attributes                         | Member of
----------------+------------------------------------------------------------+-----------
 djangorestuser | Create DB                                                  | {}
```"

次に、以下のコマンドで、プロジェクト用のデータベースを作成します。

```
$ createdb -O djangorestuser djangorestdb
```"

以下のコマンドで、データベースが作成された事を確認して
プロジェクト用データベースの作成は完了です。

```
$ psql -l
                                    List of databases
     Name     |     Owner      | Encoding |   Collate   |    Ctype    | Access privileges
--------------+----------------+----------+-------------+-------------+-------------------
 djangorestdb | djangorestuser | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
```"

## 2. プロジェクト固有のPython実行環境構築
プロジェクト用のディレクトリを作成し、作成したディレクトリで以下のコマンドを実行します。

```
$ mkdir drftraining
$ cd drftraining
$ python -m venv venv
```"

## 3. PyCharmプロジェクト作成
PyCharmを起動し、「Open」をクリックします。
<img class="alignnone wp-image-212 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/a2c611a6a74d554ae835583dfdb9c2af.png" alt="" width="667" height="486" />

ダイアログが表示されるので、先ほど作成したディレクトリを選択し、
OPENボタンを押下して下さい。

<img class="alignnone wp-image-584 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/7dca2d3b207854fa37abd4d31a69c3f9.png" alt="" width="715" height="279" />

以下のような画面が出ればOKです。

<img class="alignnone wp-image-585 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/6901878852228f07fa6fc41f4f123cf1-1024x640.png" alt="" width="747" height="467" />
## 4. ライブラリー群導入
プロジェクトに以下のライブラリーを導入します。
<ul>
 	django : Django本体
 	djangorestframework : Django REST framework本体
 	psycopg2-binary : Python用PostgreSQLドライバー（PostgreSQLの操作に必要）
</ul>
まず、PyCharmの左下のメニューより、Terminalを起動します。

<img class="alignnone wp-image-589 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/f1f853f21ac8d8ee6074d031e8d0f708-1024x640.png" alt="" width="747" height="467" />

下のようにTerminalが起動したら、以下のコマンドでDjangoをプロジェクトに導入します。

``` $ pip install django　djangorestframework psycopg2-binary ```"

<img class="alignnone wp-image-590 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/703033903874e0b5f7eecd073d7350a6-1024x640.png" alt="" width="747" height="467" />

以下のように出力されれば、Djangoのプロジェクトへの導入は完了です。

```
Successfully installed django-2.0.5 djangorestframework-3.8.2 psycopg2-binary-2.7.4 pytz-2018.4
```"

## 5. Djangoプロジェクト作成
Django REST frameworkは、Djangoのプロジェクトがベースになるので、
ここでDjangoプロジェクトの作成を行います。
4.の作業に続いて、PyCharmのTerminalにて、以下のコマンドを実行します。

``` 
$ django-admin startproject myservice 
```"

<div class="point">myserviceはプロジェクト名です。ここではmyserviceとして説明を進めます。</div>
以下のように、プロジェクト名のフォルダと配下にファイルが生成されていれば、
Djangoプロジェクト作成完了です。
<div><img class="alignnone wp-image-593 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/4927030bbfcbbc0d9c76d8459020b11f-1024x640.png" alt="" width="747" height="467" /></div>
&nbsp;

次に、データベースの接続先、言語、時刻の設定を行います。以下の様に、
drftraining/myservice/myservice/settings.pyを開きます。
<img class="alignnone wp-image-595 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/d1209fa3e775b9d986c694921a098b78-1024x640.png" alt="" width="747" height="467" />

まず、INSTALLED_APPSに以下の様にrest_frameworkを追加します。

[python]
INSTALLED_APPS = [
    'rest_framework',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
[/python]

次に、DATABASESの部分を以下の様に書き換えます。

[python]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'djangorestdb',
        'USER': 'djangorestuser',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
[/python]

次に、LANGUAGE_CODE, TIME_ZONEを以下の様に書き換えます。

[python]
LANGUAGE_CODE = 'ja-jp'

TIME_ZONE = 'Asia/Tokyo'
[/python]

最後に、以下のコマンドを実行し、データベースにマイグレーションを行います。

```
$ cd myservice
$ python manage.py migrate
```"

以下の様にして、PostgreSQLに接続して、マイグレーションが行われたかを確認します。

```
$ psql djangoresstdb -U djangorestuser

psql (10.3)
Type &quot;help&quot; for help.

djangorestdb=&gt; \dt;
                      List of relations
 Schema |            Name            | Type  |     Owner
--------+----------------------------+-------+----------------
 public | auth_group                 | table | djangorestuser
 public | auth_group_permissions     | table | djangorestuser
 public | auth_permission            | table | djangorestuser
 public | auth_user                  | table | djangorestuser
 public | auth_user_groups           | table | djangorestuser
 public | auth_user_user_permissions | table | djangorestuser
 public | django_admin_log           | table | djangorestuser
 public | django_content_type        | table | djangorestuser
 public | django_migrations          | table | djangorestuser
 public | django_session             | table | djangorestuser
(10 rows)
```"

これで、Djangoプロジェクトの作成は完了です。
## 6. 動作確認
続いてPyCharmのTerminalにて以下のコマンドを実行し、
Django組み込みのテスト用サーバーを起動します。

```
$ python manage.py runserver
```"

以下のような出力が出れば、サーバーが無事起動しています。

```
Performing system checks...

System check identified no issues (0 silenced).
May 16, 2018 - 06:24:11
Django version 2.0.5, using settings 'myservice.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```"

最後に、ブラウザを起動し、http://127.0.0.1:8000にアクセスし、
以下のような画面が表示されれば、Django REST frameworkによる
Webサービス開発の足場作りは完了です。

<img class="alignnone wp-image-600 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/3e5cd68a9d9b06668d9e256fcd3ab303-1024x558.png" alt="" width="747" height="407" />

---
title: DjangoWebアプリ開発（はじめてのWebDBアプリ：DB構築）
date: 2018-01-06T19:50:05.000Z
category : 
description: Djangoを用いた初めてのWebDBアプリを構築する準備として、Modelの実装からDjangoのマイグレーション機能を使ってDBにテーブルを作成する手順を紹介します。
tags: ['DataBase', 'Migration', 'Model']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	データベースにテーブルを構築し、登録、参照、更新、削除が行えるようになる。
</ul>
# 前提条件
<ul>
 	Djangoアプリ作成の足場作りが完了していること。
</ul>
<div class="attention">

Djangoアプリ作成の足場作りの手順は、以下リンク先の手順１をご参照ください。
<ul>
 	<a href="https://startappdevfrom35.com/djangofirstwebapp/">Djangoアプリ作成の足場作り</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	Modelの実装
 	DBにテーブルを構築
 	動作確認
</ol>
# 作業
## 1. Modelの実装
Djangoにおける、データベース構築の流れは、
<span class="highlight">Modelを実装→マイグレーションファイルを生成→マイグレーションファイルの内容をDBに反映</span>
となります。
尚、マイグレーションファイルの内容をDBに反映する作業を、マイグレーションと言います。
Modelとはいわば、テーブルの設計図のようなものです。
本レッスンでは、下図のような簡単な収入記録のテーブルを構築いたします。
<img class="alignnone wp-image-349 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/ERDiagram.png" alt="" width="550" height="200" />
テーブルの内容について簡単に説明します。
収入記録は、収入費目（IncomeCategory)とIncome（収入）２つのテーブルで
構成されています。
これらは互いにリレーションをもち、IncomeCategory1件は、0件以上のIncomeと
紐づいています。
それでは上図を元に、models.pyに以下のコードを実装いたします。

[python]
import uuid
from django.db import models


class IncomeCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=10, unique=True)
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)


class Income(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    amount = models.BigIntegerField()
    incomecategoryid = models.ForeignKey(IncomeCategory, on_delete=models.CASCADE) 
    created = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)

[/python]

以上で、Modelの実装は完了です。
## 2. DBにテーブル構築
次に、Modelの実装内容を基に、マイグレーションファイルを生成し、
生成されたマイグレーションファイルの内容をDBに反映（マイグレーション）します。

まず、作成したModelを有効化します。
mysite/settings.pyのINSTALLED_APPSに、MyAppConfigのエントリーを
以下のように追加します。

[python]
...
# Application definition

INSTALLED_APPS = [
    'myapp.apps.MyappConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
...
[/python]

次に、manage.pyのディレクトリで、
以下のコマンドを実行してマイグレーションファイルを生成します。。

```
$ python manage.py makemigrations myapp
```"

以下のような出力があれば、マイグレーションファイルの生成は成功です。

```
Migrations for 'myapp':
  myapp/migrations/0001_initial.py
    - Create model Income
    - Create model IncomeCategory
    - Add field incomecategoryid to income
```"

次に、以下のコマンドでマイグレーションファイルの内容をDBに反映します。
これが、マイグレーションです。

```
$ python manage.py migrate
```"

以下のような出力があれば、マイグレーションは成功です。

```
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, myapp, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying myapp.0001_initial... OK
  Applying sessions.0001_initial... OK
```"

## 3. 動作確認
最後に、作成したテーブルに対し、データの新規登録、参照、更新、削除ができることを確認します。
まず、以下のコマンドで、Djangoのコマンドラインツール（Shell)を起動します。

```
$ python manage.py shell
```"

以下のように出力されれば、準備完了です。

```
Python 3.6.4 (default, Mar 11 2018, 22:39:46) 
[GCC 4.2.1 Compatible Apple LLVM 9.0.0 (clang-900.0.39.2)] on darwin
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
(InteractiveConsole)
&gt;&gt;&gt; 
```"

このShellを使って、DBの操作を行います。
以下のコマンドで、IncomeCategoryテーブルに新規レコードを登録します。

```
&gt;&gt;&gt;from myapp.models import IncomeCategory, Income
&gt;&gt;&gt;category = IncomeCategory(name='事業収入')
&gt;&gt;&gt;category.save()
```"

次に、以下のコマンドで、レコードが正常に登録されているかを確認します。

```
&gt;&gt;&gt;incomecategories = IncomeCategory.objects.all()
&gt;&gt;&gt;incomecategory0 = incomecategories[0]
&gt;&gt;&gt;incomecategory0.id
UUID('3314348c-693f-48a8-ba34-e34bcd805f61')
&gt;&gt;&gt;incomecategory0.name
'事業収入'
```"

ここまでで、IncomeCategoryテーブルに対するレコードの新規登録と参照が
できることを確認しました。次に、登録したレコードを以下のコマンドで更新します。

```
&gt;&gt;&gt;incomecategory0.name = '個人事業収入'
&gt;&gt;&gt;incomecategory0.save()
```"

以下のコマンドで、レコードが更新された事を確認します。

```
&gt;&gt;&gt;incomecategories = IncomeCategory.objects.all()
&gt;&gt;&gt;incomecategory0 = incomecategories[0]
&gt;&gt;&gt;incomecategory0.name
'個人事業収入'
```"

最後に、以下のコマンドでレコードを削除します。

```
&gt;&gt;&gt; incomecategory0.delete()
(1, {'myapp.Income': 0, 'myapp.IncomeCategory': 1})
```"

以下のコマンドで、レコードが削除された事を確認します。

```
&gt;&gt;&gt; IncomeCategory.objects.all()
&lt;QuerySet []&gt;
```"

以上で、DBの動作確認は完了です。

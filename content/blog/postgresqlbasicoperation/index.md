---
title: PostgreSQL DB基本操作
date: 2018-01-01T23:40:40.000Z
category : 
description: データベース、テーブルの作成、新規レコード追加、参照、修正、削除、ユーザーの作成までコマンドラインで行う手順をご紹介いたします。
tags: ['PostgreSQL', 'psql', 'SQL']
thumbnail:
hero:
---

# 本レッスンのゴール
データベース、テーブルの作成、新規レコード追加、参照、修正、削除、
ユーザーの作成までをコマンド操作で出来る様になる。
# 想定環境
以下の環境を想定しています。

OS : MacOSX High Sierra （バージョン 10.13.4）
# 前提条件
<ul>
 	PostgreSQLがインストールされている事。
</ul>
<div class="attention">

PostgreSQLのインストール方法については、以下のリンク先を参照して下さい。
<ul>
 	<a href="https://startappdevfrom35.com/postgresqlinstallformac/">PostgreSQLのインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ul>
 	データベース、テーブルの作成
 	テーブルの基本操作
 	データベースユーザーの作成
</ul>
# インストール作業
## 1． データベース、テーブルの作成
インストール時点で作成されているデータベースは、PostgreSQLサーバーの
システム用データベースなので、よほどの事情がない限りは編集を加えない様にします。
本レッスンでは、練習用のデータベースを作成して以降の演習を進めます。
Terminalを起動し、以下のコマンドを実行して練習用データベースを作成します。

```
$ createdb lessondb
```"

以下のコマンドを実行し、データベースが作成された事を確認します。

```
$ psql -l
  List of databases
 Name | Owner | Encoding | Collate | Ctype | Access privileges
-----------+--------+----------+-------------+-------------+-------------------
 lessondb | user   | UTF8 | en_US.UTF-8 | en_US.UTF-8 |
```"

ここからは、先ほど作成したデータベースに接続して操作を行います。
以下のコマンドを実行し、lessondbに接続します。

```
$ psql lessondb
psql (10.3)
Type &quot;help&quot; for help.

lessondb=#
```"

接続後、以下のコマンドを実行し、テーブルを作成します。

```
lessondb=#lessondb=# CREATE TABLE first_table (
lessondb(#  id integer,
lessondb(# name text
lessondb(# );
CREATE TABLE
```"

テーブルが作成された事を、以下のコマンドを実行して確認します。

```
lessondb=# SELECT * FROM first_table;
 id | name
----+------
(0 rows)

```"

以上で、データベース及びテーブルの作成は完了です。
<div class="point">上記のCREATE TABLE〜、SELECT〜は、SQL文という、データベース操作の言語です。
本サイトで扱うDjango等のWebアプリケーションフレームワークでは、殆どのSQL文の生成を
肩代わりしてくれる為、生のSQLを書く機会は少ないかもしれませんが、
本レッスンで紹介する簡単なCRUD（新規生成、参照、更新、削除）程度を押さえておくと
何かと助かると思います。</div>
## 2． テーブルの基本操作
先ほど作成したテーブルに、以下のコマンドで新しいレコードを新規生成します。

```
lessondb=# INSERT INTO first_table(id,name) VALUES(1, '初めてのレコード');
INSERT 0 1
```"

次に、以下のコマンドで、テーブルの全データを表示します。
```
lessondb=# SELECT * FROM first_table;
 id |       name
----+------------------
  1 | 初めてのレコード
(1 row)
```"
先ほど新規生成したレコードが表示されます。

次に、以下のコマンドで、nameのデータを「はじめてのレコード」に更新します。
```
lessondb=# UPDATE first_table SET name='はじめてのレコード' WHERE id=1;
UPDATE 1
```"

以下のコマンドで、nameのデータが更新されている事を確認します。
```
lessondb=# SELECT * FROM first_table WHERE id=1;
 id |        name
----+--------------------
  1 | はじめてのレコード
(1 row)
```"

次に、以下のコマンドで、新規生成したレコードを削除します。
```
lessondb=# DELETE * FROM first_table WHERE id=1;
DELETE 1
```"

念のため、以下のコマンドでテーブルからレコードが削除されている事を確認します。
```
lessondb=# SELECT * FROM first_table;
 id | name
----+------
(0 rows)
 
```"

最後に、以下のコマンドで、データベースとの接続を切断します。
```
lessondb=# \q
$
```"

以上で、テーブルの基本操作は完了です。

## 3. データベースユーザーの作成
本レッスンの最後に、任意のデータベースユーザーと、作成したユーザーが所有権をもつデータベースを作成します。
まず、以下のコマンドで、データベースユーザーを作成します。
```
$ createuser test_user
```"

次に、作成したユーザーが所有権を持つデータベースを作成します。
```
$ createdb -O test_user test_user_db
```"

最後に、以下のコマンドで、正常にデータベースが作成されている事を確認します。
```
$ psql -l
                                  List of databases
     Name     |   Owner   | Encoding |   Collate   |    Ctype    | Access privileges
--------------+-----------+----------+-------------+-------------+-------------------
 test_user_db | test_user | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
```"

これで、PostgreSQLデータベース基本操作を終了します。

---
title: PostgreSQLのインストール（Mac編）
date: 2018-01-01T06:27:01.000Z
category : 
description: データベースサーバーPostgreSQLをインストールし、OS起動時に自動起動するまでの手順をご紹介いたします。
tags: ['Homebrew', 'PostgreSQL', '自動起動']
thumbnail:
hero:
---

# 本レッスンのゴール
データベースサーバーPostgreSQLをインストールし、OS起動時に自動的に起動させる
# 想定環境
以下の環境を想定しています。

OS : MacOSX High Sierra （バージョン 10.13.4）
# 前提条件
<ul>
 	Homebrewがインストールされている事。
</ul>
<div class="attention">

HomeBrewのインストール方法については、以下のリンク先を参照して下さい。
<ul>
 	<a href="https://startappdevfrom35.com/homebrewinstall/">HomeBrewのインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ul>
 	PostgreSQLのインストール
 	自動起動の設定
 	動作確認
</ul>
# インストール作業
## 1． PostgreSQLのインストール
端末で以下のコマンドを実行します。

```
$ brew install postgresql
```"

<div class="point">Warning: The post-install step did not complete successfully
You can try again using `brew postinstall postgresql`
と出力された場合は、下記のコマンドを実行してください。

```
$ brew postinstall postgresql
```"

</div>
インストール完了後、下記のコマンドを実行し、バージョンが出力されればインストール完了です。

```
$ psql --version
psql (PostgreSQL) 10.3
```"

## 2． 自動起動の設定
このままだとOS再起動の度に手動で起動させる必要があって面倒なので、
OS起動と同時にPostgreSQLが立ち上がる様に設定します。
以下のコマンドを実行します。

```
$ brew services start postgresql
==&gt; Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
```"

次に、以下のコマンドで、PostgreSQLの起動状態を確認します。

```
$ brew services list
```"

以下の様な出力があれば、設定完了です。

```
Name       Status  User   Plist
postgresql started user /Users/user/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```"

## 3. 動作確認
OS起動と同時にPostgreSQLが起動するかを確認します。
まず、MacOSを再起動し、再起動後、Terminalで以下のコマンドを実行してください。

```
$ brew services list
```"

以下の様な出力があれば、自動起動できています。

```
Name       Status  User   Plist
postgresql started user /Users/user/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```"

最後に、データベースのリストを下記のコマンドで表示します。

```
$ psql -l
```"

以下の様な出力があれば、正常に起動できています。

```
List of databases
   Name    | Owner  | Encoding |   Collate   |    Ctype    | Access privileges
-----------+--------+----------+-------------+-------------+-------------------
 postgres  | user   | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0 | user   | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/user        +
           |        |          |             |             | user=CTc/user
 template1 | user   | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/user        +
           |        |          |             |             | user=CTc/user
 test      | user   | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
(4 rows)
```"

これで、PostgreSQLのインストールは完了です。

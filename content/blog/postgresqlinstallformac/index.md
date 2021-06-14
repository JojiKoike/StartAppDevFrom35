---
title: PostgreSQLのインストール（Mac編）
date: 2018-01-01T06:27:01.000Z
category: PostgreSQL
description: データベースサーバーPostgreSQLをインストールし、OS起動時に自動起動するまでの手順をご紹介いたします。
tags: ["Homebrew", "PostgreSQL", "自動起動"]
thumbnail: "./PostgreSQL_logo.3colors.540x557.png"
hero: "./postgresql-logo.png"
---

# 本レッスンのゴール

- データベースサーバー PostgreSQL をインストールし、OS 起動時に自動的に起動させる

# 想定環境

以下の環境を想定しています。

- OS : MacOSX High Sierra （バージョン 10.13.4）

# 前提条件

- Homebrew がインストールされている事。

<attention>

HomeBrew のインストール方法については、以下のリンク先を参照して下さい。

- <a href="https://startappdevfrom35.com/homebrewinstall/">HomeBrew のインストール</a>

</attention>

# 全体の流れ

以下の流れで進めます。

1. PostgreSQL のインストール
2. 自動起動の設定
3. 動作確認

<adsence></adsense>

# インストール作業

## 1． PostgreSQL のインストール

端末で以下のコマンドを実行します。

```bash
$ brew install postgresql
```

<point>
Warning: The post-install step did not complete successfully
You can try again using `brew postinstall postgresql`
と出力された場合は、指示通りに下記のコマンドを実行してください。

```bash
$ brew postinstall postgresql

```

</point>

インストール完了後、下記のコマンドを実行し、バージョンが出力されればインストール完了です。

```bash

$ psql --version
psql (PostgreSQL) 10.3

```

## 2． 自動起動の設定

このままだと OS 再起動の度に手動で起動させる必要があって面倒なので、
OS 起動と同時に PostgreSQL が立ち上がる様に設定します。
以下のコマンドを実行します。

```bash

$ brew services start postgresql
==&gt; Successfully started `postgresql` (label: homebrew.mxcl.postgresql)

```

次に、以下のコマンドで、PostgreSQL の起動状態を確認します。

```bash

$ brew services list

```

以下の様な出力があれば、設定完了です。

```bash

Name Status User Plist
postgresql started user /Users/user/Library/LaunchAgents/homebrew.mxcl.postgresql.plist

```

## 3. 動作確認

OS 起動と同時に PostgreSQL が起動するかを確認します。
まず、MacOS を再起動し、再起動後、Terminal で以下のコマンドを実行してください。

```bash

$ brew services list

```

以下の様な出力があれば、自動起動できています。

```bash

Name Status User Plist
postgresql started user /Users/user/Library/LaunchAgents/homebrew.mxcl.postgresql.plist

```

最後に、データベースのリストを下記のコマンドで表示します。

```bash

$ psql -l

```

以下の様な出力があれば、正常に起動できています。

```bash

List of databases
Name | Owner | Encoding | Collate | Ctype | Access privileges
-----------+--------+----------+-------------+-------------+-------------------
postgres | user | UTF8 | en_US.UTF-8 | en_US.UTF-8 |
template0 | user | UTF8 | en_US.UTF-8 | en_US.UTF-8 | =c/user +
| | | | | user=CTc/user
template1 | user | UTF8 | en_US.UTF-8 | en_US.UTF-8 | =c/user +
| | | | | user=CTc/user
test | user | UTF8 | en_US.UTF-8 | en_US.UTF-8 |
(4 rows)

```

これで、PostgreSQL のインストールは完了です。

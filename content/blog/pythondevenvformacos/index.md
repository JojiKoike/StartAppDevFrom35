---
title: Python開発環境構築 （MacOS編）
date: 2018-01-06T00:02:58.000Z
category: Python
description: MacOSにHomebrewを使って、開発するアプリごとに使用するバージョンを選択可能な、Python開発環境を構築する手順をご紹介いたします。
tags: ["Mac", "pyenv", "Python"]
thumbnail: "./python-logo-e1524649366544.png"
hero: "./python-logo-e1524649366544.png"
---

# 本レッスンのゴール

- Python3 系の開発環境を構築し、簡単なプログラムによる動作確認をとる。

# 想定環境

以下の環境を想定しています。

- OS : MacOSX Mojave （バージョン 10.14.6）

# 前提条件

- anyenv がインストールされている事。

<attention>

anyenv のインストール方法については、以下のリンク先を参照して下さい。

- <a href="https://startappdevfrom35.com/anyenv_install/" target="_blank" rel="noopener noreferrer">anyenv のインストール</a>

</attention>

# 全体の流れ

以下の流れで進めます。

1.  pyenv のインストール
2.  環境変数の設定
3.  Python のインストール
4.  動作確認

# インストール作業

## 1． pyenv のインストール

端末で以下のコマンドを実行します。

```bash
$ anyenv install pyenv
```

以下のコマンドでバージョンコードが出力されれば、pyenv のインストールは成功です。

```bash

$ pyenv --version
pyenv 1.2.13-12-g8a56fe64

```

## 2． 環境変数の設定

pyenv で設定した Python をデフォルトで使うよう、環境変数を設定、反映します。

- bash な方

```bash

$ echo 'eval &quot;$(pyenv virtualenv-init -)&quot;' >> ~/.bash_profile
$ source ~/.bash_profile

```

- zsh な方

```bash

$ echo 'eval &quot;$(pyenv virtualenv-init -)&quot;' >> ~/.zshrc
$ source ~/.zshrc

```

## 3． Python のインストール

以下のコマンドで、インストール可能な Python のバージョンを確認します。

```bash

$ pyenv install -l
2.1.3
2.2.3
2.3.7
2.4
...
3.6.0
3.6-dev
3.6.1
3.6.2
3.6.3
3.6.4
3.6.5
....
3.7.4
....

```

今回は、2019 年 9 月 21 日現在の最新安定板 3.7.4 をインストールします。
以下のコマンドでインストールし、デフォルトのバージョンを設定します。

```bash

$ pyenv install 3.7.4
$ pyenv global 3.7.4

```

pyenv でインストールした Python がデフォルトで使用され、

かつ適切なバージョンがデフォルトで使用される事を以下のように確認します。

```bash

$ which python
/Users/hogehoge/.anyenv/envs/pyenv/shims/python
$ python --version
Python 3.7.4

```

<attention>
pyenv で導入した Python が確実に使用される事を担保するため、
whichコマンドによるパスの確認も実施します。
</attention>

## 4． 動作確認

以下のコマンドで、Python のインタラクティブシェルを起動します。

```bash

$ python
Python 3.7.4 (default, Jul 11 2019, 00:04:55)
[Clang 10.0.1 (clang-1001.0.46.4)] on darwin
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
>>>

```

プロンプトに続いて、下記のコードを入力し、Enter を押下し、メッセージが表示されれば、
Python 環境の正常動作確認は完了です。

```bash

>>> print(`Hello, World`)
Hello, World
>>>

```

以上で、MacOSX への Python 開発環境構築手順は終了です。

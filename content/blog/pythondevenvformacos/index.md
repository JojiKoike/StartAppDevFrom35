---
title: Python開発環境構築 （MacOS編）
date: 2018-01-06T00:02:58.000Z
category : 
description: MacOSにHomebrewを使って、開発するアプリごとに使用するバージョンを選択可能な、Python開発環境を構築する手順をご紹介いたします。
tags: ['Mac', 'pyenv', 'Python']
thumbnail:
hero:
---

# 改訂内容
<ul>
 	brewではなく、anyenvを使ってpyenvを導入する方式に変更。
 	動作確認の方法を変更。
</ul>
# 本レッスンのゴール
Python3系の開発環境を構築し、簡単なプログラムによる動作確認をとる。
# 想定環境
以下の環境を想定しています。

OS : MacOSX Mojave （バージョン 10.14.6）
# 前提条件
<ul>
 	anyenvがインストールされている事。
</ul>
<div class="attention">

anyenvのインストール方法については、以下のリンク先を参照して下さい。
<ul>
 	<a href="https://startappdevfrom35.com/anyenv_install/" target="_blank" rel="noopener noreferrer">anyenvのインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	pyenvのインストール
 	環境変数の設定
 	Pythonのインストール
 	動作確認
</ol>
# インストール作業
## 1． pyenvのインストール
端末で以下のコマンドを実行します。

```
$ anyenv install pyenv
```"

以下のコマンドでバージョンコードが出力されれば、pyenvのインストールは成功です。

```
$ pyenv --version
pyenv 1.2.13-12-g8a56fe64
```"

## 2． 環境変数の設定
pyenvで設定したPythonをデフォルトで使うよう、環境変数を設定、反映します。
<ul>
 bashな方
</ul>

```
$ echo 'eval &quot;$(pyenv virtualenv-init -)&quot;' &gt;&gt; ~/.bash_profile
$ source ~/.bash_profile
```"

<ul>
 zshな方
</ul>

```
$ echo 'eval &quot;$(pyenv virtualenv-init -)&quot;' &gt;&gt; ~/.zshrc
$ source ~/.zshrc
```"

## 3． Pythonのインストール
以下のコマンドで、インストール可能なPythonのバージョンを確認します。

```
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
```"

今回は、2019年9月21日現在の最新安定板3.7.4をインストールします。
以下のコマンドでインストールし、デフォルトのバージョンを設定します。

```
$ pyenv install 3.7.4 
$ pyenv global 3.7.4 
```"

pyenvでインストールしたPythonがデフォルトで使用され、<br/>
かつ適切なバージョンがデフォルトで使用される事を以下のように確認します。

```
$ which python
/Users/hogehoge/.anyenv/envs/pyenv/shims/python
$ python --version
Python 3.7.4
```"

<div class="attention">
python --versionだけでも確認は十分かと思われますが、
pyenvで導入したPythonが確実に使用される事を担保するため、
パスの確認も実施します。
</div>

## 4． 動作確認
以下のコマンドで、Pythonのインタラクティブシェルを起動します。

```
$ python
Python 3.7.4 (default, Jul 11 2019, 00:04:55)
[Clang 10.0.1 (clang-1001.0.46.4)] on darwin
Type &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.
&gt;&gt;&gt;
```"

プロンプトに続いて、下記のコードを入力し、Enterを押下し、メッセージが表示されれば、
Python環境の正常動作確認は完了です。

```
&gt;&gt;&gt; print(&quot;Hello, World&quot;)
Hello, World
&gt;&gt;&gt;
```"


以上で、MacOSXへのPython開発環境構築手順は終了です。

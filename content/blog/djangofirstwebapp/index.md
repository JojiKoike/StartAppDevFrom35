---
title: DjangoWebアプリ開発（はじめてのWebアプリ）
date: 2018-01-03T23:00:02.000Z
category : 
description: Djangoを用いた初めてのWebアプリとして、ChromeなどのブラウザにURLを打ち込み、アクセスするとブラウザに文字が表示されるアプリケーションを作ります。
tags: ['View', 'ルーティング']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	ChromeなどのブラウザにURLを打ち込み、アクセスするとブラウザに文字が表示される。
</ul>
# 前提条件
<ul>
 	Djangoプロジェクトを作成済みである事
</ul>
<div class="attention">

Djangoプロジェクトの作成方法については、以下をご参照ください。
<ul>
 	<a href="https://startappdevfrom35.com/djangowebappdevprepare/">Djangoプロジェクト作成</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	アプリ作成の足場作り
 	Viewの実装
 	ルーティングの実装
 	動作確認
</ol>
# 作業
## 1. アプリ作成の足場作り
<div class="attention">以下、PyCharmを使うものとして説明を進めます。</div>
<div>PyCharmでプロジェクトルートディレクトリ（manage.pyがあるディレクトリ）を開き</div>
<div>PyCharmのTerminalで以下のコマンドを実行します。</div>

```
$ python manage.py startapp myapp
```"

<div class="point">myappはアプリ名で、自由に設定出来ます。ここでは、myappとして解説を進めます。</div>
<div>myappディレクトリ以下に、以下のようにディレクトリとファイルが生成されていれば、</div>
<div>アプリ作成の足場作りは完了です。</div>
<div></div>
<div> <img class="alignnone wp-image-252 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/734bd9b81e25fdbf39f4ffa7aae53aa6.png" alt="" width="315" height="404" /></div>
## 2. Viewの実装
次に、ブラウザから何らかのURLでアクセスした時に、画面に文字を表示する機能を実装します。
<span class="highlight">myappディレクトリ直下のview.pyファイル</span>に、以下の内容を記述します。

[python]
from django.http import HttpResponse


def index(request):
    return HttpResponse(&quot;test&quot;)

[/python]

## 3. ルーティングの実装
このままでは、先ほど実装したViewに対してどういったURLでアクセスすれば良いのかわかりません。
そこで次に、ルーティングの実装を行います。
ルーティングとは、<span class="highlight">URLとViewの紐付けを定義</span>する事です。
たとえば、http://localhost/というURLのアクセスに対して、
先ほど実装したindex(request)メソッドで定義したViewを表示する、
といった事を定義します。

まず、アプリケーション用のルーティング定義ファイルを作成します。
下図のように、<span class="highlight">myappディレクトリ直下</span>に、<span class="highlight">urls.py</span>という名前でPythonファイルを新規に作成します。

<img class="alignnone wp-image-261 size-full" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/c290cd47ebe3bffab6b038914627a1b8.png" alt="" width="929" height="555" />

作成したurls.pyファイルに、以下のコードを記述します。

[python]
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
[/python]

最後に、先ほど実装したurl.pyがサーバー起動時に読み込まれるように、
プロジェクト直下のurls.pyファイルに、先ほど定義したurls.pyへのPathを追加します。

[python]
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('myapp/', include('myapp.urls')),
    path('admin/', admin.site.urls),
]
[/python]

以上で、ルーティングの実装は完了です。
<div></div>
## 4. 動作確認
続いてPyCharmのTerminalにて以下のコマンドを実行し、

Django組み込みのテスト用サーバーを起動します。

```
$ cd mysite
$ python manage.py runserver
```"

ブラウザを起動して<span class="highlight">http://127.0.0.1:8000/myapp</span>にアクセスし、
以下のような画面が表示されれば、動作確認完了です。

<img class="alignnone wp-image-268 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/04/8745672f3ff267501f52fbccae3b2219-1024x613.png" alt="" width="747" height="447" />

&nbsp;

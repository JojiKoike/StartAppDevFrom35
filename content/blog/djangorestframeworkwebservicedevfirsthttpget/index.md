---
title: Django REST frameworkによるWebサービス開発（はじめてのGET）
date: 2018-01-01T23:41:32.000Z
category : 
description: Django REST frameworkを使って、URLに応じて文字を返すGETメソッドを実装する手順をご紹介します。
tags: ['Django REST framework', 'GET']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	URLに応じて文字を返すGETメソッドを実装する。
</ul>
<div class="point">

GET, POSTとはHTTPのメソッドで、主な用途は以下の通りです。
<ul>
 	<strong>GET</strong> : （サーバー等から）情報を取得
 	<strong>POST</strong> : （データベース等に）新規に情報を生成
</ul>
</div>
# 前提条件
<ul>
 	Django REST frameworkによるWebサービス開発の足場作りが完了している事。
</ul>
<div class="attention">

手順は、以下をご参照下さい。
<ul>
 	<a href="https://startappdevfrom35.com/djangorestframeworkwebservicedevprepare/">Django REST frameworkによるWebサービス開発の足場作り</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	<strong>アプリケーションベースの作成</strong>
 	<strong>プロジェクトの設定</strong>
 	<strong>Viewの実装</strong>
 	<strong>ルーティングの実装</strong>
 	<strong>動作確認</strong>
</ol>
# Exercise
## 1. アプリケーションベースの作成
PyCharmを起動して、<a href="https://startappdevfrom35.com/djangorestframeworkwebservicedevprepare/">Django REST frameworkによるWebサービス開発の足場作り</a>で作成した
プロジェクトのフォルダーを開き、以下のような画面を表示します。

<img class="alignnone wp-image-619 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/7ebd9a082fdf35e516aab69d94c278a9-1024x640.png" alt="" width="747" height="467" />

次に、Terminalで、以下のコマンドを実行します、

```
$ cd myservice
$ python manage.py startapp myrestapi
```"

<div class="point">myrestapiはアプリ名です。任意の名前を設定可能です。</div>
<div>以下の様に、myrestapiフォルダーとその下に関連ファイルが生成されていれば</div>
<div>アプリケーションベースの作成は完了です。</div>
<div></div>
<div><img class="alignnone size-large wp-image-657" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/d9627d9bf28778e00fc69b8c6ead78e1-1024x478.png" alt="" width="747" height="349" /></div>
## 2. プロジェクトの設定
次に、myservice/settings.pyを開き、INSTALLED_APPSに、
これから作成するアプリケーションのエントリーを以下の様に追加します。

[python]
...
INSTALLED_APPS = [
    'myrestapi.apps.MyrestapiConfig',
    'rest_framework',
    ...
]
...
[/python]

以上で、プロジェクトの設定は完了です。
## 3. Viewの実装
次に、Viewを実装します。Viewの実装には、クラスベースと関数ベースの２通りがあります。
両者のメリット、使い分け等詳しくは後々解説いたします。
今の時点では、Viewの実装にはこれら２つの方法があるという事を頭の片隅に置いておいてください。
今回はそれぞれの方法で実装してみます。
myrestapi/views.pyに以下のコードを実装してください。

[python]
rom rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response


class HelloWorld(APIView):
    &quot;&quot;&quot;
    クラスベースのAPIViewです。
    &quot;&quot;&quot;
    def get(self, request, format=None):
        return Response({&quot;message&quot;: &quot;Hello Class base APIView!!&quot;})


@api_view()
def hello_world(request):
    &quot;&quot;&quot;
    関数ベースのAPIViewです。
    &quot;&quot;&quot;
    print(request)
    return Response({&quot;message&quot;: &quot;Hello function base APIView!!&quot;})

[/python]

以上で、Viewの実装は完了です。
## 4. ルーティングの実装
次に、URLとViewを結びつけるために、ルーティングの実装を行います。
myrestapiフォルダー直下に、urls.pyファイルを作成し、以下のコードを実装してください。

[python]
from django.urls import path

from . import views

urlpatterns = [
    path('', views.hello_world, name='hello'),
    path('hello', views.HelloWorld.as_view(), name='test-get')
]
[/python]

次に、上記ファイルの内容を読み込むため、myservice/urls.pyに以下のコードを実装してください。

[python]
...
from django.urls import path, include

urlpatterns = [
    path('myrestapi/', include('myrestapi.urls')),
    path('admin/', admin.site.urls),
]
[/python]

以上で、ルーティングの実装は完了です。
## 5. 動作確認
Terminalにて以下のコマンドでテスト用サーバーを起動します。

```
$ python manage.py runserver
```"

ブラウザを立ち上げ、http://127.0.0.1:8000/myrestapiにアクセスすると
以下のような画面が表示されるかと思います。

<img class="alignnone wp-image-680 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/37b25574432c1b1b86ad2814c5f4a0f3-1024x500.png" alt="" width="747" height="365" />

<img class="alignnone wp-image-667 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/f288b256f9404d59336ee0a580db123a-1024x544.png" alt="" width="747" height="397" />

最後に、http://127.0.0.1:8000/myrestapi/helloにアクセスしてみてください。
次のような画面が表示されるかと思います。

<img class="alignnone wp-image-669 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/ac77fb06cb35b632f92e57f2a17f4d2f-1-1024x544.png" alt="" width="747" height="397" />

以上で、本レッスンを終了します。

&nbsp;

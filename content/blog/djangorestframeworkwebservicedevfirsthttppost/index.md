---
title: Django REST frameworkによるWebサービス開発（はじめてのPOST）
date: 2018-01-04T05:48:53.000Z
category : 
description: Django REST frameworkを使ってPOSTに対応した簡単なWebAPIを実装する方法をご紹介いたします。
tags: ['Django REST framework', 'POST']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	POSTに対応した簡単なWebAPIを実装する。
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
 	アプリケーションベースが既に作成済みである事。
</ul>
<div class="attention">

それぞれの手順は、以下をご参照ください。
<ul>
 	<a href="https://startappdevfrom35.com/djangorestframeworkwebservicedevprepare/">Django REST frameworkによるWebサービス開発の足場作り</a>
 	<a href="https://startappdevfrom35.com/djangorestframeworkwebservicedevfirsthttpget/">アプリケーションベースの作成</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	Viewの実装
 	動作確認
</ol>
# アクション
## 1. Viewの実装
<a href="https://startappdevfrom35.com/djangorestframeworkwebservicedevfirsthttpget/">こちら</a>で実装したmyrestapi/views.pyに、以下のコードを実装します。

[python]
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rest_framework import status


class HelloWorld(APIView):
    &quot;&quot;&quot;
    クラスベースのAPIViewです。
    &quot;&quot;&quot;
    def get(self, request, format=None):
        return Response({&quot;message&quot;: &quot;Hello World!!&quot;},
                        status=status.HTTP_200_OK)

    def post(self, request, format=None):
        request_data = request.data
        return Response({&quot;message&quot;: request_data[&quot;message&quot;]},
                        status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def hello_world(request):
    &quot;&quot;&quot;
    関数ベースのAPIViewです。
    &quot;&quot;&quot;
    if request.method == 'GET':
        return Response({&quot;message&quot;: &quot;Hello function base APIView GET!!&quot;},
                        status=status.HTTP_200_OK)
    elif request.method == 'POST':
        if request.data:
            request_data = request.data
            return Response({&quot;message&quot;: request_data[&quot;message&quot;]},
                            status=status.HTTP_201_CREATED)

[/python]

主な追加実装内容は、POSTでのアクセスに対応する処理と、レスポンスコードの指定です。

ここまでで、Viewの実装は完了です。
## 3. 動作確認
Terminalにて以下のコマンドでテスト用サーバーを起動します。

``` $ python manage.py runserver ```"

ブラウザを起動し、http://127.0.0.1:8000/myrestapiにアクセスすると
以下のような画面が表示されます。

<img class="alignnone wp-image-676 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/b54f81246b95a47d857a183fd6a20eda-1024x524.png" alt="" width="747" height="382" />

次に、Contentのテキストボックスに以下のように入力してPOSTボタンを押下します。

<img class="alignnone size-large wp-image-690" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/de46b47c32c9d7ba0ccb09827285a409-1024x345.png" alt="" width="747" height="252" />

&nbsp;

すると、以下のような画面が表示されるかと思います。

<img class="alignnone wp-image-691 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/74fb36e9a85ab5a3340e0fa193ad3f07-1024x179.png" alt="" width="747" height="131" />

&nbsp;

これで、関数ベースのAPIViewのPOSTの動作確認は完了です。
次に、クラスベースのAPIViewの動作確認を行います。
http://127.0.0.1:8000/myrestapi/helloにアクセスしてください。

<img class="alignnone size-large wp-image-686" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/1ee90be819483478a77c7f2a11cfee26-1024x500.png" alt="" width="747" height="365" />

Contentに以下のように入力してPOSTを押下します。

<img class="alignnone size-large wp-image-692" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/3bca8625cdaa1256d5e6313b0eb4f487-1024x335.png" alt="" width="747" height="244" />

&nbsp;

すると、以下のような画面が表示されるかと思います。

<img class="alignnone size-large wp-image-693" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/ae4c890308065589a5aaa3787313517d-1024x180.png" alt="" width="747" height="131" />

&nbsp;

これで、クラスベースのAPIViewのPOSTの動作確認完了です。

以上で、POSTの動作確認は終了です。

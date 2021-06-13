---
title: DjangoWeb アプリ開発（はじめてのWebDBアプリ：UI実装）
date: 2018-01-02T05:50:41.000Z
category : 
description: ブラウザーからの入力値をDBに保存する、DBに登録されたデータをブラウザーに表示する簡単なWebアプリケーションを作成する手順をご紹介いたします。
tags: ['View', 'テンプレート']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	DBへの新規登録、参照のUIを実装し、Webアプリの形をざっくり作る。
</ul>
# 前提条件
<ul>
 	（必須）Modelを実装し、DBにマイグレーション済みである事。
 	（推奨）Django AdminからDBの操作が出来るようになっている事。
</ul>
<div class="attention">

それぞれの手順は、以下のリンク先をご参照ください。
<ul>
 	<a href="https://startappdevfrom35.com/djangofirstdbappdbbuild/">Modelの実装ならびにマイグレーション手順</a>
 	<a href="https://startappdevfrom35.com/firstdjangoadmin/">Django AdminからのDB操作を出来るようにする手順</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	テンプレートの実装
 	Viewの実装
 	ルーティング設定
 	動作確認
</ol>
# 作業
## 1. テンプレートの実装
DjangoにおけるUIの生成は、テンプレートに対して値を埋め込む形で生成されます。
ここでは、費目と金額を入力して収入を記録し、一覧を表示する画面を想定します。
まず、以下のように、<span class="highlight">myapp/templates/myappに、index.html</span>を作成します

<img class="alignnone wp-image-433 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/3e7ce8449711c5fbe6b12f2ff754ed35-1024x434.png" alt="" width="747" height="317" />

これがテンプレートファイルです。このファイルに、以下のようにテンプレートを実装します。

[html]
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;jp&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;



&lt;form action=&quot;{% url 'myapp:income' %}&quot; method=&quot;post&quot;&gt;
{% csrf_token %}
    収入費目：
    &lt;select name=&quot;income_category&quot;&gt;
        {% for income_category in income_category_list %}
&lt;option value=&quot;{{income_category.id}}&quot;&gt;
            {{income_category.name}}
        &lt;/option&gt;
        {% endfor %}
    &lt;/select&gt;
    金額：
    &lt;input type=&quot;number&quot; name=&quot;income_amount&quot;&gt;
    &lt;input type=&quot;submit&quot; value=&quot;登録&quot;&gt;
&lt;/form&gt;

&lt;table&gt;
　　　　　　　　&lt;tr&gt;&lt;th&gt;年月日&lt;/th&gt;&lt;th&gt;費目&lt;/th&gt;&lt;th&gt;金額&lt;/th&gt;&lt;/tr&gt;
    {% if income_record_list %}
        {% for income_record in income_record_list %}                  
　　　　　　　　　　　　　　　　　　&lt;tr&gt;       
　　　　　　　　　　　　　　　　　　　　　　&lt;td&gt;{{income_record.ymd}}&lt;/td&gt;      
　　　　　　　　　　　　　　　　　　　　　　&lt;td&gt;{{income_record.category}}&lt;/td&gt;      
　　　　　　　　　　　　　　　　　　　　　&lt;td&gt;{{income_record.amount}}&lt;/td&gt;
   　　　　　　　　　　　&lt;/tr&gt;
        {% endfor %}
    {% endif %}
&lt;/table&gt;

&lt;/body&gt;
&lt;/html&gt;
[/html]

これでテンプレートは実装完了です。
## 2. Viewの実装
次に、1.で実装したテンプレートを使って、
<ul>
 	ブラウザーの入力をDBに登録する
 	DBに登録されたデータをブラウザーに表示する
</ul>
処理を実装します。
views.pyに、以下のコードを実装してください。

[python]
from django.http import HttpResponse
from django.template import loader

from .models import IncomeCategory, Income


def index(request):

    # 収入費目リストを取得
    income_category_list = IncomeCategory.objects.all()

    if request.method == 'POST':
        # 収入費目を取得
        income_category = IncomeCategory.objects.get(pk=request.POST['income_category'])

        income_amount = request.POST['income_amount']
        income = Income(amount=income_amount, incomecategoryid=income_category)
        income.save()

    # 収入記録データを取得
    income_record_list = Income.objects.all()
    
    # HTMLテンプレートオブジェクトを取得
    template = loader.get_template('myapp/index.html')
    
    # テンプレートの表示に使うデータ
    context = {
        'income_category_list': income_category_list,
        'income_record_list': income_record_list,
    }

    return HttpResponse(template.render(context, request))

[/python]

これで、Viewの実装は完了です。
## 3. ルーティングの設定
URLとViewを紐付けるため、url.pyに、以下のコードを実装します。

[python]
from django.urls import path

from . import views

app_name = 'myapp'
urlpatterns = [
    path('', views.index, name='index'),
]
[/python]

以上でルーティングの設定は完了です。

## 4. 動作確認
最後に、動作確認を行います。
manage.pyのあるディレクトリで、以下のコマンドを実行します。

```
$ python manage.py runserver
```"

次に、ブラウザを起動し、http://127.0.0.1:8000/myappにアクセスします。
以下のような画面が表示されればOKです。

<img class="alignnone wp-image-464 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-27-Title-http___127.0.0.1_8000_myapp_-1024x562.png" alt="" width="747" height="410" />

次に、収入費目を選択し、金額を入力して「登録」ボタンを押下します。

以下のような画面が表示されれば、動作確認完了です。

<img class="alignnone wp-image-465 size-large" src="https://startappdevfrom35.com/wp-content/uploads/2018/05/FireShot-Capture-28-Title-http___127.0.0.1_8000_myapp_-1024x526.png" alt="" width="747" height="384" />


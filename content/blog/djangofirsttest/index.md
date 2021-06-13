---
title: DjangoWebアプリ開発（はじめてのテスト）
date: 2018-01-04T05:00:10.000Z
category : 
description: Djangoにおけるテストコードの実装から実行までの手順をご紹介いたします。
tags: ['Django', 'Test', 'テスト']
thumbnail:
hero:
---

# 本レッスンのゴール
<ul>
 	Modelの単体テストコードを実装し、動かし、結果を得る
</ul>
# 前提条件
<ul>
 	Modelの実装が完了していること。
</ul>
<div class="attention">

Modelの実装手順については、以下をご参照ください。
<ul>
 	<a href="https://startappdevfrom35.com/djangofirstdbappdbbuild/">Modelの実装手順</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	単体テストコードの実装
 	テスト実行
</ol>
# 作業
## 1. 単体テストコードの実装
今回は、<a href="https://startappdevfrom35.com/djangofirstdbappdbbuild/">こちら</a>で作成したIncomeCategoryクラス並びに
Incomeクラスの単体テストコードを実装します。確認したい事は次の３点です。
<ul>
 	正しくIncomeCategoryに値が設定されるか
 	正しくIncomeに値が設定されるか
 	IncomeCategoryの指定なしでIncomeを登録できない事
</ul>
これらをテストするコードを、myapp/tests.pyに以下の様に実装します。

[python]
from django.test import TestCase
from django.db.utils import IntegrityError

from .models import IncomeCategory, Income


class IncomeCategoryTestClass(TestCase):
    def test_was_registered_correctly(self):
        income_category = IncomeCategory(name=&quot;給与&quot;)
        income_category.save()
        self.assertEqual(income_category.name, &quot;給与&quot;)


class IncomeTestClass(TestCase):
    def test_was_registered_correctly(self):
        &quot;&quot;&quot;
        Income : 正常に登録できる。
        &quot;&quot;&quot;
        income_category = IncomeCategory(name=&quot;給与&quot;)
        income_category.save()
        income = Income(amount=10000, incomecategoryid=income_category)
        income.save()
        self.assertEqual(income.incomecategoryid.name, &quot;給与&quot;)
        self.assertEqual(income.amount, 10000)

    def test_failed_registration(self):
        &quot;&quot;&quot;
        Income : 登録時にエラーが発生する
        &quot;&quot;&quot;
        with self.assertRaises(IntegrityError):
            income = Income(amount=10000)
            income.save()
            self.assertEqual(income.amount, 10000)

[/python]

<div class="attention">
テストのメソッド名は必ずtestで始めるようにしてください。
</div>
以上で、テストコードの実装は完了です。
## 2. テスト実行
次に、manage.pyのあるディレクトリで、以下のコマンドを実行します。

```
$ python manage.py test myapp
```"

以下の様に出力されれば、全テストに合格です。

```
Creating test database for alias 'default'...
System check identified no issues (0 silenced).
...
----------------------------------------------------------------------
Ran 3 tests in 0.005s

OK
Destroying test database for alias 'default'...
```"

<div class="point">Creating test database.. , Destroying test database.. とあるように、
テストの都度、テスト用データベースを別に作成、破棄している事がわかります。
これにより、テストが実際のDBに変更を加える事を防ぎ、
安心して何度でもテストを回す事が出来ます。</div>

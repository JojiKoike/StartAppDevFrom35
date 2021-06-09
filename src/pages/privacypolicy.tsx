// If you don't want to use TypeScript you can delete this file!
import * as React from "react";
import { PageProps, graphql } from "gatsby";

import Layout from "../components/layout";

const UsingTypescript: React.FC<PageProps> = ({ location, ...props }) => (
  <Layout location={location}>
    <div className="container bg-white p-6 mb-2 max-w-6xl mx-auto rounded-md shadow-md">
      <h1 className="text-center text-lg sm:text-3xl">プライバシーポリシー</h1>
      <div className="text-left my-4">
        <h2 className="text-base sm:text-xl mb-1">1. 広告の配信について</h2>
        <p className="text-xs sm:text-base">
          当サイトは第三者配信の広告サービス「Google Adsense
          （グーグルアドセンス）」を利用しています。
          <br />
          広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
          <br />
          Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は
          <a
            href="http://www.google.co.jp/policies/technologies/ads/"
            target="_blank"
          >
            「広告 - ポリシーと規約 - Google」
          </a>
          をご覧ください。
          <br />
          第三者がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、
          <br />
          訪問者のブラウザにCookie（クッキー）を設定したりこれを認識したりする場合があります。
        </p>
      </div>
      <div className="text-left my-4">
        <h2 className="text-base sm:text-xl mb-1">
          2.アクセス解析ツールについて
        </h2>
        <p className="text-xs sm:text-base">
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          <br />
          このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
          <br />
          このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
          <br />
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、
          <br />
          お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは
          <a
            href="http://www.google.com/analytics/terms/jp.html"
            target="_blank"
          >
            こちらを確認
          </a>
          してください。
        </p>
      </div>
      <div className="text-left my-4">
        <h2 className="text-base sm:text-xl mb-1">
          3.当サイトへのメッセージについて
        </h2>
        <p className="text-xs sm:text-base">
          当サイトでは、スパム・荒らしへの対応として、メッセージ送信の際に使用されたIPアドレスを記録しています。
          <br />
          これはブログの標準機能としてサポートされている機能で、スパム・荒らしへの対応以外にこのIPアドレスを使用することはありません。
          <br />
          また、メールアドレスとURLの入力に関しては、任意となっております。
          <br />
          全てのメッセージは管理人が事前にその内容を確認し、承認した上で必要に応じて返答に応じる旨あらかじめご了承ください。
          <br />
          加えて、次の各号に掲げる内容を含むメッセージについては、法的手段含め、然るべき処置を取る場合がございます。
          <br />
          <ul className="list-disc ml-6 my-1">
            <li>特定の自然人または法人を誹謗し、中傷するもの。</li>
            <li>極度にわいせつな内容を含むもの。</li>
            <li>
              禁制品の取引に関するものや、他者を害する行為の依頼など、法律によって禁止されている物品、行為の依頼や斡旋などに関するもの。
            </li>
            <li>
              その他、公序良俗に反し、または管理人が弁護士等関係各所と相談の上、通報の必要があると判断されたもの。
            </li>
          </ul>
        </p>
      </div>
      <div className="text-left my-4">
        <h2 className="text-base sm:text-xl mb-1">4.免責事項</h2>
        <p className="text-xs sm:text-base">
          当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。
          <br />
          権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、
          <br />
          各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。
          <br />
          当サイトからリンクやバナーなどによって他のサイトに移動された場合、
          <br />
          移動先サイトで提供される情報、サービス等について一切の責任を負いません。
          <br />
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、
          <br />
          誤情報が入り込んだり、情報が古くなっていることもございます。
          <br />
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
      </div>
      <p className="text-xs sm:text-base text-center sm:text-left">以上</p>
    </div>
  </Layout>
);

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

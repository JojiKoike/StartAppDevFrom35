// If you don't want to use TypeScript you can delete this file!
import * as React from "react";
import { PageProps, graphql } from "gatsby";

import Layout from "../components/layout";

const UsingTypescript: React.FC<PageProps> = ({ location, ...props }) => (
  <Layout location={location}>
    <div className="container bg-white p-6 mb-2 max-w-6xl mx-auto rounded-md shadow-md">
      <h1 className="text-center text-lg sm:text-3xl">About</h1>
      <div className="text-left my-4">
        <h2 className="text-base sm:text-xl mb-1">1.このサイトについて</h2>
        <p className="text-xs sm:text-base">
          IT業界ではよく、「３５才エンジニア限界説」と言われていますが、
          中の人、この説の真逆を行くエンジニアライフを歩んでいます。
          <br />
          34で職業プログラマデビュー、
          <br />
          以降、JavaによるAndroidアプリの開発を皮切りに、
          最近はAWSを活用したビッグデータ分析基盤構築など、
          <br />
          様々な開発を経験させて頂いております。
          <br />
          どんなアプリケーションを開発しても感じた事、
          それは、自分で設計し、実装し、動いた時の感動は何物にも代え難い事。
          <br />
          プログラマの特権とも言えるでしょう。
          その機会が３５才で閉ざされてしまうなんて、もったいない。
          <br />
          このブログのタイトル、 「Start App Dev from
          35.」（３５からアプリ開発始めよう） には、
          <br />
          何故か３５で壁を作られているような状況をなんとか打破したい
          と言う思いが込められています。
          <br />
          あと、そもそもプログラムって、英語などと同じで、
          形にしたい事があって初めて活きるものだと思うのです。
          <br />
          年齢重ねている分、知見、課題の蓄積と、形にしたい事ってあると思う。
          <br />
          プログラム技術の面から、形にするお手伝いをしたいと考えています。
          末長く、お付き合い頂けたら幸いです。
        </p>
      </div>
      <div className="text-left my-4">
        <h2 className="text-base sm:text-xl mb-1">2.記事作成ポリシー</h2>
        <p className="text-xs sm:text-base">
          当サイトでは、
          <br />
          <strong>
            プログラム初心者および、入門書などで挫折した方々が、
            <br />
            DX時代の武器、プログラミング技術をいかに苦痛なく習得できるか
          </strong>
          をキーコンセプトに、
          <br />
          <ul className="list-disc ml-6 my-1">
            <li>
              <span className="highlight">手を動かし（Programming)</span>
            </li>
            <li>
              <span className="highlight">アプリを動かして (Execute)</span>
            </li>
            <li>
              <span className="highlight">
                頭を動かして理論を理解 (Understand)
              </span>
            </li>
          </ul>
          の<strong>３つの動かす</strong>
          をポリシーとして、記事作成を行って参ります。
          <br />
          大抵の入門書が黒い画面に出力させて、、、ってなところから入ると思うんですが、、
          <br />
          中の人の経験として、、、あれで勉強した事って、使えないし、覚えてない。
          <br />
          理由は以下の２つと考えています。
          <ul className="list-disc ml-6 my-1">
            <li>
              プログラムの文法事項ってある程度のまとまりのある事象の中でこそ活きる知識だから、
            </li>
            <li>コンソールなんて普段馴染みのないツールに表示させている事。</li>
          </ul>
          例えば、Hello,World!!って文字をコンソールに表示させる、って単体の事象を取り上げるより、
          <br />
          ブラウザ立ち上げて、URL打ち込んで、ブラウザに文字が表示される、
          <br />
          って位まとまりのある事象の方が頭に入ってきやすいし、
          <br />
          ブラウザーという普段使い慣れたツールを使っている分、
          <br />
          親近感があって、頭にも残りやすいと中の人は考えています。
          <br />
          実際に仕事に入れば、いくらでも大変な事あります。
          <br />
          でも、その苦労を、初学者、
          ましてやITのまだ世界に来られてない方々に体験させる必要などないと思います。
          <br />
          尚、記事作成にあたり、以下のマシンで動作確認しております。
          <ul className="list-disc ml-6 my-1">
            <li>
              Mac : MacBook Pro 2012Mid, Core i5, 10GB RAM, 256GB SSD, High
              Sierra
            </li>
            <li>
              Windows : 自作マシン、Core i7, 16GB RAM, 256GB SSD, Windows10
              (Fall Creators Update)
            </li>
          </ul>
          * Windowsは環境構築関連記事のみ。
          <br />
          動作確認の上、記事作成を行なっておりますが
          <br />
          不具合、誤記、ご質問等ございましたら
          <a href="https://startappdevfrom35.com/contact/">こちら</a>
          までご連絡頂ければ幸いです。
        </p>
      </div>
      <div className="text-left my-4">
        <div className="my-2">
          <h2 className="text-base sm:text-xl mb-1">3.中の人について</h2>
          <h3 className="text-sm sm:text-lg mb-1">履歴</h3>
          <p className="text-xs sm:text-base">
            197X年生まれ、男性。関東エリアのどこかに在住。
            2児の父親。感覚派理系男子。
            <br />
            学生時代の研究（数値流体シミュレーションソフトウェアの開発）
            でプログラミングの楽しさに目覚めるも、
            <br />
            しばらくプログラミングとは縁のない生活を歩む。
            <br />
            が、、2011年頃に縁あってAndroidアプリ開発に携わる事になり、
            <br />
            そこでプログラミングの楽しさを再認識。
            以来、以下プログラミング経験にのべるような開発経験の傍ら、
            <br />
            自身のITスキル拡大と深化に励む。
          </p>
        </div>
        <div className="my-2">
          <h3 className="text-sm sm:text-lg mb-1">プログラミング経験</h3>
          <p className="text-xs sm:text-base">
            Androidアプリから4TBメモリ、1,000コア並列演算環境等、
            <br />
            幅広い動作環境でのプログラミングを経験をもつ、
            <br />
            現役のアプリケーションエンジニア。
            <br />
            フルスクラッチ開発が好き。
            <br />
            アプリ側だけじゃなく、インフラも必要に応じて設計、実装まで行う。
            <br />
            BtoBもBtoCも両方経験したけど、
            <br />
            「このアプリの開発やってました」って実物見せながら話せるのはtoCの方が好き。
          </p>
        </div>
        <div className="my-2">
          <h3 className="text-sm sm:text-lg mb-1">最近夢中な事</h3>
          <p className="text-xs sm:text-base">
            バックエンドならPython, Scala, Go, フロントエンドならNext.js <br />
            DevOps系なら覚えたてのDocker。
            <br />
            今特に熱いのはアルゴリズムとデータ構造。
            <br />
            PaizaのSランクを取る事が当面の目標。
            <br />
            （現在、Bランク、言語マスターシルバー:Scala,Python3、言語マスターブロンズ:Golang）
          </p>
        </div>
        <div className="my-2">
          <h3 className="text-sm sm:text-lg mb-1">基本的な考え、好物など</h3>
          <p className="text-xs sm:text-base">
            スキルアップというと、どうしても資格を思い浮かべるかもしれませんが、、
            <br />
            確かに、応用情報技術者、Java SE7
            GoldをはじめとするIT系資格を全部で、、
            <br />
            何個かとってるけど、今は完全に資格否定論者。
            <br />
            勉強に費やす時間でアプリ作った方がずっと手っ取り早く、
            深いスキルが身につく事に気づいたのは、ここ１年くらい。
            <br />
            もし、未経験からITの世界に入りたいが、どうすればいいか、
            この問いに対する私の答えはたった一つ。
            <br />
            <del>「基本情報技術者を受けて」</del>
            <br />「
            <strong>
              Githubのアカウントを作って毎日なんでもいいからコードをPUSHしてください。
            </strong>
            」 <br />
            （デロリアンに乗って昔の自分に言ってやりたい、、）
            <br />
            メンタルそんなに強くないので、その通りだよなぁって内容でガツンと言われると{" "}
            <br />
            ３日位体育座りで泣いてます。（そして修正します）。
            <br />
            無類のサウナ好きで、箱根湯寮でロウリュウを体験して以来すっかりやみつきになってる。
          </p>
        </div>
        <div className="my-2">
          <h3 className="text-sm sm:text-lg mb-1">将来の夢</h3>
          <p className="text-xs sm:text-base">
            箱根に住み、コードを書き、必要な時だけロマンスカーで都心へ出る、
            <br />
            ラッシュによる疲弊とは無縁、 Face to
            Face以外の多様なコミュニケーション形態が当たり前に存在する、
            <br />
            そんな、誰もが働き方に選択肢をもつ、
            <br />
            ストレスフリーな環境で働ける世界を構築する一助になりたい。
          </p>
        </div>
      </div>
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

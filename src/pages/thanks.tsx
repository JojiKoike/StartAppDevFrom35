import React from "react";
import { Link, PageProps } from "gatsby";

import { Layout } from "../components";

const ThanksPage: React.FC<PageProps> = ({ location, ...props }) => (
  <Layout location={location}>
    <div className="container bg-white p-6 mb-2 max-w-6xl mx-auto rounded-md shadow-md">
      <h1 className="text-center text-lg sm:text-3xl">Thanks</h1>
      <p>メッセージ送信ありがとうございました。</p>

      <div className="flex justify-center sm:justify-end">
        <Link to={`/contact`} rel="contact">
          Contactへ戻る
        </Link>
      </div>
    </div>
  </Layout>
);

export default ThanksPage;

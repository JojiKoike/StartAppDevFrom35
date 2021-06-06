import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { WindowLocation } from "@reach/router";

interface LayoutProps {
  location: WindowLocation<unknown>;
}

const Layout: React.FC<LayoutProps> = ({ ...props }) => {
  const siteMetaData = useStaticQuery<GatsbyTypes.SiteMetaDataQuery>(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className="min-h-screen bg-yellow-50">
      <div className="container mx-auto max-w-full bg-blue-50 p-5">
        <header>
          <Link to="/">
            <h1 className="font-SiteTitle sm:text-xl md:text-3xl lg:text-4xl text-center">
              {siteMetaData.site?.siteMetadata?.title}
            </h1>
            <h2 className="text-xs antialiased sm:text-sm text-center">
              {siteMetaData.site?.siteMetadata?.description}
            </h2>
          </Link>
        </header>
      </div>

      <div className="text-center hidden sm:contents">
        <nav>ナビゲーション</nav>
      </div>

      <div className="text-center">Adv</div>

      <div className="container mx-auto px-5 my-2">
        <main>{props.children}</main>
      </div>

      <div className="text-center">Adv</div>

      <div className="container mx-auto my-3">
        <footer className="text-center">
          <span>
            © {new Date().getFullYear()},{` `}
          </span>
          <a href="https://startappdevfrom35.com/">Start App Dev From 35.</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Button } from "@material-ui/core";
import { WindowLocation } from "@reach/router";
import HorizontalBarAd from "./googleAdsense";
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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-full bg-blue-800 p-3 text-white">
        <header>
          <div className="text-center">
            <Link to="/">
              <h1 className="font-SiteTitle antialiased text-2xl sm:text-3xl">
                {siteMetaData.site?.siteMetadata?.title}
              </h1>
              <h2 className="antialiased text-sm sm:text-base">
                {siteMetaData.site?.siteMetadata?.description}
              </h2>
            </Link>
          </div>
        </header>
      </div>

      <div className="flex flex-col text-center">
        <h1>Adv</h1>
        <HorizontalBarAd />
      </div>

      <div className="container mx-auto px-5 my-2">
        <main>{props.children}</main>
      </div>

      <div className="mx-auto my-3 border-t">
        <footer>
          <div className="flex flex-col p-5">
            <div className="mx-auto text-sm md:text-base">
              <span>
                © {new Date().getFullYear()},{` `}
              </span>
              <Link
                className="text-blue-800 no-underline hover:text-blue-300 hover:underline"
                to={"/"}
              >
                Start App Dev From 35.
              </Link>
            </div>
            <div className="flex flex-row mx-auto my-1">
              <Link to={"/about"}>
                <Button className="text-xs md:text-sm">ABOUT</Button>
              </Link>
              <Link to={"/privacypolicy"}>
                <Button className="text-xs md:text-sm">
                  プライバシーポリシー
                </Button>
              </Link>
              <Link to={"/contact"}>
                <Button className="text-xs md:text-sm">お問い合わせ</Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

import * as React from "react";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";

type LayoutProps = { location: WindowLocation<unknown> } & { title: string };

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  //const rootPath = `${__PATH_PREFIX__}/`;
  //const isRootPath = location.pathname === rootPath;
  //let header;

  /*
  if (isRootPath) {
    header = (
      <h1 className="text-xl text-black font-medium">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }
  */

  return (
    <div className="min-h-screen bg-gray-100 p-3">
      <header className="container mx-auto px-4">
        <h1 className="text-4xl">
          <Link to="/">{title}</Link>
        </h1>
      </header>

      <div className="container mx-auto px-5 my-2">
        <main>{children}</main>
      </div>

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

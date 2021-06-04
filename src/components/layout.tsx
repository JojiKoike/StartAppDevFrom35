import * as React from "react";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";

type LayoutProps = { location: WindowLocation<unknown> } & { title: string };

const Layout: React.FC<LayoutProps> = ({ location, title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-full bg-white p-5">
        <header>
          <h1 className="text-3xl sm:text-4xl text-center">
            <Link to="/">{title}</Link>
          </h1>
        </header>
      </div>

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

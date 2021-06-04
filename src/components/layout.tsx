import * as React from "react";
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router";

//type LayoutProps = { location: WindowLocation<unknown> } & { title: string };

interface LayoutProps {
  title: string;
  description: string;
  location: WindowLocation<unknown>;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-full bg-white p-5">
        <header>
          <Link to="/">
            <h1 className="font-SiteTitle sm:text-xl md:text-3xl lg:text-4xl text-center">
              {title}
            </h1>
            <h2 className="text-xs antialiased sm:text-sm text-center">
              {description}
            </h2>
          </Link>
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

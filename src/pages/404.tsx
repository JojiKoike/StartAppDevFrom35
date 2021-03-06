import * as React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundQuery>> = ({
  data,
  location,
}) => {
  return (
    <Layout location={location}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

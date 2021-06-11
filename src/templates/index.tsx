import * as React from "react";
import { graphql, PageProps } from "gatsby";
import {
  Layout,
  Pagination,
  Seo,
  ArticleListItem,
  NoneArticle,
} from "../components";
import { ArticleListContext } from "../gatsby-node";

type ContextProps = {
  pageContext: ArticleListContext;
};

const BlogIndex: React.FC<
  PageProps<GatsbyTypes.BlogIndexQuery> & ContextProps
> = ({ data, location, ...props }) => {
  const posts = data.allMarkdownRemark.nodes;
  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <NoneArticle />
      </Layout>
    );
  }

  return (
    <Layout location={location}>
      <Seo title="StartAppDevFrom35:TopPage" type="website" />
      <h1 className="text-center text-lg sm:text-3xl">Articles</h1>
      {posts.map((post, idx) => {
        return (
          <ArticleListItem
            postTotalCount={posts.length}
            post={post}
            idx={idx}
          />
        );
      })}
      <div className="mt-5">
        <Pagination pageContext={props.pageContext} />
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
          category
          tags
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 270, height: 180, quality: 100)
            }
          }
          description
        }
      }
    }
  }
`;

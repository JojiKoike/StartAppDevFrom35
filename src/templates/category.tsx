import * as React from "react";
import { graphql, PageProps } from "gatsby";
import {
  Layout,
  Seo,
  Pagination,
  ArticleListItem,
  NoneArticle,
} from "../components";
import { ArticleListContext } from "../gatsby-node/index";

type ContextProps = {
  pageContext: ArticleListContext;
};

const BlogPosts: React.FC<
  PageProps<GatsbyTypes.BlogIndexQuery> & ContextProps
> = ({ data, location, ...props }) => {
  const posts = data.allMarkdownRemark.nodes;
  const category = props.pageContext.category!;

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <NoneArticle />
      </Layout>
    );
  }

  return (
    <Layout location={location}>
      <Seo
        title={`StartAppDevFrom35:CategoryPage:${category}`}
        type="website"
        path={`category/${category}`}
      />
      <h1 className="text-center text-lg sm:text-3xl">Category : {category}</h1>
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

export default BlogPosts;

export const pageQuery = graphql`
  query BlogPostsByCategory($skip: Int!, $limit: Int!, $category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
      filter: { frontmatter: { category: { eq: $category } } }
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

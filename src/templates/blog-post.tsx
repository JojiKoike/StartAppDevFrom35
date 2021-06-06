import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faFolderOpen,
  faTags,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.BlogPostBySlugQuery>
> = ({ data, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = data;

  return (
    <Layout location={location}>
      <Seo
        title={post!.frontmatter!.title!}
        description={post!.frontmatter!.description || post!.excerpt}
      />
      <div className="container bg-white p-6 mb-2 max-w-6xl mx-auto rounded-md shadow-md">
        <article itemScope itemType="http://schema.org/Article">
          <div className="text-left mb-2">
            <header>
              <h1 className="text-2xl sm:text-4xl mb-1" itemProp="headline">
                {post!.frontmatter!.title}
              </h1>
              <p className="text-xs sm:text-sm mb-1">
                <FontAwesomeIcon icon={faCalendarDay} /> :
                {post!.frontmatter!.date}
              </p>
              <p className="text-xs sm:text-sm mb-1">
                <FontAwesomeIcon icon={faFolderOpen} /> :
                {post!.frontmatter!.category}
              </p>
              <p className="text-xs sm:text-sm">
                <FontAwesomeIcon icon={faTags} /> :
                {post!.frontmatter!.tags?.join(",")}
              </p>
            </header>
          </div>

          <div className="text-sm sm:text-base">
            <section
              dangerouslySetInnerHTML={{ __html: post!.html! }}
              itemProp="articleBody"
            />
          </div>
        </article>
      </div>

      <div className="container max-w-6xl mx-auto">
        <nav className="flex justify-between">
          {previous && (
            <div className="bg-white hover:bg-gray-200 p-3 rounded-md shadow-md">
              <Link to={`/articles${previous.fields!.slug!}`} rel="prev">
                <FontAwesomeIcon icon={faChevronCircleLeft} className="mr-2" />
                {previous.frontmatter!.title}
              </Link>
            </div>
          )}
          {next && (
            <div className="bg-white hover:bg-gray-200 p-3 rounded-md shadow-md">
              <Link to={`/articles${next.fields!.slug!}`} rel="next">
                {next.frontmatter!.title}{" "}
                <FontAwesomeIcon icon={faChevronCircleRight} className="ml-2" />
              </Link>
            </div>
          )}
        </nav>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
        category
        tags

        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

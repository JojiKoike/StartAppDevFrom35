import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { Button } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faFolderOpen,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

import { Layout, Pagination, Seo } from "../components";
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
        <Seo title="Latest posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location}>
      <Seo title="Latest posts" />
      <h1 className="text-center text-lg sm:text-3xl">記事</h1>
      {posts.map(post => {
        const title = post.frontmatter!.title || post.fields!.slug;

        return (
          <Link
            to={`/articles${post.fields!.slug!}`}
            itemProp="url"
            key={post.id}
          >
            <article itemScope itemType="http://schema.org/Article">
              <div className="p-6 max-w-6xl mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-xl space-x-4 my-2">
                <div className="flex flex-col sm:flex-row place-items-center sm:place-items-start">
                  <div className="mx-0 my-2 sm:mx-2 sm:my-0 self-center">
                    <GatsbyImage
                      image={
                        post.frontmatter?.thumbnail?.childImageSharp
                          ?.gatsbyImageData!
                      }
                      alt={post.frontmatter!.title!}
                    />
                  </div>

                  <div className="flex flex-col mx-0 sm:mx-2">
                    <header>
                      <h1 className="text-xl lg:text-3xl">
                        <span itemProp="headline">{title}</span>
                      </h1>
                      <h2 className="text-xs lg:text-sm">
                        <FontAwesomeIcon icon={faCalendarDay} />：
                        {post.frontmatter!.date}
                      </h2>
                      <h2 className="text-xs lg:text-sm">
                        <FontAwesomeIcon icon={faFolderOpen} />：
                        <Link to={`/category/${post.frontmatter!.category}`}>
                          <span className="hover:text-gray-500">
                            {post.frontmatter!.category}
                          </span>
                        </Link>
                      </h2>
                      <h2 className="text-xs lg:text-sm">
                        <FontAwesomeIcon icon={faTags} /> :
                        {post.frontmatter?.tags?.map(tag => {
                          return (
                            <Link to={`/tag/${tag}`}>
                              <span className="ml-1 hover:text-gray-500">
                                {tag}
                              </span>
                            </Link>
                          );
                        })}
                      </h2>
                    </header>
                    <section>
                      <p
                        className="text-xs lg:text-base"
                        dangerouslySetInnerHTML={{
                          __html:
                            post.frontmatter!.description || post.excerpt!,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </div>
                </div>
              </div>
            </article>
          </Link>
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

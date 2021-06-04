import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faFolderOpen,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site!.siteMetadata?.title || `Title`;
  const siteDescription = data.site!.siteMetadata?.description!;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout
        location={location}
        title={siteTitle}
        description={siteDescription}
      >
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle} description={siteDescription}>
      <Seo title="All posts" />
      {posts.map(post => {
        const title = post.frontmatter!.title || post.fields!.slug;

        return (
          <Link to={post.fields!.slug!} itemProp="url" key={post.fields!.slug}>
            <article itemScope itemType="http://schema.org/Article">
              <div className="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-x-4 my-2">
                <div className="flex flex-col sm:flex-row place-items-center sm:place-items-start">
                  <div className="mx-0 my-2 sm:mx-2 sm:my-0 self-center">
                    <GatsbyImage
                      image={
                        post.frontmatter?.avatar?.childImageSharp
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
                        {post.frontmatter?.category}
                      </h2>
                      <h2 className="text-xs lg:text-sm">
                        <FontAwesomeIcon icon={faTags} /> :
                        {post.frontmatter?.tags?.join(",")}
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
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
          category
          tags
          avatar {
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

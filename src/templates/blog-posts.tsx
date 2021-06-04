import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faFolderOpen,
  faTags,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPosts: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
  ...props
}) => {
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
      {posts.map(post => {
        const title = post.frontmatter!.title || post.fields!.slug;

        return (
          <Link to={post.fields!.slug!} itemProp="url" key={post.id}>
            <article itemScope itemType="http://schema.org/Article">
              <div className="p-6 max-w-6xl mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-md space-x-4 my-2">
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
      <div className="px-11">
        <nav className="flex justify-between">
          <div className="bg-white hover:bg-gray-200 p-3 rounded-md shadow-md">
            <Link to={""} rel="prev">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span className="ml-2">前のページ</span>
            </Link>
          </div>
          <div className="bg-white hover:bg-gray-200 p-3 rounded-md shadow-md">
            <Link to={""} rel="next">
              <span className="mr-2">次のページ</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        </nav>
      </div>
    </Layout>
  );
};

export default BlogPosts;

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 0
      limit: 5
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

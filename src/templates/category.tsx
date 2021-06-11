import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faFolderOpen,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

import { Layout, Seo, Pagination, GoogleAdsense_Infeed } from "../components";
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
        <div className="flex flex-row mx-auto">
          <h1 className="text-red-500 text-2xl text-center">
            記事がありません
          </h1>
        </div>
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
        const title = post.frontmatter!.title || post.fields!.slug;

        return (
          <>
            <article
              itemScope
              itemType="http://schema.org/Article"
              key={post.id}
            >
              <div className="p-6 max-w-6xl mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-md space-x-4 my-2">
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
                      <Link
                        to={`/articles${post.fields!.slug!}`}
                        itemProp="url"
                        key={post.id}
                      >
                        <h1 className="text-xl lg:text-3xl">
                          <span itemProp="headline">{title}</span>
                        </h1>
                      </Link>
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
            {(posts.length == 6 && (idx == 1 || idx == 3)) ||
            (posts.length > 2 && posts.length < 6 && idx == 1) ? (
              <div className="max-w-6xl mx-auto my-3">
                <GoogleAdsense_Infeed />
              </div>
            ) : null}
          </>
        );
      })}
      <Pagination pageContext={props.pageContext} />
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

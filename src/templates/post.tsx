import * as React from "react";
import { createElement } from "react";
import rehypeReact from "rehype-react";
import { GatsbyImage } from "gatsby-plugin-image";
import unified from "unified";
import { Link, graphql, PageProps } from "gatsby";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PocketIcon,
  PocketShareButton,
  HatenaIcon,
  HatenaShareButton,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faFolderOpen,
  faTags,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  Layout,
  Seo,
  GoogleAdsense_InArticle,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  UL,
  OL,
  Point,
  Attention,
  Highlight,
} from "../components";

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.BlogPostBySlugQuery>
> = ({ data, location }) => {
  const post = data.markdownRemark;
  const title = post!.frontmatter!.title;
  const slug = post!.fields?.slug;
  const siteURL = data.site!.siteMetadata!.siteUrl;
  const articleURL = siteURL! + slug;
  const shareIconSize = 38;
  const { previous, next } = data;

  const renderAst = unified().use(rehypeReact, {
    createElement,
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: P,
      ul: UL,
      ol: OL,
      point: Point,
      attention: Attention,
      highlight: Highlight,
      adsense: GoogleAdsense_InArticle,
    },
  });

  return (
    <Layout location={location}>
      <Seo
        title={post!.frontmatter!.title!}
        description={post!.frontmatter!.description || post!.excerpt}
        type="article"
        path={slug?.replace("/", "")}
        imgSrc={post!.frontmatter?.hero?.childImageSharp?.original?.src}
        imgHeight={post!.frontmatter?.hero?.childImageSharp?.original?.height}
        imgWidth={post?.frontmatter?.hero?.childImageSharp?.original?.width}
      />
      <div className="container bg-white p-6 mb-2 max-w-6xl mx-auto rounded-md shadow-xl">
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
                <Link to={`/category/${post!.frontmatter!.category}`}>
                  <span className="hover:text-gray-500">
                    {post!.frontmatter!.category}
                  </span>
                </Link>
              </p>
              <p className="text-xs sm:text-sm">
                <FontAwesomeIcon icon={faTags} /> :
                {post!.frontmatter?.tags?.map(tag => {
                  return (
                    <Link to={`/tag/${tag}`}>
                      <span className="ml-1 hover:text-gray-500">{tag}</span>
                    </Link>
                  );
                })}
              </p>
            </header>
          </div>

          <div className="text-center my-3">
            <GatsbyImage
              image={post?.frontmatter?.hero?.childImageSharp?.gatsbyImageData!}
              alt={post?.frontmatter!.title!}
            />
          </div>

          <div className="text-sm sm:text-base">
            <div>{renderAst.stringify(post!.htmlAst!)}</div>

            <div className="flex flex-row justify-center mt-2">
              <div className="m-2">
                <TwitterShareButton url={articleURL} title={title}>
                  <TwitterIcon round size={shareIconSize} />
                </TwitterShareButton>
              </div>
              <div className="m-2">
                <FacebookShareButton
                  url={articleURL}
                  quote={post?.frontmatter?.description}
                >
                  <FacebookIcon round size={shareIconSize} />
                </FacebookShareButton>
              </div>
              <div className="m-2">
                <LinkedinShareButton
                  url={articleURL}
                  title={title}
                  summary={post?.frontmatter?.description}
                  source={post?.frontmatter?.description}
                >
                  <LinkedinIcon round size={shareIconSize} />
                </LinkedinShareButton>
              </div>
              <div className="m-2">
                <HatenaShareButton url={articleURL} title={title}>
                  <HatenaIcon round size={shareIconSize} />
                </HatenaShareButton>
              </div>
              <div className="m-2">
                <PocketShareButton url={articleURL} title={title}>
                  <PocketIcon round size={shareIconSize} />
                </PocketShareButton>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="container max-w-6xl mx-auto">
        <nav className="flex justify-between">
          {previous && (
            <div className="bg-white hover:bg-gray-200 p-3 rounded-md shadow-md">
              <Link to={`${previous.fields!.slug!}`} rel="prev">
                <FontAwesomeIcon icon={faChevronCircleLeft} className="mr-2" />
                {previous.frontmatter!.title}
              </Link>
            </div>
          )}
          {next && (
            <div className="bg-white hover:bg-gray-200 p-3 rounded-md shadow-md">
              <Link to={`${next.fields!.slug!}`} rel="next">
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
      htmlAst
      fields {
        slug
      }
      frontmatter {
        date(formatString: "YYYY年MM月DD日")
        title
        category
        tags
        hero {
          childImageSharp {
            original {
              src
              height
              width
            }
            gatsbyImageData(width: 900, height: 300, quality: 100)
          }
        }
        description
      }
    }
    site {
      siteMetadata {
        siteUrl
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

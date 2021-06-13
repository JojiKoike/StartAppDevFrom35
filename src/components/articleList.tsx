import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faFolderOpen,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { GoogleAdsense_Infeed } from "../components";

type PostProps = Pick<GatsbyTypes.MarkdownRemark, "id" | "excerpt"> & {
  readonly fields: GatsbyTypes.Maybe<Pick<GatsbyTypes.Fields, "slug">>;
  readonly frontmatter: GatsbyTypes.Maybe<
    Pick<
      GatsbyTypes.Frontmatter,
      "title" | "date" | "category" | "tags" | "description"
    > & {
      readonly thumbnail: GatsbyTypes.Maybe<{
        readonly childImageSharp: GatsbyTypes.Maybe<
          Pick<GatsbyTypes.ImageSharp, "gatsbyImageData">
        >;
      }>;
    }
  >;
};

interface ArticleListItemProps {
  post: PostProps;
  postTotalCount: number;
  idx: number;
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({ ...props }) => {
  const postTotalCount = props.postTotalCount;
  const post = props.post;
  const idx = props.idx;
  const title = post.frontmatter!.title || post.fields!.slug;

  return (
    <>
      <article itemScope itemType="http://schema.org/Article">
        <div className="p-6 max-w-6xl mx-auto bg-white hover:bg-gray-200 rounded-xl shadow-md space-x-4 my-2">
          <div className="flex flex-col sm:flex-row place-items-center sm:place-items-start">
            <div className="mx-0 my-2 sm:mx-2 sm:my-0 self-center">
              <GatsbyImage
                image={
                  post.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData!
                }
                alt={post.frontmatter!.title!}
              />
            </div>

            <div className="flex flex-col mx-0 sm:mx-2">
              <header>
                <Link to={`${post.fields!.slug!}`} itemProp="url" key={post.id}>
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
                        <span className="ml-1 hover:text-gray-500">{tag}</span>
                      </Link>
                    );
                  })}
                </h2>
              </header>
              <section>
                <p
                  className="text-xs lg:text-base"
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter!.description || post.excerpt!,
                  }}
                  itemProp="description"
                />
              </section>
            </div>
          </div>
        </div>
      </article>
      {(postTotalCount == 6 && (idx == 1 || idx == 3)) ||
      (postTotalCount > 2 && postTotalCount < 6 && idx == 1) ? (
        <div className="max-w-6xl mx-auto my-3">
          <GoogleAdsense_Infeed />
        </div>
      ) : null}
    </>
  );
};

export default ArticleListItem;

export const NoneArticle: React.FC = () => {
  return (
    <div className="flex flex-row mx-auto">
      <h1 className="text-red-500 text-2xl text-center">記事がありません</h1>
    </div>
  );
};

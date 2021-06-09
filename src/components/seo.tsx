/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type SeoProps = {
  description?: string;
  lang?: string;
  locale?: string;
  meta?: HTMLMetaElement[];
  title: string;
  type: "website" | "article";
  path?: string;
};

const Seo: React.FC<SeoProps> = ({
  description,
  lang = "ja",
  locale = "ja_JP",
  meta,
  title,
  type,
  path,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            author {
              name
              summary
            }
            social {
              twitter
              facebook
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const author =
    site.siteMetadata?.author?.name || site.siteMetadata?.social?.twitter;
  const fbAppId = site.siteMetadata?.social.facebook;
  const contentUrl =
    path !== undefined
      ? `${site.siteMetadata?.siteUrl}/${path}`
      : site.siteMetadata.siteUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ""}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:site_name`,
          content: defaultTitle,
        },
        {
          property: `og:url`,
          content: contentUrl,
        },
        {
          property: `og:locale`,
          content: locale,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `fb:app_id`,
          content: fbAppId,
        },
      ].concat(meta!)}
    >
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({
           google_ad_client: "ca-pub-3835939635569436",
           enable_page_level_ads: true
        });`}
      </script>
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: `ja`,
  meta: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  // @ts-ignore
  meta: PropTypes.arrayOf(PropTypes.object),
  // @ts-ignore
  type: PropTypes.oneOf(["website", "article"]).isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export default Seo;

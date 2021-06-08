import path from "path";
import { GatsbyNode, Actions } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/post.tsx`);

  // Get all markdown blog posts sorted by date
  const result = await graphql<{
    allMarkdownRemark: Pick<GatsbyTypes.Query["allMarkdownRemark"], "nodes">;
  }>(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              category
              tags
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data!.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: `/articles${post.fields!.slug!}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  // Landing Page Articles List
  const articlesPerPageOnLP = 5;
  const articlesCount = posts.length;
  const articlePages = Math.ceil(articlesCount / articlesPerPageOnLP);
  Array.from({ length: articlePages }).forEach((_, i) => {
    createPage({
      path: i == 0 ? `/` : `/articles/${i + 1}`,
      component: path.resolve("./src/templates/index.tsx"),
      context: {
        skip: articlesPerPageOnLP * i,
        limit: articlesPerPageOnLP,
        numPages: articlePages,
        currentPage: i + 1,
      },
    });
  });

  // Category Page
  const categories = Array.from(
    new Set(
      posts.map(node => {
        return node.frontmatter!.category;
      })
    )
  ).filter(category => category !== null);

  categories.forEach(category => {
    const categoryArticlesPerPage = 5;
    const categoryArticlesCount = posts.filter(
      node => node.frontmatter!.category == category
    ).length;
    const categoryArticlePages = Math.ceil(
      categoryArticlesCount / categoryArticlesPerPage
    );
    Array.from({ length: categoryArticlePages }).forEach((_, i) => {
      createPage({
        path:
          i == 0 ? `/category/${category}` : `/category/${category}/${i + 1}`,
        component: path.resolve("./src/templates/category.tsx"),
        context: {
          skip: i * categoryArticlesPerPage,
          limit: categoryArticlesPerPage,
          numPages: categoryArticlePages,
          currentPage: i + 1,
          category,
        },
      });
    });
  });

  // Tag Page
  const tags = new Set(
    Array.from(
      posts
        .filter(node => node.frontmatter!.tags != null)
        .map(node => {
          return node.frontmatter!.tags;
        })
    ).flat()
  );
  tags.forEach(tag => {
    const tagArticlesPerPage = 5;
    const tagArticlesCount = posts.filter(
      node =>
        node.frontmatter!.tags !== null && node.frontmatter!.tags!.includes(tag)
    ).length;
    const tagArticlePages = Math.ceil(tagArticlesCount / tagArticlesPerPage);
    Array.from({ length: tagArticlePages }).forEach((_, i) => {
      createPage({
        path: i == 0 ? `/tag/${tag}` : `/tag/${tag}/${i + 1}`,
        component: path.resolve("./src/templates/tag.tsx"),
        context: {
          skip: i * tagArticlesPerPage,
          limit: tagArticlesPerPage,
          numPages: tagArticlePages,
          currentPage: i + 1,
          tag: tag,
        },
      });
    });
  });
};

// Context Type for Article List Pagination
export type ArticleListContext = {
  skip: number;
  limit: number;
  numPages: number;
  currentPage: number;
  category?: string;
  tag?: string;
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({
  actions,
}) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};

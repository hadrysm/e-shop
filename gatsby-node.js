const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const {
    data: { categories, products },
  } = await graphql(
    `
      {
        categories: allDatoCmsCategory {
          nodes {
            slug
            id
          }
        }
        products: allDatoCmsProduct {
          nodes {
            slug
            id
          }
        }
      }
    `,
  );

  if (categories) {
    categories.nodes.forEach(({ slug, id }) => {
      createPage({
        path: `/categories/${slug}`,
        component: path.resolve(`src/templates/ProductsTemplate/ProductsTemplate.js`),
        context: {
          id,
        },
      });
    });
  }

  if (products) {
    products.nodes.forEach(({ slug, id }) => {
      createPage({
        path: `/products/${slug}`,
        component: path.resolve(`src/templates/ProductTemplate/ProductTemplate.js`),
        context: {
          id,
        },
      });
    });
  }
};

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productsTemplate = path.resolve(`src/templates/ProductsTemplate/ProductsTemplate.js`);

  const result = await graphql(
    `
      {
        allDatoCmsCategory {
          nodes {
            slug
            id
          }
        }
      }
    `,
  );

  // Create products pages.
  result.data.allDatoCmsCategory.nodes.forEach(({ slug, id }) => {
    createPage({
      path: `/${slug}`,
      component: productsTemplate,
      context: {
        id,
      },
    });
  });
};

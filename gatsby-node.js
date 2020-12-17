const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const { setWebpackConfig } = actions;

  if (stage.startsWith('develop')) {
    setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }

  setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

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

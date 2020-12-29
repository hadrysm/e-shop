require('dotenv').config();
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/templates/MainTemplate/MainTemplate.js`),
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_API_KEY,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        templates: path.join(__dirname, 'src/templates'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
        helpers: path.join(__dirname, 'src/helpers'),
        providers: path.join(__dirname, 'src/providers'),
        animations: path.join(__dirname, 'src/animations'),
        hooks: path.join(__dirname, 'src/hooks'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
      options: { files: ['**/*.{js,jsx}'] },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Source Sans Pro',
              variants: ['300', '400', '500'],
              subsets: ['latin-ext'],
            },
            {
              family: 'ZCOOL QingKe HuangYou',
              variants: ['400'],
              subsets: ['latin-ext'],
            },
          ],
        },
      },
    },
  ],
};

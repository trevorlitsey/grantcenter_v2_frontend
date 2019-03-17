const path = require('path');

const appRouteRegex = /^\/app/;

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(appRouteRegex)) {
    page.matchPath = '/app/*';

    createPage(page);
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '_variables.sass': path.resolve(
          __dirname,
          'src/styles/_variables.sass'
        ),
      },
    },
  });
};

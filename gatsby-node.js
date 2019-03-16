const path = require('path');

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

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /materialize.min.js/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
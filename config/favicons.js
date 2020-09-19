const paths = require("./paths")

module.exports = {
  // Your source logo
  logo: paths.appPublic + "/favicon.png",
  // The prefix for all image files (might be a folder or a name)
  prefix: "icons-[hash]/",
  // Cache for build times
  cache: true,
  inject: true,
  // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
  background: "#fff",
  // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
  title: "Webpack App"
}

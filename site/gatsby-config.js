module.exports = {
  siteMetadata: {
    description: "Almost Lost in Translation - Tanaka's blog",
    locale: "en",
    title: "Tanaka Chingonzo",
  },
  plugins: [{
    resolve: "@wkocjan/gatsby-theme-intro",
    options: {
      basePath: "/",
      contentPath: "content/",
      showThemeLogo: true,
      theme: "classic",
    },
  }, ],
}

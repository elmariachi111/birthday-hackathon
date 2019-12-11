module.exports = {
  siteMetadata: {
    title: `Birthday Hackathon`,
    description: `Hack into 2020 and get wild on conversational interfaces, bots, messaging and frontend`,
    author: `@stadolf`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Birthday Hackathon`,
        short_name: `birthday-hackathon`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#fff1d7`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        "ssr": true,
        "minify": true,
        "pure": true
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

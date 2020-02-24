require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Birthday Hackathon',
    description: 'Hack into 2020 and get wild on conversational interfaces, bots, messaging and frontend',
    author: '@stadolf'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          }
        ],
        extensions: ['.mdx', '.md'],
        commonmark: true
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Birthday Hackathon',
        short_name: 'birthday-hackathon',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#fff1d7',
        display: 'minimal-ui',
        icon: 'src/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        ssr: true,
        minify: true,
        pure: true
      }
    },
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: 'image',
        tags: true,
        maxResults: 100,
        // type: `upload`,
        prefix: 'birthday-hackathon/',
        transformations: ['txb_preview', 'maxeco']
      }
    }

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}

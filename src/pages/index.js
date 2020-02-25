import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Anchor, Button, Box, Heading, Image, Paragraph, Text } from 'grommet'
// import { Coffee, Cafeteria } from 'grommet-icons'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

import SEO from '../components/seo'

import imgWcs from '../images/artwork/location_wcs.jpg'

import Pug from '../components/site/Pug'
import Partners from '../components/site/Partners'
import Impressions from '../components/site/Impressions'
import Results from '../components/site/Results'

import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

const IndexPage = () => {
  const _data = useStaticQuery(graphql`
  
  query {
    allFile(filter: {relativePath: {regex: "/artwork/"}}) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
          
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allCloudinaryMedia(filter: { public_id: { regex: "/birthday-/" }}) {
      edges {
        node {
          public_id
          maxeco_image {
            secure_url
          }
          txb_preview_image {
            secure_url
          }
        }
      }
    } 

  }
`)
  const images = _data.allCloudinaryMedia.edges.map(({ node }) => node)
  _data.allFile.edges.forEach(({ node }) => { images[node.name] = node.childImageSharp })
  // const metadata = _data.site.siteMetadata

  const [clientLoaded, setClientLoaded] = useState(false)
  useEffect(() => {
    setClientLoaded(true)
  }, [])

  return <Layout>
    <SEO title="Birthday Hackathon 2020: The Recap" />
    <Helmet>
      <script src="https://www.eventbrite.de/static/widgets/eb_widgets.js"></script>
    </Helmet>

    <Pug bottomLine={<Paragraph >
      <Text weight="bold" size="3em">The Recap</Text>
    </Paragraph>} />

    <Box background="pale" >
      <Heading level={2} size="xlarge" alignSelf="center" >
        What a day!
      </Heading>

      <Box direction="row" justify="center" margin={{ bottom: 'medium' }}>
        <Box width="large">
          {clientLoaded && <Video
            poster="https://res.cloudinary.com/turbinekreuzberg/image/upload/v1582557538/birthday-hackathon/2020/IMG_4895.jpg"
          >
            <source src="https://res.cloudinary.com/turbinekreuzberg/video/upload/v1582557595/birthday-hackathon/2020/videos/IMG_4889.mp4" type="" />
          </Video>
          }
        </Box>
      </Box>
    </Box>

    <Box background="black" align="center" >

      <Heading level={2} size="xlarge" margin={{ bottom: 'none' }}>
            Results
      </Heading>
      <Text alignSelf="center" size="small">add your project by <Anchor href="https://github.com/elmariachi111/birthday-hackathon/tree/master/src/data/teams">forking &amp; adding another team.md file here</Anchor></Text>

      <Box direction="row-responsive" wrap={true} width="xlarge" >

        <Results></Results>
      </Box>

    </Box>

    <Box background="pale" pad="large">
      <Impressions
        button={Button}
        buttonProps={{
          fill: false,
          margin: 'large',
          primary: true,
          label: 'show more'
        }}
        images={images}
      />
    </Box>

    <Box background="white" align="center" pad="large">
      <Partners />
    </Box>

  </Layout >
}

export default IndexPage

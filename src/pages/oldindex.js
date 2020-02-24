import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Anchor, Button, Box, Heading, Image, Paragraph, Text } from 'grommet'
// import { Coffee, Cafeteria } from 'grommet-icons'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'

import SEO from '../components/seo'

import bchack from '../images/artwork/bchack.jpg'
import imgLocation from '../images/artwork/bch18.jpg'
import imgWcs from '../images/artwork/location_wcs.jpg'

import Pug from '../components/site/Pug'
// import CountMeIn from '../components/site/CountMeIn'
import Tickets from '../components/site/Tickets'
import Partners from '../components/site/Partners'
import Venue from '../components/site/Venue'
import WhatToBuild from '../components/site/WhatToBuild'
import Inspirational from '../components/site/Inspirational'

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

  }
`)
  const images = {}
  _data.allFile.edges.forEach(({ node }) => { images[node.name] = node.childImageSharp })
  // const metadata = _data.site.siteMetadata

  return <Layout>
    <SEO title="Birthday Hackathon" />
    <Helmet>
      <script src="https://www.eventbrite.de/static/widgets/eb_widgets.js"></script>

    </Helmet>

    <Pug />

    <Inspirational />

    <Box background="white" align="center" pad="large">
      <Partners />
    </Box>

    <Box background="pale" align="center" id="venue" >
      <Box direction="row-responsive" fill>

        <Box basis="1/2" style={{ background: `url(${imgWcs})`, backgroundSize: 'cover' }}>

          <Box align="center" pad="medium" background="pale" style={{ opacity: 0.93, width: '75%', margin: 'auto auto' }}>
            <Heading level={2} size="xlarge" >
              Where and When
            </Heading>
            <Paragraph margin="small">
              <Text weight="bold" size="large">February, 22nd 2020 </Text>
            </Paragraph>
            <Paragraph size="large" margin="none">
              9am - 10pm
            </Paragraph>

            <Paragraph size="medium" fill textAlign="center">
              Wild Code School Berlin <br />
              Oudenarder Str. 16

              13347 Berlin
            </Paragraph>
            <Paragraph>
              <Anchor href="https://w3w.co/knee.tropic.creamed" target="_blank">w3w.co/knee.tropic.creamed</Anchor>
            </Paragraph>
          </Box>
        </Box>

        <Box basis="1/2" fill>

          <Venue
            latitude={52.552769}
            longitude={13.358970} />

        </Box>

      </Box>
    </Box>

    <Box background="dark-1" align="center" >
      <Box direction="row-responsive" gap="large" >
        <Box basis="1/3" height="large">
          {/* <Img fluid={images['bchack'].fluid} /> */}
          <Image fit="cover" src={bchack} />
        </Box>
        <Box basis="2/3" pad={{ horizontal: 'medium' }} id="build">
          <WhatToBuild />
        </Box>
      </Box>
    </Box>

  </Layout >
}

export default IndexPage

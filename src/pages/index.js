import React from "react"
import { useStaticQuery } from "gatsby"
import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet'
//import { Coffee, Cafeteria } from 'grommet-icons'

import Layout from "../components/layout"
//import Img from "gatsby-image"

import SEO from "../components/seo"

import mops from "../images/artwork/mops.png"
import location from "../images/artwork/location.jpg"
import bchack from "../images/artwork/bchack.jpg"

import CountMeIn from '../components/site/CountMeIn'
import Partners from '../components/site/Partners'
import Stars from '../components/site/Stars'

const IndexPage = () => {
  const _images = useStaticQuery(graphql`
  
  query {
    allFile(filter: {relativePath: {regex: "/artwork/"}}) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
          
        }
      }
    }
  }
`)
  let images = {}
  _images.allFile.edges.forEach(({ node }) => { images[node.name] = node.childImageSharp })



  return <Layout>
    <SEO title="Birthday Hackathon" />

    <Box align="center" fill="vertical" >

      <Box direction="row-responsive" align="center" >

        <Box basis="1/2" align="center" animation="slideRight">
          <img src={mops} width="60%" />
        </Box>

        <Box basis="1/2" direction="column" align="center" animation="slideLeft" style={{ position: 'relative' }}>
          <Stars />
          <Heading level={3} size="xlarge" margin="none">January, 11th</Heading>
          <Heading level={1} color="pale" size="xlarge" margin="none" textAlign="center">Birthday Hackathon</Heading>
          <Paragraph >
            <Text weight="bold" size="large">Hack for fun!</Text>
          </Paragraph>
        </Box>
      </Box>
    </Box>

    <Box background="pale"  >
      <Heading level={2} size="xlarge" alignSelf="center" >
        A cozy Saturday to hack away
      </Heading>

      <Box direction="row-responsive" gap="large">
        <Box pad={{ horizontal: "medium" }} basis="1/2" animation="slideRight" id="expect">

          <Heading>What to expect</Heading>
          <Paragraph alignSelf="center" size="large">
            What's the best way to celebrate <Anchor href="https://www.linkedin.com/in/stadolf/">Stefan's birthday</Anchor>? We're abusing
            his passion of being a "professional" hackathon goer and as being the headline
            for the first hack-a-thon of 2020. Lets start the year by getting your hands
            dirty with code, try out something new, meet extraordinary folks and have some
            fun together.

          </Paragraph>
          <Heading>There will be</Heading>

          <Paragraph alignSelf="center" size="large">
            <ul style={{ listStyleType: "square", margin: 0, padding: 0 }}>
              <li>
                unlimited coffee supplies
              </li>
              <li>
                A healthy breakfast
              </li>
              <li>
                Two lunch options
              </li>
              <li>
                Afternoon Cake
              </li>
              <li>
                A very German dinner choice (Stulle)
              </li>
              <li>
                A choice of tasteless, sweet and higher volume (&gt; 6pm) beverages
              </li>
            </ul>
          </Paragraph>

        </Box>
        <Box basis="1/2" animation="slideLeft">
          <Image fit="cover" src={location} />
        </Box>
      </Box>
    </Box>

    <Box background="dark-1" align="center" >
      <Box direction="row-responsive" gap="large" >
        <Box basis="1/2" height="large">
          <Image fit="cover" src={bchack} />
        </Box>
        <Box basis="1/2" pad={{ horizontal: "medium" }} id="build">
          <Heading level={2} size="xlarge">
            What to build
          </Heading>

          <Text size="large" weight="bold">Conversational interfaces</Text>
          <Paragraph size="large" fill>
            What's your interpretation on <em>"how to users interact with applications"</em>?
            Go wild on voice, text, speech, chat and bot. In any direction.
          </Paragraph>

          <Text size="large" weight="bold">Frontends to bow down for</Text>
          <Paragraph size="large" fill>
            What's the coolest effect that you can build with the latest frontend tools? Impress us with zooms, scales,
            visualizations, graphs and usability tweaks.
          </Paragraph>

          <Text size="large" weight="bold">Engage, Mr Data!</Text>
          <Paragraph size="large" fill>
            When you've got all the data and APIs of the world at hand, what can you figure out
              that nobody has figured out before?
          </Paragraph>

          <Text size="large" weight="bold">Map me, baby!</Text>
          <Paragraph size="large" fill>
            Go crazy on map styles and location services and visualize something really meaningful
          </Paragraph>

        </Box>
      </Box>
    </Box>

    <Box background="pale" align="center" pad="large" id="rsvp">
      <CountMeIn />
    </Box>

    <Box background="white" align="center">
      <Heading level={2} size="xlarge">
        Partners
      </Heading>

      <Partners />
    </Box>

  </Layout >
}

export default IndexPage

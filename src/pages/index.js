import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet'
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

    <Box background="pale" >
      <Heading level={2} size="xlarge" alignSelf="center" >
        A cozy Saturday to hack away
      </Heading>

      <Box direction="row-responsive" gap="large" style={{ zIndex: 40 }}>
        <Box pad={{ horizontal: 'medium' }} basis="1/2" animation="slideRight" id="expect">
          <Box width="large" alignSelf="center">
            <Heading margin="none">What to expect</Heading>
            <Paragraph alignSelf="center" size="large" fill>
              Attending a hackathon can be heavy duty: team building, pitching, hacking through the night...
            </Paragraph>
            <Paragraph size="large" fill>
              <em>Birthday hackathon*</em> wants to be a cozy event instead. A day for you to sharpen your
              skillset without any pressure or jury judging on challenges.
              We're meeting up in a nice coworking space to hack the day away,
              get our hands dirty on communication stacks by Twilio, AWS and Slack,
              and try out something new.

              Lets meet up as gifted engineers and craft something extraordinary together. Just because we can.
            </Paragraph>
            <Paragraph fill size="small">
              * it's actually a rather late celebration of <Anchor href="https://www.linkedin.com/in/stadolf/">Stefan's</Anchor> birthday
              that we had to move slightly due to some organizational hiccups. :)
              As leading organizer of the <Anchor href="https://coding.earth">coding earth</Anchor> meetup community,
              he's a passionate hackathon goer and gives us a reason to bring cake along.
              If it's your birthday that day, let us know and we'll put you on the "congratulations" lineup.
            </Paragraph>
            <Heading margin={{ bottom: 'none' }}>There'll be</Heading>

            <Paragraph alignSelf="center" size="large">
              <ul style={{ listStyleType: 'square', margin: 0, padding: 0 }}>
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
                  dinner with a twist
                </li>
                <li>
                  A choice of tasteless, sweet and higher volume (&gt; 6pm) beverages
                </li>
              </ul>
            </Paragraph>
          </Box>
        </Box>
        <Box basis="1/2" animation="slideLeft">
          {/* <Img fluid={images['location'].fluid} /> */}
          <Image fit="cover" src={imgLocation} />
        </Box>
      </Box>
    </Box>

    <Box background="white" align="center" pad="large">
      <Partners />
    </Box>

    <Box background="pale" align="center" id="venue" >
      <Box direction="row-responsive" fill>

        <Box basis="1/2" style={{ background: `url(${imgWcs})`, backgroundSize: 'cover' }}>

          <Box align="center" pad="large" background="pale" style={{ opacity: 0.93, width: '75%', margin: 'auto auto' }}>
            <Heading level={2} size="xlarge" >
              Where and When
            </Heading>
            <Paragraph margin="small">
              <Text weight="bold" size="large">February, 22nd 2020 </Text>
            </Paragraph>
            <Paragraph size="large" margin="none">
              9am - 10pm
            </Paragraph>

            <Paragraph size="medium" fill>
              Wild Code School Berlin,
              Oudenarder Str. 16

              13347 Berlin
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

    <Box background="pale" align="center" pad="large" id="rsvp">
      {/* <CountMeIn /> */}
      {<Tickets />}
    </Box>

  </Layout >
}

export default IndexPage

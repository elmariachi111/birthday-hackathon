import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet'
//import { Coffee, Cafeteria } from 'grommet-icons'
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"

import SEO from "../components/seo"

import bchack from "../images/artwork/bchack.jpg"
import imgLocation from "../images/artwork/bch18.jpg"

import Pug from '../components/site/Pug'
//import CountMeIn from '../components/site/CountMeIn'
import Tickets from '../components/site/Tickets'
import Partners from '../components/site/Partners'
import Venue from '../components/site/Venue'


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
  let images = {}
  _data.allFile.edges.forEach(({ node }) => { images[node.name] = node.childImageSharp })
  //const metadata = _data.site.siteMetadata


  return <Layout>
    <SEO title="Birthday Hackathon" />
    <Helmet>
      <script src="https://www.eventbrite.de/static/widgets/eb_widgets.js"></script>

    </Helmet>

    <Pug />

    <Box background="pale"  >
      <Heading level={2} size="xlarge" alignSelf="center" >
        A cozy Saturday to hack away
      </Heading>

      <Box direction="row-responsive" gap="large" style={{ zIndex: 40 }}>
        <Box pad={{ horizontal: "medium" }} basis="1/2" animation="slideRight" id="expect">
          <Box width="large" alignSelf="center">
            <Heading margin="none">What to expect</Heading>
            <Paragraph alignSelf="center" size="large" fill>
              Attending a hackathon can be heavy duty: team building, pitching, hacking through the night...{' '}
              <em>Birthday hackathon</em> instead wants to be a cozy opportunity to sharpen your
              technological skillset without any pressure or jury to judge challenges.
              We're meeting up in a nice coworking space and hacking the day away,
              getting our hands dirty on communication stacks by Twilio, AWS and Slack,
              or trying out something new and meeting extraordinary folks to craft something technical together.
              Just because we can.
          </Paragraph>
            <Paragraph fill>
              BTW, if you're wondering whose birthday it is -
              it's a rather late celebration of <Anchor href="https://www.linkedin.com/in/stadolf/">Stefan's</Anchor> birthday
              that we had to move slightly due to some organizational hiccups. :)
              As Turbine Kreuzberg's "ambassador" and "president" (not his idea)
              of the <Anchor href="https://coding.earth">coding earth</Anchor> meetup community,
              he's a passionate hackathon goer and will help us out with a reason to bring cake along.
              If it's your birthday that day, let us know and we'll put you on the "congratulations" lineup.
          </Paragraph>
            <Heading margin={{ bottom: "none" }}>There'll be</Heading>

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
                  A very German dinner choice
              </li>
                <li>
                  A choice of tasteless, sweet and higher volume (&gt; 6pm) beverages
              </li>
              </ul>
            </Paragraph>
          </Box>
        </Box>
        <Box basis="1/2" animation="slideLeft">
          {/*<Img fluid={images['location'].fluid} />*/}
          <Image fit="cover" src={imgLocation} />
        </Box>
      </Box>
    </Box>

    <Box background="white" align="center" pad="large">
      <Partners />
    </Box>

    <Box background="pale" align="center" id="venue"  >
      <Box direction="row-responsive" gap="large" fill>

        <Box basis="1/2" height="medium">
          <Box direction="column" fill align="center">
            <Heading level={2} size="xlarge" margin={{ bottom: "small" }}>
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
            latitude={52.5534894}
            longitude={13.3605066} />

        </Box>

      </Box>
    </Box>


    <Box background="dark-1" align="center" >
      <Box direction="row-responsive" gap="large" >
        <Box basis="1/2" height="large">
          {/*<Img fluid={images['bchack'].fluid} />*/}
          <Image fit="cover" src={bchack} />
        </Box>
        <Box basis="1/2" pad={{ horizontal: "medium" }} id="build">
          <Box width="large" alignSelf="center">
            <Heading level={2} size="xlarge" margin={{ bottom: "medium" }}>
              What to build
          </Heading>

            <Text size="large" weight="bold">Conversational interfaces</Text>
            <Paragraph size="medium" fill>
              What's your interpretation of <em>"how do users interact with applications"</em>?
            Go wild with APIs for <Anchor href="https://www.twilio.com/">voice</Anchor>,
            text, <Anchor href="https://developer.amazon.com/en-US/alexa">speech</Anchor>,
            <Anchor href="https://matrix.org/">chat</Anchor> and <Anchor href="https://api.slack.com/">bots</Anchor>. In any direction.
          </Paragraph>

            <Text size="large" weight="bold">Frontends to bow down for</Text>
            <Paragraph size="medium" fill>
              What's the coolest effect that you can build using the latest frontend tools?
            Impress us with <Anchor href="https://blog.bitsrc.io/11-javascript-animation-libraries-for-2018-9d7ac93a2c59">effects</Anchor>,{' '}
              <Anchor href="https://d3js.org/">visualizations</Anchor>,{' '}
              <Anchor href="https://bashooka.com/coding/3d-javascript-libraries/">3D</Anchor>,{' '}
              <Anchor href="https://www.sitepoint.com/best-javascript-charting-libraries/">graphs</Anchor>{' '}
              and <Anchor href="https://hackernoon.com/23-best-react-ui-component-libraries-and-frameworks-250a81b2ac42">usability</Anchor> tweaks.
          </Paragraph>

            <Text size="large" weight="bold">Engage, Mr Data!</Text>
            <Paragraph size="medium" fill>
              When you've got <Anchor href="https://daten.berlin.de/datensaetze">all</Anchor>{' '}
              the <Anchor href="https://www.govdata.de/">data</Anchor>{' '}
              <Anchor href="https://data.europa.eu/euodp/en/data/">and</Anchor>{' '}
              <Anchor href="https://www.opendatanetwork.com/">APIs</Anchor>{' '}
              <Anchor href="https://registry.opendata.aws/">of</Anchor>{' '}
              <Anchor href="https://www.data.gov/">the</Anchor>{' '}
              <Anchor href="https://www.kaggle.com/">world</Anchor>{' '}
              <Anchor href="https://data.worldbank.org/">at</Anchor>{' '}
              <Anchor href="https://www.ncdc.noaa.gov/">hand</Anchor>, what can you figure out
            that nobody has figured out before? That's maybe a good opportunity to contribute some code for an <Anchor href="https://codefor.de/">OKLabs project</Anchor>.
          </Paragraph>

            <Text size="large" weight="bold">Map me, baby!</Text>
            <Paragraph size="medium" fill>
              Go crazy on <Anchor href="https://docs.mapbox.com/mapbox-gl-js/api/">map styles</Anchor> and <Anchor href="https://foam.space/map">location services</Anchor> and <Anchor href="https://www.esri.com/en-us/arcgis/products/mapping">visualize</Anchor> something really meaningful
          </Paragraph>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box background="pale" align="center" pad="large" id="rsvp">
      {/*<CountMeIn /> */}
      {<Tickets />}
    </Box>


  </Layout >
}

export default IndexPage

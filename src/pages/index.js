import React from "react"
import { Link } from "gatsby"
import { Anchor, Box, Heading, Image, Paragraph, Stack, List, Text } from 'grommet'
import Layout from "../components/layout"

import SEO from "../components/seo"

import mops from "../images/mops.png"
import location from "../images/location.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Birthday Hackathon" />

    <Box align="center" fill="vertical">
      <Box direction="row-responsive" align="center" >
        <Box width="1/3" align="center">
          <img src={mops} width="60%" />
        </Box>
        <Box direction="column" align="center">
          <Heading level={3} margin="none">January, 11th</Heading>
          <Heading level={1} color="pale" size="xlarge" margin={{ top: "none" }} textAlign="center">Birthday Hackathon</Heading>
          <Paragraph >
            <Text weight="bold">Hack for fun</Text>
          </Paragraph>
          <Paragraph>
            <Text>9am - 10pm</Text>
          </Paragraph>
        </Box>
      </Box>
    </Box>

    <Box background="pale" align="center">
      <Heading level={2} size="xlarge">
        A cozy Saturday to hack away
      </Heading>
      <Box direction="row-responsive" gap="large"  >
        <Box pad={{ horizontal: "medium" }} fill >
          <Heading>What to expect</Heading>
          <Paragraph alignSelf="center">
            What's the best way to celebrate <Anchor href="https://www.linkedin.com/in/stadolf/">Stefan's birthday</Anchor>? We're abusing
            his passion of being a "professional" hackathon goer and as being the headline
            for the first hack-a-thon of 2020. Lets start the year by getting your hands
            dirty with code, try out something new, meet extraordinary folks and have some
            fun together.

          </Paragraph>
          <Heading>There will be</Heading>
          <Paragraph alignSelf="center" size="large">
            <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
              <li>
                Unlimited Coffee Supplies
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
                APIs for you to use
              </li>
            </ul>
          </Paragraph>
        </Box>
        <Box >
          <Image fit="cover" src={location} height="medium" />
        </Box>
      </Box>
    </Box>


    <Box direction="column" background="dark-1" align="center" >
      <Heading level={2} size="xlarge">
        Conversational interfaces
      </Heading>
      <Box direction="row-responsive" gap="large">
        <Box pad={{ horizontal: "medium" }}>
          <Paragraph>
            What's your take on <em>"how to interact with an application"</em>?
          </Paragraph>
        </Box>
        <Box width={{ max: '50%' }}>
          <Image fit="cover" src={location} />
        </Box>
      </Box>
    </Box>



  </Layout >
)

export default IndexPage

import React from 'react'

import { Link } from 'gatsby'
import { Anchor, Button, Box, Heading, Image, Paragraph } from 'grommet'
import imgLocation from '../../images/artwork/bch18.jpg'

export default function Inspirational (props) {
  return (
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
                  A choice of tasteless, sweet and higher volume (&gt; 6pm) beverages
                </li>
              </ul>
            </Paragraph>
            <Button as={Link} to="/rules#agenda" label="Checkout the rules here" primary alignSelf="center" style={{ padding: '1em' }}></Button>
            <Heading margin={{ bottom: 'none' }} alignSelf="center">

            </Heading>
          </Box>
        </Box>
        <Box basis="1/2" animation="slideLeft">
          {/* <Img fluid={images['location'].fluid} /> */}
          <Image fit="cover" src={imgLocation} />
        </Box>
      </Box>
    </Box>

  )
}

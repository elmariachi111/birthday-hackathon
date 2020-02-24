import React from 'react'
import { Box, Heading, Image, Paragraph, Anchor } from 'grommet'

import audibene from '../../images/logos/audibene-logo.svg'
import twilio from '../../images/logos/twilio.png'
import turbinekreuzberg from '../../images/logos/logo_txb_black.png'
import wcs from '../../images/logos/WCS.png'
import codingberlin from '../../images/logos/coding-berlin.png'
import lisk from '../../images/logos/lisk.svg'

function ImgBox ({ image, maxHeight = '120px', link = null }) {
  return (
    <Box basis="33%" pad="medium">
      {link
        ? <Anchor href={link} target="_blank" >
          <Image fill fit="contain" src={image} style={{ maxHeight }} />
        </Anchor>
        : <Image fill fit="contain" src={image} style={{ maxHeight }} />}

    </Box>
  )
}

export default function Partners (props) {
  return (
    <>
      <Heading level={2} size="xlarge" margin={{ top: 'none' }}>
        They made it possible:
      </Heading>

      <Heading level={2} size="xlarge" margin="none">
                Best friends
      </Heading>
      <Box direction="row-responsive" wrap={true} width="xlarge" >
        <ImgBox image={audibene} link="https://www.audibene.de/" />
        <ImgBox image={turbinekreuzberg} link="https://www.turbinekreuzberg.com/" />
        <ImgBox image={wcs} link="https://www.wildcodeschool.com/en-GB/campuses/berlin" />
      </Box>

      <Heading level={2} size="large" margin={{ bottom: 'none' }}>
                Good friends
      </Heading>
      <Box direction="row-responsive" wrap={true} width="xlarge" justify="around" >
        <ImgBox image={twilio} maxHeight="60px" link="https://www.twilio.com/" />
        <ImgBox image={lisk} maxHeight="80px" link="https://lisk.io/" />
        <ImgBox image={codingberlin} maxHeight="80px" link="https://coding.earth/" />
      </Box>
    </>
  )
}

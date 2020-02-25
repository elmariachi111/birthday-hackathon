import React from 'react'

import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet'
import GithubIssues from './GithubIssues'

import imgSlack from '../../images/slack.jpg'
import imgDots from '../../images/dots.png'
import imgFeet from '../../images/feet.jpg'

const images = {
  imgSlack,
  imgDots,
  imgFeet
}

const Imasch = ({ image, children, height = 'medium' }) => {
  return (<Box direction="row-responsive" gap="medium">
    <Box basis="1/3" height={height} >
      <Image fit="cover" src={images[image]} />
    </Box>
    <Box basis="2/3">{children}</Box>
  </Box>
  )
}

const MdxComponents = {
  h1: props => <Heading level={1} {...props}/>,
  h2: props => <Heading level={2} size="5em" margin={{ bottom: 'medium' }} {...props} style={{ maxWidth: 'inherit' }}/>,
  h3: props => <Heading level={3} size="4em" margin={{ bottom: 'medium' }} {...props} style={{ maxWidth: 'inherit' }}/>,
  h4: props => <Heading level={4} size="3em" margin={{ bottom: 'medium' }} {...props} style={{ maxWidth: 'inherit' }}/>,
  a: props => <Anchor {...props} />,
  li: props => <li><Text size="medium">{props.children}</Text></li>,
  p: props => <Paragraph fill size="large" margin={{ top: 'none' }} {...props} />,
  Imasch,
  GithubIssues
}

export default MdxComponents

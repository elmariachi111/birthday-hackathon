/* eslint-disable react/display-name */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet'
// import { Coffee, Cafeteria } from 'grommet-icons'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Pug from '../components/site/Pug'
import Partners from '../components/site/Partners'
import GithubIssues from '../components/site/GithubIssues'

import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import imgSlack from '../images/slack.jpg'
import imgDots from '../images/dots.png'
import imgFeet from '../images/feet.jpg'

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

const RulesPage = () => {
  const data = useStaticQuery(graphql`
  
  query {
    
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    mdx: allMdx {
      edges {
        node {
          frontmatter { title } 
          body
        }
      }
    }
  }
`)

  const content = {}
  data.mdx.edges.forEach(({ node }) => { content[node.frontmatter.title] = node.body })

  return <Layout>
    <MDXProvider components={MdxComponents}>
      <SEO title="Birthday Hackathon - Rules" />

      <Pug bottomLine={<Paragraph >
        <Text weight="bold" size="3em">The Rules</Text>
      </Paragraph>} />

      <Box background="pale" align="center" id="agenda" pad={{ bottom: 'medium' }}>
        <Box fill pad={{ horizontal: 'medium' }} width={{ max: 'xlarge' }}>
          <MDXRenderer>{content.agenda}</MDXRenderer>
        </Box>
      </Box>

      <Box background="black" align="center" >
        <Box fill pad={{ horizontal: 'medium' }} width={{ max: 'xlarge' }}>
          <MDXRenderer>{content.rules}</MDXRenderer>
        </Box>
      </Box>
      <Box background="pale" align="center" >
        <Box fill pad={{ horizontal: 'medium' }} width={{ max: 'xlarge' }}>
          <MDXRenderer>{content.hints}</MDXRenderer>
        </Box>
      </Box>
      <Box background="white" align="center" pad={{ vertical: 'xlarge' }}>
        <Partners />
      </Box>
      <Box background="black" align="center" >
        <Box fill pad={{ horizontal: 'medium' }} width={{ max: 'xlarge' }}>
          <MDXRenderer>{content.apis}</MDXRenderer>
        </Box>
      </Box>
      <Box background="pale" align="center" >
        <Box fill pad={{ horizontal: 'medium' }} margin={{ bottom: 'xlarge' }} width={{ max: 'xlarge' }}>
          <MDXRenderer>{content.resources}</MDXRenderer>
        </Box>
      </Box>
    </MDXProvider>
  </Layout >
}

export default RulesPage

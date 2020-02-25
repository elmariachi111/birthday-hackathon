/* eslint-disable react/display-name */

import { MDXProvider } from '@mdx-js/react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Box, Paragraph, Text } from 'grommet'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Partners from '../components/site/Partners'
import Pug from '../components/site/Pug'
import MdxComponents from '../components/site/MdxComponents'

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

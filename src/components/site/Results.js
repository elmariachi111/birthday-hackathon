import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import MdxComponents from './MdxComponents'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Anchor, Box, Image, Heading, Paragraph, Text } from 'grommet'

import { Twitter, Github, Linkedin } from 'grommet-icons'

export default function Results () {
  const data = useStaticQuery(graphql`
    {
        allMdx(filter: {fileAbsolutePath: {regex: "/teams/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
                repo
                images
                team {
                  linkedin
                  name
                  twitter
                  github
                }
              }
              body
            }
          }
        }
      }
      
    `)

  const projects = data.allMdx.edges.map(({ node }) => node)

  return (
    <MDXProvider components={MdxComponents}>

      {projects.map(({ frontmatter, body, id }) => (
        <Box key={id} fill pad={{ horizontal: 'medium' }} width={{ max: 'xlarge' }}>
          <Heading level={2} size="xlarge" margin={{ bottom: 'small' }}>{frontmatter.title}</Heading>
          <Anchor to={frontmatter.repo}>{frontmatter.repo}</Anchor>
          <Box direction="row-responsive" justify="around" wrap>
            {frontmatter.team.map((member, idx) => (<Box key={`member-${idx}`} align="center" margin={{ vertical: 'medium' }}>
              <Text size="large" weight="bold">{member.name}</Text>
              <Box direction="row">
                {member.twitter && <Anchor to={`//twitter.com/${member.twitter}`} margin="small" size="medium" ><Twitter color="accent-4" title={member.twitter} /></Anchor>}
                {member.github && <Anchor to={`//github.com/${member.github}`} margin="small" size="medium" ><Github color="accent-4" title={member.github}/></Anchor>}
                {member.linkedin && <Anchor to={member.linkedin} size="medium" margin="small"><Linkedin color="accent-4" title={member.linkedin}/> </Anchor>}
              </Box>
            </Box>))}
          </Box>
          <Box margin={{ top: 'small' }}>
            <MDXRenderer>{body}</MDXRenderer>
          </Box>

          {frontmatter.images.length > 0 && (
            <Box direction="row-responsive" gap="medium" >
              {frontmatter.images.map(img => (
                <Box basis="1/2" height="medium" >
                  <Image src={img} fit="contain" />
                </Box>
              ))}
            </Box>
          )}

        </Box>
      ))
      }

    </MDXProvider>

  )
}

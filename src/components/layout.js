/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import * as Icons from 'grommet-icons'

import { Box, Grommet, Text, Anchor, Heading } from 'grommet';
import { Footer, Main, Header } from './grommet-master'
import theme from './theme'
import '../css/typography.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet theme={theme} full themeMode="dark" >
      <Header background="dark-1" pad="small">
        <Box direction="row" gap="small">
          <Icons.Gift color="pale" />
          <Box>
            <Text style={{ fontFamily: "Amatic", fontWeight: "bold", fontSize: "2em" }}>{data.site.siteMetadata.title}</Text>
          </Box>
        </Box>
        <Box direction="row" gap="large">
          {/*<Box>Schedule</Box>
          <Box>Topics</Box>
          <Box>Location</Box>
        */}
        </Box>
      </Header>

      <Main >
        {children}
      </Main>

      <Footer
        background="dark-2"
        pad={{ horizontal: "large", vertical: "small" }}
      >
        <Box direction="row" gap="small">
          <Icons.Gift color="brand" />
          <Text alignSelf="center">birthday hackathon</Text>
        </Box>
        <Text textAlign="center" size="small">
          © 2019 Copyright
        </Text>
      </Footer>
    </Grommet >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Anchor, Box, ResponsiveContext, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { Header } from '../grommet-master/Header'

export default function TheHeader ({ props }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const thesize = React.useContext(ResponsiveContext)

  return <Header background="dark-1" pad="small" id="theheader">

    <Box direction="row" gap="small">
      <Link to="/">
        <Icons.Gift color="pale" />
        {thesize !== 'small' &&
          <Text style={{ fontFamily: 'Amatic', fontWeight: 'bold', fontSize: '2em', marginLeft: '.25em' }} color="pale">{data.site.siteMetadata.title}</Text>
        }
      </Link>
    </Box>
    <Box direction="row" gap="large" >

      <Anchor as={Link} to="/#expect">expect</Anchor>
      <Anchor as={Link} to="/#build">build</Anchor>
      <Anchor as={Link} to="/#rsvp">count me in</Anchor>
      <Anchor as={Link} to="/rules#agenda" style={{ fontSize: '1.6em' }}>The Rules</Anchor>
    </Box>
  </Header>
}

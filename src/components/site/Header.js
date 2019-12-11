import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Anchor, Box, ResponsiveContext, Text } from 'grommet'
import * as Icons from 'grommet-icons'

import { Header } from '../grommet-master/Header'

export default ({ props }) => {

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const thesize = React.useContext(ResponsiveContext);

    return <Header background="dark-1" pad="small" id="theheader">

        <Box direction="row" gap="small">
            <Icons.Gift color="pale" />
            {thesize !== 'small' && <Box>
                <Text style={{ fontFamily: "Amatic", fontWeight: "bold", fontSize: "2em" }} color="pale">{data.site.siteMetadata.title}</Text>
            </Box>
            }
        </Box>
        <Box direction="row" gap="large" >
            <Anchor href="#expect">expect</Anchor>
            <Anchor href="#build">build</Anchor>
            <Anchor href="#rsvp">count me in</Anchor>
        </Box>
    </Header>

}
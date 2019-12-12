import React from "react"

import { Box, Grommet, Text, Anchor } from 'grommet';
import * as Icons from 'grommet-icons'
import { Footer, Main } from './grommet-master'
import Header from './site/Header'

import theme from './theme'
import '../css/typography.css'

export default ({ children }) => {

  return (
    <Grommet theme={theme} full themeMode="dark" >
      <Header />

      <Main >
        {children}
      </Main>

      <Footer
        background="dark-2"
        pad={{ horizontal: "large", vertical: "small" }}
      >
        <Box direction="row" gap="small">
          <Icons.Gift color="pale" />
          <Text alignSelf="center" color="pale">birthday hackathon</Text>
        </Box>
        <Text textAlign="center" size="small">
          © 2019 | <Anchor href="//coding.earth">coding.earth</Anchor> | <Anchor href="//coding.earth/imprint">imprint</Anchor>
        </Text>
        <Anchor href="https://app.netlify.com/sites/birthday-hackathon/deploys">
          <img src="https://api.netlify.com/api/v1/badges/cd25187e-4437-45ec-be43-ca634a4f9678/deploy-status" />
        </Anchor>
      </Footer>
    </Grommet >
  )
}


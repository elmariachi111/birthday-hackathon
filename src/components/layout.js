import React from "react"

import { Box, Grommet, Text, Anchor, Heading } from 'grommet';
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
          © 2019 Stefan Adolf | <Anchor href="//coding.earth">coding.earth</Anchor>
        </Text>
      </Footer>
    </Grommet >
  )
}


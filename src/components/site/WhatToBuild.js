import React from 'react'
import { Anchor, Box, Heading, Image, Paragraph, Text } from 'grommet'

function Challenge ({ title, children }) {
  return <Box basis="1/2" background="pale" pad="small" round="xsmall">

    <Text size="xlarge" margin={{ vertical: 'small' }} style={{ fontWeight: '100' }}>{title}</Text>
    <Paragraph size="medium" fill>
      {children}
    </Paragraph>

  </Box>
}

export default function WhatToBuild () {
  return (
    <Box alignSelf="center" width={{ max: 'xlarge' }}>
      <Heading level={2} size="xlarge" alignSelf="center">
            What to build
      </Heading>

      <Box direction="row-responsive" gap="medium">
        <Challenge title="Conversational interfaces">
          <em>"How do users interact with applications"</em>?
              Use <Anchor href="https://www.twilio.com/">voice</Anchor>,
              text, <Anchor href="https://developer.amazon.com/en-US/alexa">speech</Anchor>,
          <Anchor href="https://matrix.org/">chat</Anchor> and <Anchor href="https://api.slack.com/">bots</Anchor> APIs
          and reinvent the way how users interact with your app
        </Challenge>

        <Challenge title="Frontends to bow down for">
              What's the coolest effect that you can build using the latest frontend tools?
            Impress us with <Anchor href="https://blog.bitsrc.io/11-javascript-animation-libraries-for-2018-9d7ac93a2c59">effects</Anchor>,{' '}
          <Anchor href="https://d3js.org/">visualizations</Anchor>,{' '}
          <Anchor href="https://bashooka.com/coding/3d-javascript-libraries/">3D</Anchor>,{' '}
          <Anchor href="https://www.sitepoint.com/best-javascript-charting-libraries/">graphs</Anchor>{' '}
              and <Anchor href="https://hackernoon.com/23-best-react-ui-component-libraries-and-frameworks-250a81b2ac42">usability</Anchor> tweaks.
        </Challenge>
      </Box>

      <Box direction="row-responsive" gap="medium" margin={{ top: 'medium' }}>
        <Challenge title="Engage, Mr Data!">
              When you had <Anchor href="https://daten.berlin.de/datensaetze">all</Anchor>{' '}
              the <Anchor href="https://www.govdata.de/">data</Anchor>{' '}
          <Anchor href="https://data.europa.eu/euodp/en/data/">and</Anchor>{' '}
          <Anchor href="https://www.opendatanetwork.com/">APIs</Anchor>{' '}
          <Anchor href="https://registry.opendata.aws/">of</Anchor>{' '}
          <Anchor href="https://www.data.gov/">the</Anchor>{' '}
          <Anchor href="https://www.kaggle.com/">world</Anchor>{' '}
          <Anchor href="https://data.worldbank.org/">at</Anchor>{' '}
          <Anchor href="https://www.ncdc.noaa.gov/">hand</Anchor>, what can you figure out
            that nobody has figured out before? Bonus: contribute some code to an <Anchor href="https://codefor.de/">OKLabs project</Anchor>.
        </Challenge>

        <Challenge title="Map me, baby!">
            Where to go next? Maps have an immense impact on our daily lives.
              Go crazy on <Anchor href="https://docs.mapbox.com/mapbox-gl-js/api/">map styles</Anchor>,
              use exotic <Anchor href="https://foam.space/map">location</Anchor>{' '}
          <Anchor href="https://what3words.com/limo.reserve.skews">services</Anchor>{' '}
               or <Anchor href="https://www.esri.com/en-us/arcgis/products/mapping">visualize</Anchor> something
               in new insightful ways.
        </Challenge>
      </Box>
    </Box>
  )
}

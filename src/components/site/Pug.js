import React, { useRef, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, Text, Paragraph } from 'grommet'
import { Star, Gift, IceCream } from 'grommet-icons'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import styled from 'styled-components'

const PosEl = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
    transition: top 250ms linear;
`

function PlxElement({ top, left, Element, size = "large", color, style = {} }) {
    return <PosEl top={top} left={left}>
        <Element size={size} color={color} style={style} />
    </PosEl>
}

function Stars({ elementShift }) {

    const mod = 50 * elementShift

    const els = [
        {
            top: ((mod) - 50) + "%",
            left: "60%",
            Element: Star,
            size: 'xlarge',
            color: 'pale'
        },
        {
            top: (mod / 2 + 90) + "%",
            left: "70%",
            Element: Star,
            color: 'pale'
        },
        {
            top: (75 + (mod)) + "%",
            left: "15%",
            Element: Gift,
            color: 'neutral-3',
            size: "xlarge",
            style: { transform: "rotate(27deg)" }
        },
        {
            top: (- 10 + mod / 2) + "%",
            left: "20%",
            Element: IceCream,
            color: 'neutral-2',
            style: { transform: "rotate(-12deg)" }
        },
    ]

    return <>
        {els.map((el, idx) => <PlxElement {...el} key={`el-${idx}`} />)}
    </>
}

export default () => {
    const [elementShift, setElementShift] = useState(0)
    const theBox = useRef(null)
    useScrollPosition(
        ({ prevPos, currPos }) => {
            setElementShift(Math.abs(currPos.y / 600))
        },
        [],
        false, // theBox,
        false,
        250
    )

    const _data = useStaticQuery(graphql`
  
    query {
      file(relativePath:{regex:"/artwork/mops/"}) {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
        }  
    }
  `)

    const mops = _data.file.childImageSharp

    return <Box align="center" fill="vertical" ref={theBox}>

        <Box direction="row-responsive" align="center" gap="xlarge" >

            <Box basis="1/2" align="center" >
                <Img fluid={mops.fluid} style={{ minWidth: "350px" }} />
            </Box>

            <Box basis="full" direction="column" align="center" animation="slideLeft" style={{ position: 'relative' }}>
                <Stars elementShift={elementShift} />
                <Heading level={2} size="xlarge" margin="none">February, 22nd 2020</Heading>
                <Heading level={1} color="pale" size="xlarge" margin="none" textAlign="center">Birthday Hackathon</Heading>
                <Paragraph >
                    <Text weight="bold" size="large"></Text>
                </Paragraph>
            </Box>
        </Box>
    </Box>
}
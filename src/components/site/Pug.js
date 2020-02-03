import React, { useRef, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, Text, Paragraph } from 'grommet'
import { Star, Gift, IceCream } from 'grommet-icons'

import imgGift from '../../images/artwork/gift.png'
import imgUnicorn from '../../images/artwork/unicorn.png'
import imgRainbow from '../../images/artwork/rainbow.png'
import imgCake from '../../images/artwork/cake.png'

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
        {Element}
    </PosEl>
}

function Stars({ elementShift }) {

    const mod = 50 * elementShift

    const els = [
        {
            top: ((mod) - 50) + "%",
            left: "60%",
            Element: <img src={imgCake} style={{ width: '7vh', transform: `rotate(12deg)` }} />,
        },
        {
            top: (mod / 2 + 90) + "%",
            left: "70%",
            Element: <img src={imgRainbow} style={{ width: '8vh', transform: `rotate(-8deg)` }} />,

        },
        {
            top: (75 + (mod)) + "%",
            left: "15%",
            Element: <img src={imgUnicorn} style={{ width: '9vh', transform: `rotate(7deg)` }} />,

            size: "xlarge",
            style: { transform: "rotate(27deg)" }
        },
        {
            top: (- 80 + mod / 2) + "%",
            left: "20%",
            Element: <img src={imgGift} style={{ width: '10vh', transform: `rotate(-12deg)` }} />,

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

    return <Box align="center" fill="vertical" ref={theBox} overflow="hidden">

        <Box direction="row-responsive" align="center" gap="xlarge" >

            <Box basis="1/2" align="center" >
                <Img fluid={mops.fluid} style={{ minWidth: "350px" }} />
            </Box>

            <Box basis="full" direction="column" align="center" animation="slideLeft" style={{ position: 'relative' }}>
                <div style={{ zIndex: 0 }}>
                    <Stars elementShift={elementShift} />
                </div>
                <Box style={{ zIndex: 50 }} direction="column" align="center">
                    <Heading level={2} size="xlarge" margin="none">February, 22nd 2020</Heading>
                    <Heading level={1} color="pale" size="xlarge" margin="none" textAlign="center">Birthday Hackathon</Heading>
                    <Paragraph >
                        <Text weight="bold" size="large"></Text>
                    </Paragraph>
                </Box>
            </Box>
        </Box>
    </Box>
}
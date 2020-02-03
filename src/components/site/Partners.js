import React from "react"
import { Box, Heading, Image, Paragraph } from 'grommet'

import audibene from "../../images/logos/audibene-logo.svg"
import twilio from "../../images/logos/twilio.png"
import turbinekreuzberg from "../../images/logos/logo_txb_black.png"
import wcs from "../../images/logos/WCS.png"
import codingberlin from "../../images/logos/coding-berlin.png"

function ImgBox({ image }) {
    return (
        <Box basis="33%" pad="medium">
            <Image fill fit="contain" src={image} style={{ maxHeight: "120px" }} />
        </Box>
    )
}

export default function (props) {
    return (
        <>
            <Heading level={2} size="xlarge" margin={{ bottom: "none" }}>
                Good friends
            </Heading>
            <Heading level={3} size="large" margin={{ top: "none" }}>
                who make it possible
            </Heading>

            <Box direction="row-responsive" wrap={true} width="xlarge" >
                <ImgBox image={audibene} />
                <ImgBox image={turbinekreuzberg} />
                <ImgBox image={wcs} />
                <ImgBox image={twilio} />
                <ImgBox image={codingberlin} />
            </Box>
            <Box width="xlarge">
                <Paragraph fill size="medium">
                    Do you want to support us with anything and find your logo on the list? The Birthday Hack is a purely non profit, open source, celebration-oriented happening and we'd love to see you support us with it. :) If you're interested, leave a mail in our post box: <a href="mailto:info@coding-earth.com?subject=Birthday Hackathon">info@coding-earth.com</a>
                </Paragraph>
            </Box>
        </>

    )
}
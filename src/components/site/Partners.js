import React from "react"
import { Anchor, Box, Image } from 'grommet'

import audibene from "../../images/logos/audibene-logo.svg"
import twilio from "../../images/logos/twilio.png"
import turbinekreuzberg from "../../images/logos/logo_txb_black.png"
import coachhub from "../../images/logos/coachhub.svg"
import codingberlin from "../../images/logos/coding-berlin.png"


export default function (props) {
    return (
        <Box direction="row-responsive" wrap={true}>
            <Box basis="20%" pad="medium" width={{ max: "200px" }}>

                <Image fill fit="contain" src={twilio} />

            </Box>
            <Box basis="20%" pad="medium" width={{ max: "200px" }}>
                <Image fill fit="contain" src={audibene} />
            </Box>
            <Box basis="20%" pad="medium" width={{ max: "200px" }}>

                <Image fill fit="contain" src={turbinekreuzberg} />

            </Box>
            <Box basis="20%" pad="medium" width={{ max: "200px" }}>
                <Image fill fit="contain" src={coachhub} />
            </Box>
            <Box basis="20%" pad="medium" width={{ max: "200px" }}>
                <Image fit="contain" src={codingberlin} width="100px" alignSelf="center" />
            </Box>
        </Box>
    )
}
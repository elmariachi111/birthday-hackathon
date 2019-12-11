import React from 'react'

import { Star, Gift, IceCream } from 'grommet-icons'
import styled from 'styled-components'

const PosEl = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`

export default function () {

    return <>
        <PosEl top="-50%" left="70%">
            <Star size="large" color="pale" />
        </PosEl>
        <PosEl top="90%" left="30%">
            <Star size="large" />
        </PosEl>
        <PosEl top="110%" left="90%" >
            <Gift size="xlarge" color="neutral-3" style={{ transform: "rotate(27deg)" }} />
        </PosEl>
        <PosEl top="-10%" left="20%" >
            <IceCream size="large" color="neutral-2" style={{ transform: "rotate(-12deg)" }} />
        </PosEl>
    </>
}
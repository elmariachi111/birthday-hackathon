import React, { useEffect } from 'react'
import { Box, Heading } from 'grommet'

const EVENTID = '92374999109'

export default (props) => {

    useEffect(() => {
        if (window.EBWidgets) {
            window.EBWidgets.createWidget({
                // Required
                widgetType: 'checkout',
                eventId: EVENTID,
                iframeContainerId: 'eventbrite-widget-container-92374999109',

                // Optional
                iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
                //onOrderComplete: exampleCallback  // Method called when an order has successfully completed
            });
        }


    }, [])


    return <Box width="large" align="center">
        <Heading level={2} size="xlarge" alignSelf="center">
            Okay, count me in!
        </Heading>
        <Box fill>
            <div id="eventbrite-widget-container-92374999109">

            </div>
        </Box>
    </Box>
}
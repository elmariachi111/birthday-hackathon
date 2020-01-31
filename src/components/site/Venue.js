import React, { useState, useEffect } from 'react'

import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { LocationPin } from 'grommet-icons'

//import markerSvg from './media/map-marker.png'

const defaultViewPort = {
    width: '100%',
    height: 400,
    zoom: 16,
}

export default ({ latitude, longitude }) => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 400,
        latitude,
        longitude,
        zoom: 12
    })

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    //process.env.GATSBY_REACT_APP_MAPBOX_ACCESS_TOKEN
    return (
        <div>
            {isClient &&
                (<ReactMapGL
                    {...viewport}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
                    reuseMaps={true}
                    scrollZoom={true}
                    onViewportChange={setViewport}
                >
                    <div style={{ position: 'absolute', right: 0 }}>
                        <NavigationControl
                            onViewportChange={setViewport}
                        />
                    </div>

                    <Marker latitude={latitude} longitude={longitude} offsetLeft={-15} offsetTop={-40}>
                        <LocationPin size='large' color="black" />
                    </Marker>


                </ReactMapGL>
                )
            }
        </div >
    )
}

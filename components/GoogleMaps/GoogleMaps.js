import React, { useCallback, useState, memo } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '80%',
  height: '500px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '120px',
}

function GoogleMaps({ lat, lng }) {
  let center = {
    lat: lat,
    lng: lng,
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBia2np0v7hx4c2QyL36D2lzUAtCjpa-0k',
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback((map) => {
    setMap(null)
  }, [])

  if (!isLoaded) return <div>Loading ...</div>
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker key="marker_1" position={center} />
    </GoogleMap>
  )
}

export default memo(GoogleMaps)

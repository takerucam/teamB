import React from 'react'
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api'

interface GMapWindow extends Window {
  google: any
}
declare const window: GMapWindow

// Google Mpaサイズ
const containerStyle = {
  width: '400px',
  height: '400px',
}

// マップ中心座標
const center = {
  lat: 35.942754,
  lng: 136.198836,
}

export const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  )
}

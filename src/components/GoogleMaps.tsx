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
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}></GoogleMap>
    </LoadScript>
  )
}

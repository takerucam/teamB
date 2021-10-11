import React from 'react'
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api'
import { GoogleMapProps } from '@react-google-maps/api/dist/GoogleMap'

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

export const GoogleMaps = ({ children, ...props }: GoogleMapProps) => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} {...props}>{children}</GoogleMap>
    </LoadScript>
  )
}

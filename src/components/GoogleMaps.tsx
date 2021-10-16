import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { Property } from 'src/types/propertys'
import { MarkerContainer } from './MakerContainer'

type Props = {
  propertys: Property[]
}

// Google Mpaサイズ
const containerStyle = {
  width: '375px',
  height: '545px',
}

// マップ中心座標
const center = {
  lat: 35.942754,
  lng: 136.198836,
}

export const GoogleMaps: React.VFC<Props> = ({ propertys }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        {propertys.map((property: Property) => {
          return property.Latitude ? (
            <div key={property.id}>
              <MarkerContainer property={property} />
            </div>
          ) : null
        })}
      </GoogleMap>
    </LoadScript>
  )
}

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { Property } from 'src/types/propertys'
import useSWR from 'swr'
import { fetcher } from 'src/utils/fetcher'

type Props = {
  propertys: Property[]
}

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

// バルーンスタイル
const markerStyle = {
  background: 'white',
  fontsize: 7.5,
}

export const GoogleMaps: React.VFC<Props> = ({ propertys }) => {
  const { data, error } = useSWR(`http://localhost:3000/api/routes/鯖江駅`, fetcher)

  // console.log(propertys)

  data
    ? data.map((d) => {
        // console.log(d.legs[0].steps)
        return (
          <div key={d.duraition}>
            {/* {console.log(Number(d.legs[0].duration.text.replace('分', '')))} */}
          </div>
        )
      })
    : null

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        {propertys.map((property: Property) => {
          const latlng = { lat: Number(property.Latitude), lng: Number(property.Longitude) }
          return property.Latitude ? (
            <div key={property.id}>
              <Marker position={latlng} />
            </div>
          ) : null
        })}
      </GoogleMap>
    </LoadScript>
  )
}

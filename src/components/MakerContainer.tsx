import { InfoWindow } from '@react-google-maps/api'
import { useTime } from 'src/hooks/useTime'
import { Property } from 'src/types/propertys'

type Props = {
  property: Property
}

export const MarkerContainer: React.VFC<Props> = ({ property }) => {
  const { Latitude, Longitude } = property
  const { data, error, isLoading, isEmpty } = useTime({
    lat: Latitude,
    lng: Longitude,
  })

  return data ? (
    <InfoWindow position={{ lat: Number(Latitude), lng: Number(Longitude) }}>
      <div>
        <h1>{data[0].legs[0].duration.text}</h1>
      </div>
    </InfoWindow>
  ) : null
}

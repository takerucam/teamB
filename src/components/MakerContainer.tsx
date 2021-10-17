import { InfoWindow } from '@react-google-maps/api'
import { useTime } from 'src/hooks/useTime'
import { Property } from 'src/types/propertys'
import Link from 'next/link'

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
    <Link href={`/facility/property/${property.id}`}>
      <a>
        <InfoWindow position={{ lat: Number(Latitude), lng: Number(Longitude) }}>
          <h1>徒歩{data[0].legs[0].duration.text}</h1>
        </InfoWindow>
      </a>
    </Link>
  ) : null
}

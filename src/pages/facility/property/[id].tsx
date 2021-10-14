import type { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '../../../libs/client'
import { ClientResponse } from '../../../types/propertys'
import { BackAllow } from '../../../components/shared/icons/BackAllow'
import Image from 'next/image'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'
import Link from 'next/link'
import { Container } from '../../../components/layout/Container'
import { Label } from '../../../components/shared/icons/Label'

const FacilityPage = ({ surrounding }): JSX.Element => {
  return (
    <div className="min-h-screen bg-primary">
      <header className="relative h-60">
        <Image
          src={surrounding.thumbnail.url}
          objectFit="cover"
          layout="fill"
          alt={surrounding.Name}
        />
        <Container>
          <div className="relative flex justify-between">
            <Link href="/list">
              <a>
                <BackAllow className="w-6 h-6 mr-10" />
              </a>
            </Link>
            <h1 className="text-2xl font-bold text-right text-white">{surrounding.Name}</h1>
          </div>
        </Container>
      </header>

      <Container className="py-10">
        <h2 className="text-2xl font-bold text-white">概要</h2>
        <p className="mt-5 text-base font-medium text-white">{surrounding.Address}</p>
        <p className="mt-5 text-base font-medium text-white">{surrounding.MonthlyAmount}</p>
        <p className="mt-5 text-base font-medium text-white">{surrounding.AgeOfBuilding}</p>
        <p className="mt-5 text-base font-medium text-white">{surrounding.FloorPlan}</p>
        <p className="mt-5 text-base font-medium text-white">
          <Label className="inline mr-1" />
          {surrounding.BuildingType}
        </p>
        {surrounding.Latitude ? (
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY}>
            <GoogleMap
              mapContainerStyle={{
                marginTop: '40px',
                width: '100%',
                height: '200px',
              }}
              center={{ lat: Number(surrounding.Latitude), lng: Number(surrounding.Longitude) }}
              zoom={14}
            >
              <Marker
                position={{
                  lat: Number(surrounding.Latitude),
                  lng: Number(surrounding.Longitude),
                }}
              />
            </GoogleMap>
          </LoadScript>
        ) : null}
      </Container>
    </div>
  )
}

// ページの生成
export const getStaticPaths: GetStaticPaths = async () => {
  const surrounding = await client.get<ClientResponse>({ endpoint: 'property' })
  const paths = surrounding.contents.map((content) => `/facility/property/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const surrounding = await client.get<ClientResponse>({
    endpoint: 'property',
    contentId: params.id as string,
  })

  return {
    props: {
      surrounding,
    },
  }
}

export default FacilityPage

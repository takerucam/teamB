import type { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '../../../libs/client'
import { ClientResponse } from '../../../types/propertys'
import { BackAllow } from '../../../components/shared/icons/BackAllow'
import Image from 'next/image'
import { GoogleMaps } from '../../../components/GoogleMaps'
import { Marker } from '@react-google-maps/api'
import Link from 'next/link'
import { Container } from '../../../components/layout/Container'
import { Label } from '../../../components/shared/icons/Label'

const FacilityPage = ({ surrounding }): JSX.Element => {
  return (
    <div className='bg-primary min-h-screen'>
      <header className='h-60 relative'>
        <Image src={surrounding.thumbnail.url} objectFit='cover' layout='fill' alt={surrounding.Name} />
        <Container>
          <div className='relative flex justify-between'>
            <Link href='/list'>
              <a>
                <BackAllow className='w-6 h-6 mr-10' />
              </a>
            </Link>
            <h1 className='text-2xl font-bold text-white text-right'>{surrounding.Name}</h1>
          </div>
        </Container>
      </header>

      <Container className='py-10'>
        <h2 className='text-2xl font-bold text-white'>概要</h2>
        <p className='text-base text-white mt-5 font-medium'>{surrounding.Address}</p>
        <p className='text-base text-white mt-5 font-medium'>{surrounding.MonthlyAmount}</p>
        <p className='text-base text-white mt-5 font-medium'>{surrounding.AgeOfBuilding}</p>
        <p className='text-base text-white mt-5 font-medium'>{surrounding.FloorPlan}</p>
        <p className='text-base text-white mt-5 font-medium'>
          <Label className='inline mr-1'/>
          {surrounding.BuildingType}
        </p>

        <GoogleMaps
          mapContainerStyle={{
            marginTop: '40px',
            width: '100%',
            height: '200px'
          }}
          zoom={14}
        >
          <Marker
            position={{
              lat: Number(surrounding.Latitude),
              lng: Number(surrounding.Longitude)
            }}
          />
        </GoogleMaps>
      </Container>
    </div>
  )
}

// ページの生成
export const getStaticPaths: GetStaticPaths = async () => {
  const surrounding = await client.get<ClientResponse>({ endpoint: 'property' })
  const paths = surrounding.contents.map(content => `/facility/property/${content.id}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const surrounding = await client.get<ClientResponse>({
    endpoint: 'property',
    contentId: params.id as string
  })


  return {
    props: {
      surrounding
    }
  }
}

export default FacilityPage
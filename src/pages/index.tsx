import { GetStaticProps, NextPage } from 'next'
import { client } from 'src/libs/client'
import { ClientResponse, Property, Surrounding } from 'src/types/propertys'
import { GoogleMaps } from 'src/components/GoogleMaps'
import Link from 'next/link'

import { Card } from '../components/shared/Card'
import { HeaderNavigation } from '../components/shared/HeaderNavigation'

type Props = {
  propertys: Property[]
  surroundings: Surrounding[]
}

const Index: NextPage<Props> = ({ propertys, surroundings }) => {
  return (
    <>
      <div className={'bg-primary'}>
        <HeaderNavigation />
        <GoogleMaps propertys={propertys} />
        <ul className={['flex', 'flex-nowrap', 'overflow-y-scroll', 'gap-5'].join(' ')}>
          {surroundings.map((surrounding: Surrounding) => {
            return (
              <div key={surrounding.id}>
                <Link href={`/facility/surround/${surrounding.id}`}>
                  <a>
                    <Card
                      title={surrounding.Name}
                      subtitle={surrounding.Address}
                      thumbnailUrl={surrounding.thumbnail.url}
                    />
                  </a>
                </Link>
              </div>
            )
          })}
          {propertys.map((property: Property) => {
            return (
              <div key={property.id}>
                <Link href={`/facility/property/${property.id}`}>
                  <a>
                    <Card
                      title={property.Name}
                      subtitle={property.Address}
                      thumbnailUrl={property.thumbnail.url}
                    />
                  </a>
                </Link>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const properties = await client.get<ClientResponse>({ endpoint: 'property' })
  const surrounding = await client.get<ClientResponse>({ endpoint: 'surroundingbuildings' })
  return {
    props: {
      propertys: properties.contents,
      surroundings: surrounding.contents,
    },
  }
}

export default Index

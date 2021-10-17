import { GetStaticProps, NextPage } from 'next'
import { client } from 'src/libs/client'
import { ClientResponse, Property } from 'src/types/propertys'
import { GoogleMaps } from 'src/components/GoogleMaps'
import Link from 'next/link'

import { Card } from '../components/shared/Card'
import { HeaderNavigation } from '../components/shared/HeaderNavigation'

type Props = {
  propertys: Property[]
}

const Index: NextPage<Props> = ({ propertys }) => {
  return (
    <>
      <div className={'bg-primary'}>
        <HeaderNavigation />
        <GoogleMaps propertys={propertys} />
        <ul className={['flex', 'flex-nowrap', 'overflow-y-scroll', 'gap-5'].join(' ')}>
          <Card
            title="メガネ会館"
            subtitle="福井県鯖江市新横江2丁目3-4"
            thumbnailUrl="https://www.megane.gr.jp/museum/main/wp-content/uploads/img01.jpg"
          />
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
  const data = await client.get<ClientResponse>({ endpoint: 'property' })
  return {
    props: {
      propertys: data.contents,
    },
  }
}

export default Index

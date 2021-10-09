import { GetStaticProps, NextPage } from 'next'
import { client } from 'src/libs/client'
import { ClientResponse, Property } from 'src/types/propertys'
import { GoogleMaps } from 'src/components/GoogleMaps'

import { Card } from '../components/shared/Card'

type Props = {
  propertys: Property[]
}

const Index: NextPage<Props> = ({ propertys }) => {
  return (
    <>
      <div>
        <GoogleMaps />
        <ul className={['flex', 'flex-nowrap', 'overflow-y-scroll', 'gap-5'].join(' ')}>
          <Card
            title='メガネ会館'
            subtitle='鯖江市'
            thumbnailUrl='https://www.megane.gr.jp/museum/main/wp-content/uploads/img01.jpg'
          />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<ClientResponse>({ endpoint: 'property' })
  return {
    props: {
      propertys: data.contents
    }
  }
}

export default Index

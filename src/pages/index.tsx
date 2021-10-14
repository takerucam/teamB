import { GetStaticProps, NextPage } from 'next'
import { client } from 'src/libs/client'
import { ClientResponse, Property } from 'src/types/propertys'
import { GoogleMaps } from 'src/components/GoogleMaps'

type Props = {
  propertys: Property[]
}

const Index: NextPage<Props> = ({ propertys }) => {
  return (
    <div>
      <GoogleMaps propertys={propertys} />
    </div>
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

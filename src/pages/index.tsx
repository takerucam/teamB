import { GetStaticProps, NextPage } from 'next'
import { client } from 'src/libs/client'
import { ClientResponse, Property } from 'src/types/propertys'

type Props = {
  propertys: Property[]
}

const Index: NextPage<Props> = ({ propertys }) => {
  console.log(propertys)

  return (
    <>
      <div className="p-4 mx-3 text-red-500"></div>
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

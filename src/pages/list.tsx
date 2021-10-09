import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { client } from '../libs/client'
import { ClientResponse, Property } from '../types/propertys'
import { Card } from '../components/shared/Card'
import { HeaderNavigation } from '../components/shared/HeaderNavigation'
import { useState } from 'react'
import { ListNavigation } from '../components/domain/list/ListNavigation'

type Props = {
  propertys: {
    surrounding: Property[],
    property: Property[],
  }
}

const ListPage: NextPage<Props> = ({ propertys }): JSX.Element => {
  const [tab, setTab] = useState<'surrounding' | 'property'>('surrounding')

  return (
    <div className={'bg-primary'}>
      <HeaderNavigation/>
      <div className={['flex', 'mt-5'].join(' ')}>
        <ListNavigation
          onClick={() => setTab('surrounding')}
          variant={tab === 'surrounding' ? 'fill' : 'outlined'}
          className={tab === 'surrounding' ? 'w-1/3' : 'w-2/3'}
        >
          周辺施設
        </ListNavigation>
        <ListNavigation
          onClick={() => setTab('property')}
          variant={tab === 'property' ? 'fill' : 'outlined'}
          className={tab === 'property' ? 'w-1/3' : 'w-2/3'}
        >
          賃貸
        </ListNavigation>
      </div>
      <div className={['container', 'mx-auto', 'px-5', 'py-10'].join(' ')}>
        <ul className={['grid', 'grid-cols-1', 'gap-5'].join(' ')}>
          {propertys[tab].map((property, index) => (
            <li key={`${property.id}-${index}`}>
              <Card
                size="large"
                title={property.Name}
                subtitle={property.Address}
                thumbnailUrl={property?.thumbnail?.url}
              />
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const surrounding = await client.get<ClientResponse>({ endpoint: 'surroundingbuildings' })
  const apartment = await client.get<ClientResponse>({ endpoint: 'property' })
  return {
    props: {
      propertys: {
        surrounding: surrounding.contents,
        property: apartment.contents
      }
    }
  }
}

export default ListPage
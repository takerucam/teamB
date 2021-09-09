import type { NextApiRequest, NextApiResponse } from 'next'
import { Client, Language, LatLng, TravelMode } from '@googlemaps/google-maps-services-js'

// メガネ会館からの経路を検索
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const ORIGIN_PLACE = 'めがね会館'
  const { destination } = req.query

  const directionsResponse = await new Client()
    .directions({
      params: {
        key: process.env.GOOGLE_MAPS_SERVICES_API_KEY,
        origin: ORIGIN_PLACE,
        destination: destination as LatLng,
        language: Language.ja,
        mode: TravelMode.walking
      }
    })

  if (directionsResponse.status === 200) {
    const routes = directionsResponse.data.routes ?? []
    return res.status(200).json(routes)
  }

  return res.status(404).end('NOT_FOUND')
}

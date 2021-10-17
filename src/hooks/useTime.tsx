import { fetcher } from 'src/utils/fetcher'
import useSWR from 'swr'

export const useTime = ({ lat, lng }) => {
  const { data, error } = useSWR(`/api/routes/${lat},${lng}`, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  }
}

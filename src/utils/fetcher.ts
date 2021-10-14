export const fetcher = async (url) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('fetchに失敗しました')
  }

  const json = await response.json()
  return json
}

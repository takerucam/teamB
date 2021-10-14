// 画像
export type Image = {
  url: string
  height: number
  width: number
}

// タイムスタンプ群
export type TimeStaps = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

// 物件データ
export type Property = TimeStaps & {
  MonthlyAmount: string
  AgeOfBuilding: string
  FloorPlan: string
  Area: string
  Location: string
  Latitude: string
  Longitude: string
  BuildingType: string
  Name: string
  Address: string
  thumbnail: Image
}

// microcmsからのレスポンス
export type ClientResponse = {
  contents: Property[]
  totalcount: number
  offset: number
  limit: number
}

export type LatLng = {
  lat: number
  lng: number
}

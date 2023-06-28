export type SearchResponse = ShowWithRating[]

export type ShowWithRating = {
  score: number
  show: Show
}

export type Show = {
  id: string
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: number
  averageRuntime: number
  premiered: string
  summary: string
  image: ShowImage
}

export type ShowImage = {
  medium: string
  original: string
}

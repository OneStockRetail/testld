export type ShowGenre =
  | 'Action'
  | 'Adult'
  | 'Adventure'
  | 'Anime'
  | 'Children'
  | 'Comedy'
  | 'Crime'
  | 'DIY'
  | 'Drama'
  | 'Espionage'
  | 'Family'
  | 'Fantasy'
  | 'Food'
  | 'History'
  | 'Horror'
  | 'Legal'
  | 'Medical'
  | 'Music'
  | 'Mystery'
  | 'Nature'
  | 'Romance'
  | 'Science'
  | 'Sports'
  | 'Supernatural'
  | 'Thriller'
  | 'Travel'
  | 'War'
  | 'Western'

export type ShowFilter = {
  display_running_shows?: boolean
  sort: boolean
  fitleredGenres?: string[]
  duration?: 'long' | 'short' | 'medium'
}

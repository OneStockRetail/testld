import type { ShowWithRating } from '@/models/SearchResponse'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteShowsStore = defineStore('favorite_shows', {
  state: () => {
    const favoriteShows = ref<ShowWithRating[]>([])

    function pickRandomShow() {
      const randomIndex = Math.floor(Math.random() * favoriteShows.value.length)
      return favoriteShows.value[randomIndex]
    }

    function toggleFavorite(showWithRating: ShowWithRating) {
      const showIndex = favoriteShows.value.findIndex(
        (favorite) => favorite.show.id === showWithRating.show.id
      )
      if (showIndex === -1) {
        favoriteShows.value.push(showWithRating)
      } else {
        favoriteShows.value.splice(showIndex, 1)
      }
    }

    function matchesDuration(show: ShowWithRating, duration: string): boolean {
      switch (duration) {
        case 'long':
          return show.show.runtime > 50
        case 'medium':
          return show.show.runtime < 50 && show.show.runtime > 25
        case 'short':
          return show.show.runtime < 25
        default:
          return false
      }
    }

    return { favoriteShows, pickRandomShow, toggleFavorite, matchesDuration }
  },
  persist: true
})

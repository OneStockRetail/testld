<script setup lang="ts">
import type { ShowGenre } from '@/models/Filters'
import { useFavoriteShowsStore } from '@/stores/favoriteShows'
import { computed, ref, watch } from 'vue'

const { favoriteShows } = useFavoriteShowsStore()

const genres = [
  'Action',
  'Adult',
  'Adventure',
  'Anime',
  'Children',
  'Comedy',
  'Crime',
  'DIY',
  'Drama',
  'Espionage',
  'Family',
  'Fantasy',
  'Food',
  'History',
  'Horror',
  'Legal',
  'Medical',
  'Music',
  'Mystery',
  'Nature',
  'Romance',
  'Science',
  'Sports',
  'Supernatural',
  'Thriller',
  'Travel',
  'War',
  'Western'
]

const filterableGenres = computed(() =>
  genres.filter((genre) => favoriteShows.some((favorite) => favorite.show.genres.includes(genre)))
)

const genresFilter = ref<ShowGenre[]>([])

const emit = defineEmits<{
  filter: [ShowGenre[]]
}>()

watch(genresFilter, (newFilter) => {
  emit('filter', newFilter)
})
</script>

<template>
  <div class="filter">
    <div>
      <span> Genres: </span>
    </div>
    <select v-model="genresFilter" multiple>
      <option v-for="genre of filterableGenres" :key="genre" :value="genre">{{ genre }}</option>
    </select>
  </div>
</template>

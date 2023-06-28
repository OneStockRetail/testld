<script setup lang="ts">
import type { ShowWithRating } from '@/models/SearchResponse'
import ShowPreview from './ShowPreview.vue'
import ShowFilters from './ShowFilters.vue'
import { ref } from 'vue'
import { useFavoriteShowsStore } from '@/stores/favoriteShows'
import type { ShowFilter } from '@/models/Filters'

const props = defineProps<{ showFilters?: boolean; shows: ShowWithRating[] }>()

const { matchesDuration } = useFavoriteShowsStore()

const filteredShows = ref<ShowWithRating[]>(props.shows)

function updateFilteredShows({
  display_running_shows,
  fitleredGenres,
  sort,
  duration
}: ShowFilter) {
  filteredShows.value = filteredShows.value.filter((show) =>
    display_running_shows &&
    show.show.status === 'Running' &&
    (fitleredGenres.length === 0 ||
      show.show.genres.some((genre) => fitleredGenres.includes(genre))) &&
    duration
      ? matchesDuration(show, duration)
      : true
  )
  filteredShows.value.sort((a, b) => (sort ? a?.score - b?.score : b?.score - a?.score))
}
</script>

<template>
  <div class="filters" v-if="showFilters">
    <ShowFilters @filter="updateFilteredShows"></ShowFilters>
  </div>
  <div class="show-list">
    <ShowPreview
      v-for="showWithRating of filteredShows"
      :key="showWithRating.show.id"
      :show-with-rating="showWithRating"
    ></ShowPreview>
  </div>
</template>

<style lang="sass" scoped>
.show-list
  display: flex
  flex-direction: row
  gap: 8px
  max-width: 100%
  overflow-x: auto
  margin-left: 16px
  margin-right: 16px
</style>

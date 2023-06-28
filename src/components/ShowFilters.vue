<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import DurationFilter from './Filters/DurationFilter.vue'
import GenresFilter from './Filters/GenresFilter.vue'
import RatingSort from './Filters/RatingSort.vue'
import StatusFilter from './Filters/StatusFilter.vue'
import type { ShowGenre, ShowFilter } from '@/models/Filters'

const durationFilter = ref(null)
const showRunningShows = ref<boolean>(true)
const genreFilter = ref<string[]>([])
const sort = ref<boolean>(true)

function updateGenreFilter(genres: ShowGenre[]) {
  genreFilter.value = genres
  emit('filter', fitler.value)
}

function updateSort(sortValue: 'ASC' | 'DESC') {
  sort.value = sortValue === 'ASC' ? true : false
  emit('filter', fitler.value)
}

watch(showRunningShows, () => emit('filter', fitler.value))
watch(durationFilter, () => emit('filter', fitler.value))

const fitler = computed<ShowFilter>(() => ({
  sort: sort.value,
  display_running_shows: showRunningShows.value,
  fitleredGenres: genreFilter.value,
  duration: durationFilter.value ? durationFilter.value : undefined
}))

const emit = defineEmits<{
  filter: [ShowFilter]
}>()
</script>

<template>
  <div class="filter-list">
    <DurationFilter v-model="durationFilter"></DurationFilter>
    <GenresFilter @filter="updateGenreFilter"></GenresFilter>
    <RatingSort @update:sort="updateSort"></RatingSort>
    <StatusFilter v-model="showRunningShows"></StatusFilter>
  </div>
</template>

<style lang="sass">
.filter-list
  display: flex
  justify-content: start
  align-items: flex-start


.filter
  margin-right: 24px
  &span
    font-weight: bold
</style>

<script setup lang="ts">
import DetailedShow from '@/components/DetailedShow.vue'
import type { ShowWithRating } from '@/models/SearchResponse'
import { useFavoriteShowsStore } from '@/stores/favoriteShows'
import { onBeforeMount, ref } from 'vue'

const { pickRandomShow } = useFavoriteShowsStore()

const show = ref<ShowWithRating | null>()

onBeforeMount(() => (show.value = pickRandomShow()))
</script>

<template>
  <div class="pick-show-view">
    <button @click="show = pickRandomShow()">Pick again</button>
    <DetailedShow v-if="show" :show-with-rating="show"></DetailedShow>
  </div>
</template>

<style lang="sass" scoped>
.pick-show-view
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  gap: 16px
</style>

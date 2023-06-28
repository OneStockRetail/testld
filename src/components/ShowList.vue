<script setup lang="ts">
import type { ShowWithRating } from '@/models/SearchResponse'
import ShowPreview from './ShowPreview.vue'

defineProps<{ shows: ShowWithRating[] }>()
</script>

<template>
  <div class="show-list">
    <ShowPreview
      v-for="showWithRating of shows"
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

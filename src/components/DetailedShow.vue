<script setup lang="ts">
import type { ShowWithRating } from '@/models/SearchResponse'

defineProps<{ showWithRating: ShowWithRating }>()
</script>

<template>
  <div class="show">
    <img :src="showWithRating.show.image.original" alt="Show's image" />
    <div class="title">
      <b>{{ showWithRating.show.name }}</b>
    </div>
    <div class="synopsis" v-html="showWithRating.show.summary"></div>
    <div class="duration">Duration : {{ showWithRating.show.runtime }}</div>
    <div class="rating">
      {{ `Rating: ${showWithRating.score}` }}
    </div>
  </div>
</template>

<style lang="sass" scoped>

.show
  display: flex
  flex-direction: column
  gap: 8px
  max-width: 600px

  img
    max-width: 300px
    align-self: center

  .title
    align-self: center

  .rating
    align-self: flex-end
</style>

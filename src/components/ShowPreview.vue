<script setup lang="ts">
import type { ShowWithRating } from '@/models/SearchResponse'
import { useFavoriteShowsStore } from '@/stores/favoriteShows'
import { computed } from 'vue'

const props = defineProps<{ showWithRating: ShowWithRating }>()

const { favoriteShows, toggleFavorite } = useFavoriteShowsStore()

const isFavorite = computed(() =>
  favoriteShows.some((favorite) => favorite.show.id === props.showWithRating.show.id)
)
</script>

<template>
  <div class="show">
    <img :src="showWithRating.show.image.medium" alt="Show's thumbnail" />
    <div class="title">{{ showWithRating.show.name }}</div>
    <div>
      {{ `Rating: ${showWithRating.score}` }}
    </div>

    <button @click="toggleFavorite(showWithRating)">
      {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
    </button>
  </div>
</template>

<style lang="sass" scoped>
.show
  display: flex
  flex-direction: column
  gap: 8px
</style>

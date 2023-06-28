<script setup lang="ts">
import { useFavoriteShowsStore } from '@/stores/favoriteShows'

const { favoriteShows } = useFavoriteShowsStore()
</script>

<template>
  <div class="header">
    <div class="app-title">OneFlix</div>
    <RouterLink :to="{ path: '/' }"><button>Search</button></RouterLink>
    <RouterLink :to="{ path: '/my-list' }">
      <button>
        {{ `My Favorites${favoriteShows.length > 0 ? ` (${favoriteShows.length} shows)` : ''}` }}
      </button>
    </RouterLink>
    <RouterLink :to="{ path: '/pick-show' }"><button>Pick a show</button></RouterLink>
  </div>
</template>

<style lang="sass" scoped>

.header
  background-color: rgba(0,0,0,0.15)
  display: flex
  gap: 8px
  justify-content: flex-end
  padding: 16px
  align-items: center

  .app-title
    margin-right: auto
    font-size: 18px
</style>

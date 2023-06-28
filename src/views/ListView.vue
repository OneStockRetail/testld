<script setup lang="ts">
import ShowList from '@/components/ShowList.vue'
import { useFavoriteShowsStore } from '@/stores/favoriteShows'

const { favoriteShows } = useFavoriteShowsStore()
</script>

<template>
  <ShowList :shows="favoriteShows"></ShowList>
</template>

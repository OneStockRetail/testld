<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import type { SearchResponse } from 'src/models/SearchResponse'
import ShowList from '@/components/ShowList.vue'

const searchContent = ref('')
const results = ref<SearchResponse | null>(null)

async function searchMovies() {
  if (searchContent.value.length <= 2) {
    return
  }

  const response = await axios.get<SearchResponse>(
    `https://api.tvmaze.com/search/shows?q=${searchContent.value}`
  )
  results.value = response.data
}
</script>

<template>
  <div class="view">
    <div class="search">
      <input placeholder="search" v-model="searchContent" @input="searchMovies" />
    </div>
    <ShowList :shows="results ?? []"></ShowList>
  </div>
</template>

<style lang="sass" scoped>

.view
  display: flex
  flex-direction: column
  gap: 32px
  align-items: center
</style>

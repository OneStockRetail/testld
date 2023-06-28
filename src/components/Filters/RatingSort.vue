<script setup lang="ts">
import { ref } from 'vue'

const ratingDirection = ref<'ASC' | 'DESC'>('DESC')

const emit = defineEmits<{
  'update:sort': ['ASC' | 'DESC']
}>()
</script>

<template>
  <div class="filter">
    <span> Rating: </span>
    <div class="filter-direction">
      <label>
        Sort descending
        <input
          type="radio"
          value="lt"
          :checked="ratingDirection === 'DESC'"
          @change="emit('update:sort', 'ASC')"
        />
      </label>
      <label>
        Sort ascending
        <input
          type="radio"
          value="gt"
          :checked="ratingDirection === 'ASC'"
          @change="emit('update:sort', 'ASC')"
        />
      </label>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.filter
  display: flex
  gap: 4px
.filter-direction
  display: flex
  flex-direction: column
</style>

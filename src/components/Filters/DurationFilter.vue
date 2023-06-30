<script setup lang="ts">
import { ref, watch } from 'vue'

const { modelValue = null } = defineProps<{ modelValue: 'short' | 'medium' | 'long' | null }>()

const selectedFilter = ref<'short' | 'medium' | 'long' | null>(modelValue)

const emit = defineEmits<{ 'update:modelValue': ['short' | 'medium' | 'long' | null] }>()

watch(selectedFilter, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <div class="filter">
    <span> Duration: </span>
    <select v-model="selectedFilter">
      <option :value="null">No filter</option>
      <option value="short">Short</option>
      <option value="medium">Medium</option>
      <option value="long">Long</option>
    </select>
  </div>
</template>

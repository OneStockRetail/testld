<script setup lang="ts">
defineProps<{ modelValue: boolean }>()

const emit = defineEmits<{
  'update:modelValue': [boolean]
}>()
</script>

<template>
  <div class="filter">
    <label><b>Hide running shows: </b></label>
    <input type="checkbox" :checked="value" @change="emit('update:modelValue', !value)" />
  </div>
</template>

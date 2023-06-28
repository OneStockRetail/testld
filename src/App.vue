<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <header>
    <AppHeader></AppHeader>
  </header>
  <RouterView />
</template>

<style lang="sass">
html,
body
  width: 100%
  height: 100%

body
  background-color: rgba(0,0,0,0.05)
  margin: 0
</style>

<style lang="sass" scoped>
header
  margin-bottom: 16px
</style>

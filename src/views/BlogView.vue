<script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  console.log(route)
</script>

<template>
  <h2>Blog(id: {{ $route.params.id }})</h2>
  <h2>Ver.: {{ $route.params.version }}</h2>
  <RouterLink
    :to="{
    name: 'blog',
    params: { id: Number($route.params.id) + 1, version: $route.params.version } }">
    Next
  </RouterLink>
</template>

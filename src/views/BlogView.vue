<script setup>
  import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
  onBeforeRouteUpdate(() => {
    console.log('onBeforeRouteUpdate')
  })
  onBeforeRouteLeave(() => {
    console.log('onBeforeRouteLeave')
    return window.confirm('Are you sure you want to leave this page?')
  })
</script>

<template>
  <div>
    <h2 id="blog">Blog(id: {{ $route.params.id }})</h2>
    <RouterLink
      :to="{
      name: 'blog',
      params: { id: Number($route.params.id) + 1 } }">
      Next
    </RouterLink>
  </div>
</template>

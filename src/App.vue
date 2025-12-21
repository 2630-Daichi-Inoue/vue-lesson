<script setup>

</script>
<template>
  <h1>Vue Router</h1>

  <RouterLink :to="{ path: '/' }">Home</RouterLink>
  <RouterLink :to="{ path: '/about', query: { lanmg: 'ja' }, hash: '#title' }">About</RouterLink>
  <RouterView />
</template>


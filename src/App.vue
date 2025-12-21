<script setup>

</script>
<template>
  <h1>Vue Router</h1>
  <RouterLink :to="{ name: 'home' }" replace>Home</RouterLink>
  <RouterLink :to="{ name: 'about' }" replace>About</RouterLink>
  <RouterView />
</template>


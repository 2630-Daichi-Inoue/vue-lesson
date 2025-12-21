<script setup>
  // import { useRouter } from 'vue-router'
  // const router = useRouter()
  // function toAbout() {
  //   console.log('toAbout')
  //   router.replace({ path: '/about' })
  // }
</script>
<template>
  <h1>Vue Router</h1>

  <RouterLink :to="{ path: '/' }" replace>Home</RouterLink>
  <button @click="$router.push({ path: '/about'})">About</button>
  <RouterView />
</template>


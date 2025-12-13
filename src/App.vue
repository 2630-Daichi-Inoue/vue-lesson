<script setup>
  import { ref } from 'vue'
  const ok = ref(true)
</script>
<template>
  <button @click="ok = !ok">Toggle</button>
  <p v-show="ok">OK!</p>
</template>

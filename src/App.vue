<script setup>
  import { ref } from 'vue'
  const ok = ref(true)
  const maybeOk = ref(true)
</script>
<template>
  <button @click="ok = !ok">Toggle</button>
  <template v-if="ok">
  <p>OK!</p>
  <p>Hello, Vue.js!</p>
  <p>I'm a genius!</p>
  </template>
</template>

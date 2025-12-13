<script setup>
  import { ref } from 'vue'
  const ok = ref(true)
  const maybeOk = ref(true)
</script>
<template>
  <p v-if="ok">OK!</p>
  <p v-else-if="maybeOk">Maybe OK ...</p>
  <p v-else>No!</p>
  <button @click="ok = !ok">Toggle</button>
</template>

<script setup>
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <h2>Count up</h2>
  <p>count: {{ count }}</p>
  <button @click="count++">Count Up</button>
</template>

<script setup>
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <h2>CompB</h2>
  <p>{{ count }}</p>
  <button @click="count++">Count Up</button>
</template>

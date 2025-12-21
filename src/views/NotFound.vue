<script setup>
  defineProps({
    catchAll: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <h2>Not found!!!</h2>
  <p>{{ catchAll }}</p>
</template>

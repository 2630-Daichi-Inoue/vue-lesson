<script setup>
  import { ref } from 'vue';
  const count = ref(2);
</script>
<template>
  <div>{{ 3 + 4 }}</div>
  <div>{{ count > 3 ? 'greater than 3' : 'smaller than or equal to 3' }}</div>
  <div v-text="count"></div>
</template>

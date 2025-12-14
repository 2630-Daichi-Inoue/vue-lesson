<script setup>
  import { ref } from 'vue';
  import ShowCount from './components/ShowCount.vue';
  const count = ref(0)
</script>
<template>
  <ShowCount :foo="count" />
  <button @click="count++">Count Up</button>
</template>

<script setup>
  import { ref } from 'vue'
  const fruits = ref(['Apple', 'Banana', 'Cherry'])
</script>
<template>
  <li v-for="fruit in fruits">{{ fruit }}</li>
</template>

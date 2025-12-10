<script setup>
  import { ref } from 'vue';
  const message = ref('<h1>Hello world!</h1>')
</script>
<template>
  <div v-html="message"></div>
</template>

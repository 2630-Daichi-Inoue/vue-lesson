<script setup>
  import { ref } from 'vue'
</script>
<template>
  <p>{{ userInput }}</p>
  <input v-model="userInput" type="text">
  <button @click="userInput = 'Hi!'">Button</button>
</template>

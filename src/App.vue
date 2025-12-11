<script setup>
import { ref } from 'vue'
const count = ref(0)
function countUp(event) {
  count.value = event.clientX * 5
  }
</script>
<template>
  <p>{{ count }}</p>
  <!-- <button v-on:click="count++">Button</button> -->
  <button @click="count = $event.clientX">Button</button>
  <button @click="countUp($event, 5)">Button</button>
</template>

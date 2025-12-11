<script setup>
import { ref } from 'vue'
const count = ref(0)
function countUp(event) {
  console.log(event)
  count.value++
}
</script>
<template>
  <p>{{ count }}</p>
  <!-- <button v-on:click="count++">Button</button> -->
  <button @click="count = $event.clientX">Button</button>
  <button @click="countUp">Button</button>
</template>

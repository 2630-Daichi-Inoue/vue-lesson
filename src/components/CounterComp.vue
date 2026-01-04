<script setup>
import { useCounterStore } from '..//stores/counter.js'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h2>CounterComp</h2>
  <button @click="counterStore.count++">Count Up</button>
  <p>{{ counterStore.count }}</p>
</template>

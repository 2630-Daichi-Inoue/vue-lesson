<script setup>
import { useCounterStore } from './stores/counter.js'
import CounterComp from './components/CounterComp.vue'
const counterStore = useCounterStore()
console.log(counterStore.count)
</script>
<template>
  <h1>Pinia</h1>
  <button @click="counterStore.count++">Count Up</button>
  <button @click="counterStore.increment">Increment</button>
  <p>{{ counterStore.count }}</p>
  <p>{{ counterStore.doubleCount }}</p>
  <CounterComp />
</template>

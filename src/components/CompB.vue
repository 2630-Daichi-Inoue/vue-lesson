<script setup>
  import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
  const count = ref(0)
  onMounted(() => {
    console.log('CompB Mounted')
  })
  onUnmounted(() => {
    console.log('CompB Unmounted')
  })
  onActivated(() => {
    console.log('CompB Activated')
  })
  onDeactivated(() => {
    console.log('CompB Deactivated')
  })
</script>

<template>
  <h2>CompB</h2>
  <p>{{ count }}</p>
  <button @click="count++">Count Up</button>
</template>

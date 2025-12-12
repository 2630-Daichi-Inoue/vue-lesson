<script setup>
  import { ref, watch, watchEffect } from 'vue'
  const count = ref(0);
  watchEffect(() => {
    console.log('watchEffectです');
    console.log(count.value);
  })
</script>
<template>
  <p>{{ count }}</p>
  <button @click="count++">+1</button>
</template>

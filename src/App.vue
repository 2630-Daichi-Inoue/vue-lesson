<script setup>
  import { ref } from 'vue';
  import ResetButton from './components/ResetButton.vue';

  const count = ref(0)

  function onReset(value) {
    count.value = value;
  }
</script>
<template>
  <p>Count: {{ count }}</p>
  <button @click="count++">Count Up</button>
  <ResetButton @reset="onReset"/>
</template>

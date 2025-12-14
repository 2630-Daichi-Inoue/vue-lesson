<script setup>
  const emit = defineEmits(['reset'])
  function emitReset() {
    emit('reset', 0)
  }
</script>

<template>
  <button @click="emitReset">Reset</button>
</template>

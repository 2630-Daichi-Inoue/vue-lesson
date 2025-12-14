<script setup>
  defineProps({
    totalScore: {
      type: Number,
      required: true,
      validator(value) {
        return value === 0
      }
    }
  })
</script>

<template>
  <p>Count: {{ totalScore }}</p>
</template>

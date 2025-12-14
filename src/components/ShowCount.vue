<script setup>
  defineProps({
    foo: {
      type: [Number, String],
      default: function() {
        return 0;
      }
    }
  })
</script>

<template>
  <p>Count: {{ foo }}</p>
</template>

<script setup>
  import { watch, watchEffect } from 'vue';
  // const props = defineProps(['foo'])
  const { foo } = defineProps(['foo'])
  watchEffect(() => {
    console.log('foo is now:', foo);
  });
  watch(
    () => foo,
    () => {
      console.log('foo changed to:', foo);
    }
  )
</script>

<template>
  <p>Count: {{ foo }}</p>
</template>

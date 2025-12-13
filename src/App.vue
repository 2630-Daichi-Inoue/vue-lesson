<script setup>
  import { ref, watch, watchEffect } from 'vue'
  const count1 = ref(0);
  const count2 = ref(0);
  const count3 = ref(0);
  watch([count1, count2],(newValue, oldValue) => {
    console.log('watchです');
    console.log('newValue:', newValue);
    console.log('oldValue:', oldValue);
  },
{
    immediate: true
})
  // watchEffect(() => {
  //   console.log('watchEffectです');
  //   console.log(count.value);
  // })
</script>
<template>
  <p>{{ count1 }}(count1)</p>
  <p>{{ count2 }}(count2)</p>
  <p>{{ count3 }}(count3)</p>
  <button @click="count1++">count1++</button>
  <button @click="count2++">count2++</button>
  <button @click="count3++">count3++</button>
</template>

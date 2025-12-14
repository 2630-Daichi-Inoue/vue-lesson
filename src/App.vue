<script setup>
  import { ref } from 'vue';
  import CountUp from './components/CountUp.vue';
  // import ResetButton from './components/ResetButton.vue';

  // const count = ref(0)
  const isShow = ref(true)

  // function onReset(value) {
  //   count.value = value;
  // }
</script>
<template>

  <button @click="isShow = !isShow">Switch</button>
  <CountUp v-if="isShow" />
  <!-- <ResetButton @reset-count="onReset"/> -->
</template>

<script setup>
  import { ref, useTemplateRef, onMounted } from 'vue';
  import CountUp from './components/CountUp.vue';
  // import ResetButton from './components/ResetButton.vue';

  // const count = ref(0)
  const isShow = ref(true)

  // function onReset(value) {
  //   count.value = value;
  // }
  const userInput = useTemplateRef('user-inpiut')
  console.log(userInput.value)
  onMounted(() => {
    console.log(userInput.value)
  })
</script>
<template>

  <input ref="user-input" type="text"><br>

  <button @click="isShow = !isShow">Switch</button>
  <CountUp v-if="isShow" />
  <!-- <ResetButton @reset-count="onReset"/> -->
</template>

<script setup>
  import { ref } from 'vue';
  const isShow = ref(true);

</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">Switch</button>
  <Transition
    enter-active-class="animate__animated animate__bounce"
    leave-active-class="animate__animated animate__shakeX"
  >
    <div v-if="isShow">Hello, fade!</div>
  </Transition>
  <h1 class="animate__animated animate__bounce">An animated element</h1>
</template>
<style scoped>
  .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-leave-from{
    opacity: 1;
  }
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>

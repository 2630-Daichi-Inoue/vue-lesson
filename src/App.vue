<script setup>
  import { ref } from "vue";
  const isShow = ref(true);
</script>
<template>
  <h1>Animation</h1>
  <div :class="{ 'opacity-80': isShow, 'opacity-20': !isShow, slide: !isShow }">Hello</div>
  <button @click="isShow = !isShow">Show</button>
</template>
<style scoped>
  div {
    transition: opacity 1s;
  }
  .slide {
    animation: slide 1s;
  }
  .opacity-80 {
    opacity: 0.8;
  }
  .opacity-20 {
    opacity: 0.2;
  }
  @keyframes slide {
    0% {
      transform: translate();
    }
    50% {
      transform: translate(100px);
    }
    100% {
      transform: translate(0);
    }
  }
</style>

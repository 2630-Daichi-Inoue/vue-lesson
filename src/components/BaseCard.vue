<template>
  <div>
    <slot>
      <p>Hello, Vue.js!</p>
    </slot>
  </div>
</template>

<style scoped>
  div {
    box-shadow: 2px 2px 6px rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 16px;
  }
</style>

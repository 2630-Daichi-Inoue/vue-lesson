<script setup>
import { ref } from 'vue'
// const isShow = ref(true)
const fruits = ref(['Apple', 'Banana', 'Cherry'])
const newFruit = ref('')
</script>
<template>
  <h1>Animation</h1>
  <!-- <button @click="isShow = !isShow">Switch</button> -->
  <input v-model="newFruit" type="text">
  <button @click="fruits.unshift(newFruit)">Add</button>
  <TransitionGroup name="fade">
    <div v-for="(fruit, index) in fruits" :key="fruit" @click="fruits.splice(index, 1)">
      {{ fruit }}
    </div>
  </TransitionGroup>
</template>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-move {
  transition: transform 1s;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { ref } from 'vue'
const isShow = ref(true)

function beforeEnter(el) {
  console.log('beforeEnter', el)
  el.style.transform = 'translateX(30px)'
}

let enterIntervalId
function enter(el, done) {
  console.log('Enter', el)
  let translateXValue = 30
  enterIntervalId = setInterval(() => {
    translateXValue--
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 0) {
      clearInterval(enterIntervalId)
      done()
    }
  }, 20)
}

function afterEnter(el) {
  console.log('afterEnter', el)
}

function enterCancelled(el) {
  console.log('enterCancelled', el)
  clearInterval(enterIntervalId)
}

function beforeLeave(el) {
  console.log('beforeLeave', el)
}

let leaveIntervalId
function leave(el, done) {
  console.log('Leave', el)
  let translateXValue = 0
  leaveIntervalId= setInterval(() => {
    translateXValue++
    el.style.transform = `translateX(${translateXValue}px)`
    if (translateXValue === 30) {
      clearInterval(leaveIntervalId)
      done()
    }
  }, 20)
}

function leaveCancelled(el) {
  console.log('leaveCancelled', el)
  clearInterval(leaveIntervalId)
}


function afterLeave(el) {
  console.log('afterLeave', el)
}
</script>
<template>
  <h1>Animation</h1>
  <button @click="isShow = !isShow">Switch</button>
  <Transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <div v-show="isShow">Hello!</div>
  </Transition>
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
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>

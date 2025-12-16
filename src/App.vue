<script setup>
import { ref, shallowRef } from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import CompC from './components/CompC.vue'
const isShow = ref(false)
const currentComp = shallowRef(CompA)

</script>
<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = CompC">C</button>
  <KeepAlive>
    <component :is="currentComp" />
  </KeepAlive>
  <button @click="isShow = true">Open Modal</button>
  <Teleport to="body">
    <dialog v-if="isShow" open>
      <p>This is a Modal!</p>
      <button @click="isShow = false">Close</button>
    </dialog>
  </Teleport>
</template>

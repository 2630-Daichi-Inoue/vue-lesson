<script setup>
import { ref } from 'vue';
import { useRefLimitedHistory } from './composables/refLimitedHistory.js';

const count = ref(0)

const { history, undo } = useRefLimitedHistory(count, ref(3))
const userInput = ref('')
const { history: history2, undo: undo2 } = useRefLimitedHistory(userInput, 5)
</script>
<template>
  <p>count: {{ count }}</p>
  <button @click="count++">Count Up</button>
  <p>history: {{ history }}</p>
  <button @click="undo">Undo</button>

  <p>userInput: {{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <p>history2: {{ history2 }}</p>
  <button @click="undo2">Undo2</button>
</template>

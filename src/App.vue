<script setup>
import { ref } from 'vue'
const vueURL = 'ref(https://vuejs.org)'
const vueID = ref('vue-link')
</script>
<template>
  <a :id="undefined" :href="false">Vue.js</a>
  <button :disabled="null">Button</button>
</template>

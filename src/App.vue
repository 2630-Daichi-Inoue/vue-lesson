<script setup>
import { ref } from 'vue'
const vueURL = ref('https://vuejs.org');
const vueID = ref('vue-link')
</script>
<template>
  <a v-bind="{id: vueID, href: vueURL}">Vue.js</a>
  <button :disabled="null">Button</button>
</template>

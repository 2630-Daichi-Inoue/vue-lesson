<script setup>
  import { ref } from 'vue'
  const fruits = ref([
      {id: 1, name: 'Apple'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Banana'},
      {id: 4, name: 'Cherry'},
  ]
  )
</script>
<template>
  <button @click="fruits.shift()">Button</button>
  <template v-for="({ id, name }, index) in fruits" :key="id">
    <template v-if="id === 1">
      <p>id: {{ id }}</p>
      <input type="text">{{ name }} {{ index }}
    </template>
  </template>
</template>

<script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <h1>Slots</h1>
  <BaseCard>
    <template #header="{ pageCount }">
      <p>pageCpunt: {{ pageCount }}</p>
      <h2 v-if="pageCount === 1">Vue.js Course</h2>
      <h2 v-if="pageCount === 2">HTML Course</h2>
      <h2 v-if="pageCount === 3">CSS Course</h2>
    </template>
    <template #default="{ pageCount }">
      <p v-if="pageCount === 1">This is the best Vue.js course ever.</p>
      <p v-if="pageCount === 1">You will learn how convenient vue.js is!</p>
      <p v-if="pageCount === 2">This is the best HTML course ever.</p>
      <p v-if="pageCount === 2">You will learn how convenient HTML is!</p>
      <p v-if="pageCount === 3">This is the best CSS course ever.</p>
      <p v-if="pageCount === 3">You will learn how convenient CSS is!</p>
    </template>

    <template #footer>
      <p>© 2024 Vue.js Academy</p>
    </template>

  </BaseCard>

</template>

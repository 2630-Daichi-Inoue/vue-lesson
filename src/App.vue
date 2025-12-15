<script setup>
import BaseCard from './components/BaseCard.vue'
</script>
<template>
  <h1>Slots</h1>
  <BaseCard>
    <p>This is one of the best Vue.js courses.</p>
    <template #header>
      <h2>Vue.js Course</h2>
    </template>

    <p>You will learn how convenient vue.js is!</p>

    <template #footer>
      <p>© 2024 Vue.js Academy</p>
    </template>

  </BaseCard>
  <BaseCard />
</template>

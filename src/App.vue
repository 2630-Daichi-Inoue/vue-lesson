<script setup>
import CountUp from './components/CountUp.vue'
import BaseButton from './components/BaseButton.vue';
</script>
<template>
  <h1>App</h1>
  <BaseIcon />
  <CountUp  id="base-button"/>
  <BaseButton id="base-button" @click="console.log('App.vue')"/>
</template>

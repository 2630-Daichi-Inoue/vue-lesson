<script setup>
  import { ref, onMounted, onUpdated, onUnmounted, onBeforeMount, onBeforeUpdate, onBeforeUnmount } from 'vue'
  const count = ref(0)
  onBeforeMount(()=> {
    console.log('CountUp before mount')
  })
  onMounted(()=> {
    console.log('CountUp mounted')
  })

  onBeforeUpdate(()=> {
    console.log('CountUp before update')
  })
  onUpdated(()=> {
    console.log('CountUp updated')
  })

  onBeforeUnmount(()=> {
    console.log('CountUp before unmount')
  })
  onUnmounted(()=> {
    console.log('CountUp unmounted')
  })
</script>

<template>
  <!-- <h2 v-bind="$attrs">Count up</h2>
  <BaseIcon /> -->
  <p>count: {{ count }}</p>
  <button @click="count++">Count Up</button>
</template>

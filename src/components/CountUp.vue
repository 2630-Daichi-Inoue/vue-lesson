<script setup>
  import {
    ref,
    onMounted,
    onUpdated,
    onUnmounted,
    onBeforeMount,
    onBeforeUpdate,
    onBeforeUnmount,
    nextTick
} from 'vue'
  const count = ref(0)
  console.log('CountUp setup')
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
  async function countUp() {
    count.value++
    // nextTick(() => {
    //   console.log('DOM updated')
    // })
    await nextTick()
    console.log('DOM updated')
  }
</script>

<template>
  <!-- <h2 v-bind="$attrs">Count up</h2>
  <BaseIcon /> -->
  <p>count: {{ count }}</p>
  <button @click="countUp">Count Up</button>
</template>

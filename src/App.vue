<script setup>
  import { ref, computed } from 'vue'
  const score = ref(0);
  const count = ref(0);
  function tmp() {
    // console.log('tmp');
    return score.value > 3 ? 'Good' : 'Bad';
  }
  const evaluation = computed(() => {
    console.log('computed');
    return score.value > 3 ? 'Good' : 'Bad';
  })

  const parentComp = computed(() => {
    console.log('parentComp computed');
    return evaluation.value;
  })

  function getEvaluation() {
    console.log(evaluation.value);
  }
</script>
<template>
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <!-- <p>{{ evaluation }}</p> -->
  <p>{{ tmp() }}</p>
  <p>{{ parentComp }}</p>
  <p>Score: {{ score }}</p>
  <p>Count: {{ count }}</p>
  <button @click="score++">+1 Score</button>
  <button @click="count++">+1 Count</button>
  <button @click="getEvaluation">Get Evaluation</button>
</template>

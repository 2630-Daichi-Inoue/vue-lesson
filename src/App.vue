<script setup>
import { ref, reactive } from 'vue'
const title = ref('Vue.js Course');
let price = ref(99.99)
function increment() {
  // price++;
  price.value++
  console.log(price)
}
  const instructor = reactive({
    name: 'Big Boss',
    age: 30,
    sns: {
      twitter: '@bigboss',
      facebook: 'fb.com/bigboss'
    },
    email: ref('bigboss@gmail.com')
  })
  instructor.hobby = 'Basketball'
  console.log(instructor.email)

  const courseInfo = {
    sections: ref(10),
    language: 'JPN'
  }
</script>

<template>
  <h1>Title: {{ title }}</h1>
  <br />
  <h2>Price: ${{ price }}</h2>
  <br />
  <button @click="increment">Button</button>
  <h2>Instructor's name: {{ instructor.name }}</h2>
  <h2>Instructor's hobby: {{ instructor.hobby }}</h2>
  <h2>Instructor's Youtube: {{ instructor.sns.twitter }}</h2>
  <h2>Instructor's eEmali: {{ instructor.email }}</h2>
  <h2>Course Info Sections: {{ courseInfo.sections.value }}</h2>
</template>

<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

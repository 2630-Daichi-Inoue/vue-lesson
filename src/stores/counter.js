import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useCounter = defineStore('counter', () => {
  const count = ref(0)
  return {
    count
  }
})

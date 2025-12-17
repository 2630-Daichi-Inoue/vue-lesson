import { watchEffect } from 'vue';
import { refHistory } from './refHistory.js';

export function refLimitedHistory(souce, capacity) {
  const { history, undo} = refHistory(souce)
  watchEffect(() => {
    if (history.value.length > capacity) {
      history.value.shift()
    }
  })
  return { history, undo }
}

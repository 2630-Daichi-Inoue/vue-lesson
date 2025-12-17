import { watchEffect, toValue } from 'vue';
import { useRefHistory } from './refHistory.js';

export function useRefLimitedHistory(souce, capacity) {
  const { history, undo} = useRefHistory(souce)
  watchEffect(() => {
    if (history.value.length > toValue(capacity)) {
      history.value.shift()
    }
  })
  return { history, undo }
}

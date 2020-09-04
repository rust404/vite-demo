<template>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import {reactive, ref, readonly, computed, watchEffect, resolveComponent} from 'vue'
export default {
  name: 'Button',
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)
    const timesTen = computed(() => count.value * 10)
    watchEffect(() => {
      console.log(timesTen.value)
    })
    return {
      count,
      timesTen
    }
  }
}
</script>

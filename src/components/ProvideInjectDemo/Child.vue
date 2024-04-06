<!-- src/components/ProvideInjectDemo/Child.vue -->
<template>
  <div class="child">
    <h3>Child Component</h3>
    <p>Count in Child: {{ count }}</p>
    <button @click="incrementCount">Increment Count in Child</button>
    
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    const count = inject('count')
    const incrementCount = inject('incrementCount')

    return {
      count,
      incrementCount
    }
  }
}
</script>

<style scoped>
.child {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
}

.code-snippet {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
}

pre {
  font-family: monospace;
  font-size: 14px;
}
</style>

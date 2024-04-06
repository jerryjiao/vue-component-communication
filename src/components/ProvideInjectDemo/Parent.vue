<!-- src/components/ProvideInjectDemo/Parent.vue -->
<template>
  <div class="parent">
    <h2>Provide/Inject Demo</h2>
    <p>Count in Parent: {{ count }}</p>
    <button @click="incrementCount">Increment Count</button>
    <child-component></child-component>
    
    <div class="code-snippet">
      <h4>Code Snippet (Parent.vue):</h4>
      <pre>
        import { provide, ref } from 'vue'

        setup() {
          const count = ref(0)

          const incrementCount = () => {
            count.value++
          }

          provide('count', count)
          provide('incrementCount', incrementCount)

          return {
            count,
            incrementCount
          }
        }
        // Use 'provide' to make data and methods available to child components
      </pre>
    </div>

    <div class="code-snippet">
      <h4>Code Snippet (Child.vue):</h4>
      <pre>
        import { inject } from 'vue'

        setup() {
          const count = inject('count')
          const incrementCount = inject('incrementCount')

          return {
            count,
            incrementCount
          }
        }
        // Use 'inject' to access the data and methods provided by the parent component
      </pre>
    </div>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import ChildComponent from './Child.vue'

export default {
  components: {
    ChildComponent
  },
  setup() {
    const count = ref(0)

    const incrementCount = () => {
      count.value++
    }

    provide('count', count)
    provide('incrementCount', incrementCount)

    return {
      count,
      incrementCount
    }
  }
}
</script>

<style scoped>
.parent {
  background-color: #e6f7ff;
  padding: 20px;
  border-radius: 5px;
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

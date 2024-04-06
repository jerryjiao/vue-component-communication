<!-- src/components/RefDemo/Parent.vue -->
<template>
  <div class="parent">
    <h2>Parent Component</h2>
    <button @click="sendMessageToChild">Send Message to Child</button>
    <child-component ref="childRef"></child-component>
    
    <div class="code-snippet">
      <h4>Code Snippet (Parent.vue):</h4>
      <pre>
        &lt;child-component ref="childRef"&gt;&lt;/child-component&gt;
        // Create a reference to the child component using 'ref'

        import { ref, onMounted } from 'vue'

        setup() {
          const childRef = ref(null)

          const sendMessageToChild = () => {
            childRef.value.message = 'Hello from parent!'
            childRef.value.sendMessage()
          }

          onMounted(() => {
            console.log('Child component reference:', childRef.value)
          })

          return {
            childRef,
            sendMessageToChild
          }
        }
        // Use 'ref' to access the child component instance and its properties/methods
      </pre>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ChildComponent from './Child.vue'

export default {
  components: {
    ChildComponent
  },
  setup() {
    const childRef = ref(null)

    const sendMessageToChild = () => {
      childRef.value.message = 'Hello from parent!'
      childRef.value.sendMessage()
    }

    onMounted(() => {
      console.log('Child component reference:', childRef.value)
    })

    return {
      childRef,
      sendMessageToChild
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

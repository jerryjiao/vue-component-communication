<!-- src/components/RefDemo/Child.vue -->
<template>
  <div class="child">
    <h3>Child Component</h3>
    <p>Message from parent: {{ message }}</p>
    <button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('')

    const sendMessage = () => {
      console.log('Child component sending message')
    }

    return {
      message,
      sendMessage
    }
  }
}
</script>

<style scoped>
.child {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 5px;
}
</style>

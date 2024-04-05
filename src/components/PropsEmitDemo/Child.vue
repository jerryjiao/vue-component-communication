<template>
  <div class="child">
    <h3>Child Component</h3>
    <p>Message from parent: {{ parentMessage }}</p>
    <button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  props: {
    parentMessage: String
  },
  methods: {
    sendMessage() {
      this.$emit('child-message', 'Hello from child!')
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

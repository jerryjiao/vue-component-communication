<template>
  <div class="brother2">
    <h3>Brother2 Component</h3>
    <button @click="sendMessage">Send Message to Brother1</button>

    
  </div>
</template>

<script>
import eventBus from '@/event-bus'
export default {
  methods: {
    sendMessage() {
      eventBus.emit('message-from-brother2', 'Hello from Brother2!')
    }
  }
}
</script>

<style scoped>
.brother2 {
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

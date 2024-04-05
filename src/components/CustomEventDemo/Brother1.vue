<template>
  <div class="brother1">
    <h2>Custom Event Demo</h2>
    <div>
      <h3>Brother1 Component</h3>
      <p>Message from Brother2: {{ messageFromBrother2 }}</p>
    </div>

    <div class="brother2">
      <Brother2></Brother2>
    </div>

    <div class="code-snippet">
      <h4>Code Snippet (event-bus.js):</h4>
      <pre>
        import mitt from 'mitt'

        const eventBus = mitt()

        export default eventBus
      </pre>
    </div>

    <div class="code-snippet">
      <h4>Code Snippet (Brother1.vue):</h4>
      <pre>
        mounted() {
          eventBus.on('message-from-brother2', (message) => {
            this.messageFromBrother2 = message
          })
          // Listen to the 'message-from-brother2' event on the global event bus
          // Update the 'messageFromBrother2' data property when the event is received
        }
      </pre>
    </div>

    <div class="code-snippet">
      <h4>Code Snippet (Brother2.vue):</h4>
      <pre>
        methods: {
          sendMessage() {
            eventBus.emit('message-from-brother2', 'Hello from Brother2!')
            // Emit the 'message-from-brother2' event on the global event bus with the message data
          }
        }
      </pre>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Brother2 from './Brother2.vue'
import eventBus from '@/event-bus'

export default {
  components: {
    Brother2
  },
  setup() {
    const messageFromBrother2 = ref('')
    onMounted(() => {
      eventBus.on('message-from-brother2', (message) => {
        messageFromBrother2.value = message
      })
    })

    return {
      messageFromBrother2
    }
  }
}
</script>

<style scoped>
.brother1 {
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

.brother2 {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
}
</style>

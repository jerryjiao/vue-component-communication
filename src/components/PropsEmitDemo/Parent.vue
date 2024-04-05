<template>
  <div class="parent">
    <h2>Props Emit Demo</h2>
    <p>Message from child: {{ childMessage }}</p>
    <child-component :parent-message="messageToChild" @child-message="receiveMessage"></child-component>
    
    <div class="code-snippet">
      <h4>Code Snippet (Parent.vue):</h4>
      <pre>
        &lt;child-component :parent-message="messageToChild" @child-message="receiveMessage"&gt;&lt;/child-component&gt;
        // Pass data to child component using props with the name 'parent-message'
        // Listen to the custom event 'child-message' from child component
      </pre>
    </div>
    
    <div class="code-snippet">
      <h4>Code Snippet (Child.vue):</h4>
      <pre>
        &lt;button @click="sendMessage"&gt;Send Message to Parent&lt;/button&gt;
        // When the button is clicked, the 'sendMessage' method is called
        
        methods: {
          sendMessage() {
            this.$emit('child-message', 'Hello from child!')
            // Emit a custom event named 'child-message' with the data 'Hello from child!'
            // The parent component can listen to this event and receive the data
          }
        }
      </pre>
    </div>
  </div>
</template>

<script>
import ChildComponent from './Child.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      messageToChild: 'Hello from parent!',
      childMessage: ''
    }
  },
  methods: {
    receiveMessage(message) {
      this.childMessage = message
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

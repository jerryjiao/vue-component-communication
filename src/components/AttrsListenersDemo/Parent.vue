<template>
  <div class="parent">
    <h2>Attrs Demo</h2>
    <p>Input value in parent: {{ inputValue }}</p>
    <child-component
      parentmessage="messageToChild"
      @input="onChildInput"
    ></child-component>
    
    <div class="code-snippet">
      <h4>Code Snippet (Parent.vue):</h4>
      <pre>
        &lt;child-component
          parentmessage="messageToChild"
          @input="onChildInput"
        &gt;&lt;/child-component&gt;
        // Pass data to child component using attrs with the name 'parentmessage'
        // Listen to the 'input' event from child component
      </pre>
    </div>
    
    <div class="code-snippet">
      <h4>Code Snippet (Child.vue):</h4>
      <pre>
        &lt;template&gt;
          &lt;div class="child"&gt;
            &lt;h3&gt;Child Component&lt;/h3&gt;
            &lt;p&gt;Message from parent: {{ $attrs.parentmessage }}&lt;/p&gt;
            &lt;input type="text" v-bind="$attrs" /&gt;
          &lt;/div&gt;
        &lt;/template&gt;

        &lt;script&gt;
        export default {
          inheritAttrs: false, // Disable default attribute inheritance behavior
          data() {
            return {
              inputValue: ''
            }
          },
          mounted() {
            console.log('Attributes in mounted:', this.$attrs)
          },
          methods: {

          }
        }
        &lt;/script&gt;
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
      childMessage: '',
      inputValue: ''
    }
  },
  methods: {
    receiveMessage(message) {
      this.childMessage = message
    },
    onChildInput(e) {
      this.inputValue = e.target.value
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

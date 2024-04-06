<template>
  <div class="child">
    <h3>Child Component</h3>
    <p>Message from parent: {{ $attrs.parentmessage }}</p>
    <input type="text" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 禁用默认的属性继承行为
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
</script>

<style scoped>
.child {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 5px;
}
</style>
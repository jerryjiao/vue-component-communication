<template>
  <div>
    <h1>Vue Component Communication Demo</h1>
    <nav>
      <router-link to="/props-emit">Props Emit</router-link> |
      <router-link to="/custom-event">Custom Event</router-link> |
      <router-link to="/attrs-listeners">Attrs Listeners</router-link> |
      <router-link to="/parent-refs">Parent Refs</router-link> |
      <router-link to="/provide-inject">Provide Inject</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}
</style>

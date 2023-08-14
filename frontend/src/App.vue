<template>
  <div id="app">
    <h1>My Blog</h1>
    <Posts />
  </div>
</template>

<script>
import Posts from './components/posts.vue';

export default {
  name: 'App',
  components: {
    Posts,
  },
  // Add component logic here
}
</script>

<style>
/* Add any custom styles here */
</style>
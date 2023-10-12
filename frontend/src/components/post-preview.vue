<template>
  <div>
    <!-- Add post preview markup here -->
    <h2>{{ post.title }}</h2>
    <p>{{ post.date }}</p>
    <p>{{ post.author }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: ['post'],
  // Add component logic here
}
</script>

<style scoped>
/* Add component styles here */
</style>
<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>Author: {{ post.author }}</p>
    <p>Date: {{ post.date }}</p>
    <p>{{ post.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: ['post'],
}
</script>

<style scoped>
/* Add component styles here */
</style>
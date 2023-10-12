<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.text }}</p>
    <p>Author: {{ post.author }}</p>
    <p>Date: {{ formatPostDate(post.date) }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPostDate(date) {
      const parsedDate = new Date(date);
      return parsedDate.toLocaleDateString();
    },
  },
}
</script>

<style scoped>
/* Add component styles here */
</style>
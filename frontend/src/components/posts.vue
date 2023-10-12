<template>
  <div>
    <PostPreview v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import PostPreview from './post-preview.vue';

export default {
  name: 'Posts',
  components: {
    PostPreview,
  },
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      // Make an HTTP request to fetch the blog post data
      // Update the 'posts' data property with the fetched data
    },
  },
}
</script>

<style scoped>
/* Add component styles here */
</style>
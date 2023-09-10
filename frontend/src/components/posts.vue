<template>
  <div>
    <!-- Use the PostPreview component to show a single post preview here -->
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
      // Make API call to fetch blog post data
      axios.get('/api/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
  // Add component logic here
}
</script>

<style scoped>
/* Add component styles here */
</style>
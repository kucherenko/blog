<template>
  <div>
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import PostPreview from './PostPreview.vue';
import axios from 'axios';

export default {
  name: 'Posts',
  components: {
    PostPreview,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('/api/posts')
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
}
</script>

<style scoped>
/* Add component styles here */
</style>
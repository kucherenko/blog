<template>
  <div id="app">
    <h1>My Blog</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  mounted() {
    // Use axios to call the backend and render data on the app
    axios.get('/api/data')
      .then(response => {
        // Handle response data
      })
      .catch(error => {
        // Handle error
      });
  }
}
</script>

<style>
/* Add any custom styles here */
</style>
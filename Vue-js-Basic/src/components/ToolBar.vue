<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/ask">Ask</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  background-color: #42b883;
  display: flex;
  padding: 8px;
  color: white;
}

.header .router-link-active {
  color: #35495e;
}

.header a {
  color: white;
}

</style>
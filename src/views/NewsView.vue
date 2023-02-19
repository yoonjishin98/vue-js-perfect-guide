<template>
  <div>
    <div
      v-for="user in $store.state.news"
      :key="user"
    >
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
  // data() {
  //   return {
  //     users:[]
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS')

    // fetchNewsList()
    //   .then(response => {
    //     this.users = response.data
    //   })
    //   .catch(err => console.log(err))
  }
}
</script>

<style>

</style>
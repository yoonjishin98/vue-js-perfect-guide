<template>
  <div>
    <p
      v-for="item in $store.state.news"
      :key="item"
    >
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by 
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
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
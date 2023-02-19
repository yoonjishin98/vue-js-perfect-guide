<template>
  <div
    v-for="job in $store.state.jobs"
    :key="job"
  >
    {{ job.title }}
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
  // data() {
  //   return {
  //     jobs: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_JOBS')
    // fetchJobsList()
    //   .then(response => {
    //     this.jobs = response.data
    //   })
    //   .catch(err => console.log(err))
  }
}
</script>

<style>

</style>
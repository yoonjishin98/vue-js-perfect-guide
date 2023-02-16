<template>
  <div v-for = "job in jobs" :key="job"> {{ job.title }} </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    fetchJobsList()
      .then(response => {
        this.jobs = response.data;
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>
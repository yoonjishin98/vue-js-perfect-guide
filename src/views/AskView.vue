<template>
  <div v-for="item in ask" :key="item"> {{ item.title }} </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    fetchAskList()
      .then(response => {
        this.ask = response.data;
      })
      .catch(err => console.log(err))
      }
}
</script>

<style>

</style>
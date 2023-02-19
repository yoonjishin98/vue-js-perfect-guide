<template>
  <p
    v-for="item in askItems"
    :key="item"
  >
    <a :href="item.url">{{ item.title }}</a>
    <small>{{ item.time_ago }} by {{ item.user }}</small>
  </p>
</template>

<script>
import { fetchAskList } from '../api/index.js'
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    // #2 (#1을 더 사용하기 편하게 보완) - mapGetters의 배열 표기법
    ...mapGetters({
      askItems : 'fetchedAsk'
    })
    // mapGetters의 객체 표기법
    // ...mapGetters([
    //   'fetchedAsk'
    // ])

    // #1
    // ...mapState ({
    //   ask: state => state.ask
    // })
    // ask() {
    //   return this.$store.state.ask
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
    // fetchAskList()
    //   .then(response => {
    //     this.ask = response.data
    //   })
    //   .catch(err => console.log(err))
      }
}
</script>

<style>

</style>
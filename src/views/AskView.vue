<template>
  <div
    v-for="item in askItems"
    :key="item"
  >
    <!-- <div
    v-for="item in ask"
    :key="item"
  > -->
    {{ item.title }}
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'
import { mapState, mapGetters } from 'vuex'

export default {
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
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
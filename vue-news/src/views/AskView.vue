<template>
  <list-item />
  <!-- <ul class="news-list">
    <li
      v-for="item in askItems"
      :key="item"
      class="post"
    >
      <div class="points">
        {{ item.points }}
      </div>
      <div>
        <p class="news-title">
          <router-link :to="`/item/${item.id}`">
            {{ item.title }}
          </router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by 
          <router-link
            :to="`/user/${item.user}`"
            class="link-text"
          >
            {{ item.user }}
          </router-link>
        </small>
      </div>
    </li>
  </ul> -->
</template>

<script>
import { fetchAskList } from '../api/index.js'
import { mapState, mapGetters } from 'vuex'
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js'

export default {
  components: {
    ListItem
  },
  mixins: [ ListMixin ],
  computed: {
    // #2 (#1을 더 사용하기 편하게 보완) - mapGetters의 배열 표기법
    // ...mapGetters({
    //   askItems : 'fetchedAsk'
    // })
   
  },
  // created() {
  //   /* EventBus: 데이터 보내기 */
  //     // eventBus.$emit("start:spinner")  -- Vue2 버전
  //     this.$emitter.emit("start:spinner")
      
  //     setTimeout(() =>{
  //       this.$store.dispatch('FETCH_ASK')
  //         .then(()=>{
  //           // eventBus.$emit("end:spinner")  -- Vue2 버전
  //           this.$emitter.emit("end:spinner")
  //         })
  //         .catch((error) => {
  //           console.log(error)
  //         })
  //     }, 3000)
  // }
}
</script>

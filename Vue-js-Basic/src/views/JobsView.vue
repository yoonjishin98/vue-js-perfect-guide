<template>
  <list-item />
  <!-- <ul class="news-list">
    <li
      v-for="job in $store.state.jobs"
      :key="job"
      class="post"
    >
      <div class="points">
        {{ job.points || 0 }}
      </div>
      <div>
        <a
          :href="job.url"
          class="news-ttile"
        >
          {{ job.title }}
        </a>
        <small class="link-text">
          {{ job.time_ago }} by 
          <a :href="job.url">
            {{ job.domain }}
          </a>
        </small>
      </div>
    </li>
  </ul> -->
</template>

<script>
import ListItem from '../components/ListItem.vue'
import { fetchJobsList } from '../api/index.js'
import ListMixin from '../mixins/ListMixin.js'

export default {
  components: { ListItem },
  mixins:[ ListMixin ]
  // created() {
  //   /* EventBus: 데이터 보내기 */
  //     // eventBus.$emit("start:spinner")  -- Vue2 버전
  //     this.$emitter.emit("start:spinner")
      
  //     setTimeout(() =>{
  //       this.$store.dispatch('FETCH_JOBS')
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

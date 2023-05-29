<template>
  <!-- <div
    v-for="job in $store.state.jobs"
    :key="job"
  >
    {{ job.title }}
  </div> -->
  <ul class="news-list">
    <li
      v-for="job in $store.state.jobs"
      :key="job"
      class="post"
    >
      <!-- 포인트 영역 -->
      <div class="points">
        {{ job.points || 0 }}
      </div>
      <!-- 기타 정보 영역 -->
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
  </ul>
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

<style scopped>
.news-list{
  margin: 0;
  padding: 0;
}

.post{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0px;
}

.link-text {
  color: #828282;
}

</style>
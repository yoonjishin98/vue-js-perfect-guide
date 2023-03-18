<template>
  <div>
    <ul class="news-list">
      <li
        v-for="item in $store.state.news"
        :key="item"
        class="post"
      >
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
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
    </ul>
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
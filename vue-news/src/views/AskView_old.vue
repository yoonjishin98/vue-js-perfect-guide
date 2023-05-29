<template>
  <ul class="news-list">
    <li
      v-for="item in askItems"
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
  </ul>
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
    
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
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
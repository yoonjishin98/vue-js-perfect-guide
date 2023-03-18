<template>
  <div>
    <ul class="news-list">
      <li
        v-for="item in listItems"
        :key="item"
        class="post"
      >
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by 
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
            >
              {{ item.user }}
            </router-link>
            <a :href="item.url"> {{ item.domain }} </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    computed: {
      listItems() {
        const name = this.$route.name
        var routeState = ''

        if(name === 'news')
          routeState =  this.$store.state.news
        else if(name === 'ask')
          routeState =  this.$store.state.ask
        else if(name === 'jobs')
          routeState =  this.$store.state.jobs

        return routeState
      }
    },
    created() {
      const name = this.$route.name
      var actionName = ''
      
      if(name === 'news')
        actionName = 'FETCH_NEWS'
      else if(name === 'ask')
        actionName = 'FETCH_ASK'
      else if(name === 'jobs')
        actionName = 'FETCH_JOBS'

      this.$store.dispatch(actionName)
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
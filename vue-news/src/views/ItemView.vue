<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <div class="user-container">
        <user-profile :info="fetchedItem">
          <template #username>
            <router-link
              :to="`/user/${fetchedItem.user}`"
            >
              {{ fetchedItem.id }}
            </router-link>
          </template>
          <template #time>
            {{ 'Posted ' + fetchedItem.time_ago }}
          </template>
        </user-profile>
      </div>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <!-- 화면에 html 태그를 텍스트로 보이도록 적용할 때 -->
      <div v-html="fetchedItem.content" /> 
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
.user-container {
  padding: 0.5 rem;
  display: flex;
  align-items: center;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}

</style>
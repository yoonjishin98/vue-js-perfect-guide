<template>
  <div>
    <user-profile :info="userInfo">
      <template #username>
        {{ userInfo.id }}
      </template>
      <template #time>
        <span> {{ 'Joined ' + userInfo.created }} , </span>
      </template>
      <template #karma>
        <span>{{ userInfo.karma }} </span>
      </template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue'
export default {
  components: { UserProfile },
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  created() {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>
.test {
  display: inline;
}

</style>
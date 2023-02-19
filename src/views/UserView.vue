<template>
  <div>
    <p>Name: {{ userInfo.id }}</p>
    <p>Karma: {{ userInfo.karma }}</p>
    <p>Created at: {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
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

</style>
<template>
  <div class="user-container">
    <div>
      <i class="fa-solid fa-user" />
    </div>
    <div class="user-description">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <div class="time">
        <slot name="time">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <slot name="karma">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    info: Object
  },
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
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
  margin-top: 0.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>
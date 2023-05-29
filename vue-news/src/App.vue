<template>
  <div>
    <tool-bar />
    <transition name="page">
      <router-view />
    </transition>
    <loading-spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import LoadingSpinner from './components/LoadingSpinner.vue'
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    ToolBar,
    LoadingSpinner
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  created() {
    /* EventBus: 데이터 받기 */
    // eventBus.$on('start:spinner', this.startSpinner)   --Vue 2 버전
    this.$emitter.on("start:spinner", this.startSpinner)
    // eventBus.$on('end:spinner', this.endSpinner)   --Vue 2 버전
    this.$emitter.on("end:spinner", this.endSpinner)
  },
  beforeUnmount() {   // == beforeDestroy 
    this.$emitter.off("start:spinner", this.startSpinner)
    this.$emitter.off("end:spinner", this.endSpinner)
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() {
      this.loadingStatus = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2c3e50;
  padding : 0;
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color:#42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

/* 라우터 트랜지션 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

</style>

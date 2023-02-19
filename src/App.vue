<template>
  <div>
    <tool-bar />
    <transition name="page">
      <router-view />
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld, 
    ToolBar
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

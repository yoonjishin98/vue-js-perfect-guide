<template>
  <div>
    <list-item />
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js'

export default {
    components: {
        ListItem
    },
    mixins: [ ListMixin ]
    // created() {
    //   /* EventBus: 데이터 보내기 */
    //   // eventBus.$emit("start:spinner")  -- Vue2 버전
    //   this.$emitter.emit("start:spinner")
      
    //   setTimeout(() =>{
    //     this.$store.dispatch('FETCH_NEWS')
    //       .then(()=>{
    //         // eventBus.$emit("end:spinner")  -- Vue2 버전
    //         this.$emitter.emit("end:spinner")
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   }, 3000)
    // }
}
</script>

<style>

</style>
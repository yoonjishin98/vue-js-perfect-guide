export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() {
    /* EventBus: 데이터 보내기 */
    // eventBus.$emit("start:spinner")  -- Vue2 버전
    this.$emitter.emit("start:spinner")

    setTimeout(() => {
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          // eventBus.$emit("end:spinner")  -- Vue2 버전
          this.$emitter.emit("end:spinner")
        })
        .catch((error) => {
          console.log(error)
        })
    }, 3000)
  }

}
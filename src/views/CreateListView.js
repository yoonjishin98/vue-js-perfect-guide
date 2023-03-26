import ListView from './ListView.vue'
import { h } from 'vue'

// High Order Component
export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어 갈 자리
    name: 'HOC Component',  // name
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
      }, 2000)
    },
    render() { //컴포넌트 로딩
      return h(ListView)  // h: virtual DOM Node(VNode)를 생성해줌
    }
  
  }
}
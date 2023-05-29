import { createApp } from 'vue'
import App from './App.vue' // 최상위 App.vue 컴포넌트 지정
import router from './routes/index.js'
import store from './store/index.js'
import mitt from 'mitt'


const app = createApp(App)
const emitter = mitt()  // EventBus 사용을 위한 외부 라이브러리
app.config.globalProperties.$emitter = emitter  // app.config.globalProperties : 글로벌 변수 선언. ${변수명} 사용.

app.use(router)
    .use(store)
    .mount('#app')  // 렌더링 시작점 지정
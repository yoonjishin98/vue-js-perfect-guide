import { createApp } from 'vue'
import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

// 보기 편하게 actions, mutations 분리
const store = createStore({
    state() {
        return {
            news: [],
            jobs: [],
            ask: [],
            user: [],
            item: []
        }
    },
    getters: {  // store의 computed
        fetchedAsk(state) {
            return state.ask
        },
        fetchedItem(state) {
            return state.item
        }
    },
    actions,    // actions: actions,
    mutations   // mutations: mutations
})

export default store
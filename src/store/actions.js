import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {     // 기존 Javacript 문법
                // console.log('context 속성 알아보기: ', context)
                context.commit('SET_NEWS', response.data)
            })
            .catch(error => {
                console.log('news error')
            })
    },

    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {   // Destructing 문법
                commit('SET_JOBS', data)
            })
            .catch(error => {
                console.log('jobs error')
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data)
            })
            .catch(error => {
                console.log('ask error')
            })
    }
}
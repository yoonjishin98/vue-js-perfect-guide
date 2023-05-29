import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js'

export default {
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //         .then(response => {     // 기존 Javacript 문법
    //             // console.log('context 속성 알아보기: ', context)
    //             context.commit('SET_NEWS', response.data)
    //         })
    //         .catch(error => {
    //             console.log('news error')
    //         })
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then(({ data }) => {   // Destructing 문법
    //             commit('SET_JOBS', data)
    //         })
    //         .catch(error => {
    //             console.log('jobs error')
    //         })
    // },
    // FETCH_ASK({ commit }) {
    //     fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASK', data)
    //         })
    //         .catch(error => {
    //             console.log('ask error')
    //         })
    // },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data) 
            })
            .catch(error => {
                console.log('user error')
            })
    },
    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(error => {
                console.log('item error')
            })
    },
    FETCH_LIST({commit}, pageName) {
        fetchList(pageName)
            .then(({ data }) => commit('SET_LIST', data))
            .catch(error => console.log(error))
    }
}
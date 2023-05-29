import axios from "axios"

// HTTP Request & Response 관련 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}


// 2. API 함수들 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`)   //ES6 문법
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

function fetchItemInfo(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}
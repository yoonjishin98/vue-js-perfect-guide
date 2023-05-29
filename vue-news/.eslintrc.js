module.exports = {
    extends: [
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
        // 'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability 
    ],
    rules: {
        semi: [2, "never"],  // 2: error (세미콜론 사용 시 에러 뱉음), 1: warning
        "no-unused-vars": "off" // 사용하지 않는 변수에 대한 에러 표시 제거
    }
}
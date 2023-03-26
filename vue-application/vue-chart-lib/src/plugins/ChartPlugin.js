import Chart from 'chart.js'

export default {
  // eslint-disable-next-line no-unused-vars
  install(app) {
    app.config.globalProperties.$_Chart = Chart
  }
}
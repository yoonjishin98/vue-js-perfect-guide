<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart
      :propsData = "chartDataSet">
    </bar-chart>
    <line-chart/>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'

export default {
 components: {
  BarChart, 
  LineChart
 },
 data () {
  return {
    chartDataSet: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
  }
 },
 created () {
  // axios.get('charts/line/1')
  // .then(res => this.chartDataSet = res.data)
  // .catch(err => console.log('Error: ', err))
 },
 methods: {
  getChartData () {
    setTimeout(() => {

    }, 3000)
  }
 }
}
</script>

<style>

</style>
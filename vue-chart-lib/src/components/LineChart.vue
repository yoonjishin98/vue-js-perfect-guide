<template>
  <canvas ref="lineChart" id="myChart2" width="400" height="100" />
</template>

<script>

export default {
  mounted() {
    // const ctx = document.getElementById('myChart2')
    const ctx = this.$refs.lineChart

    new this.$_Chart(ctx, {
      type: 'line',
      data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], 
         datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      } 
    })
  }
}
</script>

<style>

</style>
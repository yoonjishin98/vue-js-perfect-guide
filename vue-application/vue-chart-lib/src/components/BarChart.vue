<template>
  <canvas ref="barChart" id="myChart1" width="400" height="100" />
</template>

<script>

export default {
  props: ['propsData'],
  mounted() {
    // const ctx = document.getElementById('myChart1')
   const ctx = this.$refs.barChart

    new this.$_Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsData
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
<template>
    <div id="app">
      <div id="timerange">

      </div>
      <AreaChart :chartData="chartData" :xAxisLabels="xAxisLabels" :key="updateChartToggle"></AreaChart>
      <button @click="updateChartToggle += 1">UPDATE COMPONENT</button>
    </div>
  </template>
  
  <script>
  import AreaChart from "@/components/AreaChart.vue"
  
  export default {
    name: "App",
    components: {
      AreaChart
    },
    data() {
      return {
        recogLogAPI: "/riset.luqmanr.xyz/riset_ai/api_fr/v3/recog_log?time_range=day&client_id=dycodex&cluster_id=Trial",
        // recogLogAPI: "/riset.luqmanr.xyz/fr_analytics/recog_log.json",
        updateChartToggle: 0,
        chartData: [],
        xAxisLabels: [],
        recogLogData: [],
        chartColors: [
          "rgba(253, 231, 170, 0.35)",   // yellow
          "rgba(192, 170, 253, 0.35)",  // purple
          "rgba(170, 231, 253, 0.35)",  // cyan
          "rgba(170, 253, 183, 0.35)",   // green
          "rgba(253, 170, 170, 0.35)",   // red          
        ]
      }
    },
    methods: {
        FetchRecogLog() {
          this.axios.get(this.recogLogAPI)
          .then((recogLogs) => {
            this.recogLogData = recogLogs.data.data

            var chartLineColors = this.chartColors
            var newChartData = []
            var i
            for (i = 0; i < recogLogs.data.data.length; i++) {
              // instantiate clusterData
              var clusterData = {}
              
              // assign label as cluster_id
              clusterData.label = recogLogs.data.data[i].cluster_id

              // for time in results, and append to newChartData
              clusterData.data = []
              var j
              for (j = 0; j < recogLogs.data.data[i].result.length; j++) {
                clusterData.data.push(recogLogs.data.data[i].result[j].value)
                if (i == 0 && j == 0) {
                  var k
                  for (k = 0; k < recogLogs.data.data[i].result.length; k++) {
                    this.xAxisLabels.push(k)
                  }
                  console.log(JSON.stringify(this.xAxisLabels))
                  // this.xAxisLabels.push("hour " + recogLogs.data.data[i].result[j].time)
                }
              }              

              // assign clusterData styling
              if (chartLineColors.length == 0) {
                chartLineColors = this.chartColors
              }
              var selectedColorIndex = Math.floor(Math.random() * chartLineColors.length)
              clusterData.borderColor = chartLineColors[selectedColorIndex]
              clusterData.borderWidth = 3
              clusterData.backgroundColor = chartLineColors[selectedColorIndex]
              chartLineColors = chartLineColors.filter(item => item !== chartLineColors[selectedColorIndex])
              // clusterData.pointBackgroundColor = "white"
              // clusterData.pointBorderColor = "white"

              // populate chartdata with clusterdata
              newChartData.push(clusterData)
            }
            this.chartData = newChartData
            console.log(JSON.stringify(this.chartData))
            this.updateChartToggle += 1
          })
        }
    },
    created() {
      this.FetchRecogLog()
    }
  }
  </script>
  
  <style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    margin-top: 60px;
  }
  </style>
  
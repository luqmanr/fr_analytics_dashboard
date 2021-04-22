<template>
  <div id="app">
    <div style="font-weight: bold;">
      Recognition Errors
    </div>
    <AreaChart
      id="recogLogHits" 
      :chartData="chartData" 
      :xAxisLabels="xAxisLabels" 
      :key="updateChartToggle"/>
    <!-- <button @click="FetchRecogLog">UPDATE COMPONENT</button> -->
  </div>
</template>

<script>
import AreaChart from "@/components/AreaChart.vue"

export default {
  name: "App",
  components: {
    AreaChart
  },
  props: {
    // // API config
    logAPI: {
      default: "/riset.luqmanr.xyz/riset_ai/api_fr/v3/recog_log_v2"
    },
    // // Dashboard Client or User Data
    clientID: {
      default: "dycodex"
    },
    clusterIDs: {
      default() {
          return []
      }
    },
    timeRange: {
      default: "day"
    }
  },
  data() {
    return {
      // // Rendering Utils
      lastClusterID: "",

      // // Chart Data & Chart Configs
      updateChartToggle: 0,
      chartData: [],
      xAxisLabels: [],
      recogLogData: [],
      chartColors: [
        "rgba(253, 231, 170, 0.5)",   // yellow
        "rgba(192, 170, 253, 0.5)",   // purple
        "rgba(170, 231, 253, 0.5)",   // cyan
        "rgba(170, 253, 183, 0.5)",   // green
        "rgba(253, 170, 170, 0.5)",   // red
        "rgba(47, 208, 162, 0.5)",    // moss-green
        "rgba(230, 147, 207, 0.5)",   // pink
        "rgba(43, 98, 191, 0.5)",     // bue
        "rgba(191, 132, 43, 0.5)",    // orange
        "rgba(104, 62, 39, 0.5)",      // brown
      ]
    }
  },
  methods: {
      FetchRecogLog() {
        var getRequest = this.logAPI + "?client_id=" + this.clientID + "&time_range=" + this.timeRange
        // // Check if clusterIDs is not empty list
        if (this.clusterIDs.length != 0) {
          var i
          for (i = 0; i < this.clusterIDs.length; i++) {
            getRequest = getRequest + "&cluster_id=" + this.clusterIDs[i]
          }
        }
        console.log(getRequest)
        this.axios.get(getRequest)
        .then((recogLogs) => {
          this.recogLogData = recogLogs.data.data
          this.xAxisLabels = []

          var chartLineColors = this.chartColors
          var newChartData = []
          var dataIndex
          for (dataIndex = 0; dataIndex < recogLogs.data.data.length; dataIndex++) {
            // instantiate clusterData
            var clusterData = {}
            
            // assign label as cluster_id
            clusterData.label = recogLogs.data.data[dataIndex].cluster_id

            // for time in results, and append to newChartData
            clusterData.data = []
            var resultIndex
            for (resultIndex = 0; resultIndex < recogLogs.data.data[dataIndex].result.length; resultIndex++) {
              clusterData.data.push(recogLogs.data.data[dataIndex].result[resultIndex].n_failed)

              // update xAxisLabels (in this case, time range)
              if (dataIndex == 0) {
                // // Parsing and Formatting xAxisLabel timeformat
                const timeString = recogLogs.data.data[dataIndex].result[resultIndex].time
                if (this.timeRange == "day") {
                  var fromDate = timeString.split(" ")[0]
                  var fromHour = timeString.split(" ")[1].slice(0,5)
                  var toDate = timeString.split(" ")[3]
                  var toHour = timeString.split(" ")[4].slice(0,5)
                  var finalHour = fromHour + " - " + toHour
                } else {
                  var fromDate = timeString.split(" ")[0]
                  var toDate = timeString.split(" ")[2]
                  var finalHour = ""
                }

                if (fromDate == toDate) {
                  var finalDate = fromDate
                } else {
                  var finalDate = fromDate + " - " + toDate
                }
                
                var timeLabel = [finalDate, finalHour]

                this.xAxisLabels.push(timeLabel)
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
          this.updateChartToggle += 1
        })
      }
  },
  mounted() {
    this.FetchRecogLog()
  },
  watch: {
    lastClusterID(clusterID) {
      if (clusterID != "") {
        console.log(this.clusterIDs)
        this.clusterIDs.push(clusterID)
      }
    }
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

p {
  text-align: left;
  margin-left: 1vw;
}
</style>

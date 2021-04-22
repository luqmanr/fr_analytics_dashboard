<template>
  <dIv>
    <div id="form" class="row">
      <div class="col-md-6 row">
        <span class="col-sm-4">ClientID: </span>
        <input type=text v-model.lazy="clientID" class="col-sm-11">
      </div>
      <div class="col-md-6 row">
        <span class="col-sm-4">Cluster(s): </span>
        <input type=text v-model.lazy="lastClusterID" class="col-sm-10">
        <button @click="resetClusterID" class="col-sm-2">Reset</button>
      </div>
      <div class="col-md-6 row">
        <span class="col-sm-4">Time Range: (day, week, month)</span>
        <input type=text v-model.lazy="timeRange" class="col-sm-11">
      </div>
    </div>
    <recog-log-chart
      :logAPI="logAPI"
      :clientID="clientID"
      :clusterIDs="clusterIDs"
      :timeRange="timeRange"
      :key="updateChartToggle"/>
    <recog-errors-chart 
      :logAPI="logAPI"
      :clientID="clientID"
      :clusterIDs="clusterIDs" 
      :timeRange="timeRange"
      :key="updateChartToggle"/>
    <button @click="updateChartToggle++">FORCE UPDATE COMPONENTS</button>
  </dIv>
</template>

<script>
import RecogLogChart from '@/pages/RecogLogPage.vue'
import RecogErrorsChart from '@/pages/RecogErrorsPage.vue'

export default {
  components: {
    'recog-log-chart': RecogLogChart,
    'recog-errors-chart': RecogErrorsChart
  },
  data() {
    return {
      logAPI: "https://api.riset.ai/api_fr/v3/recog_log_v2",
      clientID: "dycodex",
      timeRange: "week",
      clusterIDs: [],

      //// Rendering & Form Utils
      lastClusterID: "",
      updateChartToggle: 0,
    }
  },
  methods: {
    resetClusterID() {
      this.clusterIDs = []
      this.updateChartToggle++
    }
  },
  created() {
    console.log(this.logAPI)
  },
  watch: {
    clientID(e) {
      this.updateChartToggle++
    },
    timeRange(e) {
      this.updateChartToggle++
    },
    lastClusterID(clusterID) {
      if (clusterID != "") {
        this.clusterIDs.push(clusterID)
        this.updateChartToggle++
      }
    },
  }
}
</script>

<style scoped>

</style>
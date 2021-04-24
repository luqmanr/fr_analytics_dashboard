<template>
  <div id="app">
    <AreaChart/>
    <PieChart/>
    <BarChart/>
    <RadarChart/>
    <LineChart/>
  </div>
</template>

<script>
import AreaChart from "@/components/charts/templates/AreaChart.vue"
import PieChart from "@/components/charts/templates/PieChart.vue"
import BarChart from "@/components/charts/templates/BarChart.vue"
import RadarChart from "@/components/charts/templates/RadarChart.vue"
import LineChart from "@/components/charts/templates/LineChart.vue"

export default {
  name: "App",
  components: {
    AreaChart,
    PieChart,
    BarChart,
    RadarChart,
    LineChart
  },
  data() {
    return {
      chartData: {
        label: "Data One",
        data: [40, 39, 10, 40, 39, 80, 40]
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

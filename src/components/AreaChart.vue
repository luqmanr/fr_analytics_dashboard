<script>
import { Line } from "vue-chartjs"

export default {
    extends: Line,
    props: {
        chartData: {
            default: [
                {
                    label: "Data One",
                    borderColor: "#05CBE1",
                    pointBackgroundColor: "white",
                    borderWidth: 1,
                    pointBorderColor: "white",
                    backgroundColor: null,
                    data: [40, 39, 10, 40, 39, 80, 40]
                }
            ]
        },
        xAxisLabels: {
            default: null
        }
    },
    data() {
        return {
            gradient1: null,
            gradient2: null
        }
    },
    mounted() {
        
        this.gradient1 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450)
        this.gradient2 = this.$refs.canvas
            .getContext("2d")
            .createLinearGradient(0, 0, 0, 450)

        this.gradient1.addColorStop(0, "rgba(10, 50, 255, 0.95)")
        this.gradient1.addColorStop(0.5, "rgba(200, 100, 255, 0.25)")
        this.gradient1.addColorStop(1, "rgba(0, 0, 0, 0.25)")

        this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)")
        this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)")
        this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)")

        // // Assign colors to chart data
        // var i
        // for (i = 0; i < this.chartData.length; i++) {
        //     console.log(this.chartData)
        //     this.chartData[i].backgroundColor = this.gradient1
        // }
        
        this.renderChart(
            {
                labels: this.xAxisLabels,
                datasets: this.chartData
            },
            { 
                responsive: true, 
                maintainAspectRatio: false,
                legend: { 
                    labels: { 
                        fontColor: "white" 
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: "white"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: "white"
                        }
                    }]
                }
            }
        )
    }
}
</script>

<style scoped>
canvas {
    background-color: rgba(230,230,230,0.1);
}
</style>

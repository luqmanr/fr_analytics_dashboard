<script>
import { Bar } from "vue-chartjs"

export default {
    extends: Bar,
    props: {
        chartData: {
            default: [
                {
                    label: "Data One",
                    borderColor: "#05CBE1",
                    pointBackgroundColor: "white",
                    borderWidth: 100,
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
                // datasets: [
                //     this.chartData[0],
                //     {
                //         label: "Data Two",
                //         borderColor: "#05CBE1",
                //         pointBackgroundColor: "white",
                //         pointBorderColor: "white",
                //         borderWidth: 1,
                //         backgroundColor: this.gradient2,
                //         data: [60, 55, 32, 10, 2, 12, 53]
                //     }
                // ]
            },
            { 
                responsive: true, 
                maintainAspectRatio: false,
                legend: { 
                    labels: { 
                        fontColor: "black" 
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: "black"
                        },
                        barPercentage: 1.0,
                        categoryPercentage: 0.7
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: "black"
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
    background-color: white;
}
</style>

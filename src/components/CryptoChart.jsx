import { Line } from 'react-chartjs-2'
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    } from 'chart.js'

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    )

    export default function CryptoChart({ data }) {
      const chartData = {
        labels: data.map(d => d.time),
        datasets: [{
          label: 'Price (USD)',
          data: data.map(d => d.price),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Price History'
          }
        }
      }

      return <Line options={options} data={chartData} />
    }

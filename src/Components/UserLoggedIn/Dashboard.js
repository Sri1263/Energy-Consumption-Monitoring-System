import { React, useState } from 'react'
import './dashboard.css'
import Chart from 'chart.js/auto'
import { Pie, Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

export default function Dashboard() {

  const [chartData, setChartData] = useState(
    {
      labels: ['SoC', 'LTC', 'VKJ'],
        datasets: [
            {
              label: '  Share ',
              data: [30, 20, 50],
            //   you can set indiviual colors for each bar
            //   backgroundColor: [
            //     'rgba(255, 255, 255, 0.6)',
            //     'rgba(255, 255, 255, 0.6)',
            //     'rgba(255, 255, 255, 0.6)'
            //   ],
              borderWidth: 2,
            }
        ]
    }
  );

  return (
    <div className='dashboardContainer'>
        <div className='dashboardHead'>
            <h1>Total Energy Consumed by the University</h1>
        </div>
        <div className='chartsHolder'>
            <div className='pieChartHolder'>
                <Pie
                    data={chartData}
                    options={{
                    plugins: {
                        title: {
                        display: true,
                        text: "Energy Consumption Split for : JUNE"
                        }
                    }
                    }}
                />
            </div>
            
            <div className='barChartHolder'>
                    <Bar
                        data={chartData}
                        options={{
                        plugins: {
                            title: {
                            display: true,
                            text: "Energy Consumption Split for : JUNE"
                            },
                            legend: {
                            display: false
                            }
                        }
                        }}
                    />
            </div>
        </div>
        
    </div>
  )
}

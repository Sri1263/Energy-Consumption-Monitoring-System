import { React, useState } from 'react'
import './usage.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

export default function Usage() {

    const [chartData, setChartData] = useState(
        {
            labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            datasets: [
                {
                label: '  LTC ',
                data: [29,28,21,29,27,21,21,29,28,40,29,23,20,22,23,10,27,20,22,29,29,21,22,20,26],
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
    <div className='usageContainer'>
        <div className='usageHead'>
            <h1>Day-wise Energy Consumption for Past Month</h1>
        </div>
        <div className='departmentsContainer'>
            <div className='departmentsHolder'>
                <button className='department'>SoC</button>
                <button className='department red'>LTC</button>
                <button className='department'>VKJ</button>
            </div> 
            <div className='lineChartHolder'>
                <Line
                    data={chartData}
                    options={{
                    plugins: {
                        title: {
                        display: true,
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

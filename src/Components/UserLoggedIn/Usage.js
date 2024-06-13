import { React, useState } from 'react'
import './usage.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

export default function Usage() {

    const [LTCData,setLTCData] = useState(
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
            hidden: false,
        }
    )

    const [VKJData,setVKJData] = useState(
        {
            label: '  VKJ ',
            data: [19, 34, 19, 31, 29, 21, 18, 28, 25, 22, 19, 27, 31, 20, 19, 27, 28, 15, 30, 17, 24, 18, 18, 16, 23],
            //   you can set indiviual colors for each bar
            //   backgroundColor: [
            //     'rgba(255, 255, 255, 0.6)',
            //     'rgba(255, 255, 255, 0.6)',
            //     'rgba(255, 255, 255, 0.6)'
            //   ],
            borderWidth: 2,
            hidden: false,
        }
    )

    const [SoCData,setSoCData] = useState(
        {
            label: '  SoC ',
            data: [26, 27, 22, 22, 21, 24, 26, 24, 27, 22, 20, 27, 28, 22, 21, 29, 29, 27, 29, 26, 28, 25, 27, 25, 25, 23, 27],
            //   you can set indiviual colors for each bar
            //   backgroundColor: [
            //     'rgba(255, 255, 255, 0.6)',
            //     'rgba(255, 255, 255, 0.6)',
            //     'rgba(255, 255, 255, 0.6)'
            //   ],
            borderWidth: 2,
            hidden:false,
        }
    )


  return (
    <div className='usageContainer'>
        <div className='usageHead'>
            <h1>Day-wise Energy Consumption for Past Month</h1>
        </div>
        <div className='departmentsContainer'>
            <div className='departmentsHolder'>
                <button className='department-soc' name='  SoC ' onClick={()=>
                    {
                        let toggle = !SoCData.hidden
                        setSoCData((data)=>({...data,hidden:toggle}))}
                    }>SoC</button>
                <button className='department-ltc' name='  LTC ' onClick={()=>
                    {
                        let toggle = !LTCData.hidden
                        setLTCData((data)=>({...data,hidden:toggle}))}
                    }>LTC</button>
                <button className='department-vkj' name='  VKJ ' onClick={()=>
                    {
                        let toggle = !VKJData.hidden
                        setVKJData((data)=>({...data,hidden:toggle}))}
                    }>VKJ</button>
            </div>
            <div className='lineChartHolder'>
                <Line
                    data={
                        {
                            labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                            datasets: [ SoCData, LTCData, VKJData ]
                        }
                    }
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

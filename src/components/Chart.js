import api from "@/lib/api"
import ECharts from "echarts-for-react"
import { useEffect, useMemo, useRef, useState } from "react"

export function Echart_Gauge({lineElement}){

  const chartRef = useRef()
  // const [option, setOption] = useState({
    // series: [
    //   {
    //     type: 'gauge',
    //     startAngle: 210, // 시작 각도를 180도로 설정
    //     endAngle: -30, // 끝 각도를 0도로 설정
    //     radius: '100%', // 반원을 만들기 위해 반지름을 100%로 설정
    //     axisLine: {
    //       lineStyle: {
    //         width: 30,
    //         color: [
    //           [0.3, '#3b69cd'],
    //           [0.7, '#35e1ad'],
    //           [1, '#fd666d']
    //         ]
    //       }
    //     },
    //     min:0,
    //     max:100,
    //     pointer: {
    //       itemStyle: {
    //         color: 'auto'
    //       }
    //     },
    //     axisTick: {
    //       distance: -30,
    //       length: 8,
    //       lineStyle: {
    //         color: '#fff',
    //         width: 2
    //       }
    //     },
    //     splitLine: {
    //       distance: -30,
    //       length: 30,
    //       lineStyle: {
    //         color: '#fff',
    //         width: 4
    //       }
    //     },
    //     axisLabel: {
    //       color: 'inherit',
    //       distance: 40,
    //       fontSize: 13,
    //       formatter:0
    //     },
    //     detail: {
    //       valueAnimation: true,
    //       formatter: '{value}°C',
    //       color: 'inherit',
    //       fontSize: 25
    //     },
    //     data: [
    //       {
    //         value: 70
    //       }
    //     ]
    //   }
    // ]
  // })

  const option = useMemo(() => {
    return{
      series: [
        {
          type: 'gauge',
          startAngle: 210, // 시작 각도를 180도로 설정
          endAngle: -30, // 끝 각도를 0도로 설정
          radius: '100%', // 반원을 만들기 위해 반지름을 100%로 설정
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#3b69cd'],
                [0.7, '#35e1ad'],
                [1, '#fd666d']
              ]
            }
          },
          min:lineElement.plating_min_value1-1,
          max:lineElement.plating_max_value1,
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: 40,
            fontSize: 13,
            formatter:0
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}°C',
            color: 'inherit',
            fontSize: 25
          },
          data: [
            {
              value: lineElement.plating_value
            }
          ]
        }
      ]
    }
  },[lineElement.plating_value])

  // useEffect(() =>{
  //   if(lineElement){
  //     const newOption = { ...option }
  //     newOption.series[0].data[0].value = lineElement.plating_value
  //     newOption.series[0].min = lineElement.plating_min_value1-1
  //     newOption.series[0].max = lineElement.plating_max_value1
  //   }

  // },[lineElement.plating_value])

  const opts = {
    renderer: 'canvas', // 렌더러 설정 (canvas 또는 svg)
    width: 'auto',       // 너비를 자동으로 조절
    height: 'auto',      // 높이를 자동으로 조절
    autoResize: true     // 차트가 자동으로 리사이즈됨
  };
  return(
    <div style={{ width: '100%', height: '100%' }}>
      <ECharts option={option} ref={chartRef} style={{ height: '90%' }}/>
    </div>
  )
}
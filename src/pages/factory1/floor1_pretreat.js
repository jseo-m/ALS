import { StyledPage_ChartSection } from '@/lib/styles'
import { Echart_Gauge } from '@/components/Chart'
import api from '@/lib/api'
import { useEffect, useState } from 'react'
import { calculateNumber } from '@/lib/utils'
import { useLine } from '@/lib/store'

const lineElement = {
  1 : "1층 전처리 1호기",
  2 : "1층 전처리 2호기 "
}

export default function Floor1_pretreat({viewMode}) {

  
  const lineArr = [1,2] //보여줄 라인의 인덱스
  const [lineArrIdx, setLineArrIdx] = useState(1)
  const [data, setData] = useState([])
  const {setLineName, setLineSpeed, resetLineData} = useLine()

  function changeLine() {
    
    setLineArrIdx((prev) => (prev % lineArr.length)+1)
  }
  useEffect(() => {
    const interval = setInterval(changeLine, 15000)

    return () => {
      clearInterval(interval)
      resetLineData()
    }
  },[])

  useEffect(() => {
    setLineName(lineElement[lineArr[lineArrIdx-1]])
  },[lineArrIdx])

  const {isLoading} = api.main.useGetElementData(lineArr[lineArrIdx-1],{placeholderData:[],
    onSuccess: (res) => {
      console.log(res)
      setData(res?.filter(v => v.plating_element_type_index != 23))
      setLineSpeed(res?.find(v => v.plating_element_type_index == 23)?.plating_value)
    }
  })
  const grid = calculateNumber(data.length)
  return (
    <>
    {!isLoading && (
      <StyledPage_ChartSection viewMode={viewMode} column={grid.column} row={grid.row}>
        <section>
        {Array.from({length:grid.column*grid.row}).map((v,i) => {
            if(i<data.length){
              return (
                <figure key={i}>
                  <div>{data[i].plating_line_element_name}</div>
                  <Echart_Gauge lineElement={data[i]}/>
                </figure>
              )
            }else{
              return(<figure key={`non_${i}`} style={{boxShadow: `0 0 0 0.4px ${viewMode ? "black" : "white"}`, transition: 'box-shadow 0.5s ease'}}></figure>)
            }
          }
          )}
        </section>
      </StyledPage_ChartSection>
      )}
    </>
  )
}

// export async function getServerSideProps({query}){
//   const lineIdx = query?.line || 1
//   const data = await getLineElement(lineIdx)
//   return{
//     props:{
//       lineElementList: data
//     }
//   }
// }
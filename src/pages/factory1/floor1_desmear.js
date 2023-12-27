import { StyledPage_ChartSection} from '@/lib/styles'
import { Echart_Gauge } from '@/components/Chart'
import api from '@/lib/api'
import { useEffect, useState } from 'react'
import { calculateNumber } from '@/lib/utils'


export default function Floor1_desmear({viewMode}) {

  
  const lineArr = [3,4] // 총 라인 수
  const [lineArrIdx, setLineArrIdx] = useState(1)

  function changeLine() {
    
    setLineArrIdx((prev) => (prev % lineArr.length)+1)
  }
  useEffect(() => {
    const interval = setInterval(changeLine, 5000)

    return () => {
      clearInterval(interval)
    }
  },[])

  const {isLoading, isFetching, data} = api.main.useGetElementData(lineArr[lineArrIdx-1],{placeholderData:[]})
  const grid = calculateNumber(data.length)
  return (
    <>
    {!isLoading && (
      <StyledPage_ChartSection viewMode={viewMode} column={grid.column} row={grid.row}>
        <section>
        {/* {console.log(isFetching)} */}
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
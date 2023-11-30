import Head from 'next/head'
import Image from 'next/image'
import { StyleHome } from '@/lib/styles'
import { Chart_Section } from '@/components/Section'
import { getLineElement } from '@/lib/api/main'
import { Echart_Gauge } from '@/components/Chart'
import api from '@/lib/api'
import { Icons_Loading } from '@/components/Icons'
import { useEffect, useState } from 'react'


export default function HomePage({viewMode}) {

  
  const totalLines = 5 // 총 라인 수
  const [currentLine, setCurrentLine] = useState(1)

  function changeLine() {
    
    setCurrentLine((prevLine) => (prevLine % totalLines)+1)
  }
  // useEffect(() => {
  //   const interval = setInterval(changeLine, 5000);

  //   return () => {
  //     clearInterval(interval); // 컴포넌트가 언마운트되면 interval 정리
  //   }
  // },[])

  const {isFetching, data} = api.main.useGetElementData(currentLine,{placeholderData:[]})

  return (
    <StyleHome viewMode={viewMode}>
      <section>
      {/* {console.log(isFetching)} */}
      {Array.from({length:12}).map((v,i) => {
          if(i<data.length){
            return (
              <figure key={i}>
                <div>{data[i].plating_line_element_name}</div>
                <Echart_Gauge lineElement={data[i]}/>
              </figure>
            )
          }else{
            return(<figure key={`non_${i}`} style={{boxShadow: `0 0 0 0.4px ${viewMode ? "black" : "white"}`, transition: 'box-shadow 0.5s ease'}}>{`${currentLine}라인에 나올 차트~~`}</figure>)
          }
        }
        )}

      </section>
    </StyleHome>
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
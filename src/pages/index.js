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

  
  const line = 1
  const {isFetching, data} = api.main.useGetElementData(line,{placeholderData:[]})

  return (
    <StyleHome viewMode={viewMode}>
      <section>
      {console.log(isFetching)}
      {Array.from({length:12}).map((v,i) => {
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
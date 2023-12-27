import { StyleHome } from '@/lib/styles'
import {Monitoring_card } from '@/components/Section'


export default function HomePage() {
  
  return(
      <StyleHome>
        <Monitoring_card title="1공장 1층" viewName="전처리 라인" move="/factory1/floor1_pretreat"/>
        <Monitoring_card title="1공장 1층" viewName="디스미어 라인" move="/factory1/floor1_desmear"/>
        <Monitoring_card />
        <Monitoring_card />
        <Monitoring_card />
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
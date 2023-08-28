import { myEstView } from "@/lib/api/user";
import { StylesPage_Mypage } from "@/lib/styles"

import { useRouter } from "next/router"

export default function EstimateView({data}){

  const {query} = useRouter()
  const estViewData = data.data
  return(
    <StylesPage_Mypage>
      <section name="estView">
        <h1>견적문의</h1>
        제목 : {estViewData.title}<br/>
        견적요청기한 : {estViewData.estDate}<br/>
        연락처 : {estViewData.phone}<br/>
        이메일 : {estViewData.email}<br/>
        내용 : {estViewData.contents}
        {/* {estData.map((data,i) => <TextCard key={i} cardData={data}/>)} */}
        
      </section>
    </StylesPage_Mypage>
  )
}

export async function getServerSideProps(context){
  const { view } = context.query;
  console.log(view)
  const estView = await myEstView({id: view})
  return{
    props:{
      data: estView
    }
  }
}
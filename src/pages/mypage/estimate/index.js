import { TextCard } from "@/components/CardSection";
import api from "@/lib/api";
import { myEstList } from "@/lib/api/user";
import { StylesPage_Mypage } from "@/lib/styles";
import { useRouter } from "next/router";

export default function EstimateList({data}){

    // const {isLoading, data} = api.user.useMyEstList()
  const {push} = useRouter()
  const estData = data?.data
    return(
      <StylesPage_Mypage>
        <section name="estList">
          <h1>견적문의</h1>
          {estData.map((data,i) => <TextCard key={i} cardData={data} onClick={() => push(`/mypage/estimate/${data?.id}`)}/>)}
          
        </section>
      </StylesPage_Mypage>
    )
}

export async function getServerSideProps(){

  const estData = await myEstList()
  return{
    props:{
      data: estData
    }
  }
}
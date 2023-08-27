import { TextCard } from "@/components/CardSection";
import { StylesPage_Mypage } from "@/lib/styles";

export default function EstimateList(){
    return(
      <StylesPage_Mypage>
        <section name="estList">
          <h1>견적문의</h1>
          <TextCard />
          <TextCard />
          <TextCard />
          <TextCard />
        </section>
      </StylesPage_Mypage>
    )
}
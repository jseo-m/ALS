import { DashBoardCard } from "@/components/CardSection";
import Constants from "@/lib/Constants";
import { StylesPage_Mypage } from "@/lib/styles";

export default function DashBoard(){
  const dashItem = Constants.dashCard
  return(
    <StylesPage_Mypage>
      <section name="dashCard">
        {dashItem.map((item,i) => <DashBoardCard key={i} menuItem={item}/>)}
      </section>
    </StylesPage_Mypage>
  )
}
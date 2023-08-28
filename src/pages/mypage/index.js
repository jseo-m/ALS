import { DashBoardCard, ProgressCard } from "@/components/CardSection";
import { Icons_CustomStep } from "@/components/Icons";
import Constants from "@/lib/Constants";
import { StylesPage_Mypage, } from "@/lib/styles";
import { Divider, Rating } from "@mui/material";

export default function DashBoard(){
  const dashItem = Constants.dashCard
  return(
    <StylesPage_Mypage>
      <section name="dashProgress">
        <ProgressCard>
          <section>
            <div name="progTitle">
              <span>견적문의</span>
            </div>
            <div name="progStep">
              <Icons_CustomStep name="답변대기" color="#000" />
              <Divider variant="middle" style={{width:"80px", height:"50px"}}/>
              <Icons_CustomStep name="완료" color="#2196f3" />
            </div>
          </section>
          <section>
            <div name="progTitle">
              <span>입찰</span>
            </div>
            <div name="progStep">
              <Icons_CustomStep name="의뢰중" color="#000" />
              <Divider variant="middle" style={{width:"80px", height:"50px"}}/>
              <Icons_CustomStep name="입찰중" color="#2196f3" />
              <Divider variant="middle" style={{width:"80px", height:"50px"}}/>
              <Icons_CustomStep name="투찰완료" color="#9ca3af" />
              <Divider variant="middle" style={{width:"80px", height:"50px"}}/>
              <Icons_CustomStep name="유찰" color="#9ca3af" />
              <Divider variant="middle" style={{width:"80px", height:"50px"}}/>
              <Icons_CustomStep name="낙찰" color="#9ca3af" />
            </div>
          </section>
            <Divider orientation="vertical" variant="middle"/>
          <section>
            <div name="progTitle">
              <span>평점</span>
            </div>
            <div name="progRating">
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </div>
            <div >
              <span>{`{Title} • {time}`}</span>
            </div>
          </section>
        </ProgressCard>
      </section>
      <Divider/>
      <section name="dashCard">
        {dashItem.map((item,i) => <DashBoardCard key={i} menuItem={item}/>)}
      </section>
    </StylesPage_Mypage>
  )
}
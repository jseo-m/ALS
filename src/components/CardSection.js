import { StylesCard_DashboardCard, StylesCard_Text } from "@/lib/styles/styled/card";
import { Button, Divider } from "@mui/material";
import { useRouter } from "next/router";

const estSubItem = [
  {title: "견적요청기한", key: "estDate"},
  {title: "연락처", key: "phone"},
  {title: "이메일", key: "email"},
  {title: "첨부파일", key: "fileName"}
]

export function TextCard(){
  return(
    <StylesCard_Text>
      <section name="title">
        <span>필터 하우징 견적요청</span>
        <div>
          <span>2023-08-10</span>
          <Button size="small" variant="contained">삭제</Button>
        </div>
      </section>
      <Divider/>
      <section name="contents">
        <div>
          {estSubItem.map((item,i) => <span key={i}>{item.title}  {item.key}</span>)}
        </div>
        <div>필터하우징 견적받고 싶습니다. 인증까지 가능한 제작업체가 있을까요? 필터하우징 견적받고 싶습니다.   필터하우징 견적받고 싶습니다.  필터하우징 견적받고 싶습니다.   필터하우징 견적받고 싶습니다.  필터하우징 견적받고 싶습니다. 인증까지 가능한 제작업체가 있을까요? 필터하우징 견적받고 싶습니다.</div>
      </section>
      
    </StylesCard_Text>
  )
}

export function DashBoardCard({menuItem}){
  const {push} = useRouter()

  return(
    <StylesCard_DashboardCard onClick={() => push(menuItem.url)}>
      <div>
        <img src={menuItem.img} />
      </div>
      <div>
        <p>{menuItem.enname}</p>
        <p>{menuItem.name}</p>
      </div>
      <div>
        <p>회원님의 견적문의 게시물을 관리하는 공간입니다</p>
      </div>
      
    </StylesCard_DashboardCard>
  )
}
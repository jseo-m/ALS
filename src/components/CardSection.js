import { StylesCard_DashboardCard, StylesCard_ProgressCard, StylesCard_Text } from "@/lib/styles/styled/card";
import { Button, Divider } from "@mui/material";
import { useRouter } from "next/router";

const estSubItem = [
  {title: "견적요청기한", key: "estDate"},
  {title: "연락처", key: "phone"},
  {title: "이메일", key: "email"},
  {title: "첨부파일", key: "fileName"}
]

export function TextCard({cardData, onClick}){
  return(
    <StylesCard_Text onClick={onClick}>
      <section name="title">
        <span>{cardData.title}</span>
        <div>
          <span>{cardData.regDate}</span>
          <Button size="small" variant="contained">삭제</Button>
        </div>
      </section>
      <Divider/>
      <section name="contents">
        <div>
          {estSubItem.map((item,i) => <span key={i}>{item.title}  {cardData[item.key]}</span>)}
        </div>
        <div>{cardData.contents}</div>
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
        <p>{menuItem.contents}</p>
      </div>
      
    </StylesCard_DashboardCard>
  )
}

export function ProgressCard({children}){
  const {push} = useRouter()
  console.log(children)

  return(
    <StylesCard_ProgressCard >
      {children}
    </StylesCard_ProgressCard>
  )
}
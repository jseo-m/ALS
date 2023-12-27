import { StylesCard_Monitoring, StylesFigure_ChartArea } from "@/lib/styles/styled/section";
import { CardContent } from "@mui/material";
import { useRouter } from "next/router";

export function Monitoring_card({title, viewName, move}){
  // const {isLoading, data} = api.main
  const {push} = useRouter()
  return(
    <StylesCard_Monitoring onClick={() => push(move)}>
      <CardContent>
        <h1>{title}</h1>
        <p>{viewName}</p>
      </CardContent>
    </StylesCard_Monitoring>
  )
}


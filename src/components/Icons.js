import { StyledIcon_CustomStep } from "@/lib/styles/styled/icons";
import { CircularProgress } from "@mui/material";

export function Icons_CustomStep(props){
  return(
    <StyledIcon_CustomStep fillColor={props.color}>
      <div>0</div>
      <div>{props.name}</div>
    </StyledIcon_CustomStep>
  )
}

export function Icons_Loading({loading, size}){
  const resize = size === "small" ? 26 : 40
  return(
    <CircularProgress  size={resize}/>
  )
}
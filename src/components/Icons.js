import { StyledIcon_CustomStep } from "@/lib/styles/styled/icons";

export function Icons_CustomStep(props){
  return(
    <StyledIcon_CustomStep fillColor={props.color}>
      <div>0</div>
      <div>{props.name}</div>
    </StyledIcon_CustomStep>
  )
}
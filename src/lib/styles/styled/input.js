import styled from "@emotion/styled";
import theme from "../theme";

export const StyledInputVer1_Mui = styled.div`
  margin: 5px 0;
  width: 100%;
  
  & > section:nth-of-type(1){
    display: flex;
    & > div[name="beforeSelect"] {
      flex: 2.5;
    }
    & > div[name="textField"] {
      flex: 7.5;
    }
    & > div[name="afterSelect"] {
      flex: 5;
    }
    & > div[name="button"] {
      flex: 2.5;
      & > button{
        height: 100%;
      }
    }
  }
  & > section:nth-of-type(2){
    & > div[color="invalid"] {
      font-size: 13px;
      color: red;
    }
  }
`
export const StyledInput_Authcode = styled.div`
  display: grid;
  text-align: center;
  & > span:nth-of-type(1){
    font-size: 24px;
  }
  & > span:nth-of-type(2){
    font-size: 36px;
    color: #2d6fff;
  }
  & > span:nth-of-type(3){
    font-size: 12px;
    & > button{
      font-size: 12px;
    }
  }
`
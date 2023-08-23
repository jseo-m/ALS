import styled from "@emotion/styled";
import theme from "../theme";

export const StyledInputVer1_Mui = styled.div`
  width: 100%;
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
`
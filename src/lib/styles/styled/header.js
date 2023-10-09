import styled from "@emotion/styled";
import theme from '../theme'

const Header = styled.header`
  
  border-left: 1px solid var(--black-sub);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  z-index: 1;
  transition: all 0.15s;
`
export const StyledHeader_main = styled(Header)`
      position: fixed; /* 헤더를 항상 화면 상단에 고정. */
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      height: 60px;
      justify-content: space-between;
      background-color: white;
      /* background-color: ${({mainTop}) => mainTop ? "transparent" : "white"}; */
    & > div:nth-of-type(1){
      display: flex;
      align-items: center;
      overflow: hidden;

    & > button[name="logo"] {
      /* flex: 1; */
      /* display: flex; */
      /* justify-content: flex-start; */
      /* color: ${({mainTop}) => mainTop ? "white" : "black"}; */
      color: black;
      background-color: transparent;
      padding: 15px 15px;
      & > strong {
        font-weight: 700;
        font-size: 24px;
      }
    }
    & > button[name="menu"] {
      /* flex: 1; */
      /* display: flex; */
      /* justify-content: flex-start; */
      /* color: ${({mainTop}) => mainTop ? "white" : "black"}; */
      color: black;
      background-color: transparent;
      padding: 15px 25px;
      & span {
        font-size: 14px;
      }
      &[data-active=true] {
        color: var(--blue-main);
      }
      &:hover {
        * {
          color: var(--blue-main);
        } 
      }
      &:active {
        background-color: transparent;
      }
    }
  }
    & > div:nth-of-type(2){
      display: flex;
      align-items: center;
      overflow: hidden;

    & > button[name="menu"] {
      /* flex: 1; */
      /* display: flex; */
      /* justify-content: flex-start; */
      /* color: ${({mainTop}) => mainTop ? "white" : "black"}; */
      color: black;
      background-color: transparent;
      padding: 15px 25px;
      & span {
        
        font-size: 14px;
      }
      &[data-active=true] {
        color: var(--blue-main);
      }
      &:hover {
        * {
          color: var(--blue-main);
        } 
      }
      &:active {
        background-color: transparent;
      }
    }
    & > button[name="avatar"] {
      background-color: transparent;
      padding: 15px 15px;
    }
    & > button[name="alert"] {
      background-color: transparent;
      padding: 15px 25px 15px 15px;
    }
  }
`
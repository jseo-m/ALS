import styled from "@emotion/styled";
import theme from '../theme'

const Header = styled.header`
  background-color: var(--white);
  border-left: 1px solid var(--black-sub);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
`
export const StyledHeader_main = styled(Header)`
      display: flex;
      align-items: center;
      height: 60px;
      justify-content: space-between;
    & > div:nth-of-type(1){
      display: flex;
      align-items: center;
      overflow: hidden;

    & > button[name="logo"] {
      /* flex: 1; */
      /* display: flex; */
      /* justify-content: flex-start; */
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
      background-color: transparent;
      padding: 15px 25px;
      & span {
        font-size: 14px;
      }
      &[data-active=true] {
        color: var(--orange-main);
      }
      &:hover {
        background-color: black;
        * {
          color: var(--orange-main);
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
      background-color: transparent;
      padding: 15px 25px;
      & span {
        font-size: 14px;
      }
      &[data-active=true] {
        color: var(--orange-main);
      }
      &:hover {
        background-color: black;
        * {
          color: var(--orange-main);
        } 
      }
      &:active {
        background-color: transparent;
      }
    }
  }
`
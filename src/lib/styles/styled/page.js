import styled from "@emotion/styled";
import theme from "../theme";

const Home = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`
const Page = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: #f9fafc;
`

export const StyleHome = styled(Home)`
  color: var(--white);
  & > section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px);
    & > div{
      width: 60%;
      & > div:nth-of-type(1){
        padding: 15px 0;
        & > p:nth-of-type(1){
          font-size: 48px;
          font-weight: 800;
        }
        & > p:nth-of-type(2){
          font-size: 24px;
        }
      }
      & > div:nth-of-type(2){
        & > button {
          margin: 5px;
          color: var(--white);
          border: 1px solid var(--white);
        }
      }
    }
  }
`
export const Dev = styled(Page)`
  padding: 30px;
  display: flex;
  align-items: center;
  & > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    padding: 100px 0 60px;
    overflow-y: auto;
    & > div{
      width: 100%;
      margin: 5px 0;
    }
  }
`

export const StylesPage_Userpage = styled(Page)`
  padding: 30px;
  display: flex;
  align-items: center;
  & section{
    padding: 30px 0;
    width: 75vw;
  }
  & > section[name="header"] {
    text-align: center;
    & > p:nth-of-type(1) {
      font-size: 25px;
      font-weight: 700;
      padding: 10px;
    }
    & > p:nth-of-type(2) {
      color: #6b7280;
      font-size: 15px;
    }
  }
  & > section[name="search"] {
    & > div:nth-of-type(1){
      display: flex;
      & > div:nth-of-type(1){
        margin-right: 5px;
      }
      & button {
        min-width: 40px;
        padding: 5px;
        margin: 0 5px;
        width: 40px;
        height: 40px;
      }
    }
    & > div:nth-of-type(2){
      display: flex;
      margin: 10px 0;
      & img {
        margin-right: 5px;
      }
    }
    & > div:nth-of-type(3){
      display: grid;
      grid-template-columns: 1fr 1fr;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      & div {
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 0.3px rgba(0, 0, 0, 0.3);
        background-color: #fff;
        border-top: solid 2px #000;
        color: rgba(0, 0, 0, 0.6);
        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
      & > div[data-active=true]{
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
`

export const Styles_Login = styled(Page)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

  hr{
    margin:8px 0;
  }

  section{
    width: 380px;
    display: grid;
  }

  .MuiTextField-root{
    padding: 5px;
  }
  & > section:nth-of-type(1){
    padding: 50px 0;
    justify-content: center;
    & > p {
      padding: 10px;
      text-align: center;
      font-size: 22px;
      font-weight: 700;
    }
    & > span{
        font-size: 14px;
        text-align: center;
    }
  }
  & > section:nth-of-type(2){
    & > span{
      color: var(--red-strong);
      text-align: center;
      font-size: 12px;
    }
    & > button{
      background-color: var(--black);
      margin: 20px 0;
      padding: 10px 0;
    }
    & > div:nth-of-type(3){
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      & > span {
        font-size: 12px;
        font-weight: 500;
      }
    }
  }

`
export const Styles_Signup = styled(Page)`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  section{
    width: 35vw;
    display: grid;
  }

  & > section:nth-of-type(1){
    padding: 30px 0;
    & > p {
      padding: 10px;
      text-align: center;
      font-size: 22px;
      font-weight: 700;
    }
    & > span{
        font-size: 14px;
        text-align: center;
        color: #6b7280;
    }
    & > div{
      width: 100%;
      display: flex;
      background-color: #fff;
      margin-top: 50px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.23);
      cursor: pointer;
      & > div {
        padding: 10px;
        flex-grow:1;
        font-weight: 500;
        text-align: center
      }
      & div[data-selected=true]{
        border-bottom: 2px solid #000;
      }
      /* & div[data-selected=false]{
        border-bottom: 1px solid rgba(0, 0, 0, 0.23);
      } */
      
    }
  }

    & > section:nth-of-type(2){
      & > section{
        margin: 15px 0;
      }
    }

    & > div{
      width: 210px;
    }
`
export const StylesPage_Mypage = styled(Page)`
  padding: 30px;
  font-size: 16px;
  font-weight: 500;
  & > hr {
    margin: 10px 20px;
  }
  & > section[name="dashCard"]{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* grid-auto-rows: 50px; */
      gap: 50px;
      padding: 40px 20px;
  }
  & > section[name="dashProgress"]{
      margin: 40px 20px;
  }
`


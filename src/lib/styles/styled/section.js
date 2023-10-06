import styled from "@emotion/styled";

export const StylesSection_Factories = styled.section`
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
    & > div:nth-of-type(4){
      & > section[name="schAddr"]{
        background-color: white;
        display: grid;
        grid-template-rows: repeat(2, 1fr);   // 2행
        grid-template-columns: repeat(9, 1fr); // 9열
        height: 65px;
        & > div{
          display: flex;
          justify-content:center;
          align-items:center;
          font-size: 12px;
          color: #374151;
          border: 0.3px solid rgba(0, 0, 0, 0.3);
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.04);
          }
        }
      }
      & > section[name="schSec"]{
        background-color: white;
        text-align: center;
        font-size: 12px;
        color: #374151;
        height: 65px;
        
      }
      & > section[name="schSelect"]{
        background-color: #f3f4f6;
        display: flex;
        padding: 6px 8px;
        margin-bottom: 28px;
        & > button{
          font-size: 9px;
          /* margin: 0 4px; */
        }
      }
      & div[data-active=true]{
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
  }
  & > section[name="contents"] {
    display: grid;
    padding: 5px 0;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    & > article{
      border: solid 0.3px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      & > section:nth-of-type(1){
        border-bottom: solid 0.3px rgba(0, 0, 0, 0.3);
        font-size: 10px;
        display: flex;
        justify-content: center;
        gap: 10px;
        padding: 10px 0;
        & > div{
          border: solid 0.3px rgba(0, 0, 0, 0.3);
          border-radius: 5px;
          padding: 5px 0;
          & > span{
            padding: 5px 8px;
            font-weight:500;
          }
        }
        
      }
      & > section:nth-of-type(2){
        display: grid;
        grid-template-rows: 2fr 1fr 1fr;
        justify-content: center;
        gap: 15px;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.04);
        text-align:center;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        & >p:nth-of-type(1){
          font-size: 16px;
          font-weight: 500;
          color: black;
        }
      }
    }
  }
`
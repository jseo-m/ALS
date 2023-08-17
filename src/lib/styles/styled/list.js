import styled from "@emotion/styled";
import theme from "../theme";
export const List = styled.div`

`


export const DrivingList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.Colors.gray3};
  margin-bottom: 200px;
  & > div :nth-of-type(1){
    display: grid;
    grid-template-columns: 190px 9px 190px 90px 1fr;
    gap:16px;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-align:center;
    background-color: ${theme.Colors.gray3};
    margin-bottom: 17.5px;
    & > div :nth-of-type(2){
        display:flex;
        gap:10px;
        float:right;
        justify-content: right;
    }
  }
  & > div :nth-of-type(2){
    display: grid;
    grid-template-columns: 200px 1fr;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    text-align:center;
    border-top:2px solid  ${theme.Colors.black9};
    border-bottom:2px solid  ${theme.Colors.black9};
    background-color: ${theme.Colors.gray3};
  }
  & > ul {
    display: grid;
    grid-template-columns: 200px 1fr 116px;
    background-color: ${theme.Colors.gray3};
    height: 43px;
    border-bottom:2px solid  ${theme.Colors.black10};
    justify-content: center;
    align-items: center;
    text-align:center;
    & > span{
      align-items: center;
        display:flex;
    }
    & > div{
      cursor: pointer;
    }
  }
`
export const DrivingListDetail = styled.li`
  display: grid;
  grid-template-columns: 76px 1fr 120px;
  border-bottom:2px solid ${theme.Colors.black};
  background-color: ${theme.Colors.black3};
  
  & > div :nth-of-type(1){
    display:flex;
    justify-content: center;
  align-items: center;
  }

  & > div :nth-of-type(2){
    dipslay:inline-block;
    padding: 13px 100px 13px 20px;
    width: 100%;
    
    & > div :nth-of-type(1){
      float:left;
      dipslay:flex;
      font-size:14px;
      height: 20px;
      text-align:center;
      padding: 0px 20px 3px 10px;
     
      border-left:2px solid ${theme.Colors.black3};
    }  
    & > div {
      float:left;
      dipslay:flex;
      font-size:14px;
      height: 20px;
      text-align:center;
      padding: 0px 20px 3px 20px;
      margin: 7px 0px 8px 0px;
      border-left:2px solid ${theme.Colors.white1};
    }  
  }
  & > div :nth-of-type(3){
    display:flex;
    justify-content: center;
  align-items: center;
  }

`


import styled from "@emotion/styled";

export const card = styled.div`
  padding:10px 0;
`

export const StylesCard_Text = styled(card)`
  padding: 14px 12px;
  border-radius: 3px;
  border: solid 0.2px #b8b9b9;
  margin-bottom: 10px;
  
  & > hr {
    padding: 5px 0;
  }
  & > section[name="title"]{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 1.8;
    & > div{
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      & > span{
        padding: 0 5px;
      }
      & > button{
        background-color: black;
      }
    }
  }
  & > section[name="contents"]{
    display: grid;
    & > div:nth-of-type(1){
      font-size: 12px;
      color: rgba(0, 0, 0, 0.6);
      padding: 10px 0;
      & > span{
        margin-right: 15px;
      }
    }
    & > div:nth-of-type(2){
      font-size: 14px;
      font-weight: 400;
      white-space: normal;
    }
  }
`
export const StylesCard_DashboardCard = styled(card)`
  height: 180px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 12px 8px;
  border: solid 0.2px #6b7280;
  gap: 5px;
  cursor: pointer;
  & > div:nth-of-type(2) {
    text-align: center;
    & > p:nth-of-type(1){
      font-size: 12px;
    }
    & > p:nth-of-type(2){
      font-size: 14px;
    }
  }
  & > div:nth-of-type(3) {
    font-size: 10px;
  }
`
import styled from "@emotion/styled";
import theme from "../theme";

const StyledLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  font-weight: 600;
  width: min-content;
  height: 22px;
  border-radius: 11px;
`

export const StyledLabel_DeviceState = styled(StyledLabel)`
  border: 2px solid var(--gray-main);
  color: var(--gray-main);
  padding: 0 10px;
  &[data-state="1"],
  &[data-state="2"] {
    border-color: var(--blue-main);
    color: var(--blue-main);
  }
`

export const StyledLabel_DrivingState = styled(StyledLabel)`
  color: white;
  background-color: var(--gray-main);
  padding: 0 7px 0 5px;
  & > p {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: none;
  }
  &[data-state="1"] {
    color: var(--blue-main);
    background-color: var(--blue-sub);
    & > p {
      display: block;
      background-color: var(--blue-main);
    }
  }
  &[data-state="2"] {
    color: var(--orange-main);
    background-color: var(--orange-sub);
    & > p {
      display: block;
      background-color: var(--orange-main);
    }
  }
`

export const StyledLabel_Voltage = styled(StyledLabel)`
  background-color: var(--gray-main);
  color: white;
  padding: 0 7px;
`

export const StyledLabel_DrivingHistory = styled.div`
  display: flex;
  gap:30px;
    align-items: center;
  
  & >div :nth-of-type(1){
    display:flex;
    justify-content: center;
    align-items: center;
    width:56px;
    height:56px;
    border-radius:50%;
    background-color: ${theme.Colors.blue1};
  }
  & >div :nth-of-type(2){
    display:flex;
    justify-content: center;
    flex-direction: column;
    gap: 6px;
    font-size:18px;
      font-weight:700;
    
    & >span {
      font-size:16px;
      font-weight:500;
    }
  }
`

export const StyledLabel_SectionItem = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--black-main);
  display: flex;
  gap: 10px;
  padding: 0 10px;
  align-items: center;
  & > p {
    flex: 1;
  }

  &[data-parent=true] {
    height: 60px;
    background-color: var(--black-main);
    border-bottom: 1px solid var(--black-sub);
    display: grid;
    gap: 20px;
    grid-template-columns: 3px 1fr auto;
    padding: 0;
    &::before {
      content: "";
      position: relative;
      background-color: var(--blue-main);
      height: 100%;
    }
    & > p {
      flex: auto;
      align-self: center;
      font-weight: 700;
    }
    & > div,
    & > button {
      margin: 0 10px;
    }
  }
`

export const StyledLabel_Setting = styled(StyledLabel_SectionItem)`

  & > div {
    padding: 0 20px;
    & > button {
      width: 66px;
      height: 30px;
      border-radius: 15px;
      
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      font-size: 14px;
      font-weight: bold;
      color: var(--white);
      background-color: var(--gray-main);
      padding: 0 5px;
      & * {
        pointer-events: none;
      }
      & > div {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: var(--white);
      }
      & > span {
        padding: 0 5px;
        width: min-content;
      }
    }
  }
  
  &[color="active"] {
    & > div {
      & > button {
        background-color: var(--blue-main);
        & > div {
          grid-area: 1 / 2 / 2 / 3;
        }
        & > span {
          grid-area: 1 / 1 / 2 / 2;
        }
      }
    }
  }
`

export const StyledLabel_Setting_Parent = styled(StyledLabel_Setting)`
  height: 60px;
  background-color: var(--black-main);
  border-bottom: 1px solid var(--black-sub);
  display: grid;
  gap: 20px;
  grid-template-columns: 3px 1fr auto;
  &::before {
    content: "";
    position: relative;
    background-color: var(--blue-main);
    height: 100%;
  }
  & > span {
    align-self: center;
    font-weight: 700;
  }
  & > div {
    & > button {
      width: 78px;
      height: 36px;
      border-radius: 18px;
      
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
      font-size: 16px;
      & > div {
        width: 20px;
        height: 20px;
      }
    }
  }
`

export const StyledLabel_Qna_Question = styled.label`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  row-gap: 10px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--black-main);
  background-color: var(--black-main);
  margin-bottom: 10px;

  & > header {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & > p {
      color: var(--blue-main);
      font-size: 20px;
      font-weight: 700;
    }
    & > span {
      display: grid;
      place-items: center;
      height: 26px;
      color: var(--gray-main);
      border: 1px solid var(--gray-main);
      border-radius: 13px;
      padding: 0 8px;
      &[color="answered"] {
        color: var(--white);
        background-color: var(--gray-main);
      }
    }
  }

  & > div {
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  & > footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    color: var(--gray-main);
    font-size: 14px;
  }

  &:hover {
    border: 1px solid var(--blue-main);
  }
`
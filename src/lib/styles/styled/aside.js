import styled from "@emotion/styled";
import theme from '../theme'

export const MainAside = styled.aside`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  & > section:nth-of-type(1){
    flex-shrink: 0;
    height: 60px;
    display: grid;
    grid-template-columns: 64px 1fr 180px;
    grid-template-rows: 1fr;
    border-bottom: 1px solid ${theme.Colors.black4};
    
    & > div{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      cursor:pointer;
    }
    
    & > div:nth-of-type(2){
      justify-content: center;
      flex-direction: column;
      & > div:nth-of-type(1){
        width: 143px;
        height: 32px;
        background-color: ${theme.Colors.black4};
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 8px 0 10px;
        border-radius: 25px;
        & > span {
          color: white;
          font-size: 11px;
          font-weight: 500;
        }
      }
      & > div:nth-of-type(2) {
        background-color: ${theme.Colors.black3};
        position: absolute;
        z-index: 2;
        top: 50px;
        
        width: 143px;
        max-height: 200px;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-y: overlay;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        & > span {
          padding: 10px;
          font-size: 13px;
          &:hover {
            background-color: ${theme.Colors.black};
          }
        }
      }
    }
    & > div:nth-of-type(3){
      display: grid;
      grid-template-columns: repeat(3, 60px);
      cursor: pointer;
      & > div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid ${theme.Colors.black4};
      }
      & > div:nth-of-type(2){
        position: relative;
        & > button {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background-color: ${theme.Colors.blue1};
          font-size: 10px;
          top: 50%;
          left: 50%;
        }
      }
    }
  }

  & > section:nth-of-type(2){
    flex-shrink: 0;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 25px;
    border-bottom: 1px solid ${theme.Colors.black4};
  }

  & > section:nth-of-type(3){
    flex: 1;
    background-color: ${theme.Colors.black3};
  }
`
export const DeviceList = styled.section`
  & * { transition: background-color 0.3s; }

  & > div {
      display: flex;
      align-items: center;
      padding: 10px 25px;
      height: 60px;
      border-bottom: 1px solid ${theme.Colors.black4};
      & > div { width: 174px; }
    }
    
  & > ul {
    height: calc(100vh - 180px);
    display: flex;
    flex-direction: column;
    overflow-y: overlay;
    


    & > li {
      position: relative;
      padding: 12px 25px;
      border-bottom: 1px solid ${theme.Colors.black1};
      height:119px;
      cursor: pointer;
      

      & * { pointer-events: none; }
      & > p {
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background-color: transparent;
      }
      &.selected-device-sn {
        background-color: ${theme.Colors.black4};
        & > p { background-color: ${theme.Colors.blue1}; }
      } 
    }
  }
`
export const DeviceAlert = styled.section`
  display: grid;
  grid-template-rows: 80px 1fr;
  
  & > section:nth-of-type(1){
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 30px;
    border-bottom: 1px solid ${theme.Colors.black};
    & > button { flex-basis: 0; }
  }
  & > section:nth-of-type(2){
  }
`

export const StyledAside_Admin = styled.aside`
  background-color: var(--black-sub);
  border-left: 1px solid var(--black-main);
  border-right: 1px solid var(--black-main);
  display: flex;
  flex-direction: column;
  border-bottom: var(--black-main);
  min-width: 250px;
  width: min-content;
  
  & > button {
    padding: 20px 10px;
    color: white;
    font-size: 15px;
    text-align: start;
    background-color: transparent;
    border-bottom: 1px solid var(--black-main);
    
    &[data-active=true] {
      color: var(--orange-main);
      background-color: var(--black-main);
      font-weight: 700;
    } 
    &:hover {
      background-color: black;
    }
    &:active {
      color: var(--orange-main);
      background-color: transparent;
    }
  }
`
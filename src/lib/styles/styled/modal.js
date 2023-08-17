import styled from "@emotion/styled";
import theme from "../theme";

export const StyledModal_Container = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.4);
`

export const StyledModal_Wrapper = styled.div`
  position: relative;
  margin: 20px;
  width: min(100%, 405px);
  padding: 40px 35px 30px;
  border-radius: 10px;
  background-color: var(--black-sub);
  display: flex;
  flex-direction: column;
  gap: 30px;
  & > header {
    display: flex;
    align-items: center;
    gap: 20px;
    & > * { flex-basis: 0; }
    & > p {
      white-space: nowrap;
      font-size: 24px;
      font-weight: 700;
      color: ${({type}) => type === "exclamation" ? "var(--orange-main)" : "var(--blue-main)"}
    }
  }

  & > main {
    & > span {
      display: block;
      white-space: pre-line;
    }

    & [name="modal_checkBox"]{
      display: flex;
      padding: 0px 5px 10px 0px;
      & > span {
        margin-left: 15px;
        display: block;
        white-space: pre-line;
      }
    }

    & [name="termsList"]{
      display: flex;
      margin: 10px 0px 10px 0px;
      justify-content: space-between;
    }
  }

  & > footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`

export const StyledModal_location = styled.div`
  position: relative;
  margin: 20px;
  width: min(100%, 1000px);
  height: min(100%, 1200px);
  padding: 40px 35px 30px;
  border-radius: 10px;
  background-color: var(--black-sub);
  display: flex;
  flex-direction: column;
  gap: 30px;
 
`

export const StyledModal_Locale = styled(StyledModal_Wrapper)`

  & > main {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > label {
      width: 100%;
      height: 50px;
      background-color: var(--black-main);
      display: flex;
      align-items: center;
      padding: 0 17px;
      gap: 19px;
      border-radius: 10px;
      margin-bottom: 10px;
      & * {pointer-events: none;}
      & > div {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--black-sub);
        display: grid;
        place-items: center;
        & > p {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: var(--gray-main);
        }
      }
      & > span {
        font-size: 16px;
        color: var(--white);
      }
      &:hover > div > p {background-color: var(--blue-sub);}
      &[color="active"] > div > p {background-color: var(--blue-main);}
    }
  }
`
export const Contents = styled.main`
  position: relative;
  z-index: 100;
  background-color: ${theme.Colors.black4};
  border-radius: 10px;
  width: 405px;
  padding: 40px 35px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div {
    white-space: pre-line;
    font-size: 17px;
    color: var(--blue-main);
    &[name="text"]{
      font-size: 18px;
      color: white;
    }
  }
  & > ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & .modal-close-btn {
    margin-top: ${({closeGap}) => closeGap}px;
  }
`

export const Modal = styled.aside`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.3);
  
  & > main {
    background-color: ${theme.Colors.black4};
    border-radius: 10px;
    width: 405px;
  }
`

export const Auth = styled(Modal)`
  & > main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 35px 30px;

    & > div:nth-of-type(1){
      width: 50px;
      height: 50px;
    }
    & > div:nth-of-type(2){
      font-size: 24px;
      font-weight: 700;
      color: ${theme.Colors.blue1};
    }
    & > div:nth-of-type(3){
      font-size: 18px;
      color: white;
    }
    & > div:nth-of-type(4){
      margin-top: 10px;
    }
  }
`
export const Basic = styled(Modal)`
  & > main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 35px 30px;

    & > div:nth-of-type(1){
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: ${theme.Colors.blue1};
    }
    & > div:nth-of-type(2){
      font-size: 24px;
      font-weight: 700;
      color: ${theme.Colors.blue1};
    }
    & > div:nth-of-type(3){
      font-size: 18px;
      color: white;
      white-space: pre-line;
    }
    & > div:nth-of-type(4){
      margin-top: 20px;
    }
  }
`


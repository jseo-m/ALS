import styled from "@emotion/styled";
import theme from "../theme";

export const UserMain = styled.label`
  position: relative;
  color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto ${({select}) => select ? "110px" : "60px"} auto;

  & > p {
    grid-area: 1 / 1 / 2 / 3;
    margin-bottom: 10px;
    font-weight: 500;
  }
  & > input {
    margin-top: ${({select}) => select ? "50px" : "0px"};
    height: 60px;
    grid-area: 2 / 1 / 3 / 2;
    background-color: transparent;
    padding: 0 20px;
    border-bottom: 1px solid ${theme.Colors.gray3};
    caret-color: white;
  }
  & > button {
    grid-area: 2 / 2 / 3 / 3;
    width: 125px;
    height: 60px;
    border-radius: 30px;
    background-color: ${theme.Colors.black1};
    color: white;
    margin-left: 20px;
  }
  & > span {
    grid-area: 3 / 1 / 4 / 3;
    margin: 10px 0 0 20px;
    color: ${({valid}) => valid === 1 ? theme.Colors.blue1 : theme.Colors.warning1};
  }
  & > select {
    position: absolute;
    top: 30px;
    left: 0;
    height: 40px;
  }
`
export const UserAuth = styled.label`
  width: 100%;
  & > p {
    color: white;
  }
  & > div{
    display: grid;
    grid-template-columns: 1fr auto;
    height: 60px;
    margin: 11px 0 20px;
    & > input {
      flex: 1;
      background-color: transparent;
      border-bottom: 1px solid ${theme.Colors.gray3};
      color: white;
      padding: 0 20px;
    }
  }
  & > span {

  }
`
export const AuthCodeLabel = styled.label`
  & > p {
    margin-bottom: 14px;
    font-weight: 500;
    color: white;
  }
  & > ul {
    display: grid;
    grid-template-columns: repeat(${({count}) => count || 3}, 55px);
    gap: 15px;
  }
  & input {
    width: 55px;
    height: 55px;
    background-color: transparent;
    text-align: center;
    border-bottom: 1px solid ${theme.Colors.gray3};
    color: white;
    cursor: pointer;
  }
  & > span {
    display: block;
    color: ${({validState}) => validState === 1 ? theme.Colors.blue1 : theme.Colors.warning1};
    margin: 11px 0 20px 20px;
  }
`
export const AuthCode = styled.label`
  display: ${({view}) => view};
  grid-template-rows: auto 60px auto;
  color: white;
  width: 100%;

  & > p {
    grid-area: 1 / 1 / 2 / 2;
    margin-bottom: 10px;
    font-weight: 500;
  }
  & > div {
    grid-area: 2 / 1 / 3 / 2;
    display: grid;
    grid-template-columns: repeat(${({count}) => count || 3}, 55px);
    gap: 15px;

    & > input {
      width: 55px;
      height: 55px;
      background-color: transparent;
      padding: 0 20px;
      border-bottom: 1px solid ${theme.Colors.gray3};
      caret-color: white;
    }
  }
  & > span {
    grid-area: 3 / 1 / 4 / 2;
    margin: 10px 0 0 20px;
    color: ${({valid}) => valid === 1 ? theme.Colors.blue1 : theme.Colors.warning1};
  }  
`

export const Register = styled.label`
  position: relative;
  display: grid;
  grid-template-rows: auto 60px;

  & > p { 
    font-weight: 500;
    height: 30px;
  }

  & > input {
    height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid ${theme.Colors.black6};
    background-color: ${theme.Colors.black4};
  }
  
  & > span {
    margin: 10px 0 0 20px;
    color: ${({valid}) => valid === 1 ? theme.Colors.blue1 : theme.Colors.warning1};
  }
`
export const Register_Select = styled.div`
  position: relative;
  width: 100%;
  flex: 1;

  & > label {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 60px;

    * { pointer-events: none; }
    & > p {
      font-weight: 500;
      height: 30px;
    }
    & > input {
      background-color: ${theme.Colors.black4};
      border-bottom: 1px solid ${theme.Colors.black6};
      height: 60px;
      padding: 0 56px 0 20px;
      cursor: pointer;
      outline: none;
      caret-color: transparent;
    }
    & > sub {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 56px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > span {
      margin: 10px 0 0 20px;
      color: ${({valid}) => valid === 1 ? theme.Colors.blue1 : theme.Colors.warning1};
    }
  }

  & > div {
    background-color: ${theme.Colors.black3};
    position: absolute;
    z-index: 2;
    top: 90px;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    overflow-y: overlay;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    & > span {
      padding: 10px;
      &:hover {
        background-color: ${theme.Colors.black};
      }
    }
  }
`

export const SignUp_Select = styled.div`
  position: relative;
  width: 100%;
  flex: 1;

  & > label {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto ;

    * { pointer-events: none; }
    & > p {
      font-weight: 500;
      height: 30px;
    }
    & > input {
      background-color: ${theme.Colors.black4};
      border-bottom: 1px solid ${theme.Colors.white};
      height: 60px;
      padding: 0 56px 0 20px;
      cursor: pointer;
      outline: none;
      caret-color: transparent;
    }
    & > sub {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 56px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & > div {
    background-color: ${theme.Colors.black3};
    position: absolute;
    z-index: 2;
    top: 90px;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    overflow-y: overlay;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    & > span {
      padding: 10px;
      &:hover {
        background-color: ${theme.Colors.black};
      }
    }
  }
`

export const StyledInput_Main = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 18px 20px;
  background-color: transparent;
  border-bottom: 1px solid var(--gray-main);
  &::placeholder {
    font-size: 16px;
    color: var(--gray-main);
  }
`
export const StyledInput_ManagerMain = styled.input`
  color: white;
  background-color: rgb(50, 50, 50);
  border: dimgray;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 0 10px;

  &::placeholder {
    color: dimgray;
  }
`

export const StyledInput_Birthday = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & * {letter-spacing: 2px;}
`

export const StyledInput_Select = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;

  & > input {
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    padding: 18px 20px;
    background-color: transparent;
    border-bottom: 1px solid var(--gray-main);
    &::placeholder {
      font-size: 16px;
      color: var(--gray-main);
    }
  }

  & > ul {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100px;
    display: flex;
    flex-direction: column;
    & > button {
      padding: 5px 8px;
      border-bottom: 1px solid black;
      background-color: black;
      color: white;
      border-bottom: 1px solid var(--color-black2);

      &:last-child { border: none; }
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
`

export const StyledInput_Date_Simple = styled.div`
position: relative;
& > input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
}
`
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from '../theme'

export const Basic = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({gap}) => gap || 0}px;
  width: ${({width}) => width ? `${width}px` : "100%"};
  height: ${({height}) => height || 40}px;
  padding: ${({padding}) => padding || 0};
  border-radius: ${({height}) => height ? Math.round(height/2) : 20}px;
  ${({bc, bw}) => bc && css`border: ${bw || 1}px solid ${theme.Colors[bc]};`}
  background-color: ${({bgc, rgba}) => rgba || theme.Colors[bgc || "blue1"]};
  color: ${({fc}) => theme.Colors[fc || "white"]};
  font-size: ${({fs}) => fs || 16}px;
  font-weight: ${({fw}) => fw || 400};
`

export const Main = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  background-color: ${({bgc}) => bgc || theme.Colors.blue1};
  color: ${({color}) => color || theme.Colors.white};
`

export const SNS = styled.button`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${theme.Colors.white};

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
  }
`

// props: {state: number}
export const DrivingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 80px;
  height: 25px;
  border-radius: 12.5px;
  background-color: ${({bgc}) => bgc || theme.Colors.gray3};
  
  & > div{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({color}) => color || theme.Colors.gray3};
  }
  & > span{
    font-size: 14px;
    font-weight: 600;
    color: ${({color}) => color || theme.Colors.white};
    line-height: 25px;
  }
`

export const CheckBox = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > input { display: none; }
  & > div {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #858687;
    background-color: ${({checked}) => checked ? theme.Colors.blue1 : "transparent"};
  }
`

export const StyledButton_Main = styled.button`
  display: flex; /* for icon */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  background: var(--${({color}) => color || "blue"}-main);  /* fallback for old browsers */
  & * {pointer-events: none;}
  &:hover {background: var(--${({color}) => color || "blue"}-strong);}
  &:active {background: var(--${({color}) => color || "blue"}-main);}
  &:disabled {
    cursor: not-allowed;
    background: var(--${({color}) => color || "black"}-main);
  }
  &[name="wait"] {cursor: wait;}
`
// ${({webview}) => !webview && css`
// background: -webkit-linear-gradient(to right, var(--${({color}) => color || "blue"}-main), var(--${({color}) => color || "blue"}-strong));  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, var(--${({color}) => color || "blue"}-main), var(--${({color}) => color || "blue"}-strong)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// `}

export const StyledButton_LinkIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50px;
  padding: 0 13px 0 10px;
  border-radius: 25px;
  background-color: var(--black-sub);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--blue-main);
  }

  & > span {
    color: white;
  }

  &:hover,
  &[name="active"] {
    background-color: var(--blue-main);
  }
`

export const StyledButton_Manager = styled.button`
  display: flex; /* for icon */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  border-radius: 4px;
  color: white;
  background: #56CCF2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition: all 0.3s;
  font-weight: 500;
  filter: brightness(0.9);

  &:hover,
  &:focus {
    letter-spacing: 0.5px;
    filter: brightness(1);
  }

  &:disabled {
    cursor: wait;
  }
`

export const StyledButton_OnOff = styled.button`
  width: 78px;
  height: 32px;
  padding: 0 6px;
  border-radius: 16px;
  background-color: var(--gray-main);
  color: var(--white);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  align-items: center;
  cursor: pointer;
  & * {pointer-events: none;}
  & > div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--white);
  }
  & > span {
    text-align: start;
    font-weight: 700;
    padding: 0 5px;
  }
  &[data-on=true] {
    background-color: var(--blue-main);
    & > div {grid-area: 1 / 2 / 2 / 3;}
    & > span {grid-area: 1 / 1 / 2 / 2;}
  }
`
export const StyledButton_ProfileSNS = styled.button`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0 17px;
  background-color: var(--black-main);
  border-radius: 10px;
  color: var(--white);
  height: 60px;

  & > * {pointer-events: none;}
  & > [name="sns"] {
    width: 40px;
    height: 40px;
  }
  & > p {
    text-align: start;
    flex: 1;
  }

  & > [name="link"] {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--blue-main);
  }
`
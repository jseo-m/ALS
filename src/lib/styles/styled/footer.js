import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  background-color: var(--black);
`

export const StyledFooter_Cloud = styled(StyledFooter)`
  display: grid;
  place-items: center;
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > section {

      & > div {
        display: flex;
        gap: 10px;

        & > a, span {
          height: 14px;
          font-size: 12px;
          font-weight: 600;
          color: var(--gray-main);
          &:last-child {border: none;}
        }
        & > a:hover {color: var(--white);}
        & > div {
          width: 1px;
          background-color: var(--gray-main);
        }
      }
    }
  }

  &[dir="rtl"] {
    & > div {
      & > section {
        & > div {
          & > a, span {
            border: none;
            border-left: 1px solid var(--gray-main);
            &:last-child {border: none;}
          }
        }
      }
    }
  }
`

export const StyledFooter_ManagerMain = styled(StyledFooter)`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  color: white;
  font-weight: 600px;
`

export const StyledFooter_WebView = styled.footer`
  position: relative;
  & > span {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    width: 100%;
    overflow: hidden;
    font-size: 14px;
    text-align: center;
    white-space: normal;
    padding: 10px;
    border-radius: 15px;
    background-color: var(--black-main);
    color: var(--orange-main);
    &[data-active=true] {
      overflow: visible;
      
    }
  }

  & > button {
    display: flex; /* for icon */
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-radius: 30px;
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
    background: var(--${({color}) => color || "blue"}-main);
    & * {pointer-events: none;}
    &:hover {background: var(--${({color}) => color || "blue"}-strong);}
    &:active {background: var(--${({color}) => color || "blue"}-main);}
    &:disabled {
      cursor: wait;
      background: var(--${({color}) => color || "black"}-main);
    }
  }
`
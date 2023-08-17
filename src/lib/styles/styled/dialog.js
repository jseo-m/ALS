
import styled from "@emotion/styled"

/**
 * dialog에 display 속성을 사용하면 안됌
 */
export const StyledDialog_Container = styled.dialog`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border: none;

  & > div {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: grid;
    place-items: center;
  }

  &[name="partial"] {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min-content;
    height: min-content;
    background-color: transparent;

    & > div {
      overflow: visible;
      padding: 0;
    }
  }
`

export const StyledDialog_Popup = styled.div`
  background-color: var(--black-sub);
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  padding: 20px 30px 30px;
  min-width: min-content;
  width: 100%;
  max-width: 440px;
  margin: auto;

  & > header {
    & > p {
      font-size: 20px;
      font-weight: 700;
      color: var(--blue-main);
    }
  }

  & > main {
    margin: 30px 0 50px;
    & > p {
      color: var(--white);
      font-size: 18px;
      white-space: pre-line;
    }
  }

  & > footer {
    display: flex;
    gap: 10px;

    & > button {
      flex: 1;
      background-color: var(--gray-main);
      color: var(--white);
      font-size: 18px;
      font-weight: 700;
      height: 50px;
      border-radius: 25px;
      &:hover {
        background-color: var(--black-main);
      }
      &[name="okay"] {
        background-color: var(--blue-main);
        &:hover {
          background-color: var(--blue-strong);
        }
      }
    }
  }

`

export const StyledDialog_Promotion = styled.div`
  position: relative;
  
  & > section {

    &[name="close"] {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      & > img {
        overflow: hidden;
        border-radius: 50%;
        background-color: var(--black-main);
        width: 50px;
        height: 50px;
      }
    }

    &[name="img"] {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      overflow: hidden;
      min-width: 200px;
      
      & > img {
        width: 100%;
        object-fit: contain;
      }
    }

    &[name="stop"] {
      margin-top: 20px;
      & > button {
        width: min-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 40px;
        border-radius: 20px;
        background-color: var(--black-main);
        padding: 0 10px;
        & > div {
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          background-color: var(--blue-main);
          border-radius: 50%;
          & > img {
            width: 18px;
            height: 18px;
          }
        }
        & > span {
          color: var(--white);
          font-weight: 700;
        }
      }
    }
  }
`
export const StyledDialog_Popup_Loading = styled.div`
  background-color: var(--black-sub);
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  padding: 20px 30px 30px;
  min-width: min-content;
  width: 100%;
  max-width: 440px;
  margin: auto;
  

  & > header {
    & > p {
      font-size: 20px;
      font-weight: 700;
      color: var(--blue-main);
    }
  }

  & > main {
    margin: 30px 0 30px;
    & > div {
      color: var(--white);
      font-size: 18px;
      white-space: pre-line;
      & >ul {
      display: grid;
        color:blue;
        gap:5px;
      & > li {
        display: grid;
        color:white;
        font-size:18px;
        grid-template-columns:180px 1fr 50px;
        height:40px;
        align-items: center;
        & > span{
          display: flex; 
        }
       }
      }
      & > div {
        display: flex;
        justify-content:center;
        margin-top:20px;
        font-size: 20px;
        font-weight: 700;
        
        & p {
          &[name="red_text"] {
          color:var(--orange-main);
          }
          &[name="blue_text"]{
            color: var(--blue-main);
          }
        }
      }
    }
  }

  & > footer {
    display: flex;
    gap: 10px;

    & > button {
      flex: 1;
      background-color: var(--gray-main);
      color: var(--white);
      font-size: 18px;
      font-weight: 700;
      height: 50px;
      border-radius: 25px;

      &[name="okay"] {
        background-color: var(--blue-main);
      }
    }
  }

`

export const StyledDialog_Policy = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--black-sub);
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 600px;
  height: auto;
  max-height: 90%;
  overflow: hidden;

  & > header {
    padding: 20px;
    border-bottom: 1px solid var(--gray-main);
    & [data-title] {
      font-size: 20px;
      font-weight: 700;
      color: var(--blue-main);
    }
  }

  & > footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px;
    gap: 10px;
    padding: 20px;

    & > button {
      background-color: var(--blue-main);
      color: var(--white);
      font-size: 18px;
      font-weight: 700;
      height: 50px;
      border-radius: 25px;
      &:hover {background-color: var(--blue-strong);}
      &[data-close=cancel] {
        background-color: var(--gray-main);
        &:hover {background-color: var(--black-main);}
      }
    }
  }

  & > div {
    padding: 20px;
    overflow: auto;

    & [data-content] {
      color: var(--white);
      font-size: 13px;
      white-space: pre-line;
    }
  }
`


export const StyledDialog_List = styled.div`
  background-color: var(--black-sub);
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  padding: 20px 30px 30px;
  min-width: min-content;
  width: 100%;
  max-height: 700px;
  max-width: 700px;
  margin: auto;

  & > header {
    & > p {
      font-size: 20px;
      font-weight: 700;
      color: var(--blue-main);
    }
  }

  & > div {
    max-height: 570px;
    overflow-y: auto;
    margin: 10px;

    & tbody {
      color: white;
    }
  }

  & > footer {
    display: flex;
    gap: 10px;

    & > button {
      flex: 1;
      background-color: var(--gray-main);
      color: var(--white);
      font-size: 18px;
      font-weight: 700;
      height: 50px;
      border-radius: 25px;
      &:hover {
        background-color: var(--black-main);
      }
      &[name="okay"] {
        background-color: var(--blue-main);
        &:hover {
          background-color: var(--blue-strong);
        }
      }
    }
  }

`
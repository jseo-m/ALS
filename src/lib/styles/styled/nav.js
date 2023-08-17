import styled from "@emotion/styled";

const Nav = styled.nav`
  width: 290px;
  border: 1px solid var(--black-main);
  display: flex;
  flex-direction: column;
`

export const StyledNav_Cloud = styled(Nav)`
  & > [name="user"] {
    background-color: var(--black-main);

    & > header {
      display: grid;
      grid-template-columns: auto 1fr repeat(3, 50px);
      grid-template-rows: 60px;
      & > a {

        &:nth-of-type(1) {
          padding: 0 10px;
          text-align: start;
          font-size: 18px;
          font-weight: 500;
          transition: 0.1s;
          &:hover {color: var(--blue-main);}
          &:active {color: var(--white);}
          & > img {
            width: 100%;
            aspect-ratio: 253/58;
            object-fit: contain;
          }
        }
        &:nth-of-type(3) {
          position: relative;
         & > span {
          position: absolute;
          background-color: var(--orange-strong);
          font-size: 11px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          top: 53%;
          left: 53%;
        }
        }
        & > img {
          width: 32px;
          height: 42px;
        }
      }
    }

    & > footer {
      height: 90px;
      padding: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;

      & > div {
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-template-rows: 1fr auto;
        grid-column-gap: 10px;

        & > div {
          &[name="img"] {
            grid-area: 1 / 1 / 3 / 2;
            & > img {
              width: 50px;
              height: 50px;
              object-fit: cover;
              border-radius: 50%;
              overflow: hidden;
            }
          }
          &[name="name"] {
            grid-area: 1 / 2 / 2 / 3;
            font-size: 18px;
            font-weight: 700;
          }
          &[name="pay"] {
            grid-area: 2 / 2 / 3 / 3;
            font-size: 9px;
            font-weight: 700;
            color: black;
            background-color: var(--orange-main);
            width: min-content;
            height: min-content;
            border-radius: 5px;
            padding: 4px 5px;
          }
        }
      }
    }
  }

  & > [name="info"] {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    border-bottom: 1px solid black;
    height: 50px;
    & > div {
      font-size: 12px;
    }
    & > div > a {
      padding: 0 10px;
      color: var(--blue-main);
      font-size: 14px;
      font-weight: 500;
      &:hover {color: var(--blue-strong);}
      &:active {color: var(--blue-main);}
    }
  }

  & > [name="loading"] {
    margin: 30px auto;
  }

  & > [name="device"] {
    overflow-y: auto;
    & > div {
      background-color: var(--black-main);
      border-radius: 10px;
      margin: 10px;
      border: 1px solid var(--black-main);
      & > header {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 15px 10px 0;

        & > div {
          &[name="space"] {flex: 1;}
          &[name="power"] {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid var(--blue-main);
            cursor: pointer;
            &:hover {box-shadow: 0 0 2px var(--blue-main);}
          }
        }
      }
      & > main {
        height: 120px;
        display: grid;
        grid-template-columns: 60px 1fr;
        grid-template-rows: 30px repeat(3, 1fr);
        grid-column-gap: 10px;
        padding: 15px 10px;
        cursor: pointer;

        & * {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        & > [name="alias"] {
          grid-area: 1 / 1 / 2 / 3;
          font-weight: 700;
        }
        & > [name="img"] {
          grid-area: 2 / 1 / 5 / 2;
          position: relative;
          cursor: pointer;
          & > img {
            position: relative;
            z-index: 1;
            pointer-events: none;
            &:nth-of-type(1) {
              width: 60px;
              height: 60px;
              object-fit: cover;
              border-radius: 50%;
              overflow: hidden;
              background: rgb(37, 38, 41);
              background: linear-gradient(90deg, rgba(36,36,36) 0%, rgba(51,91,114) 100%);
            }
            &:nth-of-type(2) {
              position: absolute;
              z-index: 2;
              right: -15px;
              bottom: -15px;
            }
          }
        }
        & > [name="model"] {
          grid-area: 2 / 2 / 3 / 3;
          font-size: 13px;
        }
        & > [name="serial"] {
          grid-area: 3 / 2 / 4 / 3;
          font-size: 12px;
          color: var(--gray-main);
          & > span {
            font-size: inherit;
            font-weight: 700;
            color: var(--blue-main);
          }
        }
        & > [name="address"] {
          grid-area: 4 / 2 / 5 / 3;
          font-size: 7px;
        }
      }
      & > footer {
        display: flex;
        justify-content: center;
        overflow: hidden;
        height: 0;
        border: none;
        & > img {cursor: pointer;}
      }
      &:hover {
        border: 1px solid var(--blue-main);
      }
      &[color="active"] {
        border: 1px solid var(--blue-main);
        & > footer {
          border-top: 1px solid black;
          height: unset;
        }
      }
      &[data-state="3"] {
        & > main {
          & > div {
            &[name="alias"],
            &[name="address"] {color: var(--gray-main);}
          }
        }
      }
    }
  }
`

export const StyledNav_Admin = styled.nav`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  border-bottom: 1px solid var(--black-main);

  & > button {
    padding: 5px 10px;
    font-weight: 500;
    font-size: 18px;
    color: var(--white);
    background-color: var(--black-sub);
    
    &[data-active=true] {
      color: var(--orange-main);
      font-weight: 700;
    } 
    &:hover {
      background-color: black;
    }
    &:active {
      color: var(--orange-main);
    }
  }
`
export const StyledNav_Section = styled.a`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid var(--black-main);

  & > p {
    text-align: start;
    font-weight: 600;
  }

  & > div {
    display: flex;
    gap: 10px;
    & > span {
      color: var(--blue-main);
    }
    & > div {
      display: grid;
      place-items: center;
    }
  }
  
  &:hover > p {
    color: var(--blue-main);
  }
`
export const StyledNav_Manager = styled(Nav)`
  width: 250px;
  & > div {
    /* height: 60px; */
    padding: 18px 20px;
    display: grid;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid var(--color-black2);
    

    &:nth-of-type(1) { border-top: 1px solid var(--color-black2); }
    & > span {
      color: white;
      font-size: 20px;
    }
    
    &:hover {
      & > span { color: var(--color-blue1); }
    }

    & > div  {
      padding: 10px 10px;
      & > span {
        color: white;
        font-weight: 500;
        font-size: 13px;
      }
      &:hover {
         color: var(--color-blue1);
      }
      &[name="active"] {
      background: #56CCF2;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to left, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to left, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      & > span {
        color: white;
        font-weight: 500;
      }
    }
    }

    &[name="active"] {
      background: #56CCF2;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to left, #2F80ED, #56CCF2);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to left, #2F80ED, #56CCF2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      & > span {
        color: white;
        font-weight: 500;
      }
    }
    
  }
`

export const StyledNav_Mobile = styled.nav`
  background-color: var(--black-main);
  cursor: pointer;

  &[name="href"] { left: 60px; }
  
  & > header {
    padding: 10px;
    & * { pointer-events: none; }
    & > div {
      width: 100%;
      color: white;
      text-align: center;
    }
  }

  & > ul {
    & > li {
      background-color: black;
      &:hover { background-color: dimgray; }
      & * { pointer-events: none; }
      & > button {
        width: 100%;
        padding: 5px;
        border: none;
        color: white;
        background-color: transparent;
      }
    }
  }
`
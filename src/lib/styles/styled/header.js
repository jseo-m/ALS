import styled from "@emotion/styled";
import theme from '../theme'

const Header = styled.header`
  background-color: var(--black-main);
  border-left: 1px solid var(--black-sub);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`

export const StyledHeader_UnAuth = styled(Header)`
  border: none;
  & > section {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 20px;

    & > a {
      &:hover,
      &[color="active"] {
        color: var(--blue-main);
      }
    }

    &[name="home"] {
      cursor: pointer;
      font-size: 20px;
      font-weight: 500;
      transition: 0.1s;
      &:hover {color: var(--blue-main);}
      &:active {color: var(--white);}
      & > img {
        height: 40px;
        aspect-ratio: 253/58;
      }
    }
  }
`

export const StyledHeader_Cloud = styled(Header)`
  & > section {
    &:nth-of-type(1) {
      & > header {
        font-size: 14px;
        font-weight: 700;
        margin: 0 0 10px 19px;
      }
      & > main {
        display: flex;
        & > div {
          border-right: 1px solid var(--gray-main);
          display: flex;
          align-items: center;
          padding: 0 19px;

          &:nth-of-type(2) {
            gap: 10px;
            & > p {
              color: var(--blue-main);
              font-weight: 500;
              font-size: 12px;
            }
            & > span {
              padding-top: 3px;
              font-size: 12px;
            }
          }
          &:nth-of-type(3) {
            border: none;
            display: flex;
            gap: 10px;
            & > button {
              height: 30px;
              border-radius: 15px;
              background-color: var(--blue-main);
              color: white;
              font-size: 11px;
              font-weight: 500;
              padding: 0 12px;
            }
          }
        }
      }
    }

    &:nth-of-type(2) {
      display: grid;
      grid-template-columns: 64px 1fr;
      grid-template-rows: auto 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 4px;

      & > div {
        &:nth-of-type(1) {
          grid-area: 1 / 1 / 3 / 2;
          & > img {
            background-color: black;
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        &:nth-of-type(2) {
          grid-area: 1 / 2 / 2 / 3;
          font-size: 14px;
          font-weight: 700;
          margin-top: 4px;
        }
        &:nth-of-type(3) {
          grid-area: 2 / 2 / 3 / 3;
          display: flex;
          justify-content: center;
          align-items: start;
          & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-right: 1px solid var(--gray-main);
            padding: 0 15px;

            & > p {
              font-weight: 700; 
            }
            & > span {
              font-size: 7px;
              color: var(--blue-main);
            }
            &:nth-of-type(1) {padding-left: 5px;}
            &:nth-of-type(3) {border: none;}
          }
        }
      }
    }
  }
`

export const StyledHeader_Admin = styled.header`
  background-color: var(--black-main);
  display: flex;
  color: var(--white);

  & > button {
    /* flex: 1; */
    /* display: flex; */
    /* justify-content: flex-start; */
    color: var(--white);
    background-color: transparent;
    padding: 0 15px;

    & > strong {
      font-weight: 700;
      font-size: 24px;
    }
    & > span {
      padding: 3px;
      font-size: 13px;
      color: var(--gray-main);
    }
    &[data-active=true] {
      color: var(--orange-main);
    }
    &:hover {
      background-color: black;
      * {
        color: var(--orange-main);
      } 
    }
    &:active {
      background-color: transparent;
      * {
        color: white;
      }
    }
  }

  & > span {
    flex: 1;
    text-align: end;
    align-self: center;
    padding: 0 10px;
  }
`

export const StyledHeader_Depth = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
  & > p {
    font-size: 22px;
    font-weight: 700;
    color: var(--white);
    padding: 0 20px;
  }
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    & > a {
      font-size: 14px;
      color: var(--gray-main);
      &:last-child {color: var(--white);}
      &:hover {color: var(--white);}
    }
    & > span {
      font-size: 13px;
      color: var(--gray-main);
    }
  }
`

export const StyledHeader_Manager = styled.header`
  position: relative;
  background-color: var(--color-black);
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 20px;
  height: 60px;
  padding-right: 20px;

  & > section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100%;

    &:nth-of-type(1) {
      justify-content: flex-start;

      & > button {
        height: inherit;
        padding: 0 20px;
        background-color: transparent;
        color: white;
        &:hover { color: var(--color-blue1); }
      }
    }

    &:nth-of-type(2) {
      & > div { 
        display: flex;
        align-items: center;
        height: 40px; 
      }
    }

    &:nth-of-type(3) {
      display: none;

      & > button {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        background-color: var(--color-blue1);
      }
    }
  }


  @media (max-width: 768px) {
    & > section:nth-of-type(3) {
      display: flex;
    }
  }
`

export const StyledHeader_Video_Live = styled(Header)`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-weight: 700;
  padding: 0 20px;

  & #header_front {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;

      & > p {
        font-size: 10px;
        padding: 2px 7px;
        border-radius: 5px;
        color: var(--black);
        background-color: var(--orange-main);
      }

      & > div {
        display: flex;
        align-items: center;
        background-color: var(--black);
        height: 28px;
        border-radius: 14px;
        border: 1px solid var(--orange-main);
        padding: 0 3px;
        & > div {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: var(--orange-main);
          overflow: hidden;
          display: grid;
          place-items: center;
          pointer-events: none;
          & > img {
            width: 13px;
            height: 13px;
          }
        }
        & > span {
          padding: 0 10px;
        }
      }
    }
  }

  & #header_rear {
    display: flex;
    & > div {
      padding: 0 20px;
      border-right: 1px solid var(--gary-main);
      text-align: center;

      & > p {
        letter-spacing: 1px;
      }

      & > span {
        font-size: 10px;
        color: var(--blue-main);
      }
    }
  }
`

export const StyledHeader_Fileview = styled.header`
  position: relative;
  background-color: var(--color-black2);
  display: grid;
  grid-template-columns: 120px 80px 130px 105px;
  align-items: center;
  gap: 20px;
  height: 100%;
 

  & > section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100%;
    border-left: 3px solid var(--blue-main);

    &:nth-of-type(1) {
      font-weight:bold;
      & > div { }
    }
  }

   & > div {
    display: flex;
    height: 100%;
    gap:5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
      & > button {
        justify-content: center;
        align-items: center;
        height: inherit;
        background-color: transparent;
        color: ${theme.Colors.black6};
      }
      :hover { 
        & > button{
          color: ${theme.Colors.white};
        }
      }
    }

    .target-category {
      border-bottom:2px solid ${theme.Colors.blue1};
      & > button{
        color: ${theme.Colors.white};
      }
    }

`
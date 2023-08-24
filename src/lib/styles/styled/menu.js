import styled from "@emotion/styled";

export const StyledMenu_Manager = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  cursor: pointer;
  
  & > header {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;

    & * {pointer-events: none;}

    & > div {
      font-size: 14px;
      color: white;
      padding: 0 10px;
      overflow:hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:hover {
      background-color: white;
      & > div { color: black; }
    }
  }
  
  & > main {
    position: absolute;
    min-width: 100%;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
    overflow: hidden;
    
    & > ul {
      background-color: skyblue;
      color: black;
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
  }
`

export const StyledMenu_Select = styled.div`
  color: white;

  & > header {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px;
    cursor: pointer;
    & [color="placeholder"] {color: var(--gray-main);}
  }

  & > footer {
    position: relative;
    z-index: 2;
    height: 0;

    & > ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      max-height: 100px;
      visibility: hidden;
      background-color: var(--black);
      overflow-x: hidden;
      border: 1px solid var(--black);
  
      & > button {
        width: 100%;
        max-width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        border: none;
        border-bottom: 1px solid var(--black-main);
        color: var(--white);
        background-color: transparent;
        font-size: 12px;
        & * {pointer-events: none;}
        &:last-of-type {border: none;}
        &:hover {background-color: var(--black-sub);}
      }
    }
  }
`
export const StyledMenu_popProfile = styled.section`
  & ul {
    padding: 10px;
  }
`

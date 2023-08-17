import styled from "@emotion/styled";


export const StyledAdmin_Setting_Period = styled.div`
  display: flex;
  gap: 5px;
  height: 40px;
  & > input {
    max-width: 200px;
  }
  & > span {
    align-self: center;
  }
  & > button {
    width: min-content;
  }
`

export const StyledAdmin_Setting_Filter = styled.div`
  display: flex;
  gap: 5px;
  height: 40px;
`

export const StyledAdmin_Setting_Search = styled.div`
  display: flex;
  gap: 5px;
  height: 40px;
  & > input {
    max-width: 200px;
  }
  & > button {
    width: min-content;
  }
`
export const StyledAdmin_Input_Form = styled.div`
  display: flex;
  gap: 5px;
  height: 40px;
  & > select {
    min-width: 100px;
  }
  & > input {
    max-width: 200px;
  }
  & > button {
    width: min-content;
  }
`

export const StyledAdmin_Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  height: 40px;
  
  & > button {
    min-width: 40px;
    width: min-content;
    font-size: 13px;
    padding: 0 5px;
  }
`

export const AdminInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: var(--black-sub);
  padding: 5px 10px;
  color: var(--orange-main);
  outline: none;
  border: 2px solid var(--black-sub);
  letter-spacing: 1px;
  &::placeholder {
    font-size: 14px;
    color: var(--gray-main);
  }
  &:hover {
    background-color: black;
  }
  &:focus {
    border-color: var(--orange-main);
  }
  &[type=date] {
    &::-webkit-calendar-picker-indicator {
      background-color: var(--orange-main);
      border-radius: 50px;
      cursor: pointer;
    }
  }
`
export const AdminMinInput = styled.input`
  width: 13%;
  height: 100%;
  background-color: var(--black-sub);
  padding: 5px 10px;
  color: var(--orange-main);
  outline: none;
  border: 2px solid var(--black-sub);
  letter-spacing: 1px;
  &::placeholder {
    font-size: 14px;
    color: var(--gray-main);
  }
  &:hover {
    background-color: black;
  }
  &:focus {
    border-color: var(--orange-main);
  }
  &[type=date] {
    &::-webkit-calendar-picker-indicator {
      background-color: var(--orange-main);
      border-radius: 50px;
      cursor: pointer;
    }
  }
`
export const AdminButton = styled.button`
  /* width: 100%; */
  height: 100%;
  padding: 5px 10px;
  background-color: var(--black-sub);
  border: 2px solid var(--black-sub);
  color: white;
  font-weight: 500;
  border-radius: 5px;

  &:hover {
    background-color: black;
  }
  &:active {
    background-color: var(--black-sub);
  }
  &[data-active=true] {
    color: var(--orange-main);
  }

  &[data-color=back] {
    border-color: var(--red-main);
    background-color: var(--red-main);
    color: white;
    &:hover {
      background-color: var(--red-strong);
    }
    &:active {
      background-color: var(--red-main);
    }
  }
`

export const AdminTable = styled.table`
  font-size: 14px;
  width: 100%;
  border-collapse: collapse;

  & td {
    border: 1px solid dimgray;
    padding: 7px;

    &[data-td=field] {
      width: 10%;
      min-width: 150px;
      font-weight: 600;
      background-color: var(--orange-sub);
    }

    &[data-td=minfield]{
      width: 0%;
      min-width: 150px;
      font-weight: 600;
      background-color: var(--orange-sub);
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
    } 

    & .quill {
      width: 100%;  
      min-width: 150px;
      font-weight: 600;
      height: 500px;

      & .ql-container {
        height: ${({qlContaitnerHeight}) => qlContaitnerHeight || 450}px;
      }

      & .ql-editor {
        height: ${({qlContaitnerHeight}) => qlContaitnerHeight || 450}px;
      }
    }

    & > button {
      &[data-td=button] {
        width : 5.5%;
  
      }
    }
  }

  & > thead {
    & > tr {
      background-color: var(--black-sub);
      color: var(--orange-main);
      font-weight: 600;
      &:hover {
        background-color: var(--black-sub);
      }

      & > td {
        &:hover {
          background-color: black;
        }
      }
    }
  }
`
export const AdminTable_List = styled(AdminTable)`
  & > thead{
    & > tr {
      & > td {
        &[data-fixed=true] {
          width: 10%;
        }
      }
    }
  }

  & > tbody {
    & > tr {
      &:hover {
        & > td {
          background-color: var(--orange-sub);
        }
      } 
  
      & > td {
        &:hover {
          /* cursor: pointer; */
          color: var(--orange-main);
        }
        &[data-clickable=true]{
          cursor: pointer;
          /* background-color: var(--black-sub); */
        }
        &[data-total=true] {
          background-color: var(--blue-sub);
        }
        &[data-field="content"] {
          & > div {
            max-width: 950px;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
`

export const AdminTable_Details = styled(AdminTable)`
`

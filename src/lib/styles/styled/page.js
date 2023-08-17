import styled from "@emotion/styled";
import theme from "../theme";

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

export const Signin = styled(Page)`
padding: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow-y: auto;

& input {
  color: black;
}
& > main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 640px;
  padding: 100px 0 60px;
  overflow-y: auto;

  & > section {
    width: 100%;

    &:nth-of-type(3){
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }
  }
}
`
export const Signup = styled(Page)`
  display: flex;
  justify-content: center;

  & > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    padding: 100px 0 90px;

    & > section{
      width: 100%;
    }

    & > section:nth-of-type(1){
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }

    & > section:nth-of-type(3){
      & > div{
        margin-bottom: 50px;
        width: 100%;
        height: 60px;
        border-radius: 30px;
        text-align: center;
        background-color: ${theme.Colors.black0};
        color: white;
        line-height: 60px;
        & > strong {
          font-weight: 600;
        }
      }
    }

    & > div{
      width: 210px;
    }
  }
`


export const UserAuthChange = styled(Page)`
  padding: 20px;

  & > div {
    max-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 160px auto 60px;

    & > span {
      font-size: 18px;
      font-weight: 500;
    }

    & > footer {
      display: grid;
      width: 210px;
      margin: 40px auto 0;
    }
  }
`
export const UserNotice = styled(Page)``

/*
  main page with header
*/

export const UserHome = styled(Page)`
  & > main {
    background-color: silver;
    height: 100%;
  }
  & > sub {
    position: absolute;
    &:nth-of-type(1){
      top: 20px;
      left: 15px;
    }
    &:nth-of-type(2){
      top: 20px;
      left: 101.95px;
    }
    &:nth-of-type(3){
      top: 20px;
      left: 222.67px;
    }
  }
`
export const Live = styled(Page)`
`
export const Vod = styled(Page)`
  display: grid;
  grid-template-columns: 1fr 350px;
  grid-template-rows: 1fr 600px 350px;
  & > main{}
  & > :nth-of-type(1) {
    margin-top: 40px;
    grid-area: 2 / 1 / 3 / 2;
  }
  & > section:nth-of-type(2) {
    
    grid-area: 3 / 1 / 4 / 2;
  }
`
export const Vodcloud = styled(Page)`
  & > [name="default"]{
    display: grid;
    grid-template-columns: calc(100vw - 650px) 350px;
    grid-template-rows: 60px 60px calc((100vw - 650px) * 0.563) 60px 150px 60px 700px 100px;
    & > section:nth-of-type(1) {
      grid-area: 1 / 1 / 2 / 3;
    }
    & > section:nth-of-type(2) {
      grid-area: 2 / 1 / 3 / 3;
    }
    & > section:nth-of-type(3) {
      grid-area: 3 / 1 / 4 / 2;
    }
    & > section:nth-of-type(4) {
      border-left: 3px solid ${theme.Colors.blue1};
      grid-area: 4 / 1 / 5 / 2;
    }
    & > section:nth-of-type(5) {
      padding-left: 20px;
      grid-area: 5 / 1 / 6 / 2;
    }
    & > section:nth-of-type(6) {
      border-left: 3px solid ${theme.Colors.blue1};
      grid-area: 6 / 1 / 7 / 2;
    }
    & > section:nth-of-type(7) {
      grid-area: 7 / 1 / 8 / 2;
    }
    & > section:nth-of-type(8) {
      grid-area: 3 / 2 / 4 / 3;
    }
    & > section:nth-of-type(9) {
      grid-area: 4 / 2 / 8 / 3;
      /* z-index:3;
    position: relative;
    right:-50px;
    display: block;
    width: 300px;
    height: 300px; */
    }
  }
  & > [name="wide"]{
    display: grid;
    grid-template-columns: calc(100vw - 650px) 350px;
    grid-template-rows: 60px 60px calc((100vw - 300px) * 0.563) 60px 150px 60px 700px 100px;
    & > section:nth-of-type(1) {
      grid-area: 1 / 1 / 2 / 3;
    }
    & > section:nth-of-type(2) {
      grid-area: 2 / 1 / 3 / 3;
    }
    & > section:nth-of-type(3) {
      grid-area: 3 / 1 / 4 / 4;
    }
    & > section:nth-of-type(4) {
      border-left: 3px solid ${theme.Colors.blue1};
      grid-area: 4 / 1 / 5 / 2;
    }
    & > section:nth-of-type(5) {
      padding-left: 20px;
      grid-area: 5 / 1 / 6 / 2;
    }
    & > section:nth-of-type(6) {
      border-left: 3px solid ${theme.Colors.blue1};
      grid-area: 6 / 1 / 7 / 2;
    }
    & > section:nth-of-type(7) {
      grid-area: 7 / 1 / 8 / 2;
    }
    & > section:nth-of-type(8) {
      grid-area: 4 / 2 / 8 / 3;
    }
    & > section:nth-of-type(9) {
      grid-area: 8 / 2 / 8 / 3;
      /* z-index:3;
    position: relative;
    right:-50px;
    display: block;
    width: 300px;
    height: 300px; */
    }
  }
`;

export const DeviceAlert = styled(Page)`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > li { flex-shrink: 0; }
`

export const ModifyInfo = styled(Page)` 
  display: flex;
  justify-content: center;

  & > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    padding: 100px 0 90px;

    & > section{
      width: 100%;
    }

    & > section:nth-of-type(2){
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }

    & > section:nth-of-type(4){
      & > div{
        margin-bottom: 30px;
        width: 100%;
        height: 30px;
        border-radius: 30px;
        text-align: center;
        background-color: ${theme.Colors.black0};
        color: white;
        line-height: 60px;
        & > strong {
          font-weight: 600;
        }
      }
    }
    & > section:nth-of-type(5){
      margin-top: 30px;
    }

    & > div{
      width: 210px;
    }
  }
`
export const DeviceGroup = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div { 
    width: 100%;
    max-width: 640px;
    margin: 60px 30px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 90px) 100px;
    gap: 20px;

    & > footer {
      width: 210px;
      margin-top: 20px;
      margin: 10px auto 0;
    }
  }
`
export const geofenceReg = styled(Page)` 
  display: flex;
  justify-content: center;

  & > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    padding: 100px 0 90px;

    & > section{
      width: 100%;
    }

    & > section:nth-of-type(2){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 60px);
      grid-column-gap: 20px;
      grid-row-gap: 10px;
    }

    & > section:nth-of-type(4){
      & > div{
        margin-bottom: 50px;
        width: 100%;
        height: 60px;
        border-radius: 30px;
        text-align: center;
        background-color: ${theme.Colors.black0};
        color: white;
        line-height: 60px;
        & > strong {
          font-weight: 600;
        }
      }
    }

    & > div{
      width: 210px;
    }
  }
`
export const ManagerUsers = styled.div`
  & > div {
    margin: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`
export const ManagerPush = styled.div`
  & > div {
    margin: 30px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 5px;
    
    & > div {
      & > div[data-parent="true"]{
        color : white;
      }
    }
    
  }
`


/**
 * refactoring
 */
export const Page_FromTop = styled.div`
  border: 1px solid red;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
  min-height: 100%;
  & > section {width: 100%;}
  & section[name="webview_header"] {
    width: 100%;
    height: 80px;
    & > main {
      position: fixed;
      z-index: 20;
      top: 0;
      right: 0;
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: var(--black-main);
      & > div {
        font-size: 22px;
        font-weight: 600;
  
        &:nth-of-type(1),
        &:nth-of-type(3) {
          width: 40px;
          height: 40px;
        }
      }
    }
    &[color="web"] {
      width: calc(100% - 450px);
      & > main {width: calc(100% - 450px);}
    }
  }
`
export const Page_FromTopNarrow = styled(Page_FromTop)`
  max-width: 600px;
`
export const Page_FromTopWide = styled(Page_FromTop)`
  max-width: 900px;
`
export const Page_FlexCenter = styled(Page_FromTop)`
  justify-content: center;
`
export const Page_FlexCenterNarrow = styled(Page_FlexCenter)`
  max-width: 600px;
`
export const Page_FlexCenterWide = styled(Page_FlexCenter)`
  max-width: 900px;
`
export const Page_Vh100 = styled(Page_FromTop)`
  height: 100vh;
`
export const Page_Vh100Narrow = styled(Page_Vh100)`
  max-width: 600px;
`
export const Page_Vh100Wide = styled(Page_Vh100)`
  max-width: 900px;
`

export const StyledPage_Sign = styled(Page_FromTopNarrow)`
  & > section {
    & > form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & > label {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-weight: 500;
      }

      & > span {
        color: orangered;
        text-align: center;
        margin: 10px 0;
        font-size: 14px;
      }
    }
  }
`

export const StyledPage_SignIn = styled(Page_FlexCenterNarrow)`
  & > section {
    &:nth-of-type(2) {
      padding: 40px 0;
    }
    &:nth-of-type(3) {
      display: flex;
      justify-content: center;
      gap: 40px;
    }
  }

  & > sub {
    display: flex;
    gap: 30px;
  }
`

export const StyledPage_SignUp = styled(Page_FromTopNarrow)`
  & > section {
    &:nth-of-type(1) {
      display: flex;
      justify-content: center;
      gap: 40px;
    }
    &:nth-of-type(2) {
      padding: 40px 0;
    }
    &:nth-of-type(3) {

    }
    &:nth-of-type(4) {

    }
  }
`

export const StyledPage_CloudUserProfile = styled(Page_FlexCenterNarrow)`
  & > main {
    display: flex;
    flex-direction: column;
    gap: 30px;

    & > section {
      &[name="sns"] {
        display: flex;
        justify-content: space-around;
      }
    }
  }
`

export const StyledPage_DeviceSettings = styled(Page)`
  display: grid;
  grid-template-columns: 730px 1fr;
  grid-auto-rows: auto;

  & > section:nth-of-type(1) {
    grid-area: 1 / 2 / 4 / 3;
  }
  
  & > section:nth-of-type(2) {
    grid-area: 1 / 1 / 2 / 2;
  }
  
  & > section:nth-of-type(3) {
    grid-area: 2 / 1 / 3 / 2;
  }
  
  & > section:nth-of-type(4) {
    grid-area: 3 / 1 / 4 / 2;
  }

`

export const StyledPage_CloudInfo = styled(Page_FlexCenterNarrow)`
  & > button {
    background-color: transparent;
    color: white;
    padding: 30px;
    border-bottom: 1px solid white;

    &:hover {
      color: var(--blue-main);
      border-color: var(--blue-main);
    }
  }
`

export const StyledPage_Manager = styled.div`
  & > div {
    margin: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`

export const StyledPage_ManagerSignIn = styled.div`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    gap: 5px;
    width: min(100%, 400px);
    padding: 30px 20px;
    border-radius: 10px;
    background-color: rgb(30, 30, 30);

    & > form {
      display: grid;
      grid-template-rows: auto auto 20px auto;
      grid-row-gap: 20px;
      width: 100%;

      & > span {
        text-align: center;
        color: orangered;
        font-size: 12px;
      }
      & > a {

      }
      & > div {
        display: flex;
      }
    }
  }
`

// base
export const Page_Top_Left = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

export const Page_Top_Center = styled(Page_Top_Left)`
  display: grid;
  grid-auto-rows: min-content;
  padding: 60px 0;

  & > section {
    width: 100%;
    min-width: min-content;
    max-width: 660px;
    margin: 0 auto;
    padding: 0 10px;
    
    &[name=title] {
      margin: 0 auto 60px;
      text-align: center;
      color: white;

      & > p {
        font-size: 22px;
        font-weight: 600;
      }
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 400;
        * { white-space: pre-line; }
      }
    }

    &[name="kind"] {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 60px;
      & > button {
        color: white;
        border-bottom: 2px solid var(--gray-main);
        background-color: transparent;
        height: 50px;

        &[color="active"] {
          font-weight: 700;
          color: var(--blue-main);
          border-color: var(--blue-main);
        }
      }
    }

    &[name="button"] {
      margin: 60px auto;
    }

    &[name=form] {
      display: grid;
      grid-auto-flow: row;
      gap: 20px;
    }
  }
`
export const Page_Center = styled(Page_Top_Left)`
  display: grid;
  place-items: center;
  padding: 60px 20px;

  & > div[name=wrapper] {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    width: 100%;
    min-width: min-content;
    max-width: 660px;
  }
`

// unauth
export const StyledPage_Unauth_Account = styled(Page_Top_Center)`
  & > section {
    &[name="if_registered"] {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > p {
        font-size: 20px;
        font-weight: 700;
        white-space: normal;
        text-align: center;
        margin: 60px 0;
      }

      & > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        & > button {
          border: 2px solid var(--blue-main);
          border-radius: 10px;
          width: 100%;
          max-width: 170px;
          aspect-ratio: 1/1;
          display: grid;
          place-items: center;
          font-weight: 700;
          font-size: 18px;
          padding: 10px;

          & > div {
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
  
          &:nth-of-type(1) {
            background-color: transparent;
            color: var(--blue-main);
          }
  
          &:nth-of-type(2) {
            background-color: var(--blue-main);
            color: var(--black);
          }
        }
      }
    }

    &[name="registered"] {
      & > [name="guide"] {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 60px;
        & > span {
          white-space: normal;
        }
        & > img {
          width: 23px;
          height: 23px;
        }
      }
    }
  }
`

// unauth signin
export const StyledPage_CloudSignin = styled(Page_Center)`
  & > div {
    & > section {  
      &[name=input] {
        display: grid;
        grid-auto-flow: row;
        grid-auto-rows: auto;
        grid-row-gap: 30px;
        width: 100%;
        min-width: min-content;
        & > [name=auto] {
          display: flex;
          align-items: center;
          gap: 10px;
          width: min-content;
          cursor: pointer;
        }
        & > [name=message] {
          min-width: min-content;
          text-align: center;
          font-size: 14px;
          background-color: var(--black-main);
          border-radius: 20px;
          padding: 10px;
        }
      }
      &[name=unauth_nav] {
        color: var(--blue-main);
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-top: 60px;
        & > span {
          cursor: pointer;
          &:hover {color: var(--blue-strong);}
        }
      }
    }
  }
`

// unauth suc
export const StyledPage_CloudUnauthSuc = styled(Page_Center)`
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 60px;

    & > section {
      text-align: center;
      & * {white-space: pre-line;}
    
      &:nth-of-type(1){
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        & > span {
          font-size: 36px;
          font-weight: 700;
        }
      }
    
      &:nth-of-type(2){
        display: flex;
        flex-direction: column;
        gap: 5px;
        & strong {color: var(--blue-main);}
      }
    
      &[name="function"] {
        & > ul {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 20px;
          text-align: left;
          background-color: var(--black-main);
          border-radius: 10px;
          
          & > p {
            text-align: center;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 20px;
          }
          & > li {
            font-weight: 500;
          }
        }
      }
    }
  }
`

// unauth account match
export const StyledPage_Unauth_Account_Match = styled(Page_Top_Center)`
  & > section[name="match"] {
    & > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
      & > span {
        display: grid;
        place-items: center;
        height: 35px;
        background-color: var(--black-main);
        border-radius: 10px;
      }
    }
    & > p {
      color: var(--gray-main);
      margin: 20px 0 60px;
      white-space: normal;
    }
  }
`

// user
export const StyledPage_User = styled(Page_Top_Center)`
  & > section {
    &[name="profile"] {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin: 60px auto;

      & > img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
      }
      & > p {
        font-weight: 700;
        font-size: 18px;
      }
    }

    &[name="out"] {
      display: flex;
      color: var(--gray-main);
      margin: 20px auto 0;

      & > span {
        font-size: 14px;
        padding: 0 20px;
        border-right: 1px solid var(--gray-main);
        cursor: pointer;
        &:last-child {
          border: none;
        }
        &:hover {
          color: var(--white);
        }
      }
    }
  }
`

// user profile
export const StyledPage_UserProfile = styled(Page_Top_Center)`
  & > [name="img_name"] {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;

    & > img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
    }
    & > p {
      font-size: 18px;
      font-weight: 700;
    }
  }

  & > [name="sns"] {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 60px;

    & > p {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    & > [name="none"] {
      display: none;
    }
  }

  & > main {
    display: none;
  }

`

// user plan
export const StyledPage_UserPlan = styled(Page_Top_Center)`
  & div[name="plan_details"] {
    display: flex;
    padding: 15px 20px 20px;
    font-size: 14px;
    background-color: var(--black-main);

    & > div{
      flex: 1;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto;
      gap: 8px 24px;
    }
    & > button {
      font-weight: 700;
      color: var(--gray-main);
      background-color: var(--black-sub);
      height: 30px;
      border-radius: 15px;
      padding: 0 18px;
      &:hover {
        background-color: var(--black);
        color: var(--white);
      }
    }
  }

  & > section {
    &[name="plan"] {
      & > header {
        text-align: center;
        background-color: var(--black-main);
        border-radius: 10px;
        padding: 35px 30px 30px;
        & > p {
          font-size: 26px;
          & > strong {color: var(--blue-main);}
        }
        & > span {
          display: block;
          font-size: 14px;
          margin: 30px 0;
        }
        & > div {
          border: 1px solid var(--blue-main);
          border-radius: 10px;
          box-shadow: 0 5px 10px var(--black);
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 15px;
          place-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 30px 0;
          min-width: min-content;

          & > div {
            width: 100%;
            height: 100%;
            min-width: 230px;

            & > p {
              color: var(--blue-main);
              margin-bottom: 15px;
            }
            & > span {
              display: block;
              font-size: 26px;
              margin-bottom: 10px;
            }
            &[name="line"] {
              width: 1px;
              min-width: unset;
              padding: 0;
              margin: 0;
              background-color: var(--gray-main);
            }
          }
          
        }
      }

      & > footer {
        margin: 20px 0 40px;
        border-radius: 10px;
        overflow: hidden;
      }
    }

    &[name="plan_history"] {
      & > div {
        display: grid;
        grid-template-rows: 67px auto;
        border-bottom: 1px solid var(--black-strong);
        &:nth-of-type(1) {
          border-top: 1px solid var(--black-strong);
        }

        & > header {
          display: grid;
          grid-template-columns: 3px 1fr auto auto;
          cursor: pointer;
          align-items: center;

          &::before {
            content: "";
            width: 100%;
            height: 100%;
            background-color: transparent;
          }
          & > p {
            margin: 0 20px;
          }
          & > span {
            color: var(--gray-main);
          }
          & > img {
            margin: 0 20px;
          }
          &:hover {
            color: var(--blue-main);
          }
        }

        & > footer {
          border-top: 1px solid var(--black-strong);
          height: 0;
          visibility: hidden;
          overflow: hidden;
        }

        &[color="active"] {
          background-color: var(--black-main);

          & > header {
            &::before {
              background-color: var(--blue-main);
            }
            & > p {
              font-weight: 700;
              & > span {
                color: var(--blue-main);
              }
            }
          }

          & > footer {
            height: auto;
            visibility: visible;
          }
        }
      }
    }
  }
`

// device
export const StyledPage_Device = styled(Page_Top_Center)`
  
  & > section {
    &[name="details"] > div {
      background-color: var(--black-main);
      border-radius: 10px;
      padding: 20px;

      & > div {

        &[name="state"] {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-bottom: 20px;
          
          & > div {
            display: grid;
            &:nth-of-type(1) > div {
              display: grid;
              place-items: center;
              padding: 0 8px;
              height: 26px;
              border-radius: 13px;
              font-size: 15px;
              font-weight: 600;
              color: var(--blue-main);
              border: 2px solid var(--blue-main);
            }
            &:nth-of-type(2) > div {
              padding: 0 8px;
              height: 26px;
              border-radius: 13px;
              font-size: 15px;
              font-weight: 600;
              display: grid;
              grid-template-columns: auto auto;
              place-items: center;
              gap: 6px;
              background-color: var(--blue-sub);
              color: var(--blue-main);
              &::before {
                content: "";
                width: 13px;
                height: 13px;
                border-radius: 50%;
                background-color: var(--blue-main);
              }
            }
            &:nth-of-type(3){
              flex: 1;
              & > div {
                display: grid;
                place-items: center;
                width: min-content;
                padding: 0 8px;
                height: 26px;
                border-radius: 13px;
                font-size: 15px;
                font-weight: 600;
                background-color: var(--gray-main);
              }
            }
            &:nth-of-type(4) {
              font-size: 12px;
              color: var(--gray-main);
              cursor: pointer;
              &:hover {color: var(--orange-strong);}
            }
          }
        }

        &[name="title"] {
          margin-bottom: 20px;

          & > div {
            display: flex;
            align-items: center;
            height: 24px;
            gap: 10px;
            & > p {
              font-size: 18px;
              font-weight: 700;
            }
            & > input {
              width: 200px;
              background-color: var(--black-sub);
              padding: 5px 10px;
              font-size: 14px;
              border-radius: 5px;
              height: 24px;
  
              &::placeholder {
                color: var(--gray-main);
                font-size: 12px;
              }
            }
            & > button {
              font-size: 12px;
              color: var(--orange-main);
              background-color: transparent;
              border: none;
              align-self: center;
              cursor: pointer;
              &:hover {color: red;}
            }
          }

          & > span {
            display: flex;
            gap: 7px;
            font-size: 12px;
            color: var(--gray-main);
            & > strong { color: var(--blue-main); }

            & > input {
              width: 200px;
              background-color: var(--black-sub);
              padding: 5px 10px;
              font-size: 14px;
              border-radius: 5px;
              height: 24px;
  
              &::placeholder {
                color: var(--gray-main);
                font-size: 12px;
              }
            }
            & > button {
              font-size: 12px;
              color: var(--orange-main);
              background-color: transparent;
              border: none;
              align-self: center;
              cursor: pointer;
              &:hover {color: red;}
            }
            
          }
        }
        &[name="main"] {
          font-size: 14px;
          display: grid;
          grid-template-columns: 120px 1fr;
          grid-template-rows: repeat(2, auto);
          gap: 20px;

          & > div {
            & > div {
              display: flex;
              align-items: center;
              gap: 10px;
              padding-bottom: 5px;
              & [color="class"] {
                display: grid;
                place-items: center;
                background-color: var(--blue-main);
                color: var(--black-main);
                border-radius: 5px;
                height: 25px;
                padding: 0 8px;
              }
            }

            &[name="img"] {
              grid-area: 1 / 1 / 3 / 2;
              width: 120px;
              height: 120px;
              border-radius: 50%;
              overflow: hidden;
              & > img {
                width: inherit;
                height: inherit;
                object-fit: cover;
                background: rgb(37, 38, 41);
                background: linear-gradient(90deg, rgba(36,36,36) 0%, rgba(51,91,114) 100%);
              }
            }

            &[name="info"] {
              grid-area: 1 / 2 / 2 / 3;
              display: grid;
              grid-template-columns: 1fr auto;
              grid-template-rows: repeat(2, auto);
  
              & > span:nth-of-type(1) { grid-area: 1 / 1 / 2 / 2; }
              & > span:nth-of-type(2) { grid-area: 2 / 1 / 3 / 2; }
              & > a {
                grid-area: 1 / 2 / 3 / 3;
                font-weight: 700;
                height: 40px;
                padding: 0 20px;
                border-radius: 20px;
                background-color: var(--blue-main);
                &:hover {background-color: var(--blue-strong);}
                &:active {background-color: var(--blue-main);
              }
            }

            &[name="service"] {
              grid-area: 2 / 2 / 3 / 3;
              [color="red"] {color: var(--orange-strong);}
              [color="700"] {font-weight: 700;}
            }
          }
          }
        }
      }
    }

    &[name="firmware"] {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;

      & > div {
        & > p {
          font-weight: 500;
          margin-top: 20px;
          margin-bottom: 6px;
        }

        &[name="guide"] {
          font-size: 14px;
          white-space: pre-line;
        }
        &[name="title"] {
          display: flex;
          justify-content: space-between;
          align-items: center;
          & > div {
            display: flex;
            align-items: center;
            gap: 5px;
            height: 30px;
            border-radius: 15px;
            padding: 0 10px;
            border: 1px solid ${({status}) => (status == "1" || status == "2") ? "var(--green-main)" : "var(--orange-main)"};
            color: ${({status}) => (status == "1" || status == "2") ? "var(--green-main)" : "var(--orange-main)"};
            &::before {
              content: "";
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: ${({status}) => (status == "1" || status == "2") ? "var(--green-main)" : "var(--orange-main)"};
            }
          }
          & > button {
            height: 30px;
            border-radius: 15px;
            padding: 0 10px;
            font-weight: 700;
            color: white;
            background-color: var(--gray-main);
          }
        }
        &[name="firmware"] {
          border-bottom: 1px solid var(--gray-main);
          & > div {
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            & > sub {
              color: var(--blue-main);
              &[color="old"] {
                color: var(--orange-strong);
              }
            }
          }
        }
        &[name="initial"] {
          & > div {
            background-color: var(--black-main);
            border-radius: 10px;
            padding: 16px 20px;
            font-size: 14px;
            display: grid;
            grid-template-columns: auto 1fr;
            column-gap: 30px;
            row-gap: 7px;
            & > p {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
`
export const StyledPage_DeviceRegister = styled(Page_Top_Center)`
  & > section {
    &[name=guide] {
      & > div {
        background-color: var(--black-main);
        border-radius: 10px;
        padding: 30px;
        margin-bottom: 30px;
  
        & > p {
          font-weight: 700;
        }
        & > div {
          margin: 30px 0 50px;
          & > header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 5px;
            pointer-events: none;
          }
          & > footer {
            display: flex;
            justify-content: space-around;
            gap: 40px;
            font-weight: 700;
            margin-top: 20px;
          }
        }
  
        & > footer {
          display: flex;
          flex-direction: column;
          gap: 20px;

          & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            & > span {
              font-size: 14px;
              color: var(--gray-main);
              white-space: pre-line;
              text-align: center;
            }
          }
        }
      }
    }
  }
`

// device settings
export const StyledPage_Device_Settings = styled(Page_Top_Center)`
  & > section[name="device"] {
    margin-bottom: 60px;

    & > div {
      width: 100%;
      height: 100px;
      padding: 0 20px;
      background-color: var(--black-main);
      border: 1px solid var(--blue-main);
      border-radius: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
  
      & > div:nth-of-type(1) {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        flex-shrink: 0;
        overflow: hidden;
        & > img {
          width: inherit;
          height: inherit;
          object-fit: cover;
          background: rgb(37, 38, 41);
          background: linear-gradient(90deg, rgba(36,36,36) 0%, rgba(51,91,114) 100%);
        }
      }
  
      & > div:nth-of-type(2) {
        & > p {
          font-weight: 700;
          padding-bottom: 3px;
        }
        & > div {
          display: flex;
          gap: 5px;
          font-size: 12px;
          color: var(--gray-main);
  
          & > strong {
            color: var(--blue-main);
          }
        }
      }
    }
  }
`

// device video live
export const StyledPage_Video_Live = styled(Page_Top_Left)`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-rows: auto;
  input {
    color: black;
  }
  
  button {
    display: block;
    cursor: pointer;
    background-color: black;
    color: white;
    padding: 5px 8px;
    border-radius: 5px;
    
    &:hover {
      background-color: white;
      color: black;
    }
    &:active {
      background-color: black;
      color: white;
    }
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
    
    &[color=active] {
      background-color: lime;
      color: black;
      &:hover {
        background-color: black;
        color: lime;
      }
      &:active {
        background-color: lime;
        color: black;
      }
      &:disabled {
        background-color: green;
      }
    }
  }

  form {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & > [data-name="rtc_modal"] {
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
  }

  & > section {
    width: 100%;
    min-width: min-content;
    
    &[name=dev] {
      grid-area: 4 / 1 / 5 / 3;
      display: flex;
      flex-direction: column;
      gap: 5px;
      & > div {
        display: flex;
        gap: 10px;
      }
    }

    &[name=file] {
      grid-area: 5 / 1 / 6 / 3;
      display: flex;
      flex-direction: column;
    }
    
    &[name=video] {
      grid-area: 1 / 1 / 2 / 2;
      display: flex;
      flex-direction: column;

      & > header {
        position: relative;
        width: 100%;
        background-color: var(--black);

        & > video {
          width: inherit;
          max-height: 700px;
          background-color: gray;
          object-fit: contain;
        }
  
        & > button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background-color: white;
          border: 7px solid black;
          border-radius: 50%;
          color: black;
          font-size: 14px;
          font-weight: 700;
          &:hover {
            color: var(--blue-main);
          }
        }
      }

      & > footer {
        display: flex;
        align-items: center;
        gap: 20px;
        height: 70px;

        & > button {
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--white);
          font-weight: 700;
          height: 50px;
          background-color: transparent;
          border: none;
          & > img {
            &[name="channel"] {
              width: 40px;
              height: 40px;
              margin-right: 10px;
            }
          }
          &:hover {
            color: var(--blue-main);
          }
        }
      }
    }

    &[name=data] {
      grid-area: 1 / 2 / 2 / 3;
    }

    &[name=chart] {
      grid-area: 2 / 1 / 3 / 3;
      padding: 0 20px;
      height: 300px;
      background-color: var(--black-main);
    }

    &[name=map] {
      grid-area: 3 / 1 / 4 / 3;
      padding: 0 20px;
      height: 700px;
      background-color: var(--black-main);
    }

    &[data-name] {
      & > header {
        background-color: lime;
        font-size: 20px;
        font-weight: 700;
        padding: 10px 20px;
      }
      & > main {
        display: flex;
        min-width: min-content;
        min-height: 50px;
        & > p {
          border-bottom: 1px solid gray;
        }
        & > div {
          border-bottom: 1px solid gray;
        }
        & strong {
          font-size: 22px;
        }
      }
      & > footer {
        display: flex;
        gap: 10px;
        height: 50px;
        padding: 0 10px;
        align-items: center;
      }
    }
    
    &[data-name="rtc_peer"] > main {
      align-items: center;
      padding: 10px;
      gap: 10px;
    }

    &[data-name="rtc_connect"] > main {
      align-items: center;
      padding: 10px;
      gap: 10px;
    }
    
    &[data-name="rtc_video"] > main {
      display: flex;
      background-color: red;
      position: relative;
      width: 100%;

      & > video {
        width: inherit;
        max-height: 400px;
        background-color: gray;
        object-fit: contain;
      }
    }

    &[data-name="rtc_info"] > main {
      flex-direction: column;

      & > div {
        & div, span {
          white-space: pre-line;
          word-wrap: break-word;
          word-break: break-word;
          max-width: 100%;

          & > strong {
            font-size: 17px;
          }
        }

        &[data-name="list"] > div {
          & strong {
            font-size: 16px;
          }
          &:nth-of-type(odd) {
            background-color: gray;
          }
        }
      }
    }
  }

  &[data-grid=wide] {
    & > section {
      &[name=video] {grid-area: 1 / 1 / 2 / 3;}
      &[name=chart] {grid-area: 2 / 1 / 3 / 2;}
      &[name=data] {grid-area: 2 / 2 / 3 / 3;}
    }
  }
`

// device history
export const StyledPage_DeviceHistory = styled(Page_Top_Center)`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  /* width:1320px; */
  flex-direction: column;
  align-items: center;  
  font-size: 26px;
  font-weight: 600;
  gap:30px;
  & > section:nth-of-type(1){
    display:flex;
    font-size: 40px;
    font-weight: 600;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    & > div:nth-of-type(1){
      display: flex;
      align-items: center;
      width: 640px;
      justify-content: center;
      & > div:nth-of-type(1) {
        display: flex;
        justify-content: flex-end;
        width:450px;
      }
      & > div:nth-of-type(2) {
        display: flex;
        width:280px;
        justify-content: flex-end;
        & > img {
        cursor: pointer;
      }
      }
      
    }
    & >div{
      & >button:nth-of-type(${({schButton}) => schButton}){
        width: 160px;
        height: 50px;
        background-color: ${theme.Colors.black4};
        color: var(--blue-main);
        border-bottom: 1px solid  var(--blue-main);
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }

      & >button{
        width: 160px;
        height: 50px;
        background-color: ${theme.Colors.black4};
        color: var(--white);
        border-bottom: 1px solid  ${theme.Colors.black6};
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }
    }
  }
  & > section:nth-of-type(2){
    width: 70%;
    padding: 10px 0 52px;
    background-color: #202124;
    border-radius: 20px;
    
  }
  & > section:nth-of-type(3){
    display:grid;
    grid-template-rows: repeat(8, 40px);
    gap:30px;
    justify-content: center;
    align-items: center;  
    & > div{
      display:grid;
      grid-template-columns: 1fr 8fr 1fr;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid  ${theme.Colors.blue5};
      height: 60px;
      width:640px;
      & > span{
        color:var(--blue-main);
        font-size: 16px;
        font-weight: bold;
        justify-self: end;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }
      & > p{
        justify-self: start;  
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }
      & > img{
        width: 32px;
        height: 32px;
      }
    }
  }
  
  & > section[name="historyList"]{
    display:grid;
    grid-template-rows:1fr;
    gap:25px;
    justify-content: center;
    align-items: center;
    & > div:nth-of-type(1){
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      & > button{
        display: flex; /* for icon */
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 30px;
        border-radius: 15px;
        font-size: 20px;
        font-weight: 500;
        color: var(--white);
        background: var(--blue-main);
        &:hover {background:  var(--blue-strong);}
      }
    }
    & > div:nth-of-type(2){
      width: 640px;
      height: 60px;
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;      
      align-items: center;
      border-bottom: 1px solid  ${theme.Colors.blue5};
      margin-top:-10px;
      & >img:nth-of-type(1){
        justify-self: start;
      }
      & >img:nth-of-type(2){
        justify-self: end;
      }
    }
    & >div{
      border-bottom: 1px solid  ${theme.Colors.blue5};
      display: flex;
      align-items: center;
      & > span{
      }
      & > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 60px;
        padding: 10px;
        & >div:nth-of-type(1){
          justify-self: start;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: left;
          color: var(--white);
          & > span{
            display: flex;
            width: 61px;
            height: 13px;
            font-size: 15px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: ${theme.Colors.black6};
            align-items: center;
          }
          & > img{
            width: 10px;
            height: 10px;
            margin: 6px 3px 12px 20px;
            object-fit: contain;
          }
        }
        & div[name="1"] {
          color:var(--blue-main);
        }
        & div[name="2"] {
          color: var(--orange-main);
        }
        & >div:nth-of-type(2){
          justify-self: end;

        }
      }
    }
  }
  & > section:nth-of-type(5){
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:30px;
    & > div {
      border-radius: 10px;
      padding: 60px 23px 39px 37px;
      background-color: ${theme.Colors.black3};
    }
  }
`
export const StyledPage_HistoryData = styled(Page_Top_Left)`
  & > section:nth-of-type(1) {
    height: 600px;
  }

  & > section:nth-of-type(2){
    display:grid;
    margin-top: 15px;
    grid-template-rows: repeat(4, 40px);
    gap:30px;
    justify-content: center;
    align-items: center;  
    & > div{
      display:grid;
      grid-template-columns: 1fr 8fr 1fr;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid  ${theme.Colors.blue5};
      height: 60px;
      width:640px;
      & > span{
        color:var(--blue-main);
        font-size: 16px;
        font-weight: bold;
        justify-self: end;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }
      & > p{
        justify-self: start;  
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
      }
      & > img{
        width: 32px;
        height: 32px;
      }
    }
  }
`

// device alarm
export const StyledPage_DeviceAlarm = styled(Page_Top_Center)`
  & > section {
    
    &[name="controls"] {
      display: grid;
      grid-template-columns: 1fr repeat(4, auto);
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;

      & > form {
        min-width: min-content;
        height: 40px;
        border-radius: 20px;
        overflow: hidden;
        background-color: var(--black-main);
        display: flex;

        & > input {
          border: none;
          outline: none;
          padding: 0 20px;
          background-color: transparent;
          flex: 1;
        }
        & > button {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          display: grid;
          place-items: center;
          background-color: var(--blue-main);
        }
      }

      & > button {
        color: var(--white);
        background-color: transparent;
        border: none;

        &[name="img"] {
          position: relative;
          width: 40px;
          height: 40px;
          overflow: hidden;
          & > img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }
        }

        &:hover {
          color: var(--blue-main);
        }
        &:active {
          color: var(--white);
        }
      }
    }
    &[name="paging"] {
      display: flex;
      grid-template-columns: 1fr repeat(4, auto);
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;
      & > div {
        justify-content: space-between;
        & > span {
          border-radius: 50%;
          cursor: pointer;
          padding: 2px 7px;
        }
      }
    }

    &[name="alarms"] {
      & > p {
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      & > div {
        border: 1px solid var(--black-main);
        border-radius: 10px;
        background-color: var(--black-main);
        padding: 15px 20px;
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-auto-rows: auto;
        gap: 10px;
        cursor: pointer;

        & > header {
          font-size: 18px;
          font-weight: 700;
          color: var(--blue-main);
        }
        & > button {
          width: 18px;
          height: 18px;
          background-color: var(--gray-main);
          border-radius: 50%;
          & > img {
            width: 18px;
            height: 18px;
            pointer-events: none;
          }
        }
        & > footer {
          font-size: 14px;
          & > span {
            color: var(--orange-main);
          }
        }

        &:hover {
          border-color: var(--blue-main);
        }
        &[color="active"] {
          border-color: var(--blue-main);
        }
      }
    }
  }
`

export const StyledPage_privaacy = styled(Page_Top_Center)`
  & > section {
    &[name="if_registered"] {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > p {
        font-size: 20px;
        font-weight: 700;
        white-space: normal;
        text-align: center;
        margin: 60px 0;
      }

      & > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        & > button {
          border: 2px solid var(--blue-main);
          border-radius: 10px;
          width: 100%;
          max-width: 170px;
          aspect-ratio: 1/1;
          display: grid;
          place-items: center;
          font-weight: 700;
          font-size: 18px;
          padding: 10px;

          & > div {
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
  
          &:nth-of-type(1) {
            background-color: transparent;
            color: var(--blue-main);
          }
        }
      }
    }
  }
`

// etc
export const StyledPage_Error = styled.div`
`


export const StyledPage_AdminMain = styled(Page_Top_Left)`
  display: flex;

  & > section:nth-of-type(1) {
    padding: 20px 0 20px 20px;
    flex: 3.5;
    display: grid;
    & > span {
      font-size: 20px;
      font-weight: 700;
    }
    & > div:nth-of-type(1) {
      aspect-ratio: 1.25/1;
      margin: 20px;
      & > section:nth-of-type(1){
        display: grid;
        & > span {
          font-size: 20px;
          font-weight: 900;
          text-align: center;
        }
        & > div {
          text-align: right;
          & > [data-select=true] {
            background: silver;
            font-weight: 700;
          } 
          & > span {
            padding: 5px 8px;
            border: 1px solid;
            background-color: none;
            cursor: pointer;
          }
        }
      }
      & > section:nth-of-type(2){
        height: 100%;
      }
    }
    & > div:nth-of-type(2) {
      margin: 0 20px;
      display: flex;
      justify-content: space-between;
      & > div {
        border: 1px solid;
        width: 30%;
        aspect-ratio: 1/1;
        justify-content: center;
        align-content: center;
        display: grid;
      }
    }
  }
  & > section:nth-of-type(2) {
    padding: 20px 20px 20px 0;
    flex: 6.5;
    display: grid;
    & > div:nth-of-type(1) {
      margin: 0 20px;
      display: flex;
      justify-content: space-between;
      & > div {
        border: 1px solid;
        width: 15%;
        aspect-ratio: 1.2/1;
        justify-content: center;
        align-content: center;
        display: grid;
      }
    }
    & > div:nth-of-type(2) {
      margin: 20px;
      & > div:nth-of-type(1){
        display: flex;
        justify-content: space-between;
      }
      & > div:nth-of-type(2){
        border: 1px solid;
        margin: 5px 0;
        display: flex;
        text-align: right;
        color: white;
      }
    }
    & > div:nth-of-type(3) {
      margin: 0 20px;
      & > div:nth-of-type(1){
        display: flex;
        justify-content: space-between;
      }
      & progress {
        width: 100%;
      }
      & > span {
        font-size: 15px
      }
    }
    & > div:nth-of-type(4) {
      border: 1px solid;
      aspect-ratio: 2.7/1;
      margin: 10px 20px 10px 20px;
    }
    & > div:nth-of-type(5) {
      font-weight: 700;
      margin: 0 20px;
      justify-content: end;
      display: flex;
    }
  }


`
export const StyledPage_dashSection = styled(StyledPage_AdminMain)`
  background: ${({backGround}) => backGround};
  color: white;
  & > div {
    display: grid;
  }
  & .typeTitle {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
  & .typeValue {
    font-size: 30px;
    font-weight: 500;
    text-align: center;
  }
`
export const StyledPage_Admin = styled(Page_Top_Left)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  padding: 20px;

  &::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: var(--orange-main);
  background-clip: padding-box;
  border: 2px solid transparent;
    &:hover {
      background: var(--orange-strong);
    }
  }

  & > section[data-name] {
    min-width: min-content;

    &[data-name=title] {
      & > p {
        font-size: 24px;
        font-weight: 700;
        padding-bottom: 10px;
      }
    }
    &[data-name=settings] {
      background-color: silver;
      padding: 20px;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 10px 20px;
      & > p {
        display: flex;
        align-items: center;
        font-weight: 700;
      }
    }
  }
`

export const StyledPage_Admin_User = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }
  }
`
export const StyledPage_Admin_Device = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }
  }
`

export const StyledPage_Admin_Push = styled(StyledPage_Admin)`
  & > section {
    & > [data-name=push_test_footer] {
      display: flex;
      justify-content: flex-start;
      & > button {
        width: min-content;
        margin: 0 3px;
      }
    }
    & > [data-name=push_default_footer] {
      display: flex;
      justify-content: flex-end;
      & > button {
        width: min-content;
        margin: 0 3px;
      }
    }

    &[data-name=push_auto_footer] {
      display: flex;
      justify-content: space-between;
      & > button {
        width: min-content;
      }
    }
  }
`

export const StyledPage_AdminMy = styled(StyledPage_Admin)`
  & > section[data-name] {
    &[data-name=inputForm] {
      display: flex;
      flex-direction: column;
      gap: 30px;
      max-width: 500px;

      & > div {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: repeat(3, auto);

        & > label {
          grid-area: 1 / 1 / 2 / 3;
          font-size: 18px;
          font-weight: 600;
          padding-bottom: 5px;
        }
        & > div {
          grid-area: 2 / 1 / 3 / 2;
          background-color: orange;
        }
        & > aside {
          grid-area: 2 / 2 / 3 / 3;
          background-color: yellow;
          & > button {
            padding: 0 20px;
            height: 100%;
            border: 1px solid silver;
            &:hover {
              background-color: black;
              color: white;
              border-color: black;
            }
            &:active {
              background-color: white;
              color: black;
              border-color: var(--black-sub);
            }
          }
        }
        & > footer {
          grid-area: 3 / 1 / 4 / 3;
          background-color: green;
        }
      }
    }
  }
`
export const StyledPage_Admin_Privarcy = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }

    &[data-name=pagination] {
      display: flex;
      justify-content: space-between;
    }
  }
`
export const StyledPage_Admin_Notice = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }

    &[data-name=pagination] {
      display: flex;
      justify-content: space-between;
    }
  }
`
export const StyledPage_Admin_Faq = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }

    &[data-name=pagination] {
      display: flex;
      justify-content: space-between;
    }
  }
`
export const StyledPage_Admin_Popup = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }

    &[data-name=pagination] {
      display: flex;
      justify-content: space-between;
    }
  }
`
export const StyledPage_Admin_PopupDeatil = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }
  }
`
export const StyledPage_Admin_PrivarcyDetail = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }
  }
`
export const StyledPage_Admin_FaqDetail = styled(StyledPage_Admin)`
  & > section {
    &[data-name=users_table] {
      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        gap: 10px;
        & > p {
          font-weight: 600;
        }
      }
    }

    &[data-name=detail_footer] {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      & button {
        width: min-content;
      }
      & > div {
        display: flex;
        gap: 10px;
      }
    }
  }
`
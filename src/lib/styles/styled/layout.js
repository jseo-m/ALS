import styled from "@emotion/styled";
import theme from '@/lib/styles/theme'

// 반응형: 모바일 < 768px < 테블릿 < 1024px < 데스크탑

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  background-color: var(--black-sub);
`

export const StyledLayout_UnAuth = styled(Layout)`
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 80px;

  & > header {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 80px;
    overflow: hidden;
    display: flex;
    background-color: var(--color-black1);
  }

  & > main {
    grid-area: 2 / 1 / 3 / 2;
    background-color: var(--color-black2);
    overflow: hidden;
  }

  & > footer {
    grid-area: 3 / 1 / 4 / 2;
    overflow: hidden;
  }
`

export const StyledLayout_Temp = styled(Layout)`
  grid-template-rows: 60px 1fr;

  & > header {
    display: flex;
    padding: 0 30px;
    background-color: var(--black-main);
    
    & > a {
      font-size: 20px;
      font-weight: 600;
    }
  }
  & > main {
    background: linear-gradient(to right, rgb(35, 35, 35) 0%, var(--black-sub) 70px);
    overflow: auto;
  }
`

export const StyledLayout_Cloud = styled(Layout)`
  grid-template-columns: 290px 1fr;
  grid-template-rows: 80px 1fr 80px;

  & > nav {
    grid-area: 1 / 1 / 3 / 2;
  }
  & > header {
    grid-area: 1 / 2 / 2 / 3;
  }
  & > main {
    grid-area: 2 / 2 / 3 / 3;
    background: linear-gradient(to right, rgb(35, 35, 35) 0%, var(--black-sub) 70px);
    overflow: auto;
  }
  & > footer {
    grid-area: 3 / 1 / 4 / 3;
  }

  &[dir="rtl"] > main {
    background: linear-gradient(to left, rgb(35, 35, 35) 0%, var(--black-sub) 70px);
  }
`

export const StyledLayout_Admin = styled(Layout)`
  color: var(--black-main);
  background-color: whitesmoke;
  grid-template-columns: auto 1fr;
  grid-template-rows: 50px 50px 1fr;

  & > header {
    grid-area: 1 / 1 / 2 / 3;
  }
  & > nav {
    grid-area: 2 / 1 / 3 / 3;
  }
  & > aside {
    grid-area: 3 / 1 / 4 / 2;
    overflow: auto;
  }
  & > main {
    grid-area: 3 / 2 / 4 / 3;
    overflow: auto;
  }
`

export const StyledLayout_Fileview = styled(Layout)`
  grid-template-columns: 290px 1fr;
  grid-template-rows: 48px 1fr 80px;

  & > nav {
    grid-area: 1 / 1 / 3 / 2;
  }
  & > header {
    grid-area: 1 / 2 / 2 / 3;
  }
  & > main { 
    grid-area: 2 / 2 / 3 / 3;
    background: linear-gradient(to right, rgb(35, 35, 35) 0%, var(--black-sub) 70px);
    overflow: auto;
    & > div {min-height: 100%;}
  }
  & > footer {
    grid-area: 3 / 1 / 4 / 3;
  }

  &[dir="rtl"] > main {
    background: linear-gradient(to left, rgb(35, 35, 35) 0%, var(--black-sub) 70px);
  }
`

export const StyledLayout_Error = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledLayout_Manager = styled(Layout)`
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;

  & > header {
    grid-area: 1 / 1 / 2 / 3;
    z-index: 10;
    overflow: visible;
  }
  & > nav {
    grid-area: 2 / 1 / 3 / 2;
    z-index: 9;
    overflow-x: hidden;
    overflow-y: auto;
  }
  & > main {
    grid-area: 2 / 2 / 3 / 3;
    z-index: 1;
    overflow: auto;
    display: grid;
    grid-template-rows: 1fr auto;
  }
  @media (max-width: 768px) {
    & > header { grid-area: 1 / 1 / 2 / 3; }
    & > nav {
      position: fixed;
      top: 60px;
      left: -120vw;
      width: 100%;
      height: calc(100vh - 60px);
      
      &[name="open"] { transform: translateX(120vw); }
    }
    & > main { grid-area: 2 / 1 / 3 / 3; }
  }
`

export const StyledLayout_WebView = styled(Layout)`
  & > main {
    width: 100%;
    height: 100%;
    max-width: 660px;
    overflow: auto;
    margin: 0 auto;
    &::-webkit-scrollbar {display: none;}
  }
`
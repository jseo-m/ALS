import styled from "@emotion/styled";

const Nav = styled.nav`
    padding: 0 17px;
    border: solid 0.2px #9ca3af;
    background-color: #f3f4f6;
    max-width: 245px;
`

export const StyledNav_Mypage = styled(Nav)`
  & hr {
    margin: 10px 0;
  }
  & > div[name="group"] {
    font-size: 16px;
    font-weight: 700;
    padding: 30px 0 5px;
  }
  & > div[name="navmenu"] {
    display: flex;
    font-size: 14px;
    cursor: pointer;
    transition: 'background-color 0.5s', // 트랜지션 효과를 추가합니다.
    & > img {
      padding: 12px;
    }
    & > span {
      padding: 12px;
    }
    &:hover {
      background-color: #e0e0e0;
    }
    &:active {
      background-color: #c0c0c0;
    }
  }
`
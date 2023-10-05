import styled from "@emotion/styled";
import theme from '../theme'

export const Main = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  background-color: ${({bgc}) => bgc || theme.Colors.blue1};
  color: ${({color}) => color || theme.Colors.white};
`
export const SNS = styled.div`
  width: 100%;
  height: 45px;
  display: grid;
  grid-template-columns:${({small}) => small ? '1fr' : '1fr 6fr'};
  border: solid 0.5px rgba(0, 0, 0, 0.30);
  margin: 2px 1px;
  cursor: pointer;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div:nth-of-type(2) {
    border-left: solid 0.5px rgba(0, 0, 0, 0.13);
    font-size: 12px;
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

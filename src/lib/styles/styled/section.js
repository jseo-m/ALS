import styled from "@emotion/styled";

export const StylesFigure_ChartArea = styled.figure`
  box-shadow: 0 0 0 0.4px ${({viewMode}) => viewMode ? "black" : "white"};
  transition: box-shadow 0.5s ease;
  width: 100%;
  height: 100%;
  
  & > div:nth-of-type(1){
    position: relative;
    font-size:30px;
    font-weight:700;
    text-align:center;
  }
  .echarts-for-react{
    position: relative;
  }
`
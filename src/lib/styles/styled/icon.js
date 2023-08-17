import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import theme from "../theme";

export const Icon_Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .svgStrokeColor { background-color: ${({color}) => color || "white"}; }
  &:hover > div {
    cursor: ${({hover}) => hover ? "pointer" : "auto"};
    & .svgStrokeColor { background-color: var(--color-blue1); }
  }
`

export const Svg_Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {pointer-events: none;}
  & > svg {
    ${({bgc}) => bgc && css`
      background-color: ${
        bgc === "blue" ? "var(--blue-main)" 
        : bgc === "orange" ? "var(--orange-main)"
        : bgc === "gray" ? "var(--gray-main)"
        : "transparent"};
      border-radius: 50%;
    `}
    transform: rotateZ(${({rotate}) => rotate + "deg"});
  }
  & .svgStrokeColor { stroke: ${({color}) => color || "white"}; }
  & .svgFillColor { fill: ${({color}) => color || "white"}; }
  

  ${({hover}) => hover && css`
    cursor: pointer;
    &:hover .svgStrokeColor { stroke: var(--blue-main); }
    &:hover .svgFillColor { fill: var(--blue-main); } 
  `}
`

export const StyledIcon_Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  padding: 8px 6px;
  
  & > div:nth-of-type(1) {
    background-color: white;
    width: 50%;
    height: 4px;
    border-radius: 2px;
  }
  & > div:nth-of-type(2) {
    background-color: white;
    width: 100%;
    height: 4px;
    border-radius: 2px;
  }
  & > div:nth-of-type(3) {
    background-color: white;
    width: 50%;
    height: 4px;
    border-radius: 2px;
  }
`

export const StyledIcon_CheckBox = styled.div`
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  border-radius: 3px;
  border: 1px solid ${({checked}) => checked ? "var(--blue-main)" : "white"};
  background-color: ${({checked}) => checked ? "var(--blue-main)" : "transparent"};
  overflow: hidden;
  cursor: pointer;
  & * {pointer-events: none;}
  ${({active}) => active && css`
    border-color: var(--blue-main);
  `}
  &:hover {border-color: var(--blue-main);}
  ${({disabled}) => disabled && css`
    pointer-events: none;
    border-color: var(--gray-main);
  `}
`

export const CheckBox = styled.div`
  width: ${({size}) => size || 20}px;
  height: ${({size}) => size || 20}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({size}) => size/4 || 5}px;
  border: ${({type}) => type === 1 ? 2 : 1}px solid ${({type}) => {
    if(type === -1) return theme.Colors.black6
    if(type === 2) return theme.Colors.blue1
    return "white"
  }};
  cursor: ${({type}) => type === -1 ? "default" : "pointer"};
  background-color: ${({type}) => {
    if(type === -1) return theme.Colors.black6
    if(type === 2) return theme.Colors.blue1
    if(type === 3) return theme.Colors.white
    return theme.Colors.black4
  }};

  & > svg {
    width: ${({size}) => size || 20}px;
    height: ${({size}) => size || 20}px;

    & > path:nth-of-type(1){
      fill: ${({type}) => {
        if(type === 2) return "white"
        if(type === 3) return theme.Colors.blue1
        return "transparent"
      }};
    }
  }
`

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`

const dash = keyframes`
  0% { stroke-dashoffset: 120; }
  50% {
    stroke-dashoffset: 30;
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: 120;
    transform:rotate(450deg);
  }
`

export const StyledIcon_Loading = styled.div`
  transform: scale(${({scale}) => scale || 1});
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    animation: ${rotator} 1.5s linear infinite;

    & > circle {
      stroke: ${({color}) => color || "skyblue"};
      stroke-dasharray: 120;
      stroke-dashoffset: 0;
      transform-origin: center;
      animation: ${dash} 1.5s ease-in-out infinite;
    }
  }
`
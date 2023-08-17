import theme from "@/lib/styles/theme";
import { 
  fs_14_fw_500, 
  fs_14_fw_600,
  fs_15_fw_600,
  fs_16,
  fs_16_black6,
  fs_18_fw_600,
  fs_18_fw_700,
  fs_18_fw_700_blue1,
  fs_19_fw_700,
  fs_20,
  fs_20_blue1,
  fs_20_fw_700,
} from "./font";

/* button default
gap 0
width: 100%
height: 40
padding: 0
border-radius: 20
bgc: blue1
fc: white
fs: 16
fw: 400
*/

export const videoHeaderBlue = Object.assign({
  height: 38,
  padding: "0 14px 0 12.5px"
}, fs_14_fw_600)

export const videoHeaderBlack = Object.assign({
  bgc: "black3",
}, videoHeaderBlue)

export const videoHeaderDropdown = Object.assign({
  padding: "0 11.5px 0 10px",
  fc: "blue1"
}, videoHeaderBlack)



export const vodListTopBlue = Object.assign({
  padding: "0 7px 0 9px",
  width: 'min-content'
}, fs_14_fw_500)

export const vodListTopGray = Object.assign({
  bgc: "black6",
  fc: "white"
}, vodListTopBlue)

export const vodListBottomBlue = Object.assign({
  height: 40,
  padding: "0 13px",
  gap: 6,
  width: "min-content"
}, fs_15_fw_600)

export const vodListBottomBlack = Object.assign({
  bgc: "black3",
  fc: "blue1",
  padding: "0 17px"
}, vodListBottomBlue)



export const vodPlayerBlue = Object.assign({
  height: 40,
  padding: "0 16px"
}, fs_19_fw_700)

export const vodPlayerBlack = Object.assign({
  padding: "0 16px 0 10px",
  rgba: "rgba(0,0,0,0.2)"
}, vodPlayerBlue)



export const mainBlue = Object.assign({
  height: 60,
}, fs_20_fw_700)

export const mainGray = Object.assign({
  height: 60,
  bgc: "black4",
  bc: "blue1",
}, fs_20_blue1)



export const alertBlack = Object.assign({
  bgc: "black",
  height: 50
}, fs_18_fw_700)

export const alertBlueBorder = Object.assign({
  bgc: "black3",
  height: 50,
  bc: "blue1",
  bw: 2,
}, fs_18_fw_700_blue1)

export const alertAsideBlue = Object.assign({
  padding: "0 20px",
}, fs_18_fw_600)

export const alertAsideBlack = Object.assign({
  bgc: "black3"
}, alertAsideBlue)



export const authHeaderRouterBlue = {
  height: 40,
  padding: "0 13px 0 10px",
  gap: 10
}

export const authHeaderRouterBlack = Object.assign({
  bgc: "black4",
  fs:13,
}, authHeaderRouterBlue)

export const addVueroid = {
  height: 50,
  padding: "0 17px 0 13px",
  gap: 6
}



export const deviceSettingBlack = {
  height: 60,
  bgc: "black3"
}

//날짜 버튼
export const dateGray = Object.assign({
  bgc: "black5",
}, fs_16_black6)

export const watchblue = Object.assign({
  height: 36,
}, fs_14_fw_500)

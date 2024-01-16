import Constants from "@/lib/Constants"
import { useLogout } from "@/lib/hooks"
import { useAuth, useLine } from "@/lib/store"
import { StyledHeader_main } from "@/lib/styles"
import { Avatar, Button } from "@mui/material"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const Header_main = ({isMainTop, setViewMode}) =>{
  const {push, replace, pathname} = useRouter()
  const mainTop = !!isMainTop

  const {aToken, setAuth} = useAuth()
  const {lineName, lineSpeed} = useLine()

  const [anchorProfile, setAnchorProfile] = useState(null)
  const [anchorAlert, setAnchorAlert] = useState(null)


  return(
    <StyledHeader_main mainTop={mainTop}>
      <div>
        <button name="logo" onClick={() => push("/")}>
          <strong>LOGO</strong>
        </button>
        {/* {Constants.topMenu.map((menu,i) =>(
          <button key={`menu${i}`} name="menu" onClick={() => push(menu.url)}>
          <span>{menu.name}</span>
          </button>
          ))}
          <button key={`menu-dev`} name="menu" onClick={() => push("/dev")}>
          <span>DEV</span>
        </button> */}
      </div>
         <p style={{fontSize:'30px', fontWeight:700}}>{lineName}&emsp;&emsp; {lineSpeed == null || <span style={{color:'red'}}>구동속도 : {lineSpeed}<span style={{fontSize:'20px'}}>m/min</span></span>}</p>
      <div>
        {pathname != "/" && <Button variant="contained" onClick={() => setViewMode(prev => !prev)}>다크/화이트 모드</Button>}
      </div>
    </StyledHeader_main>
  )
}
import Constants from "@/lib/Constants"
import { useLogout } from "@/lib/hooks"
import { useAuth } from "@/lib/store"
import { StyledHeader_main } from "@/lib/styles"
import { Avatar, Button } from "@mui/material"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const Header_main = ({isMainTop, setViewMode}) =>{
  const {push, replace, pathname} = useRouter()
  const mainTop = !!isMainTop

  const {aToken, setAuth} = useAuth()
  

  const [anchorProfile, setAnchorProfile] = useState(null)
  const [anchorAlert, setAnchorAlert] = useState(null)


  return(
    <StyledHeader_main mainTop={mainTop}>
      <div>
        <button name="logo" onClick={() => push("/")}>
          <strong>LOGO</strong>
        </button>

        {Constants.topMenu.map((menu,i) =>(
          <button key={`menu${i}`} name="menu" onClick={() => push(menu.url)}>
            <span>{menu.name}</span>
          </button>
        ))}
        <button key={`menu-dev`} name="menu" onClick={() => push("/dev")}>
          <span>DEV</span>
        </button>
      </div>
      <div>
        {pathname != "/" && <Button variant="contained" onClick={() => setViewMode(prev => !prev)}>다크/화이트 모드</Button>}
      </div>
      {/* <div>
        {aToken === "" ? (
        <>
          <button key={`menu-login`} name="menu" onClick={() => push("/nonAuth/login")}>
            <span>로그인</span>
          </button>
          <button key={`menu-join`} name="menu" onClick={() => push("/nonAuth/signup")}>
            <span>회원가입</span>
          </button>
        </> ) : (
        <>
          <button key={`menu-login`} name="menu" onClick={() => alert('개발중')}>
            <span>기업회원전환</span>
          </button>
          <button key={`profile`} name="avatar" onClick={(e) => setAnchorProfile(e.currentTarget)}>
            <Avatar>문</Avatar>
          </button>
          <button key={`alert`} name="alert" onClick={(e) => setAnchorAlert(e.currentTarget)}>
            <img src="/svg/notificationsFilled.svg"></img>
          </button>
          <PopProfile anchorEl={anchorProfile} setAnchorEl={setAnchorProfile}/>
          <PopAlert anchorEl={anchorAlert} setAnchorEl={setAnchorAlert}/>
        </>
        )}
      </div> */}
      
    </StyledHeader_main>
  )
}
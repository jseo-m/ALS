import Constants from "@/lib/Constants"
import { useLogout } from "@/lib/hooks"
import { useAuth } from "@/lib/store"
import { StyledHeader_main } from "@/lib/styles"
import { Avatar } from "@mui/material"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export const Header_main = ({isMainTop}) =>{
  const {push, replace} = useRouter()
  const mainTop = !!isMainTop

  const {aToken, setAuth} = useAuth()
  const logout = useLogout()

  


  return(
    <StyledHeader_main mainTop={mainTop}>
      <div>
        <button name="logo" onClick={() => push("/")}>
          <strong>MSUMER</strong>
        </button>

        {Constants.topMenu.map((menu,i) =>(
          <button key={`menu${i}`} name="menu" onClick={() => false}>
            <span>{menu.name}</span>
          </button>
        ))}
        <button key={`menu-dev`} name="menu" onClick={() => push("/dev")}>
          <span>DEV</span>
        </button>
      </div>
      <div>
        {aToken === "" ? (
        <>
          <button key={`menu-login`} name="menu" onClick={() => push("/nonAuth/login")}>
            <span>로그인</span>
          </button>
          <button key={`menu-join`} name="menu" onClick={() => push("/dev")}>
            <span>회원가입</span>
          </button>
        </> ) : (
        <>
          <button key={`menu-login-temp`} name="menu" onClick={() => logout()}>
            <span>임시로그아웃</span>
          </button>
          <button key={`menu-login`} name="menu" onClick={() => alert('개발중')}>
            <span>기업회원전환</span>
          </button>
          <button key={`profile`} name="avatar" onClick={() => alert('개발중')}>
            <Avatar>문</Avatar>
          </button>
          <button key={`alert`} name="alert" onClick={() => alert('개발중')}>
            <img src="/svg/notificationsFilled.svg"></img>
          </button>
        </>
        )}
      </div>
      
    </StyledHeader_main>
  )
}
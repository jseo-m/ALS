import Constants from "@/lib/Constants"
import { StyledHeader_main } from "@/lib/styles"
import { useRouter } from "next/router"

export const Header_main = () =>{
  const {push} = useRouter()
  return(
    <StyledHeader_main>
      <div>
        <button name="logo" onClick={() => push("/")}>
          <strong>MSUMER</strong>
        </button>

        {Constants.topMenu.map((menu,i) =>(
          <button key={`menu${i}`} name="menu" onClick={() => false}>
            <span>{menu.name}</span>
          </button>
        ))}
        <button key={`menu-dev`} name="menu" onClick={() => push("dev")}>
          <span>DEV</span>
        </button>
      </div>
      <div>
        <button key={`menu-login`} name="menu" onClick={() => push("dev")}>
          <span>로그인</span>
        </button>
        <button key={`menu-join`} name="menu" onClick={() => push("dev")}>
          <span>회원가입</span>
        </button>
      </div>
      
    </StyledHeader_main>
  )
}
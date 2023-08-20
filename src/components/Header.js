import Constants from "@/lib/Constants"
import { StyledHeader_main } from "@/lib/styles"

export const Header_main = () =>{

  return(
    <StyledHeader_main>
      <button name="logo" onClick={() => false}>
        <strong>MSUMER</strong>
      </button>

      {Constants.topMenu.map((menu,i) =>(
        <button key={`menu${i}`} name="menu" onClick={() => false}>
          <span>{menu.name}</span>
        </button>
      ))}
      
    </StyledHeader_main>
  )
}
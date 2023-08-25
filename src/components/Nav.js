import Constants from "@/lib/Constants";
import { StyledLayout_Mypage, StyledNav_Mypage } from "@/lib/styles";
import { Divider } from "@mui/material";

export function Nav_mypage(){
  const menu = Constants.myMenu
  return(
    <StyledNav_Mypage>
      {menu.map(m => (
        <>
        {m.type === "group" ?(
        <>
        <div name="group">
          <span>{m.name}</span>
        </div>
        <Divider/>
        </>
        ) : (
        <div name="navmenu">
          <img src={m.img} />
          <span>{m.name}</span>
        </div>
        )}
        </>
      ))}
    </StyledNav_Mypage>
  )
}
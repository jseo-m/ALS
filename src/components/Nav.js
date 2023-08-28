import Constants from "@/lib/Constants";
import { StyledLayout_Mypage, StyledNav_Mypage } from "@/lib/styles";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export function Nav_mypage(){

  const menu = Constants.myMenu
  const {push} = useRouter()

  return(
    <StyledNav_Mypage>
      {menu.map((m,i) => (
        <React.Fragment key={i}>
        {m.type === "group" ?(
        <>
        <div name="group">
          <span>{m.name}</span>
          <Divider/>
        </div>
        </>
        ) : (
        <div name="navmenu" onClick={() => push(m.url)}>
          <img src={m.img} />
          <span>{m.name}</span>
        </div>
        )}
        </React.Fragment>
      ))}
    </StyledNav_Mypage>
  )
}
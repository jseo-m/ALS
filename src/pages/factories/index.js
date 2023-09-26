import { StylesPage_Userpage } from "@/lib/styles";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Factories(){
  const [active, setActive] = useState("location")
  return(
    <StylesPage_Userpage>
      <section name="header">
        <p>공장찾기</p>
        <p>『산업집적활성화 및 공장설립에 관한 법률』 제16조에 따라 등록된 기업(공장) 검색</p>
      </section>
      <section name="search">
        <div>
          <TextField size="small" fullWidth></TextField>
          <Button size="small" variant="contained"><img src="/svg/SearchFilled_white.svg" /></Button>
          <Button variant="contained"><img src="/svg/reset.svg"/></Button>
        </div>
        <div>
          <img src="/svg/SearchFilled_dark.svg"></img>
          <span>전국 등록 공장 검색</span>
        </div>
        <div>
            <div id="location" onClick={({target}) => setActive(target.id)} data-active={"location" === active}>
              <img src="/svg/LocationOnFilled.svg"/>
              <span> + 지역</span>
            </div>
            <div id="sectors" onClick={({target}) => setActive(target.id)} data-active={"sectors" === active}>
              <img src="/svg/ReceiptFilled.svg"/>
              <span> + 업종</span>
            </div>
        </div>
        <div>
          
        </div>
      </section>
    </StylesPage_Userpage>
  )
}
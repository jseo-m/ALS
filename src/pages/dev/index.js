import { Icons_CustomStep } from "@/components/Icons";
import { InputVer1_Mui } from "@/components/Input";
import PopAlert from "@/components/PopAlert";
import PopProfile from "@/components/PopProfile";

import { Dev, StyledMenu_popProfile } from "@/lib/styles";
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

export default function DevPage(){

  const [anchorProfile, setAnchorProfile] = useState()
  const [anchorAlert, setAnchorAlert] = useState()
  
  return(
    <Dev>
      <main>
        <InputVer1_Mui required={true} id="standard" label="일반input" placeholder="standard" />
        <InputVer1_Mui required={true} id="eyes" label="눈 input" placeholder="ex) password" inputType={"eyes"}/>
        <InputVer1_Mui required={true} id="beforeSelect" label="beforeSelect" placeholder="beforeSelect" inputType={"beforeSelect"}/>
        <InputVer1_Mui required={true} id="afterSelect" label="afterSelect" placeholder="afterSelect" inputType={"afterSelect"}/>
        <InputVer1_Mui required={true} id="hasButton" label="hasButton" placeholder="hasButton" inputType={"afterSelect"} hasButton={"인증"}/>

        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={(e) => setAnchorProfile(e.currentTarget)}
            size="small"
            sx={{ ml: 2 }}
           
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>&emsp;&emsp;
        <img src="/svg/notificationsFilled.svg" onClick={(e) => setAnchorAlert(e.currentTarget)}></img>
      </Box>
      <PopProfile anchorEl={anchorProfile} setAnchorEl={setAnchorProfile}/>
      <PopAlert anchorEl={anchorAlert} setAnchorEl={setAnchorAlert}/>
      </main>
      <Icons_CustomStep></Icons_CustomStep>
    </Dev>
  )
}
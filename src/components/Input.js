import { IconButton, InputAdornment, TextField } from "@mui/material"
import Visibility from 'public/svg/icon_eye_open.svg';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const InputVer1_Mui = ({required, label, placeholder,defaultValue, ...rest}) =>{
  return(
    <TextField 
    {...rest}
    required={required} 
    label={label}
    placeholder={placeholder || label}
    // defaultValue={defaultValue || ""}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton // onClick={handleTogglePasswordVisibility}
            edge="end"
          >
            {rest.eyes && <img src="/svg/icon_eye_open.svg" />}
          </IconButton>
        </InputAdornment>
      ),
    }}

    />
  )
}
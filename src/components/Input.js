import { StyledInputVer1_Mui } from "@/lib/styles/styled/input";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import Visibility from 'public/svg/icon_eye_open.svg';
import { useState } from "react";
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const InputVer1_Mui = ({required, label, placeholder, defaultValue, inputType, hasButton, onChange, ...rest}) =>{
  const [inputHide, setInputHide] = useState(true)

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    console.log(event.target.tagName)
    // const element = document.querySelectorAll(`[name="${event.target.name}"]`)
    // let value = '';
    // element.forEach((element) => {
    //   console.log(element)
    //   value += element.value;
    // });
    // onChange({field: event.target.name, value: value})
  };
  return(
    <StyledInputVer1_Mui>
      <section>
        {inputType === "beforeSelect" && (
        <div name="beforeSelect">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name={rest.name}
              // value={age}
              label="Age"
              onChange={handleChange}
            >
              {rest.selects.map(select => <MenuItem key={select.value} value={select.value}>{select.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        )}
        <div name="textField">
          <TextField
          fullWidth 
          {...rest}
          type={(inputType === "eyes" && inputHide) ? "password" : "text"}
          required={required} 
          label={inputType === "beforeSelect" ? null : label}
          placeholder={placeholder || label}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={()=> setInputHide(prev => !prev)} edge="end">
                  {inputType === "eyes" && <img src={inputHide ? "/svg/icon_eye_close.svg" : "/svg/icon_eye_open.svg"} />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        </div>
        {inputType === "afterSelect" && (
        <div name="afterSelect">
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              {rest.selects.map(select => <MenuItem key={select.value} value={select.value}>{select.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        )}
        {!!hasButton && (
        <div name="button">
          <Button fullWidth variant="contained">{hasButton}</Button>
        </div>
        )}
      </section>
      <section>
        
      </section>
    </StyledInputVer1_Mui>
  )
}
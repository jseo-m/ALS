import { StyledInputVer1_Mui } from "@/lib/styles/styled/input";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import Visibility from 'public/svg/icon_eye_open.svg';
import { useState } from "react";
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const InputVer1_Mui = ({required, label, placeholder, defaultValue, inputType, hasButton, onChange, ...rest}) =>{
  const [inputHide, setInputHide] = useState(true)
  const [selectDefault, setSelectDefault] = useState(!!rest.selects ? rest.selects[0].value == "" ? rest.selects[0].name : rest.selects[0].value : "");
  const [selectValue, setSelectValue] = useState(null)

  const onAfterSelect = (e) => {
    e.target.name = e.target.name.replace("afterSelect","")
    setSelectDefault(e.target.value)
    if(e.target.value ==="직접입력"){
      setSelectValue("")
    }else{
      setSelectValue(e.target.value)
    }
  }

  const setValue = ({target}) => {
    const element = document.querySelectorAll(`[name="${target.name}"]`)
    let value = '';
    element.forEach((element) => {
       // MUI 특성상 Select도 Input으로 치환하며, target을 가져왔을시 name, value밖에없음. 일반 input과 구분시켜주기 위한 조건
      if(element.classList.contains('MuiSelect-nativeInput') || (element.classList.contains('MuiSelect-nativeInput') && !target.tagName)){
        setSelectDefault(target.value)
        value += target.value
      }else{
        value += element.value;
      }
    });
    console.log(value)
    onChange({field: target.name, value: value})
  }

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
              value={selectDefault}
              label="Age"
              onChange={setValue}
            >
              {rest.selects.map(select => <MenuItem key={select.value} value={select.value}>{select.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        )}
        <div name="textField">
          <TextField
          fullWidth 
          name={rest.name}
          type={(inputType === "eyes" && inputHide) ? "password" : "text"}
          required={required} 
          label={inputType === "beforeSelect" ? null : label}
          placeholder={placeholder || label}
          onChange={setValue}
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
        <>
          <div name="textField">
            <TextField
            fullWidth 
            {...rest}
            type={(inputType === "eyes" && inputHide) ? "password" : "text"}
            required={required} 
            onChange={setValue}
            value={selectValue}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              readOnly: !!selectValue
            }}
          />
          </div>
          <div name="afterSelect">
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={`afterSelect${rest.name}`}
                value={selectDefault}
                label="Age"
                onChange={onAfterSelect}
              >
                {rest.selects.map(select => <MenuItem key={select.value} value={select.value}>{select.name}</MenuItem>)}
              </Select>
            </FormControl>
          </div>
        </>
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
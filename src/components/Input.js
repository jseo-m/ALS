import { StyledInputVer1_Mui } from "@/lib/styles/styled/input";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import Visibility from 'public/svg/icon_eye_open.svg';
import { useState } from "react";
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const InputVer1_Mui = ({required, label, placeholder, defaultValue, inputType, hasButton, onChange, ...rest}) =>{
  const [inputHide, setInputHide] = useState(true)
  const [selectDefault, setSelectDefault] = useState(!!rest.selects ? rest.selects[0].value == "" ? rest.selects[0].name : rest.selects[0].value : "");

  const [value, setValue] = useState("")
  const [beforeSelectValue, setBeforeSelectValue] = useState(selectDefault)
  const [afterSelectValue, setAfterSelectValue] = useState("")

  const onChangeBeforeInput = ({target}) => {
    setSelectDefault(target.value)
    setBeforeSelectValue(target.value)
    const combineValue =`${target.value}${value}`
    _onChange({field:target.name, value:combineValue}, onChange)
  }

  const onChangeInput = ({target}) => {
    setValue(target.value)
    const beforeValue = inputType === "beforeSelect" ? beforeSelectValue : ""
    const inputValue = target.value
    const afterValue = inputType === "afterSelect" ? afterSelectValue : ""

    const combineValue = beforeValue + inputValue + afterValue
    _onChange({field:target.name, value:combineValue}, onChange)
  }

  const onChangeAfterInput = ({target}) => {
    setSelectDefault(target.value)
    const selectValue = target.value==="직접입력" ? "" : target.value
    setAfterSelectValue(selectValue)
    const combineValue =`${value}${selectValue}`
    _onChange({field:target.name, value:combineValue}, onChange)
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
              onChange={onChangeBeforeInput}
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
          defaultValue={defaultValue || value}
          onChange={onChangeInput}
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
            type="text"
            value={afterSelectValue}
            required={required} 
            onChange={({target}) => {setAfterSelectValue(target.value),onChange({field:target.name, value:`${value}${target.value}`})}}
            InputLabelProps={{
              shrink: true,
            }}
          />
          </div>
          
          <div name="afterSelect">
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={rest.name}
                value={selectDefault}
                label="Age"
                onChange={onChangeAfterInput}
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
        <div id={`message_field_${rest.name}`}></div>
      </section>
    </StyledInputVer1_Mui>
  )
}

function _onChange(data, onChange){
  if(onChange) onChange(data)

  _isValid(data)
}

function _isValid({field, value}){

  const messageElement = document.getElementById(`message_field_${field}`)
  messageElement.innerHTML = RULE[field]?.guide
}

export const RULE = {
  id: {
    guide: "아이디를 입력해주세요",
    message: "아이디를 입력해주세요",
  },
  email: {
    regexp: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    guide: "아이디로 사용할 이메일을 입력해주세요",
    message: "이메일 형식이 아닙니다",
  },
  auth_code: {
    boolean: true,
    guide: "인증코드가 발송 되었습니다. 이메일로 받은 인증코드를 입력해주세요",
    pass: "인증되었습니다.",
    message: "인증코드가 일치하지 않습니다",
  },
  password: {
    regexp: /^.*(?=^.{10,64}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+*=]).*$/,
    guide: "특수문자, 문자, 숫자 3가지를 모두 포함한 10 ~ 64자리를 입력해주세요",
    message: "특수문자, 문자, 숫자 3가지를 모두 포함한 10 ~ 64자리를 입력해주세요",
  },
  checking_password: {
    field: "password",
    guide: "새로운 비밀번호와 동일한 비밀번호를 입력해주세요",
    pass: "입력하신 비밀번호와 일치합니다.",
    message: "새로운 비밀번호와 일치하지 않습니다",
  },
  name: {
    guide: "성을 입력해주세요",
    message: "성을 입력해주세요",
  },
  lastName: {
    guide: "성을 입력해주세요",
    message: "이름을 입력해주세요",
  },
  birthday: {
    regexp: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12]\d|3[01])$/,
    guide: "생년월일을 선택하거나 달력으로 입력해주세요",
    message: "생일의 형식은 YYYY-MM-DD 입니다",
  },
  country: {
    guide: "국가를 선택해 주세요",
    message: "국가를 선택해 주세요",
  },
  email_for_reset: {
    regexp: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    guide: "비밀번호를 초기화할 계정 이메일을 입력해주세요",
    message: "이메일 형식이 아닙니다",
  },
  alias: {
    optional: true,
    guide: "등록할 디바이스의 닉네임을 입력하지 않을 경우, 자동 생성되며, 디테일 페이지에서 변경 가능합니다"
  },
}
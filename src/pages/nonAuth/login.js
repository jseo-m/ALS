import { Styles_Login } from "@/lib/styles";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";

export default function Login(){
  const loginInputRef = useRef({})

  function onInputChange({target}){
    const field = target.id
    loginInputRef.current[field] = target.value
  }

  function onSubmit(){
    console.log(loginInputRef.current)
    setMessage("아이디 비밀번호 확인")
  }

  function setMessage(text){
    const field = document.querySelector('span[name="check_message"]')
    field.textContent = text
  }

  return(
    <Styles_Login>
      <section>
        <p>로그인</p>
        <span>로그인을 하시면 다양한 엠슈머의 서비스를 이용하실 수 있습니다</span>
      </section>
      <section>
        <TextField id="id" placeholder="아이디를 입력해 주세요" variant="outlined" onChange={onInputChange}/>
        <TextField type="password" id="password" placeholder="비밀번호를 입력해 주세요" variant="outlined" onChange={onInputChange}/>
        <span name="check_message"></span>
        <Button variant="contained" onClick={onSubmit}>로그인</Button>
        <div>
          <span>아이디/비밀번호 찾기</span>
          <span>회원가입</span>
        </div>
      </section>
    </Styles_Login>
  )
}
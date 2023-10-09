import SocialButton from "@/components/SocialButton";
import api from "@/lib/api";
import { useAuth } from "@/lib/store";
import { Styles_Login } from "@/lib/styles";
import { Button, Divider, TextField } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Login(){
  const loginInputRef = useRef({})
  const {replace} = useRouter()
  const {setAuth} = useAuth()

  const {mutate: login} = api.account.useLogin({
    onSuccess: (res) =>{
      const {accessToken, refreshToken, name} = res.data
      setAuth({aToken: accessToken, name})
      Cookies.set("refreshToken", refreshToken)
      replace("/")
    },
    onError: (err) => {
      console.log(err)
      setMessage("아이디 또는 비밀번호를 확인해 주세요.")
    }
  })

  function onInputChange({target}){
    setMessage("")
    const field = target.id
    loginInputRef.current[field] = target.value
  }

  function onSubmit(){
    console.log(loginInputRef.current)
    login({action:"login", ...loginInputRef.current})
    // setMessage("아이디 비밀번호 확인")
  }

  function setMessage(text){
    const field = document.querySelector('span[name="check_message"]')
    field.textContent = text
  }

  return(
    <Styles_Login>
      <section>
        <p>로그인</p>
        <span>로그인을 하시면 다양한 서비스를 이용하실 수 있습니다</span>
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
        <Divider style={{borderColor: 'rgba(0, 0, 0, 0.87)'}}/>
      </section>
      {/* 
      <section>
        <SocialButton.Naver />
        <SocialButton.Kakao />
        <SocialButton.Google />
      </section>
       */}
    </Styles_Login>
  )
}
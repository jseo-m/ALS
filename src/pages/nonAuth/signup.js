import { InputVer1_Mui } from "@/components/Input";
import SocialButton from "@/components/SocialButton";
import api from "@/lib/api";
import Constants from "@/lib/Constants";
import { useAuth } from "@/lib/store";
import { Styles_Signup } from "@/lib/styles";
import { Button, Checkbox, Divider, FormControlLabel, FormGroup, TextField } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function Signup(){
  const loginInputRef = useRef({})
  const {replace} = useRouter()
  const {setAuth} = useAuth()
  const [signupType, setSignupType] = useState("standard")
  const [selectAll, setSelectAll] = useState(false)
  const [checkboxes, setCheckboxes] = useState(Constants.signupTerms)

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

  /* function onInputChange({target}){
    setMessage("")
    const field = target.id
    loginInputRef.current[field] = target.value
  } */

  function onSubmit(){
    console.log(loginInputRef.current)
    login({action:"login", ...loginInputRef.current})
    // setMessage("아이디 비밀번호 확인")
  }

  function setMessage(text){
    const field = document.querySelector('span[name="check_message"]')
    field.textContent = text
  }

  function handleSelectAll(){
    setSelectAll(!selectAll)
    setCheckboxes(checkboxes.map((chk) => ({...chk, checked: !selectAll})))
  };

  return(
    <Styles_Signup>
      <section>
        <p>회원가입</p>
        <span>필수 회원정보를 모두 입력 후 필수 가입약관에 동의하셔야 가입이 가능합니다.</span>
        <div>
          <div data-selected={"standard" === signupType} onClick={() => setSignupType("standard")}>
            <span>일반회원 가입하기</span>
          </div>
          <div data-selected={"enterprise" === signupType} onClick={() => setSignupType("enterprise")}>
            <span>기업회원 가입하기</span>
          </div>
        </div>
      </section>
      <section>
        {Constants.signupTestItem.map((item, key) => (
          <InputVer1_Mui 
            key={key}
            name={item.field_id} 
            label={item.field_name} 
            inputType={item.field_attribute} 
            hasButton={item.hasButton}
            required={item?.field_status === "Y" ? true : false}
            selects={item.field_attribute.includes("Select") ? Constants[item.field_id] : null}
            />
        ))}
      </section>
      <section name="terms">
        <span>가입약관 동의</span>
        <FormGroup>
          <div>
            <FormControlLabel control={<Checkbox checked={selectAll} onChange={handleSelectAll} name="selectAll" required/>} label="엠슈머 이용약관에 모두 동의합니다."/>
          </div>
          <Divider/>
          {console.log(checkboxes)}
          {checkboxes.map((chk,key) => (
            <div key={key}>
              <FormControlLabel control={<Checkbox checked={chk.checked} onChange={handleSelectAll} name={`terms${key}`}/>} label={<span>required <span style={{ color: 'red' }}>*</span></span>}/>
            </div>
          ))}
        </FormGroup>
      </section>
      <section name="joinBtn"></section>
      <section name="sns">
          <span>자주 사용하는 SNS 서비스로 간편하게 가입해 보세요</span>
          <div>
            <SocialButton.Naver small={true}/>
            <SocialButton.Kakao small={true}/>
            <SocialButton.Google small={true}/>
          </div>
      </section>
    </Styles_Signup>
  )
}
import { StyledButton, Text } from "@/lib/styles";
import { Divider } from "@mui/material";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useRef } from "react";


const Dom = {
  modal: {
    successSns: {
      svg: {name: "icon_check", bgc: "blue1", size: 50, diameter: 50},
      content: "SNS와 연동되었습니다.",
      close: "닫기",
      title: "연동 성공",
    },
    failLinkSns: {
      svg: {name: "icon_check", bgc: "orange", size: 50, diameter: 50},
      content: "이미 연동된 SNS계정입니다.",
      close: "닫기",
      title: "연동 실패",
    },
    failSns: {
      svg: {name: "icon_check", bgc: "orange", size: 50, diameter: 50},
      content: "서버 오류로 인해 SNS연동에 실패했습니다.",
      close: "닫기",
      title: "연동 실패",
    },
  },
}

function _Google({edit, snsAccount, small}){
  
  const onLogin = useGoogleLogin({
    onSuccess : (tokenResponse) => {
      console.log(edit)
    },
    onerror : (err) => console.log(err)
  })

  return (
    <>
      <StyledButton.SNS onClick={() => onLogin()} small={small}>
        <div><img src="/svg/btn_google.svg"/></div>
        {small || <div><span>Google 로그인</span></div>}
      </StyledButton.SNS>

      {/* <Modal_dormant controller={modal_dormant} /> */}
    </>
  )
}
const Google = (props) => <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_LOGIN_KEY}><_Google {...props}/></GoogleOAuthProvider>

function Kakao({edit, snsAccount, small}){

  const redirect_uri = process.env.NEXT_PUBLIC_KAKAO_CALLBACK
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_LOGIN_KEY}&redirect_uri=${redirect_uri}&response_type=code`

  const onLogin = () => {
    window.location.href = kakaoURL
  }
  
  return (
    <>
      <StyledButton.SNS onClick={() => onLogin()} style={{backgroundColor:'#FEE500'}} small={small}>
        <div><img src="/svg/btn_kakao.svg"/></div>
        {small || <div><span>Kakao 로그인</span></div>}
      </StyledButton.SNS>

      {/* <Modal_dormant controller={modal_dormant} /> */}
    </>
  )
}

function Naver({edit, snsAccount, small}){
  
  const naverRef = useRef()

  const initializeNaverLogin = () => {
		const naverLogin = new window.naver.LoginWithNaverId({

			clientId: process.env.NEXT_PUBLIC_NAVER_LOGIN_KEY,
			callbackUrl: process.env.NEXT_PUBLIC_NAVER_CALLBACK,
			isPopup: false,
			loginButton: { color: 'green', type: 3, height: 58 },
			callbackHandle: true,
		})
		naverLogin.init()
	}

  const userAccessToken = () => {
		window.location.href.includes('access_token') && getToken()
	}
	const getToken = () => {
		const token = window.location.href.split('=')[1].split('&')[0]
    console.log(token)
	}

  const onLogin = () => naverRef.current.children[0].click()

  useEffect(() => {
		initializeNaverLogin()
		userAccessToken()
	}, [])

  return (
    <>
      <div ref={naverRef} id="naverIdLogin" style={{display:'none'}}/>
      <StyledButton.SNS onClick={() => onLogin()} style={{backgroundColor:'#03C75A'}} small={small}>
        <div><img src="/svg/btn_naver.svg"/></div>
        {small || <div><span>Naver 로그인</span></div>}
      </StyledButton.SNS>

      {/* <Modal_dormant controller={modal_dormant} /> */}
    </>
  )
}

export default {
  Google,
  Kakao,
  Naver
}
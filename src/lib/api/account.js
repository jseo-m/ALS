import {axios} from '@/lib/api'
import { useQuery, useMutation } from '@tanstack/react-query'

// 회원가입
export const signUp = async (data) => axios.unauth.post('web/uaUser/signup', data).then(res => res.data)
export const useSignUp = (options) => useMutation(signUp, options)

// 소셜 회원가입
export const socialSignUp = async (data) => axios.unauth.post('web/uaUser/socialSignup', data).then(res => res.data)
export const useSocialSignUp = (options) => useMutation(socialSignUp, options)

// 로그인
export const signIn = async (data) => axios.unauth.post('authenticate', data).then(res => res.data)
export const useSignin = (options) => useMutation(signIn, options)

// 로그아웃
export const signOut = async (data) => axios.unauth.delete('logoutToken', data).then(res => res.data)
export const useSignOut = (options) => useMutation(signOut, options)

// 소셜 로그인
export const socialSignIn = async (data) => axios.unauth.post('socialLogin', data).then(res => res.data)
export const useSocialSignIn = (options) => useMutation(socialSignIn, options)

// 회원정보 소셜아이디 연동
export const socialSave = async (data) => axios.main.post('/web/uaUser/socialSave', data).then(res => res.data)
export const useSocialSave = (options) => useMutation(socialSave, options)

//회원정보 소셜아이디 해제
export const socialDelete = async (data) => axios.main.put('/web/uaUser/socialDelete', data).then(res => res.data)
export const useSocialDelete = (options) => useMutation(socialDelete, options)

// 중복체크 쿠키 미사용 방식
export const checkIdtmp = async (data) => axios.unauth.post('web/uaUser/duplicate_tmp', data)
export const useCheckIdtmp = (options) => useMutation(checkIdtmp, options)

export const checkId = async (data) => axios.unauth.post('web/uaUser/duplicate', data, {withCredentials:true})
export const useCheckId = ( options) => {
  
  const defaultOptions = {}
  
  return useMutation(checkId, {...defaultOptions, ...options})
}

//이메일 인증번호 확인 쿠키 미사용 방식
export const checkAuthCodetmp = async (data) => axios.unauth.post('/web/uaUser/duplicate/emailChk_tmp', data).then(res => res.data)
export const useCheckAuthCodetmp = ( options) => {
  
  const defaultOptions = {}
  
  return useMutation(checkAuthCodetmp, {...defaultOptions, ...options})
}
//이메일 인증번호 확인
export const checkAuthCode = async (data) => axios.unauth.post('/web/uaUser/duplicate/emailChk', data, {withCredentials:true}).then(res => res.data)
export const useCheckAuthCode = (options) => useMutation(checkAuthCode, options)

//국가
export const getCountry = async () => axios.unauth.post('web/cmCode/list', {"code_id" : "ua_cnty_cd"}).then(res => res.data)
export const useCountry = (options) => useQuery(['/web/cmCode/list', 'getCountry'], getCountry, {staleTime: Infinity, ...options})

//언어
const getLanguage = async () => axios.unauth.post('web/cmCode/list', {"code_id" : "ua_mng_lang_cd"}).then(res => res.data)
const useLanguage = (options) => useQuery(['/web/cmCode/list', "getLanguage"], getLanguage, {staleTime: Infinity, ...options})

//패스워드 찾기에서 아이디 확인
export const confirmId = async (data) => axios.unauth.post('web/uaUser/checkid', data).then(res => res.data)
export const useConfirmId = ( options) => {
  
  const defaultOptions = {}
  
  return useMutation(confirmId, {...defaultOptions, ...options})
}


//아이디찾기
export const findId = async (data) => axios.unauth.post('web/uaUser/findId', data)
export const useFindId = (options) => useMutation(findId, options)

//아이디 찾기 디바이스
export const findIdDevice = async (data) => axios.unauth.post('web/uaUser/findIdByDevice', data)
export const useFindIdDevice = (options) => useMutation(findIdDevice, options)

//패스워드찾기
export const findPasswd = async (data) => axios.unauth.post('web/uaUser/resetPw', data).then(res => res.data)
export const useFindPasswd = ( options) => useMutation(findPasswd, options)

//패스워드찾기에서 패스워드 초기화
export const sendPasswd = async (data) => axios.unauth.post('web/uaUser/resetPw', data).then(res => res.data)
export const useSendPasswd = (options) => useMutation(sendPasswd, options)

// 공지사항 list
export const getNotice = async () => axios.unauth('web/uoBoard/list').then(res => res.data)
export const useGetNotice = (options) => useQuery(['web/uoBoard/list','getNotice'],getNotice, {...options,
  staleTime: Infinity
})

//휴면 해제
export const dormantRelease = async (data) => axios.main.post('web/uaUser/recovery', data).then(res => res.data)
export const useDormantRelease = (options) => useMutation(dormantRelease, options)

//서비스 이용약관 
export const getTermsList = async (data) => axios.unauth.post('web/uoTerms/list', data).then(res => res.data)
export const useTermsList = (data, options ) => useQuery(['/web/uoTerms/list', data], () => getTermsList(data), {staleTime: Infinity, ...options})
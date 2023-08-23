import { useState, useEffect, useRef } from "react";
import { useAuth, _useCountry, _useModel } from "./store";
import api, {axios} from "@/lib/api";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
const RT = "refreshToken"

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue;
}

export function useModalController(){
  // modal open/close에 대한 getter/setter 제공
  const modalRef = useRef({open: () => {}, close: () => {}})
  return {
    open: (openCallback) => {
      if(openCallback) modalRef.current.open = openCallback
      else modalRef.current.open()
    },
    close: (closeCallback) => {
      if(closeCallback) modalRef.current.close = closeCallback
      else modalRef.current.close()
    }
  }
}

export function useRefresh(dupLogin){
  const {replace, pathname} = useRouter()
  const {setAuth, resetAuth} = useAuth()

  useEffect(() => {
    const refreshToken = Cookies.get(RT)
    console.log(refreshToken)
    
    if(refreshToken){
      setAuth({aToken: "test", name:"홍길동"})

      /*
      axios.unauth.post('getToken', {refreshToken})
      .then(({data: {token, refreshToken, email, name, role, profileURL, distanceUnitYn, tempUnitYn}}) => {
        console.log("rToken: ", email, name, role, profileURL, distanceUnitYn, tempUnitYn)
        // Cookies.set(RT, refreshToken)
        setAuth({aToken: token, email, name, role, profileURL, distanceUnitYn, tempUnitYn})
      })
      .catch((e) => {
        console.error("rToken: ", e)
        Cookies.remove(RT)
        Cookies.remove('sn')
        if(e.response.data.authCode == "410"){
          dupLogin.show()
        }else{
          window.location.href = '/unauth/signin'
        }
        // Cookies.remove(RT)
        // Cookies.remove('sn')
        // window.location.assign('/unauth/signin')
      })
      */
    }else{
      if(pathname !="/dev") replace("/")
    }

    return () => {
      console.log("rToken: reset")
      // resetAuth()
      // Cookies.remove(RT)
    }
  }, [])
}

// 로그인시 
export function useAxios(dupLogin, nonAdminAuth){
  const {aToken, setAuth, resetAuth} = useAuth()
  console.log(aToken)

  //백엔드 토큰 null처리 미완료 임시로 토큰 없는상태 a로 사용중
  useEffect(() => {
    if(!aToken) {
      axios.main.interceptors.request.clear()
      axios.admin.interceptors.request.clear()
      axios.vod.interceptors.request.clear()
      axios.main.interceptors.request.use(
        () => new Error("no token"),
        Promise.reject
      )
      axios.admin.interceptors.request.use(
        () => new Error("no token"),
        Promise.reject
      )
      axios.vod.interceptors.request.use(
        () => new Error("no token"),
        Promise.reject
      )
      return
    }
    axios.main.interceptors.request.clear()
    axios.main.interceptors.response.clear()
    axios.admin.interceptors.request.clear()
    axios.admin.interceptors.response.clear()
    axios.vod.interceptors.request.clear()
    axios.vod.interceptors.response.clear()

    axios.main.interceptors.request.use(
      config => {
        config.headers.Authorization = `Bearer ${aToken}`
        return config
      },
      err => Promise.reject(err)
    )
    axios.admin.interceptors.request.use(
      config => {
        config.headers.Authorization = `Bearer ${aToken}`
        return config
      },
      err => Promise.reject(err)
    )
    axios.vod.interceptors.request.use(
      config => {
        config.headers.Authorization = `Bearer ${aToken}`
        return config
      },
      err => Promise.reject(err)
    )

    axios.main.interceptors.response.use(
      res => res,
      async (err) => {
        if(err.response.data.authcode == 401){
          const req = err.config
          const refreshToken = Cookies.get(RT)
          console.log("resintc refreshToken: ", refreshToken ? true : false)
          try{
            const {data} = await axios.unauth.post('getToken', {refreshToken})
            console.log("resIntc new token")
            Cookies.set(RT, data.refreshToken, {expires: 1000 * 3600 * 24 * 30})
            setAuth({aToken: data.token})
            req.headers.Authorization = `Bearer ${data.token}`
            return axios.unauth(req)
          }catch(e){
            resetAuth()
            Cookies.remove(RT)
            Cookies.remove('sn')
            dupLogin.show()
            return Promise.reject(new Error("failed to get new accessToken: please login again"))
          }
        }
        console.log("resIntc reject error")
        return Promise.reject(err)
      }
    )
    axios.admin.interceptors.response.use(
      res => res,
      async (err) => {
        if(err.response.data.error == "NO PERMISSION"){
            resetAuth()
            Cookies.remove(RT)
            Cookies.remove('sn')
            nonAdminAuth.show()
            return
        }
        if(err.response.data.authcode == 401){
          const req = err.config
          const refreshToken = Cookies.get(RT)
          console.log("resintc refreshToken: ", refreshToken ? true : false)
          try{
            const {data} = await axios.unauth.post('getToken', {refreshToken})
            console.log("resIntc new token")
            Cookies.set(RT, data.refreshToken, {expires: 1000 * 3600 * 24 * 30})
            setAuth({aToken: data.token})
            req.headers.Authorization = `Bearer ${data.token}`
            return axios.unauth(req)
          }catch(e){
            resetAuth()
            Cookies.remove(RT)
            Cookies.remove('sn')
            window.location.assign('/manager/signin')
            return Promise.reject(new Error("failed to get new accessToken: please login again"))
          }
        }
        console.log("resIntc reject error")
        return Promise.reject(err)
      }
    )
    axios.vod.interceptors.response.use(
      res => res,
      async (err) => {
        if(err.response.data.authCode == 401){
          const req = err.config
          const refreshToken = Cookies.get(RT)
          console.log("resintc refreshToken: ", refreshToken ? true : false)
          try{
            const {data} = await axios.unauth.post('getToken', {refreshToken})
            console.log("resIntc new token")
            Cookies.set(RT, data.refreshToken, {expires: 1000 * 3600 * 24 * 30})
            setAuth({aToken: data.token})
            req.headers.Authorization = `Bearer ${data.token}`
            console.log(`여기서 토큰만 새로 넣어주면 안되는거얌 ? 마지막 값으로???? ${aToken}`)
            return axios.vod(req)
          }catch(e){
            resetAuth()
            Cookies.remove(RT)
            Cookies.remove('sn')
            window.location.assign('/manager/signin')
            return Promise.reject(new Error("failed to get new accessToken: please login again"))
          }
        }
        console.log("resIntc reject error")
        return Promise.reject(err)
      }
    )

    return () => {
      axios.main.interceptors.request.clear()
      axios.main.interceptors.response.clear()
      axios.vod.interceptors.request.clear()
      axios.vod.interceptors.response.clear()
    }
  }, [aToken])
}

export function useLogout(){
  const {pathname} = useRouter()
  const {resetAuth} = useAuth()
  
  return () => {
    console.log("LOGOUT")
    //임시코드
    // axios.main.delete('logoutToken')
    // .then(res => console.log("LOGOUT: ", res))
    // .catch(console.error)

    Cookies.remove(RT)
    resetAuth()
    location.assign("/")
  }
}

/*
export function useWebView() {
  const {pathname} = useRouter()
  return {
    isMobile: pathname.startsWith("/m/")
  }
}

// 국가 리스트 요청은 전역적으로 한번만 발생하도록 관리하는 훅
export function useCountry() {
  const {countries, res, setCountries} = _useCountry()
  api.account.useCountry({
    enabled: !countries,
    onSuccess: (res) => setCountries(res)
  })
  return {countries, res}
}

// 모델 리스트 요청은 전역적으로 한번만 발생하도록 관리하는 훅
export function useModelList() {
  const {models, available_models, setModels} = _useModel()
  api.device.useGetModel({
    enabled: !models,
    onSuccess: (res) => setModels(res)
  })
  return [available_models, models]
}

// 개인 정보 요청 관리 훅
export function useUserInfo() {
  const {userInfo, setUserInfo, userInforefetch, setUserInfoRefetch} = useAuth()
  const {refetch: _refetch} = api.user.useUserInfo({
    enabled: !userInfo,
    onSuccess: (res) => {
      if(!!res.data?.length) {
        setUserInfo(res.data[0])
        setUserInfoRefetch(_refetch)
      }
    }
  })
  return [userInfo, userInforefetch]
}

//카테고리 전역 훅
export function useCateList(type){
  const [cateList, setCateList] = useState([])
  api.cs.useCateList(type, { 
    onSuccess: (res) => {
      const list = res?.data.map(v => ({name: v.category_name, value: String(v.category_id)})) 
      setCateList(list)
    }
  });

  return Array.isArray(cateList) ? cateList : []
}
//safe timeout
export function useSafeTimeout() {
  const timeoutRef = useRef();

  function safeSetTimeout(callback, delay) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(callback, delay);
  }

  function clearSafeTimeout() {
    clearTimeout(timeoutRef.current);
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return [safeSetTimeout, clearSafeTimeout];
}

export const useRandom = () => {
  const uuidRef = useRef(String(Math.random()).substring(-8))
  return uuidRef.current
}

/**
 * @desc setTimeout, setInterval 관리 훅
 
export const useTimer = () => {
  const ConstantsRef = useRef({
    timeout: "timeout",
    interval: "interval",
  })
  const C = ConstantsRef.current
  const timersRef = useRef({
    timers: new Map(),
    add({id, cb, ms = 300, type = C.timeout}) {
      try {
        if(typeof id !== "string" || !id) throw new Error("id parameter must be truthy string type")
        if(typeof cb !== "function") throw new Error("cb parameter must be function type")
        if(typeof ms !== "number") throw new Error("ms parameter must be number type")
        if(![C.timeout, C.interval].includes(type)) throw new Error("type parameter must be timeout or interval")
        if (this.timers.has(id)) this.stop(id)
        this.timers.set(id, {
          cb,
          type,
          timerId: type === C.timeout ? setTimeout(cb, ms) : setInterval(cb, ms)
        })
        return true
      } catch(e) {
        console.error("timers: ", e.message)
        return false
      }
    },
    call(id) {
      try {
        const timer = this.timers.get(id)
        if(!timer) throw new Error(`no timer for id of ${id}`)
        this.stop(id)
        timer.cb()
        return true
      } catch(e) {
        console.error("timers.call: ", e.message)
        return false
      }
    },
    stop(id) {
      const timer = this.timers.get(id)
      if (timer?.type === C.timeout) clearTimeout(timer.timerId)
      if (timer?.type === C.interval) clearInterval(timer.timerId)
    },
    remove(id) {
      this.stop(id)
      return this.timers.delete(id)
    },
    clear() {
      for(const [id, timer] of this.timers.entries()) {
        if (timer?.type === C.timeout) clearTimeout(timer.timerId)
        if (timer?.type === C.interval) clearInterval(timer.timerId)
        this.timers.delete(id)
      }
    },
    toMmss(ms) {
      try {
        if (typeof Number(ms) !== "number") throw new Error("ms parameter must be number type")
        const s = ms / 1000
        const minutes = String(Math.floor(s / 60)).padStart(2, "0")
        const seconds = String(Math.floor(s % 60)).padStart(2, "0")
        return `${minutes}:${seconds}`
      } catch(e) {
        console.error("useTimer.toMmss: ", e.message)
      }
    },
  })

  return timersRef.current
}

export function useAdmCodeList(type){
  const [codeList, setCodeList] = useState([])
  api.manage.useAdmCodeList(type, { 
    onSuccess: (res) => {
      console.log(res)
      const list = res?.data.map(v => ({name: v.codeDtlNm, value: String(v.codeDtlId), child: v?.child?.length>0 ? v?.child : []})) 
      setCodeList(list)
    }
  });

  return Array.isArray(codeList) ? codeList : []
}
*/
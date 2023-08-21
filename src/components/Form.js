import { useRef, useState } from "react"

export function useForm() {
  const dataRef = useRef({})
  const countRef = useRef({start: (seconds) => {}, clear: () => {}, isCounting: () => {}})
  const [loading, setLoading] = useState(false)

  const getData = () => ({...dataRef.current})

  function setData ({field, value}) {
    checkType.field(field)
    checkType.value(value)
    dataRef.current[field] = value
  }

  /**
   * @param message string
   */
  function setFormMessage(message) {
    try{
      checkType.string(message)
    }catch(e){
      message = ""
    }
    const formMessageElement = document.querySelector("#form_message")
    if(!formMessageElement) throw new Error("setFormMessage: invalid formMessageElement")
    formMessageElement.innerHTML = message ? `<span>${message}</span>` : ""
  }

  const setCount = () => {
    return ({
      ...countRef.current,
      setStart: cb => countRef.current.start = cb,
      setClear: cb => countRef.current.clear = cb,
      setIsCounting: cb => countRef.current.isCounting = cb
    })
  }

  return {
    loading,
    setLoading,
    getData,
    setData,
    setFormMessage,
    setCount
  }
}
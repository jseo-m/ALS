// export * as validate from './list/validate'
// export * from "./list/DateService"


export const ConditionalWrapper = ({condition, wrapper, children}) => condition ? wrapper(children) : children

export function getElementOffset (element){
  const rect = element?.getBoundingClientRect()
  if(rect) return {top: rect.top + window.scrollY, left: rect.left + window.scrollX}
}

// 앞뒤 공백 제거하고, 문자열 사이 중복 공백은 하나로
export function realTrim(str) {
  if(typeof str === "string") return str.trim().replace(/\s+/g, ' ')
  console.error("realTrim: not String type")
  return str
}

// 모든 공백 제거
export function removeSpaces(str) {
  if(typeof str === "string") return str.replace(/\s/g, "")
  console.error("removeSpaces: not String type")
  return ""
}

// 랜덤 문자열 반환
export function randomString() {
  return String(Math.random()).split(".")[1].substring(-1, -6)
}

// 시간 문자열 반환
export function currentTime() {
  
}

// 정규표현식 다루기
export function regexpTest(regexp, value) {
  if(regexp instanceof RegExp) {
    regexp.lastIndex = 0
    return regexp.test(value)
  }
  throw new Error("not RegExp type")
}
export function regexpToObject(regexp) {
  if(regexp instanceof RegExp) return {source: regexp.source, flags: regexp.flags}
  console.error("regexpToObject: not RegExp type")
}
export function regexpToString(regexp) {
  if(!regexp) return null
  const regexpObj = regexpToObject(regexp)
  if(regexpObj) return JSON.stringify(regexpObj)
}
export function regexpFromObject(regexpObj) {
  if(typeof regexpObj === "object") {
    if(!regexpObj.source) return console.error("regexpFromObject: regexpObj has no source")
    if(typeof regexpObj.source !== "string") return console.error("regexpFromObject: regexpObj.source is not String type")
    if(typeof regexpObj.flags !== "string") return console.error("regexpFromObject: regexpObj.flags is not String type")

    const regexp = new RegExp(regexpObj.source, regexpObj.flags)
    if(regexp instanceof RegExp) return regexp
    console.error("regexpFromObject: regexpObj is wrong object to create regexp")
  }
  console.error("regexpFromObject: regexpObj is not Object type")
}
export function regexpFromString(regexpObjStr) {
  if(regexpObjStr && typeof regexpObjStr === "string") {
    const regexpObj = JSON.parse(regexpObjStr)
    const regexp = regexpFromObject(regexpObj)
    if(regexp) return regexp
  } else return null
  console.error("regexpFromString: not String type")
}

/**
 * @desc 문자열 클리보드(복사) 기능
 * @return 복사 성공 ? true : false
 */
export const clipBoard = async (strToCopy) => {
  try{
    if(!strToCopy || typeof strToCopy !== "string") throw new Error("not string type")
    await navigator.clipboard.writeText(strToCopy)
    return true
  }catch(e){
    console.error("clipBoard: ", e.message)
    return false
  }
}
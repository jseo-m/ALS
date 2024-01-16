import {axios} from '@/lib/api'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useLine } from '../store'

// 알림 리스트
const mainPath = "/api/main"

export const getLineElement = async (data) => await axios.serverless.post(mainPath, {"action" : "getLineElement", "lineIdx" : data}).then(res => res.data)
// export const useTest = (data, options) => useQuery([testPath, 'alertList'], test, {staleTime: Infinity, ...options})

export const getElementData = (data) => axios.serverless.post(mainPath, {"action" : "getElementData", "lineIdx" : data}).then(res => res.data)
export const useGetElementData = (data, options) => {
  return useQuery([mainPath, 'getElementData', data], () => getElementData(data), {...options, refetchInterval:3000})
}

export const test = (data) => axios.serverless.post(mainPath, {"action" : "test"}).then(res => res.data)
export const useTest = (data, options) => useQuery([mainPath, 'getElementData', data], () => test(data), {...options})
// export const structureInsert = async (data) => axios.serverless.post('api/main', {...data, "action": "structure_insert"}).then(res => res.data)
// export const useStructureInsert = (options) => useMutation(structureInsert, options)
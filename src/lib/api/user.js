import {axios} from '@/lib/api'
import { useQuery, useMutation } from '@tanstack/react-query'

// 알림 리스트
const alertListPath = "/api/user"
export const alertList = async () => axios.serverless.post(alertListPath, {"action" : "alertList"}).then(res => res.data)
export const useAlertList = (options) => useQuery([alertListPath, 'alertList'], alertList, {staleTime: Infinity, ...options})

// 내 견적 리스트
const myEstListPath = "/api/user"
export const myEstList = async () => axios.serverless.post(myEstListPath, {"action" : "myEstList"}).then(res => res.data)
export const useMyEstList = (options) => useQuery([myEstListPath, 'myEstList'], myEstList, {staleTime: Infinity, ...options})

// 내 견적 View
const myEstViewPath = "/api/user"
export const myEstView = async (data) => axios.serverless.post(myEstViewPath, {"action" : "myEstView", ...data}).then(res => res.data)
export const useMyEstView = (data, options) => useQuery([myEstViewPath, 'myEstView', data], () => myEstView(data), {staleTime: Infinity, ...options})
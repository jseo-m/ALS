import {axios} from '@/lib/api'
import { useQuery, useMutation } from '@tanstack/react-query'

// 알림 리스트
const alertListPath = "/api/user"
export const alertList = async () => axios.serverless.post(alertListPath, {"action" : "alertList"}).then(res => res.data)
export const useAlertList = (options) => useQuery([alertListPath, 'alertList'], alertList, {staleTime: Infinity, ...options})
import { StyledPage_ChartSection } from '@/lib/styles'
import { Echart_Gauge } from '@/components/Chart'
import api from '@/lib/api'
import { useEffect, useState } from 'react'
import { calculateNumber } from '@/lib/utils'
import { test } from '@/lib/api/main'


export default function Floor1_pretreat({_data}) {


  console.log(_data)

  const resultMap = {}
  const test = []
  for (const item of _data) {
    const {ftname, month_week_key, sum_cost} = item
    if (!resultMap[ftname]) {
      resultMap[ftname] = {}
    }
    resultMap[ftname][month_week_key] = sum_cost
  }
  const result = []

  for(const ftname in resultMap){
    result.push({ftname: ftname, ...resultMap[ftname]})
  }
  console.log(resultMap)
  console.log(result)
  return (
    <>
    </>
  )
}

export async function getServerSideProps({query}){
  const data = await test()
  return{
    props:{
      _data: data
    }
  }
}
export default {
  deviceList: Array.from({length: 4}).map((v, i) => {
    const random1 = Math.random()
    const model = random1 > 0.6 ? "Vueroid SSR999 Ultra LTE" : random1 > 0.3 ? "Vueroid S99 Super LTE" : "Vueroid D21 LTE"
    const mname = random1 > 0.6 ? "Vueroid SSR999 Ultra LTE" : random1 > 0.3 ? "Vueroid S99 Super LTE" : "Vueroid D21 LTE"
    return ({
      // drivingState: random1 > 0.6 ? 0 : random1 > 0.3 ? 2 : 1,
      // onlineState: random1 > 0.5 ? 1 : 0,
      // model,
      // alias: `${model} ${i}`,
      // sn: String(random1).split(".")[1],
      status: random1 > 0.6 ? 0 : random1 > 0.3 ? 2 : 1,
      dvc_status: random1 > 0.5 ? 1 : 0,
      mname,
      alias: `${mname} ${i}`,
      serial: String(random1).split(".")[1],
    })
  }),
  Vods: Array.from({length: 30}).map((_,i) => {
    const random = Math.random()
    return {
      name: `20220617_103709000_INF_${i}.avi`,
      duration: random > 0.5 ? "00:30" : "01:00",
      date: "2022년 6월 17일",
      time: "10시 37분 9초",
      event: random > 0.7 ? "충격녹화" : random > 0.3 ? "깜짝녹화" : "상시녹화",
      ch: random > 0.75 ? 1 : random > 0.5 ? 2 : random > 0.25 ? 3 : 4,
      audio: random > 0.5 ? "ON" : "OFF",
    }
  }),
}
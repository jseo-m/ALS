export default {
  Base: {
    // header :{Authorization : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiTmNuVnVlcm9pZEFQSTIwMjMiOiJST0xFX1VTRVIiLCJleHAiOjE2NzQ2MTA1OTB9.LWheMkxLzTd_5gsRkgwOpbKzDfaa5RNFnzZ-MUpp_E7XHsbWfmtSS_uzj_zGRRSEIJrFsdD_nZYzqJHaDDc_WQ'},
    // baseUrl: "http://192.168.1.39:8081/",
    baseUrl: process.env.NEXT_PUBLIC_SERVER_API,
    adminUrl: process.env.NEXT_PUBLIC_SERVER_ADMIN_API,
    server: process.env.NEXT_PUBLIC_SERVER_DEV,
    vodserver: process.env.NEXT_PUBLIC_VODSERVER_DEV
  },
  QueryClient: {
    config: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false
        }
      }
    }
  },
  dataUnit: {"압력" :"kg/cm²", "HZ" : "Hz"}
}
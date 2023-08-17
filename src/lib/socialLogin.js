import axios from 'axios';

export function onSuccessGoogleLogin(tokenResponse){
    console.log(tokenResponse);
    // const payload = decodePayload(credentialResponse.access_token);
    axios({
        method : 'get',
        url : 'https://www.googleapis.com/oauth2/v3/userinfo',
        params : {access_token : tokenResponse.access_token}
      }).then(function(response){
        alert("통신 완료 가져온 값은 " + response.data.name);
        // setCorname(response.data.name);
        // alert('tt');
        console.log(response);
      }).catch(function(error){
        console.log(error);
        console.log("dd");
      });
    console.log(tokenResponse.access_token);
}
export function onErrorGoogleLogin(){
    console.log("login Error");
}
/* Facebook SDK용
export function checkFacebookLogin(checkResponse) {
  if (checkResponse.status === 'connected') {
    // 로그인 돼있을 때 작업
    console.log(checkResponse)
  } else {
    // 로그인이 되어있지 않다면 ('not_authorized' | 'unknown')
    (window).FB.login((response) => {
     // 로그인 하거나 회원가입 할 수 있는 팝업을 띄웁니다.
     console.log(response)
    })
  }
}
*/
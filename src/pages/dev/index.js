import { InputVer1_Mui } from "@/components/Input";
import { Dev } from "@/lib/styles";

export default function DevPage(){
  return(
    <Dev>
      <main>
        <InputVer1_Mui required={true} id="standard" label="일반input" placeholder="standard" />
        <InputVer1_Mui required={true} id="eyes" label="눈 input" placeholder="ex) password" inputType={"eyes"}/>
        <InputVer1_Mui required={true} id="beforeSelect" label="beforeSelect" placeholder="beforeSelect" inputType={"beforeSelect"}/>
        <InputVer1_Mui required={true} id="afterSelect" label="afterSelect" placeholder="afterSelect" inputType={"afterSelect"}/>
        <InputVer1_Mui required={true} id="hasButton" label="hasButton" placeholder="hasButton" inputType={"afterSelect"} hasButton={"인증"}/>
      </main>
    </Dev>
  )
}
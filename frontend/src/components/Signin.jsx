import BottomWarning from "../components1/BottomWarning"
import Button from "../components1/Button"
import Heading from "../components1/Heading"
import InputBox from "../components1/InputBox"
import SubHeading from "../components1/SubHeading"


function Signin(){
    return(
        <>
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="container mx-auto flex-col justify-items-center border-solid w-80 bg-white p-3 rounded-md">
            <Heading label={"Sign-in"}/>
            <SubHeading label={"Enter your credentials to access your account"}/>
            <div className="mt-5">
            <InputBox label={"Email"}/>
            <InputBox label={"Password"}/>
            <Button label={"Sing in"}/>
            </div>
            <BottomWarning label1={"Don't have an account?"} label2={"Signup"}/>
        </div>
        </div>
        </div>
        </>
    )
}

export default Signin;
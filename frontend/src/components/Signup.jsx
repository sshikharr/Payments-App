import BottomWarning from "../components1/BottomWarning"
import Button from "../components1/Button"
import Heading from "../components1/Heading"
import InputBox from "../components1/InputBox"
import SubHeading from "../components1/SubHeading"


function Signup(){
    return(
        <>
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="container mx-auto flex-col justify-items-center border-solid w-80 bg-white p-3 rounded-md">
            <Heading label={"Sign-up"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <div className="mt-5">
            <InputBox label={"First Name"}/>
            <InputBox label={"Last Name"}/>
            <InputBox label={"Email"}/>
            <InputBox label={"Password"}/>
            <Button label={"Sing up"}/>
            </div>
            <BottomWarning label1={"Already have an account?"} label2={"Signin"}/>
        </div>
        </div>
        </div>
        </>
    )
}

export default Signup;
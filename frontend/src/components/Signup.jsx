import { useState } from "react"
import BottomWarning from "../components1/BottomWarning"
import Button from "../components1/Button"
import Heading from "../components1/Heading"
import InputBox from "../components1/InputBox"
import SubHeading from "../components1/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
 

function Signup(){

    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    return(
        <>
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="container mx-auto flex-col justify-items-center border-solid w-80 bg-white p-3 rounded-md">
            <Heading label={"Sign-up"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <div className="mt-5">
            <InputBox   
                onchange={(e)=>{
                    setFirstName(e.target.value);
                }}
            label={"First Name"} />
            <InputBox
                onchange={(e)=>{
                    setLastName(e.target.value);
                }}
            label={"Last Name"}/>
            <InputBox
                onchange={(e)=>{
                    setEmail(e.target.value);
                }}
            label={"Email"}/>
            <InputBox
                onchange={(e)=>{
                    setPassword(e.target.value);
                }}
            label={"Password"}/>
            <Button onClick={async ()=>{
                const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
                    username: email,
                    firstName: firstName,
                    lastName: lastName,
                    password: password
                });
                localStorage.setItem("token", res.data.token);
                navigate("/dashboard")
            }}
            label={"Sing up"}/>
            </div>
            <BottomWarning label1={"Already have an account?"} label2={"Signin"} to={"http://localhost:5173/signin"}/>
        </div>
        </div>
        </div>
        </>
    )
}

export default Signup;
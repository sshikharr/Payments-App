import { useState } from "react";
import Button2 from "./Button2";



function Users(){

    const [users, setUsers] = useState("");
    return(<>
    <div className="flex-col">
        <div className="text-base font-bold">Users</div>
        <div className="my-2">
            <input type="text" placeholder="Search for users..." className="border border-current border-slate-200 rounded-md h-7 pl-2 w-full"></input>
        </div>
        <div className="flex-col">
        <User/>
        </div>
    </div>
    </>)
}

function User(){
    return(
        <>
            <div className="flex justify-between h-auto">
                <div className="flex">
                    <div className=" bg-slate-300 rounded-full w-9 h-9">
                        <div className="flex justify-center align-bottom pt-1.5">
                            H
                        </div>
                    </div>
                    <div className="ml-2 pt-1.5 text-sm font-medium">
                        Harkirat Singh
                    </div>
                </div>
                <div className="w-32">
                <button className="w-full bg-slate-800 text-white h-full text-sm rounded-lg">Send Money</button>
                </div>
            </div>
        </>
    )
}

export default Users;
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Users(){
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + filter)
            .then(res=>{
                setUsers(res.data.users)
            })
    }, [filter]);
    return(<>
    <div className="flex-col">
        <div className="text-base font-bold">Users</div>
        <div className="my-2">
            <input onChange={(e)=>setFilter(e.target.value)} type="text" placeholder="Search for users..." className="border border-current border-slate-200 rounded-md h-7 pl-2 w-full"></input>
        </div>
        <div className="flex-col">
            {users.map((user)=><User key={user._id} user={user}/>)}
        </div>
    </div>
    </>)
}

function User({user}){
    const navigate = useNavigate();
    return(
        <>
            <div className="flex justify-between h-auto mt-2">
                <div className="flex">
                    <div className=" bg-slate-300 rounded-full w-9 h-9">
                        <div className="flex justify-center align-bottom pt-1.5">
                            {user.firstName[0]}
                        </div>
                    </div>
                    <div className="ml-2 pt-1.5 text-sm font-medium">
                        {user.firstName} {user.lastName}
                    </div>
                </div>
                <div className="w-32">
                <button onClick={()=>{
                    navigate("/send?id=" + user._id + "&name=" + user.firstName)
                }} className="w-full bg-slate-800 text-white h-full text-sm rounded-lg">Send Money</button>
                </div>
            </div>
        </>
    )
}

export default Users;
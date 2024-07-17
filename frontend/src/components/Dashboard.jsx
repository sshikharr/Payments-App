import Appbar from "../components1/Appbar";
import Balance from "../components1/Balance";
import User from "../components1/User";

function Dashboard(){
    return(
        <>
        <div className="h-screen bg-white flex-col">
            <div>
            <Appbar></Appbar>
            </div>
            <div className="pl-8 mr-4">
            <Balance label={2000}></Balance>
            <User></User>
            </div>
        </div>
        </>
    )
}

export default Dashboard;
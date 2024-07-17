import { Link } from "react-router-dom";


function BottomWarning({label1, label2}){
    return(

            <div className=" flex items-center text-sm justify-center my-2">
                <div className="flex-shrink-0 font-medium">{label1}</div>
                <Link className="ml-1 underline font-medium">{label2}</Link>
            </div>

    )
}

export default BottomWarning;
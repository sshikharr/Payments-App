function Button({label}){
    return(
        <>
        <div className="text-center">
            <button className="bg-slate-800 text-white py-2 w-full mt-4 rounded-lg">{label}</button>
        </div>
        </>
    )
}

export default Button;
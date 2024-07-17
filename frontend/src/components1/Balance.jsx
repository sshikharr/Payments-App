function Balance({label}){
    return (
        <>
        <div className="flex justify-between h-auto pt-4 pb-4">
            <div className="text-lg font-bold">Your Balance is :  ₹{label}</div>
        </div>
        
        </>
    )
}

export default Balance;
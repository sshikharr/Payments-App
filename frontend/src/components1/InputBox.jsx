function InputBox({label, onchange}){
    return(
        <>
        <div className=" text-start mt-2">
            <div className="font-medium text-sm mb-2">{label}</div>
            <input className="border border-current border-slate-200 rounded-md h-9 pl-2 w-full" type="text" placeholder={label} onChange={onchange}></input>
        </div>
        </>
    )
}

export default InputBox;
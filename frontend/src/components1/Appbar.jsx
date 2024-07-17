function Appbar(){
    return (
        <>
        <div className="flex justify-between border-t-4 border-t-black mt-1 h-auto border-b-2 pt-1 border-l-slate-300 pb-1 pl-2 pr-2">
            <div className="mt-2 text-sm font-medium">Payments App</div>
            <div className="flex">
            <div className="mr-2 mt-2 text-sm font-medium">Hello</div>
            <div className=" bg-slate-300 rounded-full w-9 h-9">
                        <div className="flex justify-center align-bottom pt-1.5">
                            U
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Appbar;
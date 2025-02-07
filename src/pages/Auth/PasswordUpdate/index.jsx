const PasswordUpdate = () => {

    const submitFN = async (e) => {
        e.preventDefault();
        //rest code
    }
    
    return (
        <form onSubmit={submitFN} className="flex items-center justify-center flex-col p-4 gap-4 w-[100%] max-w-[550px] bg-white">
            <img src="/Logo.svg" alt="Logo" />
            <div className="flex items-center text-center flex-col mt-4">
                <h1 className="uppercase text-center font-unbounded  text-mainColor text-2xl font-bold">Reset your password</h1>
                <p className="text-center text-sm px-4 mt-4">Manage your password using your mail adress</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="w-full flex flex-col justify-center">
                    <label htmlFor="password" className="font-unbounded text-lg text-mainColor">Password</label>
                    <input id="password" type="password" className="w-full px-3 py-4 border-2 border-white-gray font-poppins" placeholder="Password" />
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label htmlFor="confirmpassword" className="font-unbounded text-lg text-mainColor">Confirm Password</label>
                    <input id="confirmpassword" type="password" className="w-full px-3 py-4 border-2 border-white-gray font-poppins" placeholder="Password" />
                </div>
                <input type="submit" className="cursor-pointer transition-all hover:bg-white hover:text-mainColor border border-transparent hover:border-mainColor px-3 py-4 w-full mt-4 text-white font-unbounded bg-mainColor" value='Continue' />
            </div>
        </form>
    )
}

export default PasswordUpdate
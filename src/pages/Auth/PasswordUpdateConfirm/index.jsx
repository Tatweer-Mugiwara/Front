const PasswordUpdateConfirm = () => {

    const submitFN = async (e) => {
        e.preventDefault();
        //rest code
    }
    
    return (
        <form onSubmit={submitFN} className="flex items-center justify-center flex-col p-4 gap-4 w-[100%] max-w-[550px] bg-white">
            <img src="/images/Auth/Done.svg" alt="Done" />
            <div className="flex items-center text-center flex-col mt-4">
                <h1 className="uppercase text-center font-unbounded  text-mainColor text-2xl font-bold">Password updated successfully</h1>
                <p className="text-center text-sm px-4 mt-4">Your password has been updated successfully, you can always reset your password for more security</p>
            </div>
            <input type="submit" className="cursor-pointer transition-all hover:bg-white hover:text-mainColor border border-transparent hover:border-mainColor px-3 py-4 w-full mt-4 text-white font-unbounded bg-mainColor" value='Continue' />
        </form>
    )
}

export default PasswordUpdateConfirm
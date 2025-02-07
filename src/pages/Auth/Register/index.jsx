import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import API from "../../../utils/api-client"
import { useState } from "react";
import Spinner from "react-spinner-material";

const Register = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: '',
    })
    const [isLoading, setIsLoading] = useState(false);


    const submitFN = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            
            await API.post('users/register/', {
                ...data
            })

            toast.success('Glad you joined us', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
            
            navigate('/');
            
        } catch (error) {
            toast.error(error?.response?.message ?? 'Error', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={submitFN} className="flex items-center justify-center flex-col p-4 gap-4 w-[100%] max-w-[550px] bg-white">
            <img src="/Logo.svg" alt="Logo" />
            <div className="flex flex-col gap-4">
                <div className="flex w-full gap-4 mt-4">
                    <div className="w-[48.5%] flex flex-col justify-center">
                        <label htmlFor="firstname" className="font-unbounded text-lg text-mainColor">First Name</label>
                        <input value={data.firstName} onChange={(e) => setData((prev) => ({...prev, firstName: e.target.value}))} id="firstname" type="text" className="w-full px-3 py-4 border-2 border-white-gray font-poppins" placeholder="First Name" />
                    </div>
                    <div className="w-[48.5%] flex flex-col justify-center">
                        <label htmlFor="lastname" className="font-unbounded text-lg text-mainColor">Last Name</label>
                        <input value={data.lastName} onChange={(e) => setData((prev) => ({...prev, lastName: e.target.value}))} id="lastname" type="text" className="w-full px-3 py-4 border-2 border-white-gray font-poppins" placeholder="Last Name" />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label htmlFor="email" className="font-unbounded text-lg text-mainColor">Email</label>
                    <input value={data.email} onChange={(e) => setData((prev) => ({...prev, email: e.target.value}))} id="email" type="text" className="w-full px-3 py-4 border-2 border-white-gray font-poppins" placeholder="Email" />
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label htmlFor="password" className="font-unbounded text-lg text-mainColor">Password</label>
                    <input value={data.password} onChange={(e) => setData((prev) => ({...prev, password: e.target.value}))} id="password" type="password" className="w-full px-3 py-4 border-2 border-white-gray font-poppins" placeholder="Password" />
                </div>
                <div className="w-full flex flex-col justify-center">
                    <label htmlFor="confirmpassword" className="font-unbounded text-lg text-mainColor">Confirm Password</label>
                    <input value={data.confirmpassword} onChange={(e) => setData((prev) => ({...prev, confirmpassword: e.target.value}))} id="confirmpassword" type="password" className="w-full px-3 py-4 border-2 border-white-gray font-poppins" placeholder="Password" />
                </div>
                <button type="submit" className="cursor-pointer transition-all flex items-center justify-center hover:bg-white hover:text-mainColor border border-transparent hover:border-mainColor px-3 py-4 w-full mt-4 text-white font-unbounded bg-mainColor">
                    {
                        !isLoading ? 'Register' : <Spinner style={{height: "28px", width: "28px"}} color='white' />
                    }
                </button>
                <h4 className="text-center">Already have an account? <Link to='/auth/login' className="hover:underline">Login!</Link></h4>
            </div>
        </form>
    )
}

export default Register
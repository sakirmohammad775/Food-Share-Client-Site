import { useState } from "react";
import useAuth from '../hooks/useAuth'


const Register = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {createUser,user}=useAuth()
    console.log(user);


    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            await createUser(email,password)
            console.log('created');
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>
                        <p className="py-6"> </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required onBlur={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required
                                onBlur={(e)=>setPassword(e.target.value)} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary " type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Register;
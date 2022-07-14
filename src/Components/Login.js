import React from 'react';
import { useForm } from 'react-hook-form';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(getAuth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    //Social Login
    const onSubmit = data => {
        console.log(data, "clicked");

    }
    return (

        <div className='flex  justify-center bg-slate-600 items-center '>

            <div className="card w-96 bg-white  shadow-2xl">
                <div className="card-body">
                    <div className="divider text-3xl font-bold">Login</div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email address</span>

                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                type="email" placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 or longer password'
                                    }
                                })}
                                type="password" placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                            </label>
                        </div>


                        <p><small>New Hear? <Link to="/signup" className='text-secondary '>Create New Account</Link></small></p>
                        <input className='btn w-full max-w-xs' type="submit" value={"Login"} />
                        <p><small> <Link to="/signup" className='text-secondary '>Forget Password?</Link></small></p>

                    </form>

                    <div className="divider">or</div>
                    <div className='grid grid-flow-col gap-10 mx-auto justify-center '>

                        {/* Google Sign in */}
                        <button className='text-2xl btn btn-circle bg-orange-500 text-white rounded-full p-2 hover:bg-white hover:text-green-500' onClick={() => signInWithGoogle()}><BsGoogle /></button>

                        {/* Github Sign in */}
                        <button className='text-2xl btn btn-circle bg-orange-500 text-white rounded-full p-2 hover:bg-white hover:text-black' ><BsGithub /></button>

                        {/* Facebook Sign in */}
                        <button className='text-2xl btn btn-circle bg-orange-500 text-white rounded-full p-2 hover:bg-white hover:text-blue-600' ><BsFacebook /></button>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Login;
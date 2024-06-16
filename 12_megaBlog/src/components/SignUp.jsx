import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {Input, Logo, Button} from './index'

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const user = await authService.getCurrentUser();
                if (user) {
                    dispatch(login(user));
                    navigate("/")
                }

            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}></div>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Create your Account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Already have any account?&nbsp;
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Login
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'> {error}</p>}
            <form onSubmit={handleSubmit(create)} >

                <div className='space-y-5'>
                    <Input
                        label="Name"
                        placeHolder="Enter your Name"
                        type="text"
                        {...register("name", { required: true })}
                    />
                    <Input
                        label="Email: "
                        placeHolder="Enter your Email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}
                    />
                    <Button
                        type="submit"
                        className="w-full"
                    >Create Account</Button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
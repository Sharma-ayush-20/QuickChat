import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const { authUser, setAuthUser } = useAuth()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            let userInfo = {
                fullname: data.fullname,
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword
            }

            const response = await axios.post(
                "http://localhost:3000/api/user/signup",
                userInfo,
                { withCredentials: true }
            );

            if (response.data.success) {
                alert(response.data.message);
                console.log(response.data.message);
                localStorage.setItem("ChatApp", JSON.stringify(response.data));
                setAuthUser(response.data)
            } else {
                alert(response.data.message);
            }

        } catch (error) {
            alert("Error: " + (error.response?.data?.message || error.message));
        }
    }


    return (
        <>
            <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
                <div className="card w-full max-w-md bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="text-center mb-6">
                                <h1 className="text-3xl font-bold text-primary">Quick Chat</h1>
                                <h2 className="text-xl font-semibold text-base-content mt-2">Create Account</h2>
                                <p className="text-base-content/70 text-sm mt-1">Join our community today</p>
                            </div>

                            {/* Fullname */}
                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text font-medium">Full Name</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 validator focus-within:input-primary">
                                    <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="grow"
                                        {...register("fullname", {
                                            required: "Full name is required",
                                            minLength: {
                                                value: 3,
                                                message: "Full name must be at least 3 characters"
                                            },
                                            maxLength: {
                                                value: 30,
                                                message: "Full name must be less than 30 characters"
                                            },
                                            pattern: {
                                                value: /^[A-Za-z][A-Za-z0-9\-]*$/,
                                                message: "Only letters, numbers or dash allowed"
                                            }
                                        })}
                                    />
                                </label>
                                {errors.fullname && (
                                    <label className="label">
                                        <span className="label-text-alt text-error text-xs leading-relaxed break-words">
                                            {errors.fullname.message}
                                        </span>
                                    </label>
                                )}
                            </div>

                            {/* Email */}
                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text font-medium">Email Address</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 validator focus-within:input-primary">
                                    <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                        </g>
                                    </svg>
                                    <input
                                        type="email"
                                        placeholder="mail@example.com"
                                        className="grow"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Enter a valid email address"
                                            }
                                        })}
                                    />
                                </label>
                                {errors.email && (
                                    <label className="label">
                                        <span className="label-text-alt text-error text-xs leading-relaxed break-words">
                                            {errors.email.message}
                                        </span>
                                    </label>
                                )}
                            </div>

                            {/* Password */}
                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 validator focus-within:input-primary">
                                    <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                            ></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="password"
                                        placeholder="Create a strong password"
                                        className="grow"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters"
                                            },
                                            pattern: {
                                                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                                                message: "Must contain number, lowercase & uppercase letter"
                                            }
                                        })}
                                    />
                                </label>
                                {errors.password && (
                                    <label className="label">
                                        <span className="label-text-alt text-error text-xs leading-relaxed break-words w-full">
                                            {errors.password.message}
                                        </span>
                                    </label>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="form-control w-full mb-6">
                                <label className="label">
                                    <span className="label-text font-medium">Confirm Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 validator focus-within:input-primary">
                                    <svg className="h-4 w-4 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                            ></path>
                                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                        </g>
                                    </svg>
                                    <input
                                        type="password"
                                        placeholder="Confirm your password"
                                        className="grow"
                                        {...register("confirmPassword", {
                                            required: "Please confirm your password",
                                            validate: (value) => {
                                                const password = watch("password");
                                                return password === value || "Passwords do not match";
                                            }
                                        })}
                                    />
                                </label>
                                {errors.confirmPassword && (
                                    <label className="label">
                                        <span className="label-text-alt text-error text-xs leading-relaxed break-words">
                                            {errors.confirmPassword.message}
                                        </span>
                                    </label>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary btn-block">
                                    <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    Create Account
                                </button>
                            </div>

                            {/* Login Link */}
                            <div className="divider text-base-content/50">OR</div>
                            <div className="text-center">
                                <p className="text-sm text-base-content/70">
                                    Already have an account?{' '}
                                    <a onClick={() => navigate('/login')} className="link link-primary font-medium">
                                        Login
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup

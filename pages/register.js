import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Register() {
    const router = useRouter();

    const [errorMessage, setErrorMessage] = useState("");

    const { handleSubmit, register, watch, errors } = useForm();

    const onSubmit = handleSubmit(async (formData) => {
        if (errorMessage) setErrorMessage("");

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error(await res.text());
            }
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        }
    });

    return (
        <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="w-auto h-12 mx-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-purple-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Create a new account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                ref={register({
                                    required: "Email is required",
                                })}
                            />
                            {errors.email && (
                                <span role="alert">{errors.email.message}</span>
                            )}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                ref={register({
                                    required: "Password is required",
                                })}
                            />
                            {errors.password && (
                                <span role="alert">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                            />
                            <label
                                htmlFor="remember_me"
                                className="block ml-2 text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                {/* Heroicon name: lock-closed */}
                                <svg
                                    className="w-5 h-5 text-purple-500 group-hover:text-purple-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

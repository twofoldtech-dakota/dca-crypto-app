import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";
import { FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Navigation({ siteTitle }) {
    const router = useRouter();

    const fetcher = (url) => fetch(url).then((r) => r.json());

    const { data: user, mutate: mutateUser } = useSWR("/api/user", fetcher);

    const logout = async () => {
        const res = await fetch("/api/logout");
        if (res.ok) {
            mutateUser(null);
            router.push("/login");
        }
    };

    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <nav className="flex flex-wrap items-center justify-between px-10 py-6 bg-green-default">
            <div className="flex items-center flex-shrink-0 mr-6 text-white ">
                <Link href="/">
                    <svg
                        className="w-8 h-8 mr-2 fill-current"
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg>
                </Link>
                <span className="text-xl font-semibold tracking-tight">
                    {siteTitle}
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => toggleExpansion(!isExpanded)}
                    className="flex items-center px-3 py-2 border rounded text-blue-default border-blue-default hover:border-transparent hover:text-green-default hover:bg-blue-default"
                >
                    <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`${
                    isExpanded ? `block` : `hidden`
                } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-xl lg:flex-grow">
                    <Link href="/dashboard">
                        <a
                            className={`${
                                user
                                    ? `block px-4 py-2 mt-4 mr-5 font-bold leading-none rounded hover:border-2 text-blue-default hover:border-transparent hover:text-green-default hover:border-blue-default hover:bg-blue-default lg:mt-0 lg:inline-block`
                                    : `hidden`
                            }`}
                        >
                            Dashboard
                        </a>
                    </Link>
                    <Link href="/faq">
                        <a className="block px-4 py-2 mt-4 mr-5 font-bold leading-none rounded hover:border-2 text-blue-default hover:border-transparent hover:text-green-default hover:border-blue-default hover:bg-blue-default lg:mt-0 lg:inline-block">
                            FAQ
                        </a>
                    </Link>
                </div>
                <div className={`${user ? ` hidden` : ``} text-xl`}>
                    <Link href="/login">
                        <a className="block px-4 py-2 mt-4 mr-5 font-bold leading-none border-2 rounded bg-yellow-default text-blue-default border-blue-default hover:text-green-default hover:bg-blue-default hover:border-blue-default lg:mt-0 lg:inline-block">
                            Login
                        </a>
                    </Link>
                </div>
                <div className={`${user ? `` : ` hidden`} text-xl`}>
                    <Link href="/login">
                        <a className="block px-4 py-2 mt-4 mr-5 font-bold leading-none border-2 rounded text-blue-default border-blue-default hover:text-green-default hover:bg-blue-default hover:border-blue-default lg:mt-0 lg:inline-block">
                            Logout
                        </a>
                    </Link>
                </div>
                <div className={`${user ? `hidden` : ``} text-xl`}>
                    <Link href="/register">
                        <a className="block px-4 py-2 mt-4 mr-5 font-bold leading-none border-2 rounded text-blue-default border-blue-default hover:text-green-default hover:bg-blue-default hover:border-blue-default lg:mt-0 lg:inline-block">
                            Sign Up
                        </a>
                    </Link>
                </div>
                <a
                    href="https://twitter.com/home"
                    target="_blank"
                    className="flex py-2 pl-2"
                >
                    <IconContext.Provider
                        value={{
                            color: "#05386B",
                            className: "hover:text-black",
                            size: "2.9em",
                        }}
                    >
                        <div>
                            <FaTwitterSquare />
                        </div>
                    </IconContext.Provider>
                </a>
            </div>
        </nav>
    );
}

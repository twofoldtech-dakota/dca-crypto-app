import React, { useState } from "react";

export default function Navigation({ siteTitle }) {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <nav className="flex flex-wrap items-center justify-between px-10 py-6 bg-indigo-200">
            <div className="flex items-center flex-shrink-0 mr-6 text-white ">
                <a href="/">
                    <svg
                        className="w-8 h-8 mr-2 fill-current"
                        width="54"
                        height="54"
                        viewBox="0 0 54 54"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                    </svg>
                </a>
                <span className="text-xl font-semibold tracking-tight">
                    {siteTitle}
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => toggleExpansion(!isExpanded)}
                    className="flex items-center px-3 py-2 text-indigo-600 border border-indigo-600 rounded hover:border-transparent hover:text-white hover:bg-gray-900"
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
                    <a
                        href="/dashboard"
                        className="block px-4 py-2 mt-4 mr-5 leading-none text-indigo-600 rounded hover:border-transparent hover:text-white hover:bg-gray-900 lg:mt-0 lg:inline-block"
                    >
                        Dashboard
                    </a>
                    <a
                        href="/faq"
                        className="block px-4 py-2 mt-4 leading-none text-indigo-600 rounded hover:border-transparent hover:text-white hover:bg-gray-900 lg:mt-0 lg:inline-block"
                    >
                        FAQ
                    </a>
                </div>
                <div>
                    <a
                        href="/login"
                        className="inline-block px-4 py-2 mt-4 leading-none text-indigo-600 border border-indigo-600 rounded hover:border-transparent hover:text-white hover:bg-gray-900 lg:mt-0"
                    >
                        Login
                    </a>
                </div>
            </div>
        </nav>
    );
}

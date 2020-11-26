import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import React, { useState } from "react";
import FiatAccountList from "../components/FiatAccountList";
import Exchanges from "../components/Exchanges";

export default function Dashboard() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main className="px-2 mx-auto sm:px-6 lg:px-8">
                <div className="mb-10 sm:text-center lg:text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Dashboard</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Connect all your accounts below
                    </p>
                </div>
                <div className="p-6 mt-10 sm:text-center lg:text-left">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                        <span className="block xl:inline">
                            Account Statistics
                        </span>
                    </h2>
                    <div id="wrapper" className="mx-auto mt-5">
                        <div className="sm:grid sm:h-32 sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
                            <div
                                id="jh-stats-positive"
                                className="flex flex-col justify-center px-4 py-4 bg-white border border-gray-300 rounded"
                            >
                                <div>
                                    <div>
                                        <p className="flex items-center justify-end text-green-500 text-md">
                                            <span className="font-bold">
                                                6%
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    className="heroicon-ui"
                                                    d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                    <p className="text-3xl font-semibold text-center text-gray-800">
                                        43
                                    </p>
                                    <p className="text-lg text-center text-gray-500">
                                        New Tickets
                                    </p>
                                </div>
                            </div>
                            <div
                                id="jh-stats-negative"
                                className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0"
                            >
                                <div>
                                    <div>
                                        <p className="flex items-center justify-end text-red-500 text-md">
                                            <span className="font-bold">
                                                6%
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    className="heroicon-ui"
                                                    d="M20 9a1 1 0 012 0v8a1 1 0 01-1 1h-8a1 1 0 010-2h5.59L13 10.41l-3.3 3.3a1 1 0 01-1.4 0l-6-6a1 1 0 011.4-1.42L9 11.6l3.3-3.3a1 1 0 011.4 0l6.3 6.3V9z"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                    <p className="text-3xl font-semibold text-center text-gray-800">
                                        43
                                    </p>
                                    <p className="text-lg text-center text-gray-500">
                                        New Tickets
                                    </p>
                                </div>
                            </div>
                            <div
                                id="jh-stats-neutral"
                                className="flex flex-col justify-center px-4 py-4 mt-4 bg-white border border-gray-300 rounded sm:mt-0"
                            >
                                <div>
                                    <div>
                                        <p className="flex items-center justify-end text-gray-500 text-md">
                                            <span className="font-bold">
                                                0%
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    className="heroicon-ui"
                                                    d="M17 11a1 1 0 010 2H7a1 1 0 010-2h10z"
                                                />
                                            </svg>
                                        </p>
                                    </div>
                                    <p className="text-3xl font-semibold text-center text-gray-800">
                                        43
                                    </p>
                                    <p className="text-lg text-center text-gray-500">
                                        New Tickets
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FiatAccountList />
                <Exchanges />
            </main>
        </div>
    );
}

import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import React, { useState } from "react";
import FiatAccountList from "../components/FiatAccountList";
import Exchanges from "../components/Exchanges";
import Stats from "../components/Stats";

export default function Dashboard() {
    return (
        <div>
            <Head>
                <title>nofomo - Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main className="px-2 mx-auto sm:px-6 mt-7 lg:px-8">
                <div className="mb-10 text-center">
                    <h1 className="text-6xl font-extrabold tracking-tight text-indigo-600 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Dashboard</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Connect all your accounts below
                    </p>
                </div>
                <Stats />
                <FiatAccountList />
                <Exchanges />
            </main>
        </div>
    );
}

import React, { useState } from "react";
import FiatAccountList from "../components/fiat/FiatAccountList";
import Exchanges from "../components/exchange/Exchanges";
import Layout from "../components/shared/Layout";

export default function Dashboard() {
    return (
        <Layout title="Nofomo - Dashboard">
            <div className="px-2 mx-auto mb-10 text-center sm:px-6 mt-7 lg:px-8">
                <h1 className="text-6xl font-extrabold tracking-tight text-purple-600 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Dashboard</span>
                </h1>
                <p className="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Connect all your accounts below
                </p>
            </div>
            {/* <Stats /> */}
            <FiatAccountList />
            <Exchanges />
        </Layout>
    );
}

import React, { useState } from "react";
import Layout from "../components/shared/Layout";
import DashboardTabs from "@components/dashboard/DashboardTabs";

export default function Dashboard() {
    return (
        <Layout title="Nofomo - Dashboard">
            <div className="px-2 mx-auto mb-10 text-center sm:px-6 mt-7 lg:px-8">
                <h1 className="text-6xl font-extrabold tracking-tight text-yellow-default sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Dashboard</span>
                </h1>
                <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Connect all your accounts below
                </p>
            </div>
            <div className="bg-blue-default">
                {/* <Stats /> */}
                <DashboardTabs />
            </div>
        </Layout>
    );
}

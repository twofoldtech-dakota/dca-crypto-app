import React, { useState, useEffect } from "react";
import FiatAccountItem from "./FiatAccountItem";
import FiatSourceForm from "./FiatSourceForm";

export default function FiatAccountList() {
    return (
        <div className="px-6">
            <div className="mt-10 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                    <span className="block xl:inline text-blue-default">
                        Current Investments
                    </span>
                </h2>
            </div>
            <FiatAccountItem />
            <FiatSourceForm />
        </div>
    );
}

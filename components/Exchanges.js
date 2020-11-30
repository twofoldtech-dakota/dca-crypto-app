import React from "react";
import ExchangeItem from "./ExchangeItem";

function Exhanges(props) {
    return (
        <div className="p-6">
            <div className="mt-10 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                    <span className="block xl:inline">Connected Exchanges</span>
                </h2>
            </div>
            <ExchangeItem />
        </div>
    );
}

export default Exhanges;

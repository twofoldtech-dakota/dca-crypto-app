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
            <button className="w-full p-4 mt-5 text-xl font-medium text-white uppercase bg-green-400 rounded-lg shadow hover:bg-green-500">
                Connect Exchange
            </button>
        </div>
    );
}

export default Exhanges;

import React from "react";

export default function Footer() {
    return (
        <div className="flex flex-wrap items-center justify-between p-6 bg-indigo-200">
            <div className="flex-grow">
                <div className="">
                    <div className="relative mb-2 text-xl font-bold">
                        About Us
                    </div>
                    <p className="pb-6 text-base z-234">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                    <div className="pt-6 mt-2 mb-2 text-xl font-bold">
                        Follow Us
                    </div>
                    <div className="flex flex-wrap border-b-2 border-indigo-400 justify">
                        <div className="flex-1 w-auto px-4 py-2 m-2 text-center text-gray-700 bg-teal-400 rounded hover:bg-teal-600">
                            1
                        </div>
                        <div className="flex-1 w-auto px-4 py-2 m-2 text-center text-gray-700 bg-teal-400 rounded hover:bg-teal-600">
                            2
                        </div>
                        <div className="flex-1 w-auto px-4 py-2 m-2 text-center text-gray-700 bg-teal-400 rounded hover:bg-teal-600">
                            3
                        </div>
                        <div className="flex-1 w-auto px-4 py-2 m-2 text-center text-gray-700 bg-teal-400 rounded hover:bg-teal-600">
                            4
                        </div>
                        <div className="flex-1 w-auto px-4 py-2 m-2 text-center text-gray-700 bg-teal-400 rounded hover:bg-teal-600">
                            5
                        </div>
                    </div>
                    <div className="mt-5 text-xs text-center ">
                        © 2020 nofomo.io
                    </div>
                </div>
            </div>
        </div>
    );
}

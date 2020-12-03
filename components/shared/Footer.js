import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer() {
    return (
        <div className="flex flex-wrap items-center justify-between p-6 text-center border-t-8 bg-blue-default text-yellow-default border-green-default ">
            <div className="flex-grow">
                <div className="">
                    <div className="relative mb-2 text-xl font-bold text-green-default">
                        About Us
                    </div>
                    <p className="pb-6 text-base z-234">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                    </p>
                    <div className="mt-2 text-xl font-bold text-green-default">
                        Follow Us
                    </div>
                    <div className="grid grid-cols-1 border-b-2 border-green-default justify">
                        <div className="px-4 py-2 m-2 text-center rounded place-self-center">
                            <a
                                href="https://twitter.com/home"
                                className="w-32 h-10 m-auto"
                            >
                                <IconContext.Provider
                                    value={{
                                        color: "#5CDB95",
                                        className: "flex",
                                        size: "3em",
                                    }}
                                >
                                    <div>
                                        <FaTwitterSquare />
                                    </div>
                                </IconContext.Provider>
                            </a>
                        </div>
                    </div>
                    <div className="mt-5 text-xs text-center text-green-default">
                        ©2020 NOFOMO.IO, LLC. ALL RIGHTS RESERVED.{" "}
                        <a
                            className="border-b-2 border-green-default text-yellow-default"
                            href="/disclaimer"
                        >
                            DISCLAIMER
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

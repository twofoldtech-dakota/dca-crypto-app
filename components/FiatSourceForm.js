import React, { useState, useEffect } from "react";

export default function FiatSourceForm() {
    const defaultClassName = "fixed inset-0 z-10 overflow-y-auto";
    const [showAddFiatSourceModal, setAddFiatSourceModal] = useState(false);
    const [className, setClassName] = useState(defaultClassName);

    const toggleModal = () => {
        setAddFiatSourceModal(!showAddFiatSourceModal);

        if (showAddFiatSourceModal) {
            setClassName(defaultClassName);
        } else {
            setClassName(defaultClassName + " hidden");
        }
    };
    useEffect(() => {
        if (showAddFiatSourceModal) {
            setClassName(defaultClassName);
        } else {
            setClassName(defaultClassName + " hidden");
        }
    });

    return (
        <div>
            <button
                onClick={toggleModal}
                className="w-full p-4 mt-5 text-xl font-medium text-white uppercase bg-green-400 rounded-lg shadow hover:bg-green-500"
            >
                Add another investing source
            </button>

            <div className={className}>
                <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75" />
                    </div>
                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        ​
                    </span>
                    <div
                        className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl max-w-7xl sm:my-8 sm:align-middle "
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="flex flex-col px-8 pt-6 pb-8 my-2 bg-white rounded">
                            <div className="mb-6 -mx-3 md:flex">
                                <div className="px-3 mb-6 md:w-1/2 md:mb-0">
                                    <label
                                        className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                                        htmlFor="grid-first-name"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        className="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red"
                                        id="grid-first-name"
                                        type="text"
                                        placeholder="Jane"
                                    />
                                    <p className="text-xs italic text-red">
                                        Please fill out this field.
                                    </p>
                                </div>
                                <div className="px-3 md:w-1/2">
                                    <label
                                        className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                                        htmlFor="grid-last-name"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        className="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                                        id="grid-last-name"
                                        type="text"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div className="mb-6 -mx-3 md:flex">
                                <div className="px-3 md:w-full">
                                    <label
                                        className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                                        id="grid-password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                    <p className="text-xs italic text-grey-dark">
                                        Make it as long and as crazy as you'd
                                        like
                                    </p>
                                </div>
                            </div>
                            <div className="mb-2 -mx-3 md:flex">
                                <div className="px-3 mb-6 md:w-1/2 md:mb-0">
                                    <label
                                        className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                                        htmlFor="grid-city"
                                    >
                                        City
                                    </label>
                                    <input
                                        className="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                                        id="grid-city"
                                        type="text"
                                        placeholder="Albuquerque"
                                    />
                                </div>
                                <div className="px-3 md:w-1/2">
                                    <label
                                        className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                                        htmlFor="grid-state"
                                    >
                                        State
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="block w-full px-4 py-3 pr-8 border rounded appearance-none bg-grey-lighter border-grey-lighter text-grey-darker"
                                            id="grid-state"
                                        >
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div className="absolute flex items-center px-2 pointer-events-none pin-y pin-r text-grey-darker">
                                            <svg
                                                className="w-4 h-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/2">
                                    <label
                                        className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker"
                                        htmlFor="grid-zip"
                                    >
                                        Zip
                                    </label>
                                    <input
                                        className="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter"
                                        id="grid-zip"
                                        type="text"
                                        placeholder={90210}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                onClick={toggleModal}
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={toggleModal}
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

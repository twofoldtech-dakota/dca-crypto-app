import React, { useState, useEffect } from "react";

export default function FiatAccountItem() {
    return (
        <div>
            <div className="p-6 my-2 mt-5 bg-gray-100 rounded-md shadow-lg lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                        Capital One Quicksilver - 3253
                    </h2>
                    <div className="flex flex-col mt-8 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: briefcase */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                            x10
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: location-marker */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Voyager
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: currency-dollar */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            $120k – $140k
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: currency-dollar */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            1 BTC
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: calendar */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Started Investing January 9, 2020
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 lg:mt-0 lg:ml-4">
                    <span className="sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {/* Heroicon name: pencil */}
                            <svg
                                className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Edit
                        </button>
                    </span>
                    <span className="ml-3 sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {/* Heroicon name: link */}
                            <svg
                                className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            View
                        </button>
                    </span>
                    <span className="ml-3 sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm"
                        >
                            {/* Heroicon name: check */}
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>
            <div className="p-6 my-2 mt-5 bg-gray-100 rounded-md shadow-lg lg:flex lg:items-center lg:justify-between">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                        Interest Checking - 7053
                    </h2>
                    <div className="flex flex-col mt-8 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: briefcase */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                            x10
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: location-marker */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Coinbase
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: currency-dollar */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            $4k
                        </div>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                            {/* Heroicon name: calendar */}
                            <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Started Investing January 3, 2020
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 lg:mt-0 lg:ml-4">
                    <span className="sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {/* Heroicon name: pencil */}
                            <svg
                                className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Edit
                        </button>
                    </span>
                    <span className="ml-3 sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {/* Heroicon name: link */}
                            <svg
                                className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            View
                        </button>
                    </span>
                    <span className="ml-3 sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm"
                        >
                            {/* Heroicon name: check */}
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>
            <div className="flex flex-col p-6 my-2 mt-5 bg-gray-100 rounded-md shadow-lg lg:flex lg:items-center lg:justify-between">
                <div className="flex flex-row w-full">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                            Interest Checking - 7053
                        </h2>
                        <div className="flex flex-col mt-8 sm:flex-row sm:flex-wrap sm:space-x-6">
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                                {/* Heroicon name: briefcase */}
                                <svg
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                </svg>
                                x2
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                                {/* Heroicon name: location-marker */}
                                <svg
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Binance
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                                {/* Heroicon name: currency-dollar */}
                                <svg
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                $120k – $140k
                            </div>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                                {/* Heroicon name: calendar */}
                                <svg
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Started Investing January 9, 2020
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-5 lg:mt-0 lg:ml-4">
                        <span className="sm:block">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {/* Heroicon name: pencil */}
                                <svg
                                    className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                </svg>
                                Edit
                            </button>
                        </span>
                        <span className="ml-3 sm:block">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {/* Heroicon name: link */}
                                <svg
                                    className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                View
                            </button>
                        </span>
                        <span className="ml-3 sm:block">
                            <button class="bg-red-400 hover:bg-red-500 p-2 rounded-full shadow-md flex justify-center items-center">
                                <svg
                                    class="text-white toggle__lock w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokelinecap="round"
                                        strokelinejoin="round"
                                        strokewidth="{2}"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
                <div className="w-full">
                    <div className="overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg sm:my-8 sm:align-middle">
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

                        <div className="px-4 py-3 bg-white sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                                Cancel
                            </button>
                            <button
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

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Navigation from "../components/Navigation";

export default function Home() {
    return (
        <div>
            <div className="relative overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                            <Navigation
                                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                                aria-label="Global"
                            >
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <a href="#">
                                            <span className="sr-only">
                                                Workflow
                                            </span>
                                            <img
                                                className="w-auto h-8 sm:h-10"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            />
                                        </a>
                                        <div className="flex items-center -mr-2 md:hidden">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                                id="main-menu"
                                                aria-haspopup="true"
                                            >
                                                <span className="sr-only">
                                                    Open main menu
                                                </span>
                                                {/* Heroicon name: menu */}
                                                <svg
                                                    className="w-6 h-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                    <a
                                        href="#"
                                        className="font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Dashboard
                                    </a>
                                    <a
                                        href="/login"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </Navigation>
                        </div>
                        {/*
  Mobile menu, show/hide based on menu open state.

  Entering: "duration-150 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
*/}
                        <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
                            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                                <div className="flex items-center justify-between px-5 pt-4">
                                    <div>
                                        <img
                                            className="w-auto h-8"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        >
                                            <span className="sr-only">
                                                Close main menu
                                            </span>
                                            {/* Heroicon name: x */}
                                            <svg
                                                className="w-6 h-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="main-menu"
                                >
                                    <div
                                        className="px-2 pt-2 pb-3 space-y-1"
                                        role="none"
                                    >
                                        <a
                                            href="#"
                                            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                            role="menuitem"
                                        >
                                            Product
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                            role="menuitem"
                                        >
                                            Features
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                            role="menuitem"
                                        >
                                            Marketplace
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                                            role="menuitem"
                                        >
                                            Company
                                        </a>
                                    </div>
                                    <div role="none">
                                        <a
                                            href="#"
                                            className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">
                                        Invest spare change
                                    </span>
                                    <span className="block text-indigo-600 xl:inline">
                                        {" "}
                                        into digital assets
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    To do this, we use the method called dollar
                                    cost average (DCA). DCA allows you to invest
                                    in your favorite digital assets everytime
                                    you make a purchase. We round up your change
                                    from a purchase to the nearest dollar and
                                    use that money to invest into and accumulate
                                    assets like Bitcoin, Ethereum and many more.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Get started
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#"
                                            className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Live demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt
                    />
                </div>
            </div>

            <div className="py-12 bg-white">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
                            Transactions
                        </h2>
                        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            An easy way to invest
                        </p>
                        <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consect adipisicing elit.
                            Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                        {/* Heroicon name: globe-alt */}
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg font-medium leading-6 text-gray-900">
                                        Competitive exchange rates
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                        {/* Heroicon name: scale */}
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg font-medium leading-6 text-gray-900">
                                        No hidden fees
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                        {/* Heroicon name: lightning-bolt */}
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg font-medium leading-6 text-gray-900">
                                        Transfers are instant
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                                        {/* Heroicon name: annotation */}
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <dt className="text-lg font-medium leading-6 text-gray-900">
                                        Mobile notifications
                                    </dt>
                                    <dd className="mt-2 text-base text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Maiores impedit
                                        perferendis suscipit eaque, iste dolor
                                        cupiditate blanditiis ratione.
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50">
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-600">
                            Start your free trial today.
                        </span>
                    </h2>
                    <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="inline-flex ml-3 rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

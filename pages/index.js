import Link from "next/link";
import Layout from "../components/shared/Layout";
import { getAuthCookie } from "../utils/auth-cookies";

export default function Home() {
    return (
        <Layout title="Nofomo - Home">
            <div className="relative overflow-hidden bg-green-light">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pb-10 bg-green-light lg:max-w-2xl lg:w-full">
                        <svg
                            className="absolute inset-y-0 right-0 hidden w-48 h-full transform translate-x-1/2 text-green-light lg:block"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <main className="px-4 pt-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl font-extrabold tracking-tight text-blue-default sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">
                                        Invest spare change
                                    </span>
                                    <span className="block text-green-dark xl:inline">
                                        {" "}
                                        into digital assets
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-blue-default sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
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
                                        <Link href="register">
                                            <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent rounded-md text-yellow-default bg-blue-default hover:bg-green-default hover:text-blue-default md:py-4 md:text-lg md:px-10 hover:border-blue-default">
                                                Get started
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium border border-transparent rounded-md text-yellow-default bg-green-dark hover:bg-yellow-default hover:text-blue-default hover:border-2 hover:border-blue-default md:py-4 md:text-lg md:px-10">
                                            Live Demo
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

            <div className="py-12 bg-green-default">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-yellow-default sm:text-4xl">
                            A secure way to invest
                        </p>
                        <p className="max-w-2xl mt-4 text-xl lg:mx-auto">
                            Nofomo will never sell any of your assets. We only
                            make purchases on your selected exchanges.
                        </p>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md text-yellow-default bg-blue-default">
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
                                    <dt className="text-lg font-medium leading-6 text-yellow-default">
                                        The best exchanges
                                    </dt>
                                    <dd className="mt-2 text-base ">
                                        We allow you to choose between the most
                                        popular exchanges. Add more here talking
                                        about how good the exchanges are
                                    </dd>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md text-yellow-default bg-blue-default">
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
                                    <dt className="text-lg font-medium leading-6 text-yellow-default">
                                        No hidden fees
                                    </dt>
                                    <dd className="mt-2 text-base">
                                        We will never charge you for any
                                        purchase you make.
                                    </dd>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md text-yellow-default bg-blue-default">
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
                                    <dt className="text-lg font-medium leading-6 text-yellow-default">
                                        Easy management
                                    </dt>
                                    <dd className="mt-2 text-base">
                                        Easily manage all your investments in
                                        your dashboard. You can control which of
                                        your accounts you want to start saving
                                        with and you can choose your preferred
                                        exchange(s).
                                    </dd>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md text-yellow-default bg-blue-default">
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
                                    <dt className="text-lg font-medium leading-6 text-yellow-default">
                                        Another topic
                                    </dt>
                                    <dd className="mt-2 text-base">
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

            <div className="bg-green-light">
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-green-dark">
                            Start today.
                        </span>
                    </h2>
                    <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium border border-transparent rounded-md text-yellow-default bg-blue-default hover:bg-green-default hover:text-blue-default hover:border-2 hover:border-blue-default"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="inline-flex ml-3 rounded-md shadow">
                            <a
                                href="/faq"
                                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium border rounded-md border-green-dark text-yellow-default bg-green-dark hover:bg-yellow-default hover:text-blue-default hover:border-blue-default"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

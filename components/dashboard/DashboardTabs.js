import FiatAccountList from "../fiat/FiatAccountList";
import Exchanges from "../exchange/ExchangeItem";
import React from "react";

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none"
                        role="tablist"
                    >
                        <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
                            <a
                                className={
                                    "text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? `text-green-default bg-blue-default border-2 border-green-default`
                                        : `text-blue-default bg-green-default`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                <i className="mr-1 text-base fas fa-space-shuttle"></i>{" "}
                                Current Investments
                            </a>
                        </li>
                        <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? `text-green-default bg-blue-default border-2 border-green-default`
                                        : `text-blue-default bg-green-default`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                <i className="mr-1 text-base fas fa-cog"></i>{" "}
                                Fiat Accounts
                            </a>
                        </li>
                        <li className="flex-auto mr-2 -mb-px text-center last:mr-0">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? `text-green-default bg-blue-default border-2 border-green-default`
                                        : `text-blue-default bg-green-default`)
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                <i className="mr-1 text-base fas fa-briefcase"></i>{" "}
                                Exchanges
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg bg-blue-default">
                        <div className="flex-auto px-4 py-5">
                            <div className="tab-content tab-space">
                                <div
                                    className={
                                        openTab === 1 ? "block" : "hidden"
                                    }
                                    id="link1"
                                ></div>
                                <div
                                    className={
                                        openTab === 2 ? "block" : "hidden"
                                    }
                                    id="link2"
                                >
                                    <FiatAccountList />
                                </div>
                                <div
                                    className={
                                        openTab === 3 ? "block" : "hidden"
                                    }
                                    id="link3"
                                >
                                    <Exchanges />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function DashboardTabs() {
    return (
        <>
            return <Tabs />;
        </>
    );
}

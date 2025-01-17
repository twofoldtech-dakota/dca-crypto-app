import "@styles/globals.css";
import React from "react";

function Application({ Component, pageProps }) {
    return (
        <div className="w-full min-h-screen font-sans text-blue-default bg-green-default">
            <div className="mx-auto">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default Application;

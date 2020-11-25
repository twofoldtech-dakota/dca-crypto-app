import "@styles/globals.css";

function Application({ Component, pageProps }) {
    return (
        <div className="w-full min-h-screen bg-indigo-600">
            <div className="mx-auto">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default Application;

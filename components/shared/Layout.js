import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";
import React from "react";
import { useRouter } from "next/router";

export default class Layout extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>{this.props.title}</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navigation />
                <main>{this.props.children}</main>
                <Footer />
            </>
        );
    }
}

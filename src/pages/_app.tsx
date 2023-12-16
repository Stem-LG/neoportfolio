import "@/styles/globals.css";

import BottomNavBar from "@/components/bottomnavbar";
import OpenPagesBar from "@/components/openpagesbar";
import SideBar from "@/components/sidebar";
import Titlebar from "@/components/titlebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Louay Ghanney</title>
                <meta
                    name="description"
                    content="I am a Developer with passion for all types of programming, with special experience in Next.JS ."
                />
                <meta name="author" content="Louay Ghanney" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className={mono.className + " bg-background  text-primary"}>
                <header className="flex border-b sticky top-0 bg-base-100 border-primary h-[60px]">
                    <Titlebar />
                    <OpenPagesBar />
                </header>
                <div className="flex min-h-[calc(100svh-120px)]">
                    <SideBar />
                    <Component {...pageProps} />
                </div>
                <footer className="h-[60px] bg-background sticky bottom-0 border-t border-primary md:hidden">
                    <BottomNavBar />
                </footer>
            </div>
        </>
    );
}

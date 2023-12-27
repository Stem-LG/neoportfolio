import "@/styles/globals.css";

import BottomNavBar from "@/components/bottomnavbar";
import OpenPagesBar from "@/components/openpagesbar";
import SideBar from "@/components/sidebar";
import Titlebar from "@/components/titlebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import { description, fullName } from "@/content";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { currentPage, pageHistory } from "@/globalstate";
import { pages } from "@/lib/pagesinfo";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"] });

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const index = pages.findIndex((page) => page.pathname == "/" + router.pathname.split("/")[1]);
        pageHistory.value = [{ idx: index, path: router.pathname }];
        currentPage.value = index;
    }, []);

    return (
        <>
            <Head>
                <title>{fullName}</title>
                <meta name="description" content={description} />
                <meta name="author" content={fullName} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className={mono.className + " bg-background  text-primary pb-[60px] md:pb-0"}>
                <header className="flex border-b sticky top-0 bg-base-100 border-primary h-[60px] z-50">
                    <Titlebar />
                    <OpenPagesBar />
                </header>
                <div className="flex flex-col md:flex-row min-h-[calc(100svh-120px)]">
                    <SideBar />
                    <Component {...pageProps} />
                    <footer className="h-[60px] w-full bg-background fixed -bottom-[1px] border-t border-primary md:hidden z-50">
                        <BottomNavBar />
                    </footer>
                </div>
            </div>
        </>
    );
}

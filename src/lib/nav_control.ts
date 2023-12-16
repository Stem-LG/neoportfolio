import { currentPage, pageHistory } from "@/globalstate";
import Router from "next/router";
import { pages } from "./pagesinfo";


export function navigate(idx: number) {

    Router.push(pages[idx].pathname)
    currentPage.value = idx

    if (!pageHistory.value.includes(idx)) {
        pageHistory.value.push(idx)
    }
}

export function closePage(idx: number) {

    if (pageHistory.value.length === 1) {
        return
    }

    pageHistory.value = pageHistory.value.filter((val) => val !== idx)
    if (currentPage.value === idx) {
        navigate(pageHistory.value[pageHistory.value.length - 1])
    }
}

import { currentPage, pageHistory } from "@/globalstate";
import Router from "next/router";
import { pages } from "./pagesinfo";


export function navigate(path: string) {

    console.log(path)

    Router.push(path)
    const idx = pages.findIndex((val) => val.pathname == "/" + path.split("/")[1])
    currentPage.value = idx

    if (!pageHistory.value.some((val) => val.idx === idx)) {
        pageHistory.value.push({ idx, path })
    }

    //overwrite the path if it already exists
    pageHistory.value = pageHistory.value.map((val) => {
        if (val.idx === idx) {
            return { idx, path }
        }
        return val
    })

    console.log(pageHistory.value)
}

export function closePage(idx: number) {

    if (pageHistory.value.length === 1) {
        return
    }

    pageHistory.value = pageHistory.value.filter((val) => val.idx !== idx)
    if (currentPage.value === idx) {
        navigate(pageHistory.value[pageHistory.value.length - 1].path)
    }
}

import { pages } from "@/lib/pagesinfo";
import { currentPage, pageHistory } from "@/globalstate";
import { closePage, navigate } from "@/lib/nav_control";

export default function OpenPagesBar() {
    return (
        <div className="hidden sm:flex items-center px-4 gap-3 border-l overflow-x-scroll no-scrollbar border-primary z-50">
            {pageHistory.value.map((page, idx) => {
                return (
                    <div key={idx} className={`btn btn-sm ${currentPage.value == page && "btn-primary"} py-0 flex outline outline-1 outline-primary pr-[0.2rem]`}>
                        <button
                            onClick={() => {
                                navigate(page);
                            }}
                            key={idx}
                            className="h-full"
                        >
                            {pages[page].title}
                        </button>
                        <button
                            className={`btn btn-xs btn-square hover:btn-primary ${currentPage.value == page && "text-primary-content hover:bg-primary"}`}
                            onClick={() => {
                                closePage(page);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                                />
                            </svg>
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

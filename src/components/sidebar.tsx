import { navigate } from "@/lib/nav_control";
import { pages } from "@/lib/pagesinfo";

export default function SideBar() {
    return (
        <aside className="hidden h-[calc(100vh-60px)] min-w-[301px] p-[15px] border-r border-primary sticky top-[60px] md:block">
            <div>
                {pages.map((page, idx) => (
                    <button
                        key={idx}
                        className="btn btn-sm flex items-center justify-start mb-3 w-full"
                        onClick={() => {
                            navigate(idx);
                        }}
                    >
                        <page.icon variant="small" />
                        <h2 className="ml-[10px] text-[17px]">{page.title}</h2>
                    </button>
                ))}
            </div>
        </aside>
    );
}

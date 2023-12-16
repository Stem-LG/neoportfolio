import { navigate } from "@/lib/nav_control";
import { pages } from "@/lib/pagesinfo";

export default function BottomNavBar() {
    const activePage = { value: 1 };

    return (
        <nav className="flex h-full bg-base-100 items-center justify-evenly">
            {pages.map((page, idx) => (
                <button
                    key={idx}
                    className="btn btn-md btn-ghost sm:w-24 w-16"
                    onClick={() => {
                        navigate(idx);
                    }}
                >
                    <page.icon />
                </button>
            ))}
        </nav>
    );
}

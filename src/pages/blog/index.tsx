import { navigate } from "@/lib/nav_control";
import { getBlogs } from "@/lib/strapi";


export default function Blog({ blogs }) {
    return (
        <div className="pt-5 w-full">
            <h1 className="w-fit mx-auto text-2xl sm:text-4xl">My Blog</h1>
            <div className="max-w-[1600px] w-full mx-auto px-5 flex flex-wrap justify-center h-fit py-5 gap-5">
                {blogs.map(({ title, author, date, slug }, idx) => (
                    <div
                        key={idx}
                        className="max-w-[380px] w-full rounded-[5px] border border-solid border-current p-4 pb-12 relative"
                    >
                        <div className=" flex justify-between gap-4">
                            <h3 className="text-[20px]">{title}</h3>
                            <button className="p-[5px]" onClick={() => navigate("/blog/" + slug)}>
                                <svg width="32" height="32" viewBox="0 -960 960 960" className="fill-primary">
                                    <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                                </svg>
                            </button>
                        </div>
                        <p className="py-2.5 grow font-extralight">
                            <span className="font-bold">Author:</span> {author}
                        </p>
                        <div className="flex gap-2 absolute bottom-4">
                            <div className="hover:cursor-pointer bg-base-300 rounded-[5px] p-[5px] text-[14px]">
                                {date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const blogs = await getBlogs();

    return {
        props: {
            blogs,
        },
    };
}

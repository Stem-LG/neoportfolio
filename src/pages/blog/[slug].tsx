import { navigate } from "@/lib/nav_control";
import { getBlogs } from "@/lib/strapi";
import { Blog } from "@/lib/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BlogPost({ blog }: { blog: Blog }) {
    return (
        <div className="w-full p-5">
            <button
                onClick={() => navigate("/blog")}
                className="btn btn-ghost border-primary hover:border-primary btn-sm mb-5"
            >
                {"< Blogs"}
            </button>
            <h1 className="text-4xl mb-5">{blog.title}</h1>
            <p className="text-sm">Publish date: {blog.date}</p>
            <p className="text-sm mb-5">Author: {blog.author}</p>
            <BlocksRenderer content={blog.content} />
        </div>
    );
}

export async function getStaticPaths() {
    const Blogs = await getBlogs();
    return {
        paths: Blogs.map((blog) => ({ params: { slug: blog.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    let blog = await fetch(process.env.STRAPI_URL + "/api/slugify/slugs/blog/" + params.slug, {
        headers: {
            authorization: "Bearer " + process.env.STRAPI_API_TOKEN,
        },
    }).then((res) => res.json());
    blog = blog["data"]["attributes"];
    return {
        props: {
            blog: {
                slug: blog["slug"],
                title: blog["title"],
                date: blog["publishedAt"],
                author: blog["author"],
                content: blog["content"],
            },
        },
    };
}

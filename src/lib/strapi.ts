export async function getBlogs() {

    let res = await fetch(`${process.env.STRAPI_URL}/api/blogs`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`
        }
    })

    res = await res.json()

    return res["data"].map(({ attributes: { title, slug, author, publishedAt } }) => {
        return {
            title,
            slug,
            author,
            date: publishedAt
        }
    })
    
}
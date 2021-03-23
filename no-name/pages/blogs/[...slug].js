import { useRouter } from "next/router"

const BlogPost = () => {
    const { query } = useRouter()

    console.log({ query })

    return (
        <section>
            BlogPost
        </section>
    )
}

export default BlogPost
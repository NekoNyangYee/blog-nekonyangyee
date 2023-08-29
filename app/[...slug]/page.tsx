import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { format } from "date-fns";

import { StyledPost } from "./style";
import Giscus from "@/Components/Giscus";
import ScrollProgressBar from "@/Components/ScrollProgressBar";
import ContentHeader from "@/Components/ContentHeader";
import CopiedUrl from "@/Components/CopiedURL";

export const generateStaticParams = async () => allPosts.map((post) => ({ params: { slug: post._raw.flattenedPath.split('/') } }))

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
    const slug = params.slug.join('/');
    const post = allPosts.find((post) => post._raw.flattenedPath === slug)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            type: "website",
            url: "https://nekonyangyee-blog.vercel.app/",
            title: post.title,
            description: post.description,
            siteName: "nekonyangyee-blog",
        },
        twitter: {
            card: "summary_large_image",
            site: "https://nekonyangyee-blog.vercel.app/",
            title: post.title,
            description: post.description,
        },
    }
}

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
    const slug = params.slug.join('/');
    const post = allPosts.find((post) => post._raw.flattenedPath === slug)

    if (!post) {
        notFound()
    }

    const Content = getMDXComponent(post.body.code)

    return (
        <StyledPost>
            <ContentHeader {...post} />
            <ScrollProgressBar />
            <div className="post-container">
                <article>
                    <p className="category-state">{post.category}</p>
                    <h1 className="post-title">{post.title}</h1>
                    <time dateTime={post.date}>게시 날짜: {format(new Date(post.date), "yyyy-MM-dd")}</time>
                    <hr />
                    <Content />
                    <CopiedUrl url={post} />
                    <Giscus />
                </article>
            </div>
        </StyledPost>
    )
}

export default PostLayout;
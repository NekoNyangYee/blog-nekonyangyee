import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";

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
            url: "https://blog-nekonyangyee.vercel.app",
            title: post.title,
            description: post.description,
            siteName: "nekonyangyee-blog",
        },
        twitter: {
            card: "summary_large_image",
            site: "https://blog-nekonyangyee.vercel.app",
            title: post.title,
            description: post.description,
        },
    }
}

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
    const slug = params.slug.join('/');
    const sortedPosts = allPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    const currentIndex = sortedPosts.findIndex((p) => p._raw.flattenedPath === slug);
    const post = sortedPosts[currentIndex];

    if (!post) {
        notFound()
    }

    const Content = getMDXComponent(post.body.code);

    const previousPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
    const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

    const date = new Date();

    return (
        <StyledPost>
            <ContentHeader {...post} />
            <ScrollProgressBar />
            <div className="post-container">
                <article>
                    <p className="category-state">{post.category}</p>
                    <h1 className="post-title">{post.title}</h1>
                    <time dateTime={post.date}>게시 날짜: {format(new Date(post.date), "yyyy-MM-dd")} {post.date.slice(11, 16)}</time>
                    <hr />
                    <Content />
                    <CopiedUrl />
                    {previousPost && (
                        <Link href={`/${previousPost._raw.flattenedPath}`}>
                            <div className="next-prev-container">
                                <img src={previousPost.teaser} alt={previousPost.title} />
                                <span>
                                    이전글
                                    <p>{previousPost.title}</p>
                                    {previousPost.description}
                                </span>
                            </div>
                        </Link>
                    )}
                    {nextPost && (
                        <Link href={`/${nextPost._raw.flattenedPath}`}>
                            <div className="next-prev-container">
                                <img src={nextPost.teaser} alt={nextPost.title} />
                                <span>
                                    다음글
                                    <p>{nextPost.title}</p>
                                    {nextPost.description}
                                </span>
                            </div>
                        </Link>
                    )}
                    <Giscus />
                </article>
            </div>
        </StyledPost>
    )
}

export default PostLayout;
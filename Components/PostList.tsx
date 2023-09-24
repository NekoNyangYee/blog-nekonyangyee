"use client"

import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Introduce } from "./Intoduce";

const StyledFlexContainer = styled.div(() => `
    &.nav-container {
        position: fixed;
        top: 20px;
    }
`);

const StyledArticleContainer = styled.div(() => `
    width: 100%;
    margin: 0 40px 0 40px;
    margin-left: 320px;
    max-width: calc(100% - 320px);
    
    @media (max-width: 672px) {
        margin: 0;
        max-width: 100%;
    }
`);

const NavContainer = styled.div(({ theme }) => `
    position: fixed;
    width: 250px;
    height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 15px 0 0;
    background-color: ${theme.colors.background(100)};
    

    & svg {
        width: 48px;
    }

    & .page-title {
        font-size: 22px;
    }

    & p {
        margin-bottom: 40px;
        text-align: center;
        font-size: 12px;
        color: ${theme.colors.text(60)};
    }

    & .social-container {
        margin-top: 20%;
        display: flex;
        align-items: flex-start;
        gap: 16px;
        justify-content: center;
    }

    & button {
        opacity: 0.5;
        transition: all .3s ease;
    }

    & .active {
        opacity: 1;
    }

    @media (max-width: 672px) {
        display: none;
    }
`);

const StyledPost = styled.div(({ theme }) => `
    & .post-container {
        width: 100%;
        display: grid;
        column-gap: 20px;
        grid-template-columns: repeat(3, 1fr);
        max-width: 100%;
        margin: 0 auto;
        gap: 20px;
        padding: 10px 0;
        transition: all 0.3s ease;

        @media (max-width: 1472px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 872px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    & .post-container.grid-view {
        width: 100%;

        & .post-main-title {
            display: block;
            font-size: 18px;
            word-break: break-all;
            margin: 0;

            @media (max-width: 1272px) {
                font-size: 15px;
            }
            
            @media (max-width: 672px) {
                font-size: 20px;
            }
        }

        & .article-container {
            border: 1px solid ${theme.colors.text(10)};
            border-radius: 12px;
            overflow: hidden;
            padding: 0;

            & .article-info {
                padding: 16px;
            }
        }
    }

    & .post-container.list-view {
        display: flex;
        flex-direction: column;
        gap: 0;

        & img {
            display: block;
            width: 90px;
            height: 90px;
            object-fit: cover;
            display: flex;
            align-items: center;
            margin: 20px 10px;
            border-radius: 12px;
        }

        & article {
            width: 100%;
        }

        & .description-area {
            display: flex;
            gap: 20px;
        }

        & .post-description {
            display: none;
        }

        & .post-main-title {
            display: block;
            max-width: 100%;
            font-size: 18px;
            font-weight: bold;
            color: ${theme.colors.text()};
            word-break: break-all;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            @media (max-width: 1572px) {
                font-size: 15px;
                max-width: 100%;
            }

            @media (max-width: 1372px) {
                font-size: 15px;
                max-width: 400px;
            }
            
            @media (max-width: 932px) {
                font-size: 17px;
                max-width: 250px;
            }

            @media (max-width: 932px) {
                font-size: 17px;
                max-width: 200px;
            }
        }

        & .article-container {
            margin: 6px 0;
            & .article-info {
                padding: 10px 0;
            }
        }
    }

    & a {
        text-decoration: none;
        color: ${theme.colors.text()};
    } 
    
    & input {
        width: 100%;
        font-size: 13px;
        padding: 14px;
        border: none;
        border-radius: 12px;
        background-color: ${theme.colors.background(100)};
        border: 1px solid ${theme.colors.text(10)};

            @media (max-width: 972px) {
                width: 50%;
            }

            @media (max-width: 672px) {
                width: 100%;
            }

            @media (min-width: 672px) {
                display: none;
            }
        }

    & .select-category {
        font-size: 19px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        margin: 20px 0 10px 0;
        padding: 12px 0 12px 0;
       
        & button {
            background-color: ${theme.colors.background(100)};
            color: ${theme.colors.buttonText()};
            border: 1px solid ${theme.colors.text(10)};
            border-radius: 12px;
            margin: 0;
            padding: 0 11px;
            cursor: pointer;
        }

        & p {
            margin: 0;
            padding: 8px 0;
        }
    }

    & .pagination-controls {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0 20% 0;

        & button {
            margin: 0 16px 0 16px;
            padding: 2px 15px 2px 15px;
            border: none;
            border-radius: 12px;
            font-weight: bold;
            color: ${theme.colors.background()};
            background-color: ${theme.colors.text()};
            cursor: pointer;
            font-size: 13px;
        }

        & .active {
            background-color: ${theme.colors.text()};
            color: ${theme.colors.background()};
            font-weight: bold;
        }

        & button[disabled] {
            font-weight: normal;
            background-color: ${theme.colors.background()};
            visibility: hidden;
        }

        & span {
            color: ${theme.colors.text(80)};
            font-size: 18px;
        }

        & svg {
            position: relative;
            top: 2px;
            width: 10px;
        }

        & rect {
            fill: ${theme.colors.background(100)};
        }
    } 
    
    & article {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .post-description {
            color: ${theme.colors.text(80)};
        }

        & p {
            margin: 8px 0;
            color: ${theme.colors.text(80)};
        }   
    }

    & .page-title-mobile {
        font-size: 22px;
        display: block;

        @media (min-width: 672px) {
            display: none;
        }
    }

    & .category-container-moblie {
        width: 100%;
        display: flex;
        gap: 14px;
        margin: 20px 0 20px 0;
        overflow-x: auto;
        
        @media (min-width: 672px) {
            display: none;
        }

        & button {
            padding: 12px;
            display: flex;
            border-radius: 12px;
            font-size: 14px;
            opacity: 0.5;
            color: ${theme.colors.text()};
            border: 1px solid ${theme.colors.text(10)};
            background-color: ${theme.colors.background(100)};
            transition: all .1s;
            cursor: pointer;
            white-space: nowrap; /* 추가 */
            text-overflow: ellipsis; /* 추가 */
        }
    
        & .active {
            opacity: 1;
            border: none;
            font-weight: bold;
            color: ${theme.colors.text()};
            background-color: ${theme.colors.gray(30)};
        }
    }

    & .category-container::-webkit-scrollbar {
        display: none; 
    }

    & .page-numbers {
        & button {
            margin: 0 6px;
            padding: 12px 17px;
            background: none;
            border: 1px solid ${theme.colors.text(10)};
            color: ${theme.colors.text()};
            cursor: pointer;
            font-weight: normal;
        }
    }

    & .article-container {
        border: 1px solid ${theme.colors.text(10)};
        border-radius: 12px;
        overflow: hidden;
        padding: 0;
    }

    & .category-state {
        display: inline-block;
        font-weight: bold;
        background-color: ${theme.colors.background(100)};
        border: 1px solid ${theme.colors.text(10)};
        border-radius: 10px;
        padding: 8px;
        font-size: 11px;
        margin: 8px 0;
        color: ${theme.colors.text()};
    }
`);

const StyledCategory = styled.div(({ theme }) => `
    & button {
        width: 100%;
        height: 50px;
        padding: 15px 20px;
        display: flex;
        border-radius: 12px;
        font-size: 14px;
        color: ${theme.colors.text()};
        border: none;
        transition: all .1s;
        cursor: pointer;
        background-color: ${theme.colors.background(100)};
    }

    & .active {
        font-weight: bold;
        color: ${theme.colors.text(100)};
        background-color: ${theme.colors.gray(20)};
    }
`);

const StyledInput = styled.input(({ theme }) => `
    width: 100%;
    font-size: 13px;
    padding: 14px;
    border: none;
    border-radius: 12px;
    background-color: ${theme.colors.background(100)};
    border: 1px solid ${theme.colors.text(10)};

    @media (max-width: 572px) {
        width: 100%;
    }
`);

const SortCategory = styled.div(({ theme }) => `
    padding: 0;
    display: flex;
    justify-content: space-between;

    & .select-container {
        position: relative;
    }

    & svg {
        position: relative;
        width: 18px;
        top: 1px;
        transform: msFilter:;
    }

    & rect {
        background-color: ${theme.colors.background(100)};
        fill: none;
        stroke: ${theme.colors.gray()};
    }
`);

export interface Post {
    _id: any;
    url: string;
    teaser: string;
    title: string;
    category: string;
    description: string;
    date: string;
}

const PostList = ({ allPosts }: { allPosts: any }) => {
    const [selectCategory, setSelectCategory] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [viewMode, setViewMode] = useState<string>('grid');

    useEffect(() => {
        const pageToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
        pageToTop();
    }, [page]);

    useEffect(() => {
        const storedViewMode = localStorage.getItem('viewMode');
        if (storedViewMode) {
            setViewMode(storedViewMode);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('viewMode', viewMode);
    }, [viewMode]);

    const toggleViewMode = () => {
        setViewMode(prevViewMode => prevViewMode === 'grid' ? 'list' : 'grid');
    };

    const categories: { title: string; keyword: string }[] = [
        { title: "📄 전체", keyword: "" },
        { title: "💻 개발 일기", keyword: "💻 개발 일기" },
        { title: "⌨️ 프로그래머스", keyword: "⌨️ 프로그래머스" },
        { title: "✅ 이것저것 리뷰", keyword: "✅ 이것저것 리뷰" },
        { title: "😄 나의 일상", keyword: "😄 나의 일상" },
        { title: "✏️ 기타", keyword: "✏️ 기타" }
    ];

    const Posts = allPosts
        .sort((a: { date: Date }, b: { date: Date }) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .filter((post: { category: string | string[] }) =>
            selectCategory ? post.category.includes(selectCategory) : true
        )
        .filter((post: { title: string; description: string }) =>
            searchTerm === "" ? true :
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const postsPerPage = 9;
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    const paginatedPosts = Posts.slice(startIndex, endIndex);

    const handleCategoryChange = (category: string) => {
        setSelectCategory(category);
        setPage(1);
    };

    return (
        <StyledFlexContainer>
            <NavContainer>
                <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <path d="M34 68C43.0174 68 51.6654 64.4179 58.0416 58.0416C64.4179 51.6654 68 43.0174 68 34C68 24.9826 64.4179 16.3346 58.0416 9.95837C51.6654 3.58214 43.0174 1.75575e-06 34 0L34 9.0066C40.6287 9.0066 46.9858 11.6398 51.673 16.327C56.3602 21.0142 58.9934 27.3713 58.9934 34C58.9934 40.6287 56.3602 46.9858 51.673 51.673C46.9858 56.3602 40.6287 58.9934 34 58.9934L34 68Z" fill="black" />
                    <rect x="22" y="9" width="12" height="12" fill="black" />
                    <rect x="22" y="31" width="8" height="8" fill="black" />
                    <rect x="12" y="21" width="10" height="10" fill="black" />
                    <rect x="22" y="54" width="6" height="6" fill="black" />
                    <rect x="12" y="40" width="6" height="6" fill="black" />
                    <rect x="18" y="50" width="4" height="4" fill="black" />
                    <rect x="10" y="56" width="4" height="4" fill="black" />
                    <rect x="28" y="46" width="8" height="8" fill="black" />
                </svg>

                <StyledCategory>
                    <StyledInput
                        type="search"
                        placeholder="키워드 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <h1 className="page-title">카테고리</h1>
                    <div className="category-container">
                        {categories.map(category => (
                            <button
                                type="button"
                                onClick={() => handleCategoryChange(category.keyword)}
                                key={category.keyword}
                                className={selectCategory === category.keyword ? "active" : ""}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </StyledCategory>

                <div className="social-container">
                    <Link href="https://www.instagram.com/_nekokim_/">
                        <div className="content-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                            </svg>
                        </div>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100010060443473">
                        <div className="content-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                            </svg>
                        </div>
                    </Link>
                    <Link href="https://github.com/NekoNyangYee">
                        <div className="content-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
                <p>Copyright ©2023 NekoNyangYee All rights reserved.</p>

            </NavContainer>

            <StyledArticleContainer>
                <StyledPost>
                    <Introduce />
                    <h1 className="page-title-mobile">카테고리</h1>
                    <div className="category-container-moblie">
                        {categories.map((category) => (
                            <button
                                type="button"
                                onClick={() => setSelectCategory(category.keyword)}
                                onMouseDown={() => handleCategoryChange(category.keyword)} // 모바일 디바이스에서 터치 이벤트 처리
                                key={category.keyword}
                                className={selectCategory === category.keyword ? "active" : ""}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                    <input
                        type="search"
                        placeholder="키워드 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="select-category">
                        <p>{selectCategory === "" ? "📄 전체" : `${selectCategory}`} ({Posts.length})</p>
                        <SortCategory>
                            <button onClick={toggleViewMode}>{viewMode === 'grid' ? <svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                                <rect x="1" y="1" width="13" height="13" rx="3" stroke="black" strokeWidth="2" />
                                <rect x="1" y="20" width="13" height="13" rx="3" stroke="black" strokeWidth="2" />
                                <rect x="19" y="20" width="13" height="13" rx="3" stroke="black" strokeWidth="2" />
                                <rect x="19" y="1" width="13" height="13" rx="3" stroke="black" strokeWidth="2" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
                                <rect x="1" y="1" width="13" height="13" rx="3" stroke="black" stroke-width="2" />
                                <rect x="18.5" y="2.5" width="14" height="1" rx="0.5" stroke="black" strokeLinejoin="round" />
                                <rect x="18.5" y="11.5" width="14" height="1" rx="0.5" stroke="black" strokeLinejoin="round" />
                                <rect x="0.5" y="20.5" width="32" height="1" rx="0.5" stroke="black" strokeLinejoin="round" />
                                <rect x="0.5" y="29.5" width="32" height="1" rx="0.5" stroke="black" strokeLinejoin="round" />
                            </svg>}
                            </button>
                        </SortCategory>
                    </div>
                    <div className={`post-container ${viewMode === "list" ? "list-view" : "grid-view"}`}>
                        {paginatedPosts.map((post: Post) => (
                            <div className="article-container">
                                <Link href={post.url} key={post._id}>
                                    <article key={post._id}>
                                        <div className="description-area">
                                            <img src={post.teaser} alt={post.title} />
                                            <div className="article-info">
                                                <p className="category-state">{post.category}</p>
                                                <h1 className="post-main-title">{post.title}</h1>
                                                <p>{post.date.slice(0, 10)}</p>
                                                <p className="post-description">{post.description}</p>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="pagination-controls">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32" fill="none">
                                <rect x="2.82842" y="13.0659" width="21.8165" height="4" transform="rotate(45 2.82842 13.0659)" fill="black" />
                                <rect x="18.7332" y="2.83157" width="22.4849" height="4.00443" transform="rotate(135 18.7332 2.83157)" fill="black" />
                            </svg>
                        </button>
                        <div className="page-numbers">
                            {Array.from({ length: Math.ceil(Posts.length / postsPerPage) }, (_, index) => index + 1).map((pageNum) => (
                                <button
                                    key={pageNum}
                                    className={page === pageNum ? "active" : ""}
                                    onClick={() => setPage(pageNum)}
                                >
                                    {pageNum}
                                </button>
                            ))}
                        </div>
                        <button
                            disabled={endIndex >= Posts.length}
                            onClick={() => setPage(page + 1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="32" viewBox="0 0 19 32">
                                <rect x="15.9048" y="18.255" width="21.8165" height="4" transform="rotate(-135 15.9048 18.255)" />
                                <rect y="28.4894" width="22.4849" height="4.00443" transform="rotate(-45 0 28.4894)" />
                            </svg>
                        </button>

                    </div>
                </StyledPost>
            </StyledArticleContainer>
        </StyledFlexContainer>
    );
}

export default PostList;
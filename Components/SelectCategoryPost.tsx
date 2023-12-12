"use client"

import Link from "next/link";
import { Post, allPosts } from "contentlayer/generated";
import styled from "@emotion/styled";
import { format } from "date-fns";

const StyledSelectCategoryPost = styled.div(({ theme }) => `
  margin: 0 auto;
  
  & .selectCategory-post-container{
    max-width: 752px;
    width: 100%;
    display: grid;
    column-gap: 20px;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 872px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 572px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  & .category-post-container {
    transition: all .2s ease;

    &:active {
      transform: scale(0.95);
    }
  }

  & a {
    text-decoration: none;
    color: ${theme.colors.text()};
  }

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }

  & h1 {
    font-size: 20px;
  }

  & h2 {
    word-break: break-all;
    font-size: 18px;

    @media (max-width: 572px) {
      font-size: 16px;
    }
  }
`);

interface SelectCategoryPostProps {
  category: string;
}

const SelectCategoryPost = ({ category }: SelectCategoryPostProps) => {
  const categoryPosts: Post[] = allPosts.filter((post) => post.category === category);

  return (
    <StyledSelectCategoryPost>
      <h1>"{category}"의 다른 게시물</h1>
      <div className="selectCategory-post-container">
        {categoryPosts.map((post) => (
          <Link href={`/${post._raw.flattenedPath}`}>
            <div key={post._id} className="category-post-container">
              <img src={post.teaser} alt={post.title} />
              <h2>{post.title}</h2>
              <time dateTime={post.date}>{format(new Date(post.date), "yyyy년 MM월 dd일")}</time>
            </div>
          </Link>
        ))}
      </div>
    </StyledSelectCategoryPost>
  );
};

export default SelectCategoryPost;
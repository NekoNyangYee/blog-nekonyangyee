import Link from "next/link";
import { Post, allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import { StyledSelectCategoryPost } from "./style";

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
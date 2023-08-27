import PostList from "@/Components/PostList";
import StyledContent from "./style";
import { allPosts } from "contentlayer/generated";

const Home = () => {
  return (
    <StyledContent>
      <div className="contents-container">
        <div className="articles">
          <PostList allPosts={allPosts} />
        </div>
      </div>
    </StyledContent>
  );
};

export default Home;
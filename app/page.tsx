import PostList from "@/Components/PostList";
import StyledContent from "./style";
import { allPosts } from "contentlayer/generated";
import Header from "@/Components/Header";

const Home = () => {
  return (
    <StyledContent>
      <Header />
      <div className="contents-container">
        <div className="articles">
          <PostList allPosts={allPosts} />
        </div>
      </div>
    </StyledContent>
  );
};

export default Home;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostItem from "~/components/PostItem/PostItem";
import { getListPostsForMe } from "~/features/postSlice";

function Post() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.postForMe);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    (async () => {
      const action = getListPostsForMe();
      await dispatch(action);
    })();
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="max-w-[1140px] m-auto py-4">
      {posts.map((post, index) => {
        return <PostItem key={index} post={post} />;
      })}
    </div>
  );
}

export default Post;

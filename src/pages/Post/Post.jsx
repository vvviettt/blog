import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getOnePost } from "~/features/postSlice";

function Post() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("postId");
  useEffect(() => {
    (async () => {
      const action = getOnePost({ id: postId });
      await dispatch(action);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="max-w-[1140px] m-auto"></div>;
}

export default Post;

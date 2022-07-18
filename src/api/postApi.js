import axiosClient from "./axiosClient";

class PostApi {
  uploadImage = ({ file }) => {
    const url = "/upload";
    return axiosClient.post(url, { file });
  };

  uploadPost = ({ title, content }) => {
    const url = "/upload/post";
    return axiosClient.post(url, { title, content });
  };
  getListPostsForMe = () => {
    const url = `/user/posts`;
    return axiosClient.get(url);
  };

  deletePostsForMe = ({ id }) => {
    const url = `/user/post/delete`;
    return axiosClient.post(url, { id: id });
  };

  getPost = ({ id }) => {
    const url = `/user/post/getPost?id=${id}`;
    return axiosClient.get(url);
  };

  getOnePost = ({ id }) => {
    const url = `/user/post?id=${id}`;
    return axiosClient.get(url);
  };

  updatePost = ({ title, content, id }) => {
    const url = `/user/post/updatePost`;
    return axiosClient.post(url, { id: id, title: title, content: content });
  };
}

const postApi = new PostApi();
export default postApi;

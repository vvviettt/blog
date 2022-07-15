import { useState } from "react";
import { PostForm } from "~/components/forms";
import { toast } from "react-toastify";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      return toast.error("Tiêu đề đang trống");
    }
    if (!content) {
      return toast.error("Nội dung đang trống");
    }
  };

  return (
    <>
      <PostForm
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Write;

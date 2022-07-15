import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function PostForm({
  error,
  title,
  setTitle,
  content,
  setContent,
  handleSubmit,
}) {
  return (
    <form className="p-8" onSubmit={handleSubmit}>
      <div className="mb-5">
        <p className="mb-3">Tiêu đề</p>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="w-full outline-none border border-solid border-slate-500 px-2 py-2"
        />
      </div>
      <div className="mb-5">
        <p className="mb-3">Nội dung</p>
        <CKEditor
          config={{
            extraPlugins: [],
          }}
          editor={ClassicEditor}
          data={content}
          onChange={(e, editor) => {
            setContent(editor.getData());
          }}
        />
      </div>
      <button className="bg-blue-600 text-white px-3 py-2 rounded-md">
        Đăng tải
      </button>
    </form>
  );
}

export default PostForm;

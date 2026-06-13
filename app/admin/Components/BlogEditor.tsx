// ./Components/BlogEditor.tsx
"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type BlogEditorProps = {
  content: string;
  onContentChange: (value: string) => void;
};

export default function BlogEditor({
  content,
  onContentChange,
}: BlogEditorProps) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="rounded p-2 min-h-[200px]">
      <ReactQuill
        theme="snow"
        value={content}
        onChange={onContentChange}
        modules={modules}
        placeholder="Write your blog here..."
      />
    </div>
  );
}

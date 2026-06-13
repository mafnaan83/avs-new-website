"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { db, storage } from "@/app/FirebaseConfig";

// Load Tiptap Editor dynamically (client-side only)
const BlogEditor = dynamic(() => import("../../Components/BlogEditor"), {
  ssr: false,
});

export default function BlogPosts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const snapshot = await getDocs(collection(db, "categories"));
      const fetched = snapshot.docs.map((doc) => doc.data().name as string);
      setCategories(fetched);
    };
    fetchCategories();
  }, []);

  const addNewCategory = async () => {
    if (!newCategory.trim()) return;
    await addDoc(collection(db, "categories"), { name: newCategory.trim() });
    setNewCategory("");
    const snapshot = await getDocs(collection(db, "categories"));
    const fetched = snapshot.docs.map((doc) => doc.data().name as string);
    setCategories(fetched);
  };

  const handleImageUpload = async (): Promise<string | null> => {
    if (!imageFile) return null;
    const imageRef = ref(storage, `blogImages/${uuidv4()}_${imageFile.name}`);
    const snapshot = await uploadBytes(imageRef, imageFile);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  const handleSubmit = async () => {
    if (!title || !category || !content || !description) {
      toast("Please fill out the required fileds", {
        action: {
          label: "Cancel",
          onClick: () => console.log("Undo"),
        },
        classNames: {
          actionButton: "text-black",
        },
      });
      return;
    }

    setUploading(true);

    try {
      const imageURL = await handleImageUpload();

      await addDoc(collection(db, "blogs"), {
        title,
        category,
        content,
        description,
        imageURL: imageURL || "", // Save image URL if exists
        createdAt: new Date().toISOString(),
      });

      toast("Blog published succesfully", {
        action: {
          label: "Done",
          onClick: () => console.log("Undo"),
        },
        classNames: {
          actionButton: "!text-white !bg-green-600",
        },
      });
      setTitle("");
      setCategory("");
      setContent("");
      setDescription("");
      setImageFile(null);
    } catch (error) {
      console.error("Failed to upload or post:", error);
      toast("Soething went wrong", {
        action: {
          label: "Cancel",
          onClick: () => console.log("Undo"),
        },
        classNames: {
          actionButton: "text-black !bg-lime-600",
        },
      });
    }

    setUploading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Write a Blog</h1>

      <input
        type="text"
        placeholder="Blog Title"
        className="w-full border p-2 mb-4 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Blog Description"
        className="w-full border p-2 mb-4 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex items-center gap-4 mb-4">
        <select
          className="border p-2 rounded w-1/2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Add New Category"
          className="border p-2 rounded w-1/2"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          onClick={addNewCategory}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        className="mb-4"
        onChange={(e) => setImageFile(e.target.files?.[0] || null)}
      />

      {/* Blog Editor */}
      <BlogEditor content={content} onContentChange={setContent} />

      <button
        onClick={handleSubmit}
        disabled={uploading}
        className="mt-6 bg-green-600 text-white px-5 py-2 rounded disabled:opacity-50"
      >
        {uploading ? "Publishing..." : "Publish Blog"}
      </button>
    </div>
  );
}

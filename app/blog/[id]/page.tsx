import { db } from "@/app/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Destructure id after awaiting the promise
  const { id } = await params;

  const docRef = doc(db, "blogs", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return notFound();

  const blog = docSnap.data();

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-lg text-gray-500 mb-6">
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {blog.imageURL && (
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src={blog.imageURL}
            alt={blog.title || "Blog image"}
            fill
            className="object-cover rounded"
          />
        </div>
      )}

      <p className="text-lg text-gray-700 mb-6">{blog.description}</p>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}

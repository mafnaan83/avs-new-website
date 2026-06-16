// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import BlogCard from "./components/BlogCard";
// import WhiteButton from "@/components/ui/ButtonWhite";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../FirebaseConfig";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// type Blog = {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   content: string;
//   imageURL: string;
//   createdAt: string;
// };

// export default function BlogPage() {
//   const router = useRouter();
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");

//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const snapshot = await getDocs(collection(db, "blogs"));
//       const fetched: Blog[] = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...(doc.data() as Omit<Blog, "id">),
//       }));
//       setBlogs(
//         fetched.sort(
//           (a, b) =>
//             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         )
//       );
//       setLoading(false);
//     };

//     fetchBlogs();
//   }, []);

//   const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

//   const filteredPosts =
//     selectedCategory === "All"
//       ? blogs
//       : blogs.filter((blog) => blog.category === selectedCategory);

//   const latestBlog = blogs[0];

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-500">Loading...</p>
//         {/* Or add a fancy spinner / skeleton here */}
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen lg:px-18 px-5 bg-gray-50">
//       {/* Hero Section */}
//       {latestBlog && (
//         <div className="relative w-full lg:h-[500px] h-[280px]">
//           {latestBlog.imageURL && (
//             <Image
//               src={latestBlog.imageURL}
//               alt="Blog hero image"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-t-sm"
//             />
//           )}
//           <div className="absolute -bottom-3 left-0 rounded-b-sm h-3 bg-gradient-to-br from-blue-300 to-blue-500 w-full" />
//         </div>
//       )}

//       <p className="text-base text-green-600 pt-5">New</p>

//       {/* Latest Blog Highlight */}
//       {latestBlog && (
//         <div className="flex lg:flex-row flex-col justify-between lg:gap-8 pt-5">
//           <div className="basis-1/2 flex flex-col justify-between">
//             <h1 className="lg:text-4xl text-3xl lg:pb-6 pb-2 font-medium">
//               {latestBlog.title}
//             </h1>
//             <p>
//               {new Date(latestBlog.createdAt).toLocaleDateString("en-US", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </p>
//           </div>
//           <div className="mt-2 basis-2/3 flex flex-col justify-between">
//             <p className="text-base lg:mb-5 mb-3 max-w-xl line-clamp-3">
//               {latestBlog.description}
//             </p>
//             <WhiteButton
//               label="Read More"
//               showArrow
//               className="w-fit"
//               onClick={() => {
//                 router.push(`/blog/${latestBlog.id}`);
//               }}
//             />
//           </div>
//         </div>
//       )}

//       {/* Category Tabs */}
//       <div className="mt-16 mb-8 flex flex-wrap gap-4 justify-center">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
//               selectedCategory === category
//                 ? "bg-blue-600 text-white border-blue-600"
//                 : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Blog List */}
//       <div className="pb-16 px-4">
//         <div className="max-w-7xl mx-auto grid lg:gap-10 gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
//           {filteredPosts.map((post, idx) => (
//             <Link key={idx} href={`/blog/${post.id}`}>
//               <BlogCard
//                 date={new Date(post.createdAt).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//                 image={post.imageURL}
//                 key={idx}
//                 {...post}
//               />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { collection, getDocs } from "firebase/firestore";
// // import { db } from "../FirebaseConfig";
// // import Image from "next/image";
// // import WhiteButton from "@/components/ui/ButtonWhite";

// // type Blog = {
// //   id: string;
// //   title: string;
// //   category: string;
// //   content: string;
// //   imageURL?: string;
// //   createdAt: string;
// // };

// // export default function BlogsPage() {
// //   const [blogs, setBlogs] = useState<Blog[]>([]);

// //   useEffect(() => {
// //     const fetchBlogs = async () => {
// //       const snapshot = await getDocs(collection(db, "blogs"));
// //       const fetched: Blog[] = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...(doc.data() as Omit<Blog, "id">),
// //       }));
// //       setBlogs(
// //         fetched.sort(
// //           (a, b) =>
// //             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
// //         )
// //       );
// //     };

// //     fetchBlogs();
// //   }, []);

// //   return (
// //     <div className="max-w-4xl mx-auto px-4 py-10">
// //       <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>

// //       {blogs.length === 0 ? (
// //         <p>No blogs yet.</p>
// //       ) : (
// //         blogs.map((blog) => (
// //           <div key={blog.id} className="border-b pb-8 mb-10">
// //             {/* Blog Image */}
// //             {blog.imageURL ? (
// //               <Image
// //                 width={200}
// //                 height={200}
// //                 src={blog.imageURL}
// //                 alt={blog.title}
// //                 className="w-full h-auto max-h-[450px] object-cover rounded mb-4"
// //                 onError={(e) => {
// //                   e.currentTarget.style.display = "none";
// //                   console.error("Failed to load image:", blog.imageURL);
// //                 }}
// //               />
// //             ) : (
// //               <p className="text-gray-400 italic mb-4">No image uploaded</p>
// //             )}

// //             {/* Blog Title */}
// //             <h2 className="text-2xl font-semibold mb-1">{blog.title}</h2>

// //             {/* Blog Category */}
// //             <p className="text-sm text-gray-500 mb-3">
// //               Category: {blog.category}
// //             </p>

// //             {/* Blog Content (HTML from Tiptap) */}
// //             <div
// //               className="prose max-w-none"
// //               dangerouslySetInnerHTML={{ __html: blog.content }}
// //             />
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // }

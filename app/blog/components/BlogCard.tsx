// import Image from "next/image";

// type BlogCardProps = {
//   title: string;
//   description: string;
//   date: string;
//   image: string;
// };

// export default function BlogCard({
//   title,
//   description,
//   date,
//   image,
// }: BlogCardProps) {
//   return (
//     <div className="rounded-lg overflow-hidden p-5 shadow-lg bg-white mx-auto hover:shadow-xl transition-shadow">
//       <div className="relative h-50 sm:h-35 md:h-30 lg:h-80">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="w-full h-full object-cover rounded-sm"
//         />
//       </div>
//       <div className="pt-3">
//         <p className="text-base text-gray-400 mb-1">{date}</p>
//         <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
//         <p className="text-gray-600 text-lg leading-relaxed line-clamp-4">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

// import { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "@/app/FirebaseConfig";
// import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  //   const router = useRouter();
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (!user) {
  //         router.push("/admin/login"); // Not logged in, redirect
  //       } else {
  //         setLoading(false); // Authenticated
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, []);

  //   if (loading) {
  //     return <p className="text-center py-10">Loading...</p>;
  //   }

  return <div className="p-6">Welcome to Admin Dashboard</div>;
}

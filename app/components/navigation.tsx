"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        href={"/"}
        className={pathname === "/" ? "m-3 text-white" : "m-3 text-blue-500"}
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className={
          pathname === "/about" ? "m-3 text-white" : "m-3 text-blue-500"
        }
      >
        About
      </Link>
      <Link
        href={"/products/1"}
        className={
          pathname === "/products/1" ? "m-3 text-white" : "m-3 text-blue-500"
        }
      >
        Products
      </Link>
    </nav>
  );
};

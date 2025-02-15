"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-black h-[100px] text-white border-b-2 border-white flex justify-center">
      <div className=" flex justify-center items-center gap-10 font-bold text-[25px] h-full max-w-[600px]">
        <Link
          href={"/"}
          className={`${pathname === "/" ? "border-b-2 border-white" : ""}`}
        >
          홈
        </Link>
        <Link
          href={"/study"}
          className={`${
            pathname === "/study" ? "border-b-2 border-white" : ""
          }`}
        >
          스터디 클럽
        </Link>
        <Link
          href={"/lecture"}
          className={`${
            pathname === "/lecture" ? "border-b-2 border-white" : ""
          }`}
        >
          전체 강의
        </Link>
        <Link
          href={"/board"}
          className={`${
            pathname === "/board" ? "border-b-2 border-white" : ""
          }`}
        >
          게시판
        </Link>
      </div>
    </header>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js | 전체 강의",
  description: "Next.js | 전체 강의",
};

export default function Lecture() {
  return (
    <>
      <h1>최고의 튜터들의 강의를 수강하세요.</h1>
      <br />
      <ul>
        <li>
          <Link href={"/lecture/1"}>lecture 1</Link>
        </li>
        <li>
          <Link href={"/lecture/2"}>lecture 2</Link>
        </li>
        <li>
          <Link href={"/lecture/3"}>lecture 3</Link>
        </li>
      </ul>
    </>
  );
}

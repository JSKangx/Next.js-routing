import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js | 스터디 클럽",
  description: "Next.js | 스터디 클럽",
};

export default function Study() {
  return (
    <>
      <h1>스터디룸에 입장해보세요.</h1>
      <br />
      <ul>
        <li>
          <Link href={"/study/1"}>study 1</Link>
        </li>
        <li>
          <Link href={"/study/2"}>study 2</Link>
        </li>
        <li>
          <Link href={"/study/3"}>study 3</Link>
        </li>
      </ul>
    </>
  );
}

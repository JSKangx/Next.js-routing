"use client";
import { LectureProps } from "@/app/lecture/[lectureId]/page";
import { useRouter } from "next/navigation";

export default function LectureDetailClient({
  lectureId,
}: Awaited<LectureProps["params"]>) {
  const router = useRouter();
  const handleButtonClick = () => {
    router.back();
  };

  return (
    <>
      <button
        className="bg-slate-300 px-3 py-2 rounded-md"
        onClick={handleButtonClick}
      >
        {"<"}
      </button>
      {`${lectureId}번 강의실입니다.`}
    </>
  );
}

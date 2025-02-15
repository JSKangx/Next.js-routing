"use client";
import { StudyProps } from "@/app/study/[studyId]/page";
import { useRouter } from "next/navigation";

export default function StudyDetailClient({
  studyId,
}: Awaited<StudyProps["params"]>) {
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
      {`${studyId}번 스터디룸입니다.`}
    </>
  );
}

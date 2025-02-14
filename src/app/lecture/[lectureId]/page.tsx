// client component
import LectureDetailClient from "@/app/lecture/[lectureId]/LectureDetailClient";

export type LectureProps = {
  params: {
    lectureId: string;
  };
};

// 메타 데이터 설정
export function generateMetadata({ params }: LectureProps) {
  return {
    title: `Next.js | ${params.lectureId}번 강의실`,
    description: `${params.lectureId}`,
  };
}

export default function LectureDetail({ params }: LectureProps) {
  return <LectureDetailClient lectureId={params.lectureId} />;
}

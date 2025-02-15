// client component
import LectureDetailClient from "@/app/lecture/[lectureId]/LectureDetailClient";

export type LectureProps = {
  params: Promise<{
    lectureId: string;
  }>;
};

// 메타 데이터 설정
export async function generateMetadata({ params }: LectureProps) {
  const awaitedParams = await params;
  return {
    title: `Next.js | ${awaitedParams.lectureId}번 강의실`,
    description: `${awaitedParams.lectureId}`,
  };
}

export default async function LectureDetail({ params }: LectureProps) {
  const awaitedParams = await params;
  return <LectureDetailClient lectureId={awaitedParams.lectureId} />;
}

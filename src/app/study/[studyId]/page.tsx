import StudyDetailClient from "@/app/study/[studyId]/StudyDetailClient";

export type StudyProps = {
  params: Promise<{
    studyId: string;
  }>;
};

// 메타 데이터 설정
export async function generateMetadata({ params }: StudyProps) {
  const awaitedParams = await params;
  return {
    title: `Next.js | ${awaitedParams.studyId}번 스터디룸`,
    description: `${awaitedParams.studyId}번 스터디룸`,
  };
}

export default async function StudyDetail({ params }: StudyProps) {
  const awaitedParams = await params;
  return <StudyDetailClient studyId={awaitedParams.studyId} />;
}

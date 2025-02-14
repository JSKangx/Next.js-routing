import StudyDetailClient from "@/app/study/[studyId]/StudyDetailClient";

export type StudyProps = {
  params: {
    studyId: string;
  };
};

// 메타 데이터 설정
export function generateMetadata({ params }: StudyProps) {
  return {
    title: `Next.js | ${params.studyId}번 스터디룸`,
    description: `${params.studyId}번 스터디룸`,
  };
}

export default function StudyDetail({ params }: StudyProps) {
  return <StudyDetailClient studyId={params.studyId} />;
}

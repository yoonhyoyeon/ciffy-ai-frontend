import LectureReviewWrite from '@/container/LectureReviewWrite';
import { getLectureInfo } from '@/service/lecture';

export async function generateMetadata({params}) {
    const {id} = await params;
    const lecture = await getLectureInfo(id);
    return {
        title: `${lecture.title} - 후기 작성`
    }
}

export default async function LectureReviewWritePage({params}) {
    const {id} = await params;
    const lecture = await getLectureInfo(id);

    return (
        <LectureReviewWrite lecture={lecture} />
    )
}
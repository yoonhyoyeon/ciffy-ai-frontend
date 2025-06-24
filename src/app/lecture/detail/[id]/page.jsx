import LectureDetail from '@/container/LectureDetail';
import { getLectureInfo } from '@/service/lecture';

export async function generateMetadata({params}) {
    const {id} = await params;
    const lecture = await getLectureInfo(id);
    return {
        title: `${lecture.title} - 강의 후기`
    }
}
export default async function LectureDetailPage({params}) {
    const {id} = await params;

    return (
        <LectureDetail lectureId={id} />
    )
}
import TimetableCreateDetail from '@/container/TimetableCreateDetail';

export const metadata = {
    title: '시간표 상세'
}

const TimetableCreateDetailPage = ({params}) => {
    const { timetable_id } = params;
    return <TimetableCreateDetail timetableId={timetable_id} />;
}

export default TimetableCreateDetailPage;
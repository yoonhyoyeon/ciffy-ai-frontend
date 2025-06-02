import LectureSearch from "@/container/LectureSearch";

export async function generateMetadata({searchParams}) {
    const keyword = searchParams.keyword ? decodeURIComponent(searchParams.keyword) : '';
    return keyword ? {
        title: `${keyword} - 강의 검색`
    } : {
        title: '강의 검색'
    }
}

const LectureSearchPage = ({ searchParams }) => {
    const keyword = searchParams.keyword ? decodeURIComponent(searchParams.keyword) : '';
    const sort = searchParams.sort ? decodeURIComponent(searchParams.sort) : 'popular';
    return <LectureSearch keyword={keyword} sort={sort} />
}

export default LectureSearchPage;
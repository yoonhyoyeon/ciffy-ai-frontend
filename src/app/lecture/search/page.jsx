import LectureSearch from "@/container/LectureSearch";

export async function generateMetadata({searchParams}) {
    const params = await searchParams;
    const keyword = params?.keyword ? decodeURIComponent(params.keyword) : '';
    return keyword ? {
        title: `${keyword} - 강의 검색`
    } : {
        title: '강의 검색'
    }
}

const LectureSearchPage = async ({ searchParams }) => {
    const params = await searchParams;
    const keyword = params?.keyword ? decodeURIComponent(params.keyword) : '';
    const sort = params?.sort ? decodeURIComponent(params.sort) : 'popular';
    return <LectureSearch keyword={keyword} sort={sort} />
}

export default LectureSearchPage;
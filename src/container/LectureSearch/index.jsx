import styles from './index.module.css';
import SearchForm from './component/SearchForm';
import MyLectureSection from './component/MyLectureSection';
import LectureList from './component/LectureList';
import SortSelect from './component/SortSelect';
import { getLectures } from '@/service/lecture';
import NoResult from '@/component/NoResult';

const SearchResult = ({lectures, keyword, sort}) => {
    return (
        <div className={styles.searchResult}>
            <div className={styles.header}>
                <h1 className={styles.searchResultTitle}><span className={styles.keyword}>"{keyword}"</span>에 대한 검색 결과입니다.</h1>
                <SortSelect sort={sort} />
            </div>
            <LectureList lectures={lectures} />
        </div>
    )
}
const LectureSearch = async ({ keyword, sort }) => {
    const lectures = await getLectures({ keyword, sort });
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>강의후기</h1>
            <div className={styles.subtitle}>생생한 강의후기를 검색해보세요</div>
            <SearchForm initialKeyword={keyword} />
            <div className={styles.contentsSection}>
                {
                    keyword === '' ? 
                    <MyLectureSection myLectures={[]} sort={sort} /> : 
                    lectures.length > 0 ?
                    <SearchResult keyword={keyword} lectures={lectures} /> :
                    <NoResult message="검색 결과가 없어요" />
                }
            </div>
        </div>
    )
}

export default LectureSearch;
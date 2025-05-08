import styles from './index.module.css';
import TypedText from "./component/TypedText";
import Description from "./component/Description";
import DownArrow from "./component/DownArrow";

const Home = () => {
    return (
    <div className={styles.container}>
        <div className={styles.intro_area}>
            <div className={styles.contents}>
                <h2>귀찮았던 시간표 짜기는 이제 안녕 👋🏻</h2>
                <div className={styles.typed_container}>
                    <TypedText string="<h1>시간표의 새 패러다임, <span>시피</span>를 시작하세요</h1>" />
                </div>
                <img src="/images/img_timetable.png" />
            </div>
            <DownArrow />
        </div>
        <div className={styles.description_area}>
            <Description
                type="left"
                tag="시간표 짜기"
                title="내가 선호하는 방식으로"
                description="직접 수업을 선택하지 않아도 돼요. 시피는 오로지 선호하는 수업 방식과 당신의 특성에 맞는 시간표를 제작합니다."
                btn={{text: '시간표 짜러 가기', link: '/timetable/create/survey'}}
                image="/images/description-image-1.png"
            />
            <Description 
                type="right"
                tag="강의 후기"
                title="생생한 수강 후기"
                description="시피가 추천해준 강의의 수강후기를 확인하세요. 선이수자가 작성한 솔직하고 생생한 후기로 강의를 선택해보세요!"
                btn={{text: '강의 후기 작성하기', link: '/timetable/lecture'}}
                image="/images/description-image-2.png"
            />
            <Description 
                type="left"
                tag="졸업요건 분석"
                title="일일이 찾아볼 필요 없이"
                description="놓치기 쉬운 졸업 요건을 한눈에 보여드려요. 엑셀 파일 하나로 졸업 요건 분석을 완료할 수 있어요!"
                btn={{text: '졸업요건 분석하기', link: '/timetable/create/survey'}}
                image="/images/description-image-3.png"
            />
        </div>
    </div>
    );
};

export default Home;
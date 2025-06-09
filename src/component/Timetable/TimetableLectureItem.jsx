import styles from './index.module.css';

const TimetableLectureItem = ({data}) => {
    const { title, professor, room, day, startHour, endHour } = data;
    const style = {
        height: `${(endHour-startHour)*45}px`,
        top: `${(startHour-9)*45}px`
    }
    return (
        <div className={styles.item_container} style={style}>
            <span className={styles.name}>
                { title }
            </span>
            <span className={styles.subtxt}>
                { professor }<br />
                { room }
            </span>
        </div>
    );
}

export default TimetableLectureItem;
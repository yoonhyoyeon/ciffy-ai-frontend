'use client';
import styles from './index.module.css';
import { writeReviewAction } from '@/actions/review';
import RatingInput from './RatingInput';
import Button from '@/component/Button';
import { useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ReviewWriteForm = ({ lectureId }) => {
    const [state, formAction, isPending] = useActionState(writeReviewAction, null);
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            alert('후기가 성공적으로 등록되었습니다!');
            router.push(`/lecture/detail/${lectureId}`);
        } else if (state?.error) {
            alert(`후기 등록에 실패했습니다: ${state.error}`);
            router.refresh();
        }
    }, [state, router, lectureId]);

    return (
        <form className={styles.form} action={formAction}>
            <div className={styles.top_container}>
                <input type="hidden" name="lectureId" value={lectureId} />
                <div className={styles.input_item}>
                    <span className={styles.title}>학기</span>
                    <select name="semester" id="semester" required>
                        <option value="">학기 선택</option>
                        <option value="2025-1">25년 1학기</option>
                        <option value="2024-1">24년 1학기</option>
                        <option value="2024-2">24년 2학기</option>
                        <option value="2023-2">23년 2학기</option>
                        <option value="2023-1">23년 1학기</option>
                        <option value="2022-2">22년 2학기</option>
                    </select>
                </div>
                <RatingInput />
                <div className={styles.input_item}>
                    <span className={styles.title}>과제</span>
                    <input type="radio" id="assignment0" name="assignment" value="0" required />
                    <label className={styles.label_text} htmlFor="assignment0">없음</label>
                    <input type="radio" id="assignment1" name="assignment" value="1" required />
                    <label className={styles.label_text} htmlFor="assignment1">보통</label>
                    <input type="radio" id="assignment2" name="assignment" value="2" required />
                    <label className={styles.label_text} htmlFor="assignment2">많음</label>
                </div>
                <div className={styles.input_item}>
                    <span className={styles.title}>조모임</span>
                    <input type="radio" id="group0" name="group" value="0" required />
                    <label className={styles.label_text} htmlFor="group0">없음</label>
                    <input type="radio" id="group1" name="group" value="1" required />
                    <label className={styles.label_text} htmlFor="group1">보통</label>
                    <input type="radio" id="group2" name="group" value="2" required />
                    <label className={styles.label_text} htmlFor="group2">많음</label>
                </div>
                <div className={styles.input_item}>
                    <span className={styles.title}>성적</span>
                    <input type="radio" id="score0" name="score" value="0" required />
                    <label className={styles.label_text} htmlFor="score0">너그러움</label>
                    <input type="radio" id="score1" name="score" value="1" required />
                    <label className={styles.label_text} htmlFor="score1">보통</label>
                    <input type="radio" id="score2" name="score" value="2" required />
                    <label className={styles.label_text} htmlFor="score2">깐깐함</label>
                </div>
            </div>
            <div className={styles.textarea_container}>
                <label htmlFor="content" className={styles.title}>후기</label>
                <textarea 
                    name="content" 
                    id="content" 
                    placeholder="후기는 다른 수강생에게 큰 도움이 됩니다. 솔직하고 정중한 의견을 부탁드려요!" 
                    className={styles.textarea}
                    rows={10}
                    required
                />
            </div>
            <div className={styles.bottom_container}>
                <Button 
                    isFilled 
                    size="small" 
                    customStyles={{
                        backgroundColor: 'var(--color-blue-2-opacity-10)',
                        color: 'var(--color-blue-2)'
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        router.back();
                    }}
                >취소</Button>
                <Button 
                    type="submit"
                    isFilled 
                    size="small" 
                    disabled={isPending}
                >{isPending ? '후기 등록중...' : '후기 작성 완료'}</Button>
            </div>
        </form>
    )
}

export default ReviewWriteForm;
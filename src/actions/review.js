'use server';

import { authFetch } from '@/utils';

export async function writeReviewAction(prevState, formData) {
    if (!formData) {
        return { error: 'FormData가 제공되지 않았습니다.' };
    }
    
    try {
        const obj = {
            lectureId: formData.get('lectureId'),
            content: formData.get('content'),
            rating: Number(formData.get('rating')),
            semester: formData.get('semester'),
        };
        
        // formData.forEach((value, key) => obj[key] = value);
        console.log(obj);

        const res = await authFetch(`/api/reviews`, {
            method: 'POST',
            body: JSON.stringify(obj),
        });

        console.log('writeReviewAction: ', res);
        
        if (!res.ok) {
            return { error: res.statusText || '강의 후기를 작성하지 못했습니다.' };
        }
        
        const newReview = await res.json();
        return { success: true, data: newReview };
    } catch (error) {
        return { error: error.message };
    }
}
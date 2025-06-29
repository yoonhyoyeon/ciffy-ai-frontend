import { authFetch } from '@/utils';

const dummyReviews = [
    {
        id: 1,
        rating: 5,
        semester: '23년 1학기 수강자',
        content: '소녀더러 병이 좀 낫거들랑 이사 가기 전에 한 번 개울가로 나와 달라는 말을 못 해 둔 것이었다. 소녀의 흰 얼굴이, 분홍 스웨터가, 남색 스커트가, 안고 있는 꽃과 함께 범벅이 된다. 그 말에는 대꾸도 없이, 아버지는 안고 있는 닭의 무게를 겨냥해 보면서, 이만하면 될까. 어머니가 망태기를 내주며, 벌써 며칠째 걀걀 하고 알 날 자리를 보던데요.',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: 2,
        rating: 4,
        semester: '23년 1학기 수강자',
        content: '그 말에는 대꾸도 없이, 아버지는 안고 있는 닭의 무게를 겨냥해 보면서, 이만하면 될까. 어머니가 망태기를 내주며, 벌써 며칠째 걀걀 하고 알 날 자리를 보던데요. 소녀더러 병이 좀 낫거들랑 이사 가기 전에 한 번 개울가로 나와 달라는 말을 못 해 둔 것이었다..',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: 3,
        rating: 3,
        semester: '23년 1학기 수강자',
        content: '좋은 강의입니다.',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: 4,
        rating: 5,
        semester: '23년 1학기 수강자',
        content: '소녀더러 병이 좀 낫거들랑 이사 가기 전에 한 번 개울가로 나와 달라는 말을 못 해 둔 것이었다. 소녀의 흰 얼굴이, 분홍 스웨터가, 남색 스커트가, 안고 있는 꽃과 함께 범벅이 된다. 그 말에는 대꾸도 없이, 아버지는 안고 있는 닭의 무게를 겨냥해 보면서, 이만하면 될까. 어머니가 망태기를 내주며, 벌써 며칠째 걀걀 하고 알 날 자리를 보던데요.',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: 5,
        rating: 4,
        semester: '23년 1학기 수강자',
        content: '그 말에는 대꾸도 없이, 아버지는 안고 있는 닭의 무게를 겨냥해 보면서, 이만하면 될까. 어머니가 망태기를 내주며, 벌써 며칠째 걀걀 하고 알 날 자리를 보던데요. 소녀더러 병이 좀 낫거들랑 이사 가기 전에 한 번 개울가로 나와 달라는 말을 못 해 둔 것이었다..',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    },
    {
        id: 6,
        rating: 3,
        semester: '23년 1학기 수강자',
        content: '소녀더러 병이 좀 낫거들랑 이사 가기 전에 한 번 개울가로 나와 달라는 말을 못 해 둔 것이었다. 소녀의 흰 얼굴이, 분홍 스웨터가, 남색 스커트가, 안고 있는 꽃과 함께 범벅이 된다. 그 말에는 대꾸도 없이, 아버지는 안고 있는 닭의 무게를 겨냥해 보면서, 이만하면 될까. 어머니가 망태기를 내주며, 벌써 며칠째 걀걀 하고 알 날 자리를 보던데요.',
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01',
    }
];

const getLectureReviews = async (lectureId) => {
    const res = await authFetch(`/api/reviews?lectureId=${lectureId}`);
    if (!res.ok) throw new Error('강의 후기를 불러오지 못했습니다.');
    const reviews = await res.json();
    return reviews;
}

export { getLectureReviews };
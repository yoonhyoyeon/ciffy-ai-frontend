import { create } from 'zustand';
import { authFetch } from '@/utils';
import { convertApiTimetablesToList } from '@/utils/timetable';

export const useTimetableStore = create((set) => ({
  timetable: [],
  convertedTimetable: [],
  selectedTimetableId: null,

  setSelectedTimetableId: (id) => {
    set({ selectedTimetableId: id });
    localStorage.setItem('timetableId', id);
  },
  loadTimetable: () => {
    const localTimetable = localStorage.getItem('convertedTimetable');
    const localTimetableId = localStorage.getItem('timetableId');
    if (localTimetable) {
      set({ selectedTimetableId: localTimetableId, convertedTimetable: JSON.parse(localTimetable) });
    }
  },
  fetchTimetable: async (requestBody) => {
    try {
      const res = await authFetch('/api/timetable/create', {
        method: 'POST',
        body: JSON.stringify(requestBody)
      });
      
      if (res.ok) {
        const data = await res.json(); // ReadableStream을 JSON으로 파싱합니다.
        console.log('Fetched Timetables:', data);
        localStorage.setItem('convertedTimetable', JSON.stringify(convertApiTimetablesToList(data)));
        set({ timetable: data, convertedTimetable: convertApiTimetablesToList(data) });

      } else {
        console.error('시간표 생성 실패:', res.status, res.statusText);
        set({ timetable: [], convertedTimetable: [] }); // 에러 발생 시 초기화
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      set({ timetable: [], convertedTimetable: [] });
    }
  }
})); 
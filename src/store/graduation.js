import { create } from 'zustand';
import { authFetch } from '@/utils';
import { convertTrackToData, convertTakenLecturesToList } from '@/utils/graduation';

export const useGraduationStore = create((set, get) => ({
  takenLectures: [],
  track: [],
  graduation: {},
  courses: [],
  setTakenLectures: (data) => set({ takenLectures: data }),
  setTrack: (data) => set({ track: data }),
  setGraduation: (data) => set({ graduation: data }),
  setCourses: (data) => set({ courses: data }),
  fetchCourses: async () => {
    if(get().courses.length > 0) return;
    try {
      const res = await authFetch('/api/courses');
      if(res.ok) {
        const data = await res.json();
        console.log(data);
        set({ courses: data });
      } else {
        console.error('코스 조회 실패:', res.status, res.statusText);
        set({ courses: [] });
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      set({ courses: [] });
    }
  },
  fetchGraduation: async () => {
    if(Object.keys(get().graduation).length > 0) return;

    try {
      const res = await authFetch('/api/graduation');
      if (res.ok) {
        const data = await res.json();
        set({ graduation: data });
      } else {
        console.error('졸업요건 조회 실패:', res.status, res.statusText);
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      set({ graduation: {} });
    }
  },
  fetchTrack: async () => {
    if(get().track.length > 0) return;

    try {
      const res = await authFetch('/api/graduation/track');
      
      if (res.ok) {
        const data = await res.json(); // ReadableStream을 JSON으로 파싱합니다.
        set({ track: convertTrackToData(data) });
      } else {
        console.error('트랙 이수 정보 조회 실패:', res.status, res.statusText);
        set({ track: [] }); // 에러 발생 시 초기화
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      set({ track: [] });
    }
  },
  fetchTakenLectures: async () => {
    if(get().takenLectures.length > 0) return;
    
    try {
      const res = await authFetch('/api/graduation/completed');
      
      if (res.ok) {
        const data = await res.json(); // ReadableStream을 JSON으로 파싱합니다.
        set({ takenLectures: convertTakenLecturesToList(data) });

      } else {
        console.error('기이수 성적표 조회 실패:', res.status, res.statusText);
        set({ takenLectures: [] }); // 에러 발생 시 초기화
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      set({ takenLectures: [] });
    }
  }
})); 
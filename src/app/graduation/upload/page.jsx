import TranscriptUploadPopup from '@/container/TranscriptUploadPopup';
import PopupLayout from '@/component/PopupLayout';
export const metadata = {
  title: '기이수 성적표 업로드'
}

export default function Page() {
  return (
    <PopupLayout>
      <TranscriptUploadPopup />
    </PopupLayout>
  );
} 
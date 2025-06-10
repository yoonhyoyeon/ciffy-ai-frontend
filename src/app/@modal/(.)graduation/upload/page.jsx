import PopupLayout from '@/component/PopupLayout';
import TranscriptUploadPopup from '@/container/TranscriptUploadPopup';

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

'use client';
import styles from './index.module.css';
import { useRef, useState } from 'react';
import Button from '@/component/Button';
import { useRouter } from 'next/navigation';
import { authFetch } from '@/utils';
import { useGraduationStore } from '@/store/graduation';

const allowedExtensions = ['xlsx', 'xls'];
const isExcelFile = (file) => {
  const ext = file.name.split('.').pop().toLowerCase();
  return allowedExtensions.includes(ext);
};

const DUMMY_GRADUATION_DATA = {
  total: { current: 63, total: 130 },
  requirements: [
    {
      title: '전공',
      items: [
        { name: '전공필수', current: 15, total: 33 },
        { name: '전공선택', current: 9, total: 39 }
      ]
    },
    {
      title: '교양',
      items: [
        { name: '공통교양필수', current: 5, total: 8 }
      ]
    }
  ],
  certifications: [
    { name: '영어졸업인증', status: 'P' },
    { name: '고전독서인증', status: 'P' },
    { name: '소프트웨어코딩졸업인증', status: 'P' }
  ]
};

const TranscriptUploadPopup = ({ onUpload, onCancel }) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { fetchGraduation, fetchTakenLectures } = useGraduationStore();
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!isExcelFile(file)) {
        setFileName('');
        setError('엑셀 파일(.xlsx, .xls)만 업로드할 수 있습니다.');
      } else {
        setFileName(file.name);
        setError('');
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      if (!isExcelFile(file)) {
        setFileName('');
        setError('엑셀 파일(.xlsx, .xls)만 업로드할 수 있습니다.');
      } else {
        setFileName(file.name);
        setError('');
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleUpload = async (e) => {
    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const response = await authFetch('/api/graduation/upload', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error('업로드 실패: ' + errorText);
    }

    const data = await response.json();
    fetchGraduation();
    fetchTakenLectures();
    router.back();
    return data;
  };

  return (
    <div className={styles.popupBody}>
      <h2 className={styles.title}>기이수 성적표 업로드</h2>
      <p className={styles.desc}>기이수 성적표를 업로드해주세요</p>
      <div
        className={dragActive ? styles.dropzoneActive : styles.dropzone}
        onClick={() => fileInputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          accept=".xlsx,.xls"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div className={styles.icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M26.25 18.75V20.25C26.25 22.3502 26.25 23.4003 25.8413 24.2025C25.4817 24.9081 24.9081 25.4817 24.2025 25.8413C23.4003 26.25 22.3502 26.25 20.25 26.25H9.75C7.6498 26.25 6.5997 26.25 5.79754 25.8413C5.09193 25.4817 4.51825 24.9081 4.15873 24.2025C3.75 23.4003 3.75 22.3502 3.75 20.25V18.75M21.25 10L15 3.75M15 3.75L8.75 10M15 3.75V18.75" stroke="#06003A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <div className={styles.dropText}>
          {fileName ? fileName : '클릭하거나 마우스로 파일을 드래그해 업로드하세요'}
          {error && <div className={styles.error}>{error}</div>}
        </div>
      </div>
      <div className={styles.buttonRow}>
        <Button size="small" onClick={() => router.back()} customStyles={{backgroundColor: 'var(--color-blue-2-opacity-10)', color: 'var(--color-blue-2)'}}>취소</Button>
        <Button size="small" onClick={handleUpload} isFilled disabled={!fileName}>업로드하기</Button>
      </div>
    </div>
  );
};

export default TranscriptUploadPopup; 
# Ciffy AI Frontend 🎓

<img src="public/images/img_logo.png" width="400" />


> 🚀 **AI 기반 스마트 시간표 생성 및 학사관리 플랫폼**

Ciffy는 학생들의 선호도와 졸업요건을 분석하여 최적의 시간표를 자동으로 생성하고, 강의 후기 및 졸업요건 분석 기능을 제공하는 통합 학사관리 플랫폼입니다.

## 🏆 수상 내역

CIFFY는 **실용성과 혁신성에서 높은 평가를 받아**, 아래와 같은 대학교 공식 행사에서 수상하였습니다.

- 🥇 **2024 세종대학교 소프트웨어융합대학 학술제 구현 트랙 대상 (1위)** 

- 🥇 **2024 세종대학교 컴퓨터공학과 학술제 대상 (1위)**  

## ✨ 주요 기능
### 🗓️ 시간표 추천
| 시간표 추천 |
|----------|
|![ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/b35eb3b6-d6d5-498c-b08e-a78ef1a72077)|
- **개인화된 설문조사**: 수업 방식, 과제량, 팀프로젝트 선호도 등을 분석
- **스마트 추천**: AI가 분석한 데이터를 기반으로 최적의 시간표 자동 생성
- **시간대 선택**: 드래그 앤 드롭으로 직관적인 불가능 시간 설정
- **다중 옵션**: 여러 시간표 후보 중 선택 가능

### 📚 강의 후기
| 강의 후기 |
|----------|
|![ezgif com-video-to-gif-converter-2](https://github.com/user-attachments/assets/de7016d1-35e5-4c31-95d9-96732e681875)|
- **상세한 평가**: 별점, 과제량, 팀프로젝트, 성적 등 다각도 평가
- **실시간 통계**: 강의별 통계 데이터 시각화
- **후기 작성**: Server Actions를 활용한 실시간 후기 등록

### 🎯 졸업요건 분석
| 졸업요건 분석 |
|----------|
|![ezgif com-video-to-gif-converter-3](https://github.com/user-attachments/assets/5ec9bb26-32fa-4338-89e3-03b9dc32918f)|
- **실시간 분석**: 기이수 성적표 업로드(Excel)를 통한 졸업요건 자동 분석
- **진도 시각화**: 프로그래스바와 상세 과목 조회로 졸업 진도 확인
- **트랙별 관리**: 전공별 세부 트랙 이수 현황 관리

### 👤 마이페이지
| 마이페이지 |
|----------|
|<img width="800" alt="마이페이지" src="https://github.com/user-attachments/assets/9d97e51a-c5f4-4279-a9d5-c2fcd88590ec" />|
- **사용자 정보 확인**: 사용자 정보 확인 및 관리
- **시간표 관리**: 저장된 시간표 조회 및 관리
- **기이수 과목**: 수강 완료 과목 리스트 확인

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 15.2.1 (App Router)
- **Language**: JavaScript (JSX)
- **Styling**: CSS Modules
- **State Management**: Zustand
- **UI Libraries**: 
  - React Circular Progressbar
  - React CountUp
  - React Typed

### Development
- **Linting**: ESLint
- **Navigation**: Next Navigation Guard
- **Build**: Turbopack
- **Font**: Pretendard, GmarketSans

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── auth/              # 인증 관련 페이지
│   ├── graduation/        # 졸업요건 분석 페이지
│   ├── lecture/           # 강의 후기 페이지
│   ├── mypage/           # 마이페이지
│   ├── timetable/        # 시간표 생성 페이지
│   └── @modal/           # 모달 페이지
├── component/             # 공용 컴포넌트
│   ├── Button/           # 버튼 컴포넌트
│   ├── Navigation/       # 네비게이션
│   ├── Timetable/        # 시간표 컴포넌트
│   └── TimeSelector/     # 시간 선택기
├── container/            # 페이지별 컨테이너 컴포넌트
├── store/                # Zustand 상태 관리
├── service/              # API 서비스
├── actions/              # Server Actions
├── utils/                # 유틸리티 함수
└── styles/               # 전역 스타일
```

## 🎨 디자인 시스템

### 컴포넌트 규칙
- **폴더 구조**: 각 컴포넌트는 개별 폴더에 `index.jsx`와 `index.module.css`로 구성
- **스타일링**: CSS Module만 사용 (TypeScript, SCSS 사용 안함)
- **네이밍**: 카멜케이스(camelCase) 사용
- **Import**: 지역 컴포넌트는 상대경로, 공용 컴포넌트는 `@/` 별칭 사용

### 색상 시스템
- Primary Blue: `var(--color-blue-2)`
- Secondary Blue: `var(--color-blue-1)`
- Background: `var(--color-bg)`
- White: `var(--color-white)`

## 🔗 API 통합

### 백엔드 연동
- **프록시 설정**: `/api/*` 요청을 설정된 백엔드 서버로 리다이렉트
- **인증**: JWT 토큰 기반 인증 시스템
- **API 서비스**: `src/service/`에서 API 호출 관리

### 주요 API 엔드포인트
- `/api/auth/*` - 인증 관련
- `/api/timetables/*` - 시간표 생성/관리
- `/api/lectures/*` - 강의 정보
- `/api/reviews/*` - 강의 후기
- `/api/graduation/*` - 졸업요건 분석

## 🔒 인증 시스템

- **토큰 관리**: localStorage와 쿠키 이중 저장
- **라우트 보호**: Middleware를 통한 인증 필요 페이지 보호
- **자동 갱신**: 토큰 자동 갱신 시스템

## 🚀 시작하기

### 필수 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone [repository-url]
cd ciffy-ai-frontend
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **환경 변수 설정**
```bash
# .env.local 파일 생성 후 아래 내용 추가
NEXT_PUBLIC_API_URL=your_backend_api_url_here

# 개발 환경 예시:
# NEXT_PUBLIC_API_URL=http://localhost:8080
# 프로덕션 환경 예시:
# NEXT_PUBLIC_API_URL=https://api.your-domain.com
```

4. **개발 서버 실행**
```bash
npm run dev
# 또는
yarn dev
```

5. **브라우저에서 확인**
```
http://localhost:3000
```

## 📋 사용 가능한 스크립트

```bash
npm run dev          # 개발 서버 실행 (Turbopack 사용)
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 실행
npm run lint         # ESLint 검사
```


## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 배포됩니다.

## 📞 문의

프로젝트 관련 문의사항이 있으시면 언제든 연락주세요.

---

**Made with ❤️ by Ciffy Team**

# Ciffy AI Frontend 🎓

![Ciffy Banner](public/images/img_logo.png)

> 🚀 **AI 기반 스마트 시간표 생성 및 학사관리 플랫폼**

Ciffy는 학생들의 선호도와 졸업요건을 분석하여 최적의 시간표를 자동으로 생성하고, 강의 후기 및 졸업요건 분석 기능을 제공하는 통합 학사관리 플랫폼입니다.

---

## 🏆 수상 내역

CIFFY는 **실용성과 혁신성에서 높은 평가를 받아**, 아래와 같은 대학교 공식 행사에서 수상하였습니다.

- 🥇 **2024 세종대학교 소프트웨어융합대학 학술제 구현 트랙 대상 (1위)**  
  _AI 기반 대학교 시간표 추천 서비스 (CIFFY)_ (2024.12.04)

- 🥇 **2024 세종대학교 컴퓨터공학과 학술제 대상 (1위)**  
  _AI 기반 대학교 시간표 추천 서비스 (CIFFY)_ (2024.12.23)

---

## ✨ 주요 기능

### 🗓️ AI 시간표 생성
- **개인화된 설문조사**: 수업 방식, 과제량, 팀프로젝트 선호도 등을 분석
- **스마트 추천**: AI가 분석한 데이터를 기반으로 최적의 시간표 자동 생성
- **시간대 선택**: 드래그 앤 드롭으로 직관적인 불가능 시간 설정
- **다중 옵션**: 여러 시간표 후보 중 선택 가능

### 📚 강의 후기 시스템
- **상세한 평가**: 별점, 과제량, 팀프로젝트, 성적 등 다각도 평가
- **실시간 통계**: 강의별 통계 데이터 시각화
- **후기 작성**: Server Actions를 활용한 실시간 후기 등록

### 🎯 졸업요건 분석
- **실시간 분석**: 기이수 성적표 업로드(Excel)를 통한 졸업요건 자동 분석
- **진도 시각화**: 프로그래스바와 상세 과목 조회로 졸업 진도 확인
- **트랙별 관리**: 전공별 세부 트랙 이수 현황 관리

### 👤 개인화 마이페이지
- **학습 대시보드**: 개인 학습 현황 및 통계 확인
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

### 환경 변수
```bash
# .env.local (Git에서 제외됨)
NEXT_PUBLIC_API_URL=your_backend_api_url

# 추가 환경 변수가 필요한 경우:
# NEXT_PUBLIC_SOCKET_URL=your_socket_server_url
# API_SECRET_KEY=your_secret_key
```

⚠️ **보안 주의사항**: 
- `.env.local` 파일은 Git에 포함되지 않습니다
- 실제 서버 주소나 비밀 키는 공개 저장소에 노출하지 마세요
- `NEXT_PUBLIC_` 접두사가 있는 변수는 클라이언트에 노출됩니다

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

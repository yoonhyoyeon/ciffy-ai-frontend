# Ciffy AI Frontend 🎓

![Ciffy Banner](public/images/img_logo.png)

> 🚀 **AI 기반 스마트 시간표 생성 및 학사관리 플랫폼**

---

## 🏆 수상 내역

CIFFY는 **실용성과 혁신성에서 높은 평가를 받아**, 아래와 같은 대학교 공식 행사에서 **대상(1위)**을 수상했습니다.

- 🥇 **2024 세종대학교 소프트웨어융합대학 학술제 구현 트랙 대상 (1위)**  
  _AI 기반 대학교 시간표 추천 서비스 (CIFFY)_ (2024.12.04)

- 🥇 **2024 세종대학교 컴퓨터공학과 학술제 대상 (1위)**  
  _AI 기반 대학교 시간표 추천 서비스 (CIFFY)_ (2024.12.23)

---

Ciffy는 학생들의 선호도와 졸업요건을 분석하여 최적의 시간표를 자동으로 생성하고, 강의 후기 및 졸업요건 분석 기능을 제공하는 통합 학사관리 플랫폼입니다.

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
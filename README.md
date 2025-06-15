# Term Project 4-1 - Hygino Company Info

하이지노는 스마트팩토리 시스템과 탄소중립 솔루션을 개발하는 IT 기업입니다.  
본 프로젝트는 해당 기업의 소개 페이지를 제작하며, Kakao Maps API를 연동해 회사 위치를 시각적으로 제공하고, 배너 이미지를 업로드 및 조회할 수 있는 기능을 포함한 React 기반 단일 페이지 애플리케이션입니다.

---

## 🛠️ 사용 기술 스택

- **React** (with Hooks)
- **Vite**
- **JavaScript (ES6+)**
- **HTML/CSS (모듈 스타일링 포함)**
- **Kakao Maps JavaScript SDK** (Kakao Developers 활용)
- **Node.js** (Express + Multer)
- **IntelliJ IDEA**

---

## 📌 주요 기능

| 기능 | 설명 |
|------|------|
| 회사 소개 출력 | 회사 개요, 설립연도, 대표자, 주요 사업, 홈페이지 정보를 화면에 구조적으로 표시합니다. |
| 카카오 지도 연동 | Kakao Maps API를 활용해 회사 주소에 해당하는 위치에 마커를 표시합니다. |
| 로고 이미지 업로드 | Header 영역에 회사 배너 이미지를 업로드하고, 저장된 이미지를 조회 및 출력합니다. |

---

## 🚀 로컬 실행 방법

### 프론트엔드
```bash
# 1. 클론
git clone https://github.com/Juglee0527/term-project-4-1.git
cd term-project-4-1

# 2. 의존성 설치
npm install

# 3. 실행
npm run dev
```

### 백엔드 (파일 업로드 서버)
```bash
# 1. 백엔드 경로로 이동
cd logo-upload-backend

# 2. 의존성 설치
npm install

# 3. 서버 실행
node server.js
```

---

## 🙌 느낀 점

- React와 Vite를 직접 활용하여 프로젝트를 세팅하고 실행해보며, 컴포넌트 기반 개발 방식과 프론트엔드 구조에 대한 이해를 높일 수 있었습니다.
- Kakao Maps API 연동을 통해 외부 JavaScript SDK의 사용 방식과 비동기 처리 구조를 익힐 수 있었으며,
- 파일 업로드 및 Express 기반 서버 연동 과정을 통해 프론트와 백엔드의 협업 구조를 실습할 수 있었습니다.
- 실무 흐름을 경험하며, 개발과 배포의 전체적인 과정을 체득한 소중한 프로젝트였습니다.

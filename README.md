## 여행 예약 서비스 구축

### **📍 팀원 역할 및 담당 업무**

| 이름   | 역할 | 담당 업무             | 페이지             |
| ------ | ---- | --------------------- | --------------------- |
| 김혜란 | 팀장 | 메인페이지,<br/> 상품 상세 페이지,<br/> 내 정보 수정 페이지,<br/> 로그인 및 회원가입 페이지 | Home.jsx,<br/> product/ProductDetail.jsx,<br/> user/Profile.jsx,<br/> auth/SignIn.jsx, auth/SignUp.jsx  |
| 박세진 | 팀원 | 상품 목록 페이지(결과 페이지),<br/> 결제 페이지,<br/> 주문 완료 페이지 | product/ProductList.jsx,<br/> order/Checkout.jsx,<br/> order/OrderConfirmation.jsx  |
| 최승이 | 팀원 | 마이페이지,<br/> 찜 목록 페이지 | user/MyPage.jsx,<br/> user/Favorite.jsx  |
| 형주희 | 팀원 | 주문 내역 페이지,<br/> 장바구니 페이지 | order/OrderHistory.jsx,<br/> components/ShoppingCart.jsx |

<br/>

### **📍 설치 패키지**

| 패키지명                       | 설치 명령어                              | 참고 문서                            |
| ----------------------------- | --------------------------------------- | ------------------------------------- |
| **tailwindcss, @tailwindcss/vite** | `npm install tailwindcss @tailwindcss/vite` | [Tailwind UI Components](https://tailwindui.com/components#product-application-ui-forms), [Tailwind Documentation](https://tailwindcss.com/docs/flex) |
| **daisyui**                    | `npm install -D daisyui@latest`              | [DaisyUI Components](https://daisyui.com/components/button/) |
| **react-router-dom**           | `npm install react-router-dom`         | |
| **react-icons**                | `npm install react-icons`                    | [React Icons](https://react-icons.github.io/react-icons/icons/bi/) |
| **@headlessui/react**          | `npm install @headlessui/react`        | [Headless UI](https://headlessui.com/) |
| **zustand**                    | `npm install zustand`                  | |
| **@tanstack/react-query**      | `npm install @tanstack/react-query`    | |
| **firebase**                   | `npm install firebase`                 | |

<br/>

### **📍 주요 기능**

#### 🧸 회원 인증

- **기본정보 가입**  
  - 이메일, 비밀번호, 이름을 입력하여 회원가입
- **로그인**  
  - 기존 가입된 계정으로 로그인
- **회원가입**  
  - 새 계정을 생성하여 가입

<br/>

#### 🧸 전체 상품 목록 조회

- **상품 목록 조회**  
  - 데이터베이스에서 상품 목록을 조회
  - 상품의 이미지, 상품명, 상품가격을 기본으로 출력
  - 재고에 따라 출력 여부를 결정
  - 페이징 처리

<br/>

#### 🧸 상품 옵션

- **상세 소개 페이지에서 상품 옵션 선택**  
  - 기본적으로 날짜, 여행 인원 선택
  - 추가적인 옵션이 필요하면 별도로 기획

<br/>

#### 🧸 결제하기

- **주문 페이지에서 결제 처리 없이 주문한 것으로 처리**  
  - 데이터베이스에 주문 정보 저장

<br/>

#### 🧸 주문 결과 확인

- **결제 성공 후 주문한 상품 결과 출력**  
  - 결제 성공 시 주문 내역을 사용자에게 출력

<br/>

#### 🧸 카테고리별 상품 출력

- **상품 분류별로 출력**  
  - 카테고리별로 상품을 분류하여 보여주기

<br/>

#### 🧸 장바구니 담기

- **장바구니 기능**  
  - 이미지, 상품명, 옵션 등을 표시하여 전체 주문 합계 금액을 계산
  - 체크박스를 통해 상품을 선택하거나 제외
  - 주문하기 버튼으로 결제 화면 이동

<br/>

#### 🧸 주문 내역 확인

- **주문 내역 페이지**  
  - 사용자가 주문한 이력을 출력
  - 주문 내역 페이지에서 상세 정보 확인 가능

 <br/>
 
#### 🧸 찜 목록

- **찜 목록 페이지**  
  - 찜한 목록 조회
  - 페이징 처리

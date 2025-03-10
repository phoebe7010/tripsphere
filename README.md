## 여행 예약 서비스 구축

### **📍 팀원 역할 및 담당 업무**

| 이름   | 역할 | 담당 업무             | 페이지             |
| ------ | ---- | --------------------- | --------------------- |
| 김혜란 | 팀장 | 메인페이지,<br/> 상품 상세 페이지(+리뷰),<br/> 내 정보 수정 페이지,<br/> 로그인 및 회원가입 페이지 | Home.jsx,<br/> product/ProductDetail.jsx,<br/> user/Profile.jsx,<br/> auth/SignIn.jsx, auth/SignUp.jsx  |
| 박세진 | 팀원 | 상품 목록 페이지(결과 페이지),<br/> 결제 페이지,<br/> 주문 완료 페이지 | product/ProductList.jsx,<br/> order/Checkout.jsx,<br/> order/OrderConfirmation.jsx  |
| 최승이 | 팀원 | 마이페이지,<br/> 찜 목록 페이지 | user/MyPage.jsx,<br/> user/Favorite.jsx  |
| 형주희 | 팀원 | 주문 내역 페이지,<br/> 장바구니 페이지 | order/OrderHistory.jsx,<br/> components/ShoppingCart.jsx |
| 전윤교 | 팀원 | |

---

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
| **react-date-range**           | `npm install --save react-date-range`      |  [React Date Range](https://github.com/hypeserver/react-date-range) |
| **date-fns**                   | `npm install --save date-fns`              | |
| **react-use**                  | `npm install react-use`                    | |
| **kakao-map**                  | `npm install react-kakao-maps-sdk`     | [Kakao maps sdk](https://react-kakao-maps-sdk.jaeseokim.dev/docs/sample/) |
| **swiper**                     | `npm install swiper`                   | |

---

### **📍 FireBase 구조**
### 1. `accommodations` (숙소 정보)
**Document ID:** 숙소 고유 ID (자동 생성 또는 지정)

#### 🔹 Fields
- `name` (string): 숙소 이름 (예: "해운대 오션뷰 호텔")
- `type` (string): 숙소 유형 (`hotel`, `pension`, `guesthouse`, `camping`)
- `location` (object):
  - `latitude` (number): 위도
  - `longitude` (number): 경도
  - `place_name` (string): 지역 이름 (예: "부산 해운대")
- `description` (string): 숙소 설명
- `original_price` (number): 원래 가격
- `discount_rate` (number): 할인율 (예: `0.1` → 10%)
- `final_price` (number): 할인된 가격 (계산 가능)
- `check_in` (string): 체크인 시간
- `check_out` (string): 체크아웃 시간
- `capacity` (object):
  - `adults` (number): 성인 수
  - `children` (number): 어린이 수
- `services` (array): 제공 서비스 목록 (예: `["최고의 전망", "조식 포함"]`)
- `images` (array): 숙소 사진 URL 리스트
- `host` (object):
  - `name` (string): 호스트 이름
  - `experience` (string): 경력
  - `contact` (string): 연락처
- `rating` (number): 평균 평점
- `reviews_count` (number): 리뷰 개수

---

### 2. `users` (사용자 정보)
**Document ID:** 사용자 UID (Firebase Auth와 연동)

#### 🔹 Fields
- `name` (string): 사용자 이름
- `nickname` (string): 닉네임
- `email` (string): 이메일
- `phone` (string): 전화번호
- `profile_image` (string): 프로필 사진 URL
- `wishlist` (array): 찜 목록 (`accommodation_id` 리스트)
- `orders` (array): 주문 내역 (`order_id` 리스트)
- `cart` (array): 장바구니 (`accommodation_id` 리스트)
- `points` (number): 사용 가능한 포인트

---

### 3. `orders` (주문 정보)
**Document ID:** 주문 ID

#### 🔹 Fields
- `user_id` (string): 주문한 사용자 UID
- `accommodation_id` (string): 숙소 ID
- `check_in` (string): 체크인 날짜
- `check_out` (string): 체크아웃 날짜
- `guest_count` (object):
  - `adults` (number): 성인 수
  - `children` (number): 어린이 수
- `total_price` (number): 총 결제 금액
- `payment_status` (string): 결제 상태 (`pending`, `completed`, `canceled`)
- `order_date` (string): 주문 날짜
- `used_points` (number): 사용한 포인트
- `commission` (number): 수수료## 1. `accommodations` (숙소 정보)
**Document ID:** 숙소 고유 ID (자동 생성 또는 지정)

#### 🔹 Fields
- `name` (string): 숙소 이름 (예: "해운대 오션뷰 호텔")
- `type` (string): 숙소 유형 (`hotel`, `pension`, `guesthouse`, `camping`)
- `location` (object):
  - `latitude` (number): 위도
  - `longitude` (number): 경도
  - `place_name` (string): 지역 이름 (예: "부산 해운대")
- `description` (string): 숙소 설명
- `original_price` (number): 원래 가격
- `discount_rate` (number): 할인율 (예: `0.1` → 10%)
- `final_price` (number): 할인된 가격 (계산 가능)
- `check_in` (string): 체크인 시간
- `check_out` (string): 체크아웃 시간
- `capacity` (object):
  - `adults` (number): 성인 수
  - `children` (number): 어린이 수
- `services` (array): 제공 서비스 목록 (예: `["wifi", "parking", "airconditioning", "tv", "breakfast", "barbecue"]`)
- `images` (array): 숙소 사진 URL 리스트
- `host` (object):
  - `name` (string): 호스트 이름
  - `experience` (string): 경력
  - `contact` (string): 연락처
- `rating` (number): 평균 평점
- `reviews_count` (number): 리뷰 개수

---

### 2. `users` (사용자 정보)
**Document ID:** 사용자 UID (Firebase Auth와 연동)

#### 🔹 Fields
- `name` (string): 사용자 이름
- `nickname` (string): 닉네임
- `email` (string): 이메일
- `phone` (string): 전화번호
- `profile_image` (string): 프로필 사진 URL
- `wishlist` (array): 찜 목록 (`accommodation_id` 리스트)
- `orders` (array): 주문 내역 (`order_id` 리스트)
- `cart` (array): 장바구니 (`accommodation_id` 리스트)
- `points` (number): 사용 가능한 포인트

---

### 3. `orders` (주문 정보)
**Document ID:** 주문 ID

#### 🔹 Fields
- `user_id` (string): 주문한 사용자 UID
- `accommodation_id` (string): 숙소 ID
- `check_in` (string): 체크인 날짜
- `check_out` (string): 체크아웃 날짜
- `guest_count` (object):
  - `adults` (number): 성인 수
  - `children` (number): 어린이 수
- `total_price` (number): 총 결제 금액
- `payment_status` (string): 결제 상태 (`pending`, `completed`, `canceled`)
- `order_date` (string): 주문 날짜
- `used_points` (number): 사용한 포인트
- `commission` (number): 수수료

---

### 4. `reviews` (리뷰 정보)
**Document ID:** 리뷰 ID

#### 🔹 Fields
- `accommodation_id` (string): 숙소 ID
- `user_id` (string): 작성자 UID
- `rating` (number): 평점 (1~5)
- `comment` (string): 리뷰 내용
- `created_at` (string): 작성 날짜

---

### 5. points (포인트 내역)
**Document ID:** 포인트 내역 ID

#### 🔹 Fields
- `user_id` (string): 포인트를 받은 사용자 UID
- `points` (number): 받은 포인트 양
- `title` (string): 포인트 제목
- `description` (string): 포인트 부가설명 (예: "첫 예약 축하 보너스")
- `received_date` (string): 포인트 받은 날짜

---

| 📌 Page | 🔗 Related Collections | 📝 Description |
|---------|--------------------|--------------|
| 메인페이지 | `accommodations` | 인기 숙소, 추천 숙소 표시 |
| 상품 상세 페이지 | `accommodations`, `reviews` | 숙소 정보 및 리뷰 표시 |
| 상품 목록 페이지 | `accommodations` | 지역별 필터링, 검색 가능 |
| 결제 페이지 | `orders`, `users` | 결제 정보 입력 및 확인 |
| 주문 완료 페이지 | `orders` | 주문 내역 확인 |
| 마이페이지 | `users`, `orders`, `reviews` | 내 정보, 주문 내역, 리뷰 관리 |
| 찜 목록 페이지 | `users`, `accommodations` | 찜한 숙소 표시 |
| 주문 내역 페이지 | `orders` | 예약한 숙소 목록 표시 |
| 장바구니 페이지 | `users`, `accommodations` | 장바구니 추가된 숙소 표시 |


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

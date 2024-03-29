## 준비
1. vscode 설치하기
2. nodejs 설치하기
3. git 설치하기 -> git은 팀워크를 향상해준다.
4. sourcetree 설치하기 -> git을 관리해주는 무료 프로그램
5. react를 설치
6. postman설치
7. https://developers.kftc.or.kr/dev 회원가입하기
    - client_id = 26cf9539-e126-4f60-ae17-9542626b4cf5
    - secret key = 6080fce5-5196-434d-9d49-44c7ea9695c0
    - call back url: http://localhost:3000/authResult
    - accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDIyMDA5Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2OTI3OTM3MTMsImp0aSI6IjM3MTlmYTZmLTIzNjktNDI4Yi04YzFhLTY1Mjk4YjdmNTdjNSJ9.TWBTB8_cadEE6QLAAQk_hUWcDENr5FP6SUsMfChdw-Q
    - userNo: 1101022009
    - {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDIyMDA5Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2OTI2ODkxMTAsImp0aSI6ImVmZmMxNzNjLTFiYmMtNDRlNC1iZTUwLWNjOTI5MGRhYjM1NyJ9.K86hktPMjLdoiRC0huu5o_JRN8fyqAO9Ta8-PiXrRq4",
    "token_type": "Bearer",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAxMDIyMDA5Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2OTM1NTMxMTAsImp0aSI6Ijk1NjdkYTEyLTlkNjItNDkyOS1iMjJhLTliY2VjZWE3ZGJlYiJ9.yMCMFqn-LreWawACOZOF5q_dL3Ba5F9MMzOIR4drYdU",
    "expires_in": 7775999,
    "scope": "inquiry login transfer",
    "user_seq_no": "1101022009"
}

## 지식
- HTML(문서의 전체적인 구조)
    - 문서의 기본적인 형태, 사용하는 디자인 파일에 대한 선언, 사용하는 자바스크립트 파일에 대한 선언
- CSS(문서의 디자인)
    - 배경화면, 배경색, 문자, 크기, 문자 스타일, 여백 등 디자인과 관련된 대부분의 내용
- JAVASCRIPT(문서의 기능 정의)
    - 값을 가져오기, 이벤트를 만들기, 팝업을 띄우기 등 기능과 관련된 역할
- React란?
    - 컴퓨팅에서 리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.<br>
    페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다.<br>
    리액트는 싱글 페이지 애플리케이션이나 모바일 애플리케이션 개발에 사용될 수 있다.

## React기초
#### React Component와 Props
    - 리액트를 설명하는 가장 중요한 키워드
    - 컴포넌트는 웹의 구성요소를 정의
    - 프롭스(props)는 프로퍼티를 통해 컴포넌트에 데이터를 전달

#### React State
    - 데이터를 저장하는 역할을 수행합니다.
    - 데이터가 변경되면 자동으로 화면을 새로 그립니다.
    - 데이터를 변경하기 위해서는 setState함수를 사용합니다.
    - Class형의 컴포넌트와 Functional 형의 컴포넌트는 사용법이 각기 다르다.
    - 직접할당은 가능은하지만 리렌더링이 발생하지 않기때문에 의미가 없습니다.

    * Funcational Component 에서는 Hook 이라는 개념을 사용합니다. = useState 를 선언하여 state 값과 setState 를 지정하였습니다.

#### API란?
 - API(Application Programming Interface, 응용 프로그램 프로그래밍 인터페이스)는 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻한다. (https://www.data.go.kr) 회원가입 사이트(https://newsapi.org/register)

- 오픈뱅킹의 API는 REST(REpresentational State Transfer) 방식으로 구현되어, 인터넷 웹 서비스의 형태로 제공됩니다. 아래와 같은 API를 제공하며, 하나의 API는 하나의 웹 서비스 URI로 매핑됩니다. 

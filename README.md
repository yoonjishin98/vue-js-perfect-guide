# Vue-js-Basic
인프런의 <Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념(캡틴판교)> 강의를 통해 해커 뉴스를 클론 코딩하는 프로젝트 입니다. <br/>
*사용 프레임워크: Vue 3

<br/>

## Vue Framework
### 🔷 Vue 버전에 대한 이해
### - Vue CLI 2.X vs Vue CLI 3.X
1.  명령어
    - 2.X : ```vue init {프로젝트 템플릿 이름} {파일 위치}```
    - 3.X : ```vue create {프로젝트 이름}```

2. *<span style="color:grey">Webpack</span>* 설정 파일
    - 2.X : 노출 o 
    - 3.X : 노출 x 
        - Webpack 설정 위해서 별도 설정 추가 필요
    > *Webpack?* <br/>
    > 모던 JS 어플리케이션을 위한 정적 모듈 번들러. 즉, html 파일에 들어가는 여러 js 파일들을 하나의 js 파일로 만들어주는 것. 기본적으로 webpack은 JS와 JSON파일만 이해 가능하지만, Loaders를 통해 webpack 유효한 형식으로 변환하여 다른 유형의 파일(css, images 등)도 처리함. 단 별도  loader 설치 필요.

3. 프로젝트 구성
    - 2.X : 깃허브 템플릿 다운로드
        - ```vue init``` 입력 시 vuejs-templates / webpack-simple 깃허브의 템플릿을 다운로드 받는 형식으로 구성됨
    - 3.X : 플러그인 기반으로 기능 추가
        - 프로젝트 생성 이후에도 ```vue add {플러그인 이름}```을 통해 플러그인 추가 가능

4. ES6 이해도
    - 2.X : 필요 o 
    - 3.X : 필요 x 

<br/>
<br/>

### 🔷 프로젝트 파일에 대한 이해 
**🔘main.js** <br/>
프로젝트를 빌드했을 때, 가장 먼저 실행되는 자바스크립트 파일. <br/>
createApp() 함수가 실행되면서 App.vue 파일을 가져와서 인스턴스를 생성하고 이를 index.html의 id="app"에 mount되는 식으로 동작.
```javascript
import { createApp } from 'vue'
import App from './App.vue' // 최상위 App.vue 컴포넌트 지정
import router from './routes/index.js'
import store from './store/index.js'

const app = createApp(App)

app.use(router)
    .use(store)
    .mount('#app')  // 렌더링 시작점 지정 및 index.html에 div id값 설정
```


**🔘index.js** <br/>
라우팅을 위한 경로 객체(routes)를 선언한 곳. 

<br/>

### 🔷 Vuex 
Vue.js 애플리케이션의 상태 관리 패턴 라이브러리. 애플리케이션의 모든 컴포넌트에 대해 중앙집중식 저장소 역할 수행. 저장소 내부에서 상태 변경 가능. <br/>
* state: 저장되는 값
* Actions: 
* Mutations: Vuex의 데이터(state 값)을 변경하는 로직
* State: 
<br/>
<img src = "https://v3.vuex.vuejs.org/vuex.png" width="600">

<br/>

### 🔷 공통 컴포넌트 생성 방법 2가지 (feat. Vuex)
[상황]  <br/>
User view (유저 정보 표시 페이지)와 User profile (유저 정보 표시 컴포넌트)가 존재하며, 유저 정보는 api call을 통해 불러옴 <br/>
1. api call을 화면 단 (User view) 에서 실행 후, props를 통해 User profile로 내려주기 
2. api call을 컴포넌트 (User profile)에서 실행

<br/>

### 🔷 EventBus
*❗️해당 기능은 Vue 2까지만 지원되며, Vue3부터 Event Bus(+$on, $off, $once) 공식적으로 삭제* <br/>
*Vue3에서 사용을 위해서는 mitt 라이브러리 사용이 필요* <br/>
<br/>
⇒ 해당 기능 대신 Vuex 사용 가능

[Deprecated] $emit: 데이터를 보낼 때 / $on: 데이터 받을 때 


<br/>

-------
## JavaScript
### 🔷 this 정리
- 함수 외부 this : Window
- 함수 내부 this : Window
- 생성자 함수 내부 this : Vue component
- 비동기 함수 내부 this : 함수가 호출되는 위치에서 벗어난 this
- 화살표 함수 내부 this : 함수가 호출되는 위치의 this

<br/>

### 🔷 Destructing (ES6 문법) 
간단히 정리하자면, 기존의 변수 선언 문법을 destruct하여 값을 편하게 꺼내올 수 있도록 변형한 문법 
```javascript
// 기존 변수 선언 문법
var obj = {
  a: 10,
  b: 20,
  c: 30
};

// Destructing 문법
var {a,b,c} = obj;

console.log(a); // 10
```

- 참고 : https://joshua1988.github.io/es6-online-book/destructuring.html#%EB%B7%B0%EC%97%91%EC%8A%A4%EC%97%90-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-%EB%AC%B8%EB%B2%95-1

<br/>

### 🔷 JSX
Javascript + XML.  기존 자바스크립트의 확장 문법으로, 자바스크립트 내부에 마크업 코드를 바로 작성할 수 있다. (마크업 코드는 babel 같은 transpile 도구를 통해 일반 자바스크립트로 변환됨) <br/>
- 예: h / 자바스크립트 코드를 인자로 받아 또다른 자바스크립트 코드를 생성
# Vue-js-Basic
인프런의 <Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념(캡틴판교)> 강의를 통해 해커 뉴스를 클론 코딩하는 프로젝트 입니다.

<br/>

### Vue 버전에 대한 이해
### - Vue CLI 2.X vs Vue CLI 3.X
1.  명령어
    - 2.X : ```vue init {프로젝트 템플릿 이름} {파일 위치}```
    - 3.X : ```vue create {프로젝트 이름}```

2. *<span style="color:skyblue">Webpack</span>* 설정 파일
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

### 프로젝트 파일에 대한 이해
**main.js** <br/>
프로젝트를 빌드했을 때, 가장 먼저 실행되는 자바스크립트 파일. <br/>
createApp() 함수가 실행되면서 App.vue 파일을 가져오면서 인스턴스를 생성하고 이를 index.html의 id="app"에 mount되는 식으로 동작.

**index.js** <br/>
라우팅을 위한 경로 객체(routes)를 선언한 곳. 

<br/>

-------
### this 정리
- 함수 외부 this : Window
- 함수 내부 this : Window
- 생성자 함수 내부 this : Vue component
- 비동기 함수 내부 this : 함수가 호출되는 위치에서 벗어난 this
- 화살표 함수 내부 this : 함수가 호출되는 위치의 this



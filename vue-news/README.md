# Vue-js-Basic
인프런의 <Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념(캡틴판교)> 강의를 통해 해커 뉴스를 클론 코딩하는 프로젝트 입니다. <br/>
*사용 프레임워크: Vue 3

<br/>

## Vue Framework
### 🔷 Vue 버전에 대한 이해
-Vue 2 vs Vue 3
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
    - 2.X : 필요 x
    - 3.X : 필요 o 

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
- Vue.js 애플리케이션의 상태(data) 관리 패턴 라이브러리. 애플리케이션의 모든 컴포넌트에 대해 중앙집중식 저장소 역할 수행. 쉽게 말해 data를 전역으로 사용하는 것이라고 보면 됨.
- Vuex는 총 다섯 개의 컨셉이 있음.
<img src = "https://v3.vuex.vuejs.org/vuex.png" width="600">
<br/>

#### ➿ **State**
State(상태)의 집합.  <br/>
단일 상태 트리를 사용. 즉 App 1개 당 1개의 store만 갖고 있으며, State에 있는 state들은 복수의 컴포넌트에서 사용되어도 동일한 상태가 유지됨. 따라서 현재 state의 상태(snapshot)을 찾기 쉬움. <br/>
* **mapState** <br/>
    - 사용 이유: computed 속성을 통해 store의 state 값이 변경될 때마다 그 값을 화면에 출력하도록 할 수 있는데, computed에 선언된 state가 많으면 코드가 반복적이게 될 수 있음. 이런 불필요한 반복을 처리하기 위해 mapState 헬퍼를 이용함.
    - 예시 <br/>
    ```$store.state.count``` 의 변경된 값을 감지하고 싶을 때
    
        ```javascript
        import { mapState } from 'vuex'

        export default {
        
            computed: mapState({
                // 화살표 함수
                count: state => state.count,

                // 문자열 값 'count'은 `state => state.count` 동일
                countAlias: 'count',

                // `this`를 사용하여 로컬 상태에 액세스하려면 일반적인 메소드를 사용
                countPlusLocalState (state) {
                    return state.count + this.localCount
                }
            })
        }
        ```
    - **Object Spread Operator**
        - 사용 이유: 로컬 영역의 computed 속성과 함께 사용하기 위해 
        - 예시
        ```javaScript
        computed: {
            localComputed () { /* ... */ },  // (vuex를 활용하지 않는) 로컬 영역의 computed 
            ...mapState({
                // ...
            })
        }
        ```

#### ➿ **Getters**
store 내부의 계산 속성. <br/> 
각각의 컴포넌트에서 state를 계산하면 반복 호출이 잦아져 비효율적인 로직이 됨. 따라서 store 내부에서 계산을 진행하고, 각 컴포넌트에서는 state만 호출하도록 하는 것.
- ```this.$store.getters.{getter명}```의 형태로 활용
- 예시
    - store 내부
    ```javascript
    export const store = new Vuex.Store({
        state: {
            count: 0
        },
        getters: { 
            increaseCount(state) {
                return state.count+1
            },
            // getter를 반환하는 것도 가능
            multiplyCount(state) {
                return getters.getCurCount*2
            },
            // 함수를 반환하는 것도 가능
            decreaseCount: (state) => (num) => { 
                return state.count-num
            },
            // 동일한 함수
            // decreaseCount: (function(state) {
                // return function(num) {
                    // return state.count-1
                // }
            // })
        }
    })
    ```
    - 컴포넌트 내부
    ```javaScript
    export default {
        computed: {
            increaseCount () {
                return this.$store.getters.increaseCount
            },
            // getter를 반환하는 경우
            multiplyCount () {
                return this.$store.getters.multiplyCount
            },
            // 함수가 반환되는 경우
            decreaseCount () {
                return this.$store.getters.increaseCount(1)
            },
        }
    }
    ```
- **mapGetters** <br/>
mapState와 동일하게 코드의 반복을 막기 위해 mapGetters 사용하며, 로컬 computed 속성들과 함께 사용하고 싶다면 spread operator를 사용하면 됨.
    ```javascript
    computed: {
        ...mapGetters([
            'increaseCount',
            'anotherGetter',
            count: 'decreaseCount' // this.count에 $store.getters.decreaseCount를 매핑하는 경우
            // ...
        ])
    }
    ```

#### ➿ **Mutations**
Vuex 내부의 state의 값을 _동기적으로_ 변경할 때 사용 <br/>
(비동기적인 변이: Actions) <br/>
⟶ 동기적: 해당 mutation이 호출되는 시점에 바로 실행되어야 함. API 콜과 같은 비동기 작업은 여러 컴포넌트에서 동시다발적으로 일어나면 현재 state를 추적할 수 없기 때문에 안됨.

* 각 컴포넌트에서 store.commit을 통해 mutation handler를 호출하여 사용
    - commit을 통해 state의 추적이 가능하게 함
    - payload(전달 인자)가 없는 경우
        - store 내부
        ```javaScript
            const store = new Vuex.Store({
                state: {
                    count: 1
                },
                mutations: {
                    increment (state) {
                        state.count++
                    }
                }
            })
        ```
        - 컴포넌트 내부
        ```javaScript
        export default {
            computed: {
                count () {
                    return this.$store.state.count
                }
            },
            methods: {
                increment() {
                    this.$store.commit('increment')
                }
            }
        }
        ```
    - payload가 있는 경우
        - payload는 여러 field를 가질 수 있도록 객체의 형태를 갖는 것이 좋음
        - store 내부
        ```javaScript
        // ...
        mutations: {
            increment (state, n) {
                state.count += n
            }
        }   
        ```
        - 컴포넌트 내부
         ```javaScript
        store.commit('increment', {
            amount: 10
        })  
        ```
        ```javaScript
        // 객체의 type을 지정하여 commit도 가능
        store.commit({
            type: 'increment',
            amount: 10
        })  
        ```
- **mapMutations** <br/>
    - mapState, mapGetters와 같이 mutations를 간단히 사용할 수 있음
    - 차이점: methods에 정의
    ```javaScript
    import { mapMutations } from 'vuex'

    export default {
    // ...
    methods: {
        // 로컬 데이터명과 mutations 메소드 명이 동일할 때
        // this.increment = this.$store.commit('increment')
        ...mapMutations([
            'increment' 
        ]),
        // 로컬 데이터명과 mutations 메소드 명이 다를 때
        // this.add() = this.$store.commit('increment')
        ...mapMutations({
            add: 'increment' 
        })
    }
    ```
- Mutation 메소드 명을 상수로 사용하기
    - 개발자가 많은 대규모 프로젝트에서 유용하며, 모든 상수를 하나의 파일에 모아놓으면 어플리케이션에서 어떤 변이가 가능한지 한 눈에 파악할 수 있어서 편리함.
        - mutation-types.js
            ```javaScript
            export const SOME_MUTATION = 'SOME_MUTATION'
            ```
        - store.js
            ```javaScript
            import Vuex from 'vuex'
            import { SOME_MUTATION } from './mutation-types'

            const store = new Vuex.Store({
                state: { ... },
                mutations: {
                    // (ES2015의 computed property name을 사용)
                    // 상수를 함수 이름으로 사용 가능
                    [SOME_MUTATION] (state) { ... }
                }
            })
            ```

#### ➿ **Actions**
Vuex 내부의 state의 값을 _비동기적으로_ 변경할 때 사용<br/>
그러나 mutations와 같이 state 값을 직접적으로 변경하는 게 아니라 **mutations의 메소드를 호출 후 commit을 통해 변경함.**
* 사용 영역: setTimeout() 혹은 서버와의 http 통신 등
* Store 내부에서 actions 내부에 mutations에 정의한 메소드를 commit을 통해 호출하여 구현함
    ```javaScript
    const store = new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            increment (state) {
                state.count++
            }
        },
        actions: {
            increment (context) {
                context.commit('increment')
            }
        }
    })
    ```
    * context? <br/>
    actions 핸들러의 파라미터로, 다음의 프로퍼티들을 갖는 객체
        ```
        {
            state,      // same as `store.state`, or local state if in modules
            rootState,  // same as `store.state`, only in modules
            commit,     // same as `store.commit`
            dispatch,   // same as `store.dispatch`
            getters,    // same as `store.getters`, or local getters if in modules
            rootGetters // same as `store.getters`, only in modules
        }
        ```
        * 객체이기 때문에 commit을 여러번 호출해야 하면 ES6의 Destructing 문법 사용 가능. commit을 여러번 사용해야 하는 경우 유용. 
            ```javaScript
            actions: {
                increment ({ commit }) { // Destructing 문법을 사용하여 context 객체 내부의 commit 함수를 별도 추출하는 것
                    commit('increment') // 추출한 commit 함수 사용
                    commit('anotherIncrement')
                }
            }
            ```
* Component 내부에서는 ```store.dispatch('increment')``` 와 같은 형태로 호출하여 사용
    * Store 내부
        ```javaScript
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        }
        ```
    * Component 내부
        ```javaScript
        methods: {
            increaseCnt() {
                this.$store.dispatch('incrementAsync');
            }
        }
        ```
        * 동일하게 payload를 활용할 수 있고, 타입을 지정하여 dispatch 할 수 있음
            ```javaScript
            // 페이로드와 함께 디스패치
            store.dispatch('incrementAsync', {
                amount: 10
            })

            // 객체와 함께 디스패치
            store.dispatch({
                type: 'incrementAsync',
                amount: 10
            })
            ```

* 액션 내의 비동기 로직 사용 가능 <br/>
```store.dispatch```는 action 핸들러가 반환한 promise를 처리할 수 있으며, promise를 반환
    * store 내부
        ```javaScript
        actions: {
            actionA ({ commit }) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit('someMutation')
                        resolve()
                    }, 1000)
                })
            },
            // 다음과 같이 사용하는 것도 가능
            actionB ({ dispatch, commit }) {
                return dispatch('actionA').then(() => {
                    commit('someOtherMutation')
                })
            }
        }
        ```
    * 컴포넌트 내부
        ```javaScript
        store.dispatch('actionB').then(() => {
            // ...
        })
        ```

* 액션 내의 비동기 로직 사용 가능 - async/await <br/>
    ```javaScript
    actions: {
        async actionA ({ commit }) {
            commit('gotData', await getData())
        },
        async actionB ({ dispatch, commit }) {
            await dispatch('actionA')
            commit ('gotOtherData', await getOtherData())
        }
    }
    ```

* **mapActions** <br/>
```this.$store.dispatch('xxx')``` 반복을 막기 위해 동일하게 헬퍼 제공
    ```javaScript
    import { mapActions } from 'vuex'

    export default {
        // ...
        methods: {
            ...mapActions([
                'increment' // this.increment()를 this.$store.dispatch('increment')에 매핑

                // mapActions는 페이로드를 지원
                'incrementBy' // this.incrementBy(amount)를 this.$store.dispatch('incrementBy', amount)에 매핑
            ]),
            ...mapActions({
                add: 'increment' // this.add()을 this.$store.dispatch('increment')에 매핑
            })
        }
    }
    ```

#### ➿ **Modules**
저장소의 규모가 커지면 관리가 힘들기 때문에 각각 state, mutation, getters, actions를 포함하는 여러 개의 저장소로 나누어서 모듈화 할 수 있음
```javaScript
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA'의 상태
store.state.b // -> moduleB'의 상태
```
이때, 기존에 getters와 mutations의 첫 번째 파라미터였던 states는 각 module의 지역 상태(즉 module의 state)가 됨. rootState는 세 번째 파라미터에 표현되며, ```context.rootState```로 표현됨
```javaScript
const moduleA = {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      // moduleA의 state
      state.count++
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    },
    // 전역 상태의 state는 rootState.[변수명]
    sumWithRootCount (state, getters, rootState) { 
      return state.count + rootState.count
    }
  },
  actions: { 
    incrementIfOddOnRootSum ({ state, commit, rootState }) { // 전역 상태의 state는 rootState.[변수명]
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
```
* 네임스페이스 <br/>
모듈 내의 action, mutation, getter는 기본적으로 전역 네임스페이스 하에 등록됨. 그런데 다른 모듈 내부에 같은 이름의 메소드가 존재하면 충돌이 발생할 수 있음. 이를 예방하고자 ```namespaced:true```라는 옵션을 추가함으로써 store 요소들을 호출할 때 모듈 명을 앞에 붙여 호출할 수 있음. <br/>
<br/>
만약 전역 네임스페이스의 action을 dispatch 혹은 mutation을 commit 하고 싶다면 dispatch와 commit의 3번째 인자로 ```{ root: true }```를 전달.
    ```javaScript
    modules: {
        foo: {
            namespaced: true,
            getters: {
                // 해당 모듈의 지역화된 getters
                // 4번째 인자를 통해서 rootGetters 사용 가능
                someGetter (state, getters, rootState, rootGetters) {
                    getters.someOtherGetter // -> 'foo/someOtherGetter'
                    rootGetters.someOtherGetter // -> 'someOtherGetter'
                },
                someOtherGetter: state => { ... }
            },
            actions: {
                // dispatch와 commit도 해당 모듈의 지역화된 것
                // 전역 dispatch와 commit을 위한 `root` 옵션 설정 가능
                someAction ({ dispatch, commit, getters, rootGetters }) {
                    getters.someGetter // -> 'foo/someGetter'
                    rootGetters.someGetter // -> 'someGetter'

                    dispatch('someOtherAction') // -> 'foo/someOtherAction'
                    dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

                    commit('someMutation') // -> 'foo/someMutation'
                    commit('someMutation', null, { root: true }) // -> 'someMutation'
                },
                someOtherAction (ctx, payload) { ... }
            }
        }
    }
    ```

* 네임스페이스 모듈에서 전역 액션 등록 <br/>
네임스페이스 모듈에서 전역으로 사용가능한 모듈을 등록하기 위해서는 ```root: true```를 표시하고 ```handler``` 함수에 액션을 정의
    ```javaScript
    {
    actions: {
        someOtherAction ({dispatch}) {
        dispatch('someAction') // someAction을 호출하면 foo 모듈의 someAction이 실행됨
        }
    },
    modules: {
        foo: {
        namespaced: true,

        actions: {
            someAction: {
            root: true,
            handler (namespacedContext, payload) { ... } // -> 'someAction'
            }
        }
        }
    }
    }
    ```

* 헬퍼에서 네임스페이스 바인딩 <br/>
mapState, mapGetters, mapActions, mapMutations 헬퍼에서 네임스페이스 모듈을 컴포넌트에 바인딩 할 때 간소화하는 방법 <br/>
    * 기존
    ```javaScript
    computed: {
        ...mapState({ // state.some.nested.module이 반복됨
                a: state => state.some.nested.module.a,
                b: state => state.some.nested.module.b
            })
        },
        methods: {
        ...mapActions([ // some/nested/module이 반복됨
            'some/nested/module/foo', // -> this['some/nested/module/foo']()
            'some/nested/module/bar' // -> this['some/nested/module/bar']()
        ])
    }
    ```

    * 모듈의 네임스페이스 문자열을 헬퍼의 첫 번째 인수로 전달하여 해당 모듈을 컨텍스트로 사용하여 바인딩
    ```javaScript
    computed: {
        ...mapState('some/nested/module', {
            a: state => state.a,
            b: state => state.b
        })
    },
    methods: {
        ...mapActions('some/nested/module', [
            'foo', // -> this.foo()
            'bar' // -> this.bar()
        ])
    }
    ```

    * createNamespacedHelpers를 사용하여 네임스페이스 헬퍼 생성
    ```javaScript
    import { createNamespacedHelpers } from 'vuex'

    const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

    export default {
        computed: {
            // `some/nested/module`에서 찾음
            ...mapState({
                a: state => state.a,
                b: state => state.b
            })
        },
        methods: {
            // `some/nested/module`에서 찾음
            ...mapActions([
                'foo',
                'bar'
            ])
        }
    }
    ```

    * 동적 모듈 등록 <br/>
    저장소가 생성 된 후에 동적으로 모듈 등록
    ```javaScript
    store.registerModule('myModule', {
        // ...
    })

    // `nested/myModule` 중첩 모듈 등록
    store.registerModule(['nested', 'myModule'], {
        // ...
    })
    ```
    ```store.unregisterModule(moduleName)``` 를 사용하면 동적으로 등록한 모듈을 제거 가능. 단, 정적으로 등록된 모듈은 제거 불가.

<br/>


<br/>
❗️ Vuex는 새로고침 시 초기화 됨. 그러나 vuex-persistedstate (state - localstorage 동기화 라이브러리) 사용 시 브라우저의 local storage에 저장되어 새로고침해도 초기화되지 않음.

<br/>

### 🔷 공통 컴포넌트 생성 방법 2가지 (feat. Vuex)
[상황]  <br/>
User view (유저 정보 표시 페이지)와 User profile (유저 정보 표시 컴포넌트)가 존재하며, 유저 정보는 api call을 통해 불러옴 <br/>
1. api call을 화면 단 (User view) 에서 실행 후, props를 통해 User profile로 내려주기 
2. api call을 컴포넌트 (User profile)에서 실행

<br/>

### 🔷 EventBus
*❗️해당 기능은 Vue2까지만 지원되며, Vue3부터 Event Bus(+$on, $off, $once) 공식적으로 삭제* <br/>
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
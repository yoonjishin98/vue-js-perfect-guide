<template>
  <div>
    <!-- 다음과 같이 사용 시, 에러 발생
    에러) Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. 
    Instead, use a data or computed property based on the prop's value. Prop being mutated: "checked" 
    이유) props는 상위 -> 하위 컴포넌트로 흐르는 단방향 바인딩. 
        그런데 상위 컴포넌트(App.vue)에서 내린 데이터를 하위 컴포넌트(CheckBox.vue)가 변경하여 상위 컴포넌트를 변경하려고 해서 발생한 에러.
        즉, CheckBox.vue에서 checked 값을 props로 받은 후에 바로 v-model에 넣음으로써 상위 컴포넌트의 값을 checked=true로 변경하려고 했기 때문에 발생한 에러이다. 
    해결방안)   (1) 하위 컴포넌트의 data property에 넣어서 사용
              (2) computed를 활용하여 사용 -->

    <!-- <check-box :checked="checked"></check-box> -->

    <check-box v-model="checked"></check-box>
    <!-- 여기에서의 해결방안) 하위에서 $emit을 통해 이벤트를 발생시켜 상위에 변경된 데이터를 notice. -->
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data () {
    return {
      checked: false
    }
  }
}
</script>
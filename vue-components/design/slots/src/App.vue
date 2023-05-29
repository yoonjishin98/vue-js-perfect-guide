<template>
  <div>
    <ul>
      <!-- props를 사용해도 되지만 slot을 사용하는 이유: 데이터 형식 및 스타일에 대한 유연함 -->
      <!-- 상위 컴포넌트에서 하위 컴포넌트의 형식 및 스타일 지정 가능이 큰 장점 -->
      <item v-for="item in items" :key="item">
        {{ item }}
      </item>
      <item>
        추가 아이템
        <button>
          click me!
        </button>
      </item>
      <!-- <item v-for="item in items" 
      :key="item"
      :item="item">
        item
      </item> -->
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
  data () {
    return {
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5']
    }
  }
}
</script>
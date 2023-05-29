<template>
  <div>
    <!-- <input type="checkbox" v-model="checked">체크박스 -->
    <input type="checkbox" :value="value" @click="toggleCheckbox">체크박스
  </div>
</template>

<script>
export default {
  // props: ['checked']
  props: ['value'], // false
  methods: {
    toggleCheckbox () {
      this.$emit('input', !this.value)
    }
  }
}
</script>
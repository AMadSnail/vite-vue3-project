<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: maxin
 * @Date: 2022-03-29 16:48:10
 * @LastEditors: maxin
 * @LastEditTime: 2022-03-29 16:48:20
-->
<template>
  <div>
    <p>首页</p>
    <p>第{{ year }}年{{ moth }}月{{ day }}日</p>
    <p>姓名：{{ nickname }}</p>
    <p>年龄：{{ age }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'HomeIndex',
  setup() {
    const year = ref(2022);
    const user = reactive({ nickname: 'maxin', age: 26, gender: '男' });
    const years = reactive({ moth: 1, day: 1 });
    setInterval(() => {
      years.day++;
      if (years.day > 31) {
        years.day = 1;
        years.moth++;
        if (years.moth > 12) years.moth = 1;
      }
    }, 1000);
    return {
      year,
      ...toRefs(user),
      ...toRefs(years),
    };
  },
});
</script>
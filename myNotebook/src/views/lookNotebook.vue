<template>
  <div class="login">
    <div class="listStyle" v-for="(item, index) in tabList" :key="index">
      {{ item.info }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "@/utils/localStorage.js";
let tabList = ref([]);
onMounted(() => {
  tabList.value = getData("notebook");
});
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .listStyle {
    width: 300px;
    height: 125px;
    border: 4px solid #d9d9d9;
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis; /*超出的部分用省略号代替*/
    display: -webkit-box; /*弹性伸缩和字模型显示*/
    -webkit-box-orient: vertical; /*设置或检索伸缩盒对象的子元素的排列方式*/
    -webkit-line-clamp: 7; /*限制在一个快元素显示的文本行数*/
  }
}
</style>

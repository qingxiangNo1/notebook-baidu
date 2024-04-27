<template>
  <div class="container">
    <div class="search">
      <a-input-search
        id="search"
        v-model:value="data"
        placeholder="请输入文本内容,点击搜索"
        @search="onSearch"
      />
    </div>
    <div class="login">
      <div class="listStyle" v-for="(item, index) in tabList" :key="index">
        {{ item.info }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "@/utils/localStorage.js";
const data = ref("");
let tabList = ref([]);
const NAME = "notebook";
const maxlength = ref(250)
onMounted(() => {
  tabList.value = getData(NAME);
});
function onSearch() {
  //输入数据为空则返回全部数据 否则正常搜索
  if (data.value.length == 0) {
    tabList.value = getData(NAME);
  } else {
    let temp = [];
    for (let i = 0; i < tabList.value.length; i++) {
      if (tabList.value[i].info.indexOf(data.value) > -1) {
        temp.push(tabList.value[i]);
      }
    }
    tabList.value = temp;
  }
}
onMounted(() => {
  console.log(document.getElementById("search"));
});
window.addEventListener("resize", function () {
  if (document.body.offsetWidth < 530) {
  }
});
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .search {
    width: 250px;
    height: 30px;
    margin-bottom: 20px;
  }
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
}

</style>

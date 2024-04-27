<template>
  <div class="login">
    <div class="listStyle" v-for="(item, index) in tabList" :key="index">
      <div class="header">
         <a-button shape="circle" size="small" @click="onDelete(item)" :icon="h(DeleteOutlined)"></a-button>
        </div>
        <div class="content">{{ item.info }}</div>
    </div>
  </div>
</template>

<script setup>
import {ref,onMounted,h} from "vue"
import {
  DeleteOutlined
} from '@ant-design/icons-vue';
import {getData,clearData,setData} from '@/utils/localStorage.js'
let tabList = ref([]);
const name = 'notebook'
onMounted(() => {
  tabList.value = getData(name)
})
function onDelete(item) {
  console.log(tabList.value)
  for (let i = 0; i <  tabList.value.length; i++) {
    console.log("tabList.value.id",tabList.value.id)
    console.log("item.id",item.id)
    if (tabList.value[i].id == item.id) {
      console.log(123)
      tabList.value.splice(i,1)
    }   
  }
  clearData(name)
  setData(name,tabList.value)
}
</script>

<style lang="less" scoped>

.login {
  width: 100%;
  height: 100%;
 display: flex;
 flex-wrap: wrap;
 justify-content:space-around;
   .listStyle {
    width: 300px;
    height: 130px;
    border: 4px solid #d9d9d9;
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis; /*超出的部分用省略号代替*/
    display: -webkit-box; /*弹性伸缩和字模型显示*/
    -webkit-box-orient: vertical; /*设置或检索伸缩盒对象的子元素的排列方式*/
    -webkit-line-clamp: 6; /*限制在一个快元素显示的文本行数*/
    .header{
      display: flex;
      justify-content: flex-end;
    }
  }
}
 

</style>

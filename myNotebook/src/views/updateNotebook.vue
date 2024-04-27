<template>
  <div class="login">
    <div class="listStyle" v-for="(item, index) in tabList" :key="index" >
      <div class="header">
         <a-button shape="circle" size="small" @click="onEdit(item)" :icon="h(EditOutlined)"></a-button>
        </div>
        <div class="content" @click="onEdit(item)">{{ item.info }}</div>
    </div>
  </div>
</template>

<script setup>
import {ref,onMounted,h} from "vue"
import { useRouter } from "vue-router";
import $bus from '@/utils/bus.js'
import {
  EditOutlined
} from '@ant-design/icons-vue';
import {getData,clearData,setData} from '@/utils/localStorage.js'
import {useNotebookStore} from '@/store/modules/notebookStore.js'
let router = useRouter()
let notebookStore = useNotebookStore()
let tabList = ref([]);
const NAME = 'notebook'
onMounted(() => {
  tabList.value = getData(NAME)
})
function onEdit(item) {
  notebookStore.inputInfo = item.info
  notebookStore.id = item.id
  router.push('/addNotebook')
  $bus.emit('editing',item)
}
$bus.on('backEdit',(res)=>{
  console.log("res",res)
  for (let i = 0; i <  tabList.value.length; i++) {
    if (res.id == tabList.value[i].id) {
      tabList.value[i].info = res.info
    }
    clearData(NAME)
    setData(NAME,tabList.value)
  }
 
})
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

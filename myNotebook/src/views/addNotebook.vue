<template>
  <div class="add">
    <div class="addHeader">
      <a-button style="width: 100px" :icon="h(SaveOutlined)" @click="onSave"
        >保存</a-button
      >
    </div>
    <div class="addContainer">
      <a-textarea v-model:value="data" placeholder="请输入内容" :rows="20" />
    </div>
  </div>
</template>

<script setup>
import { h, ref, onMounted, nextTick, isRef, toRef } from "vue";
import { useRouter } from "vue-router";
import { SaveOutlined } from "@ant-design/icons-vue";
import { getData, setData } from "@/utils/localStorage.js";
import { message } from "ant-design-vue";
import getUUID from "@/utils/uuid.js";
import $bus from "@/utils/bus.js";
import {useNotebookStore} from '@/store/modules/notebookStore.js'
const NAME = "notebook"; //保存常量方便管理
let test = ref("")
let data = ref("");
let id = ref(""); //更新时需要
let notebookStore = useNotebookStore()
let router = useRouter();
onMounted(() => {
  console.log("notebookStore.inputInfo.value",notebookStore.inputInfo)
  data.value = notebookStore.inputInfo
  id.value = notebookStore.id
})
function onSave() {
  //如果是新增数据  否则修改数据
  let obj = {};
  if (!id.value) {
    console.log(1)
    obj.id = getUUID();
    obj.info = data.value;
    setData(NAME, obj);
  } else {
    console.log(2)
    //将更改后的数据发送给编辑页面 让它在原位置更新
    obj.id = id.value;
    obj.info = data.value;
    $bus.emit("backEdit", obj);
    router.push("/updateNotebook");
    //清空数据
    id.value = "";
    notebookStore.inputInfo = ""
  }
  message.info("数据成功添加到本地");
  data.value = "";
}
//交给pinia实现数据回传
$bus.on("editing", (res) => {
})
</script>

<style scoped lang="less">
.add {
  width: 100%;
  height: 100%;
  .addContainer {
    margin-top: 20px;
  }
}
</style>

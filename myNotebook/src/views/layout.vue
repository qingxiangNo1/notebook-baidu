<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="inline"
        @click="onClickMenu($event)"
      >
        <a-menu-item key="1">
          <PlusOutlined />
          <span>添加</span>
        </a-menu-item>
        <a-menu-item key="2">
          <EyeOutlined />
          <span>查看</span>
        </a-menu-item>
        <a-menu-item key="3">
          <DeleteOutlined />
          <span>删除</span>
        </a-menu-item>
        <a-menu-item key="4">
          <EditOutlined />
          <span>编辑</span>
        </a-menu-item>
        <a-menu-item key="5">
          <SearchOutlined />
          <span>搜索</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>{{ tag }}</a-breadcrumb-item>
        </a-breadcrumb>
        <div
          class="listContainer"
          :style="{ padding: '24px', background: '#fff' }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Notebook ©2024.4.24 Created by WangQX
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script  setup>
import { EyeOutlined,SearchOutlined,DeleteOutlined,EditOutlined, PlusOutlined } from "@ant-design/icons-vue";
import { ref,onMounted } from "vue";
import { useRouter,useRoute } from "vue-router";
import $bus from "@/utils/bus.js";
import {switchRouteByName,switchRouteByKey} from "@/utils/switchRoute.js"
let router = useRouter();
let route = useRoute()
let tag = ref("");
const collapsed = ref(false);
const selectedKeys = ref(["1"]);
onMounted(()=>{
  tag.value = switchRouteByName(route.name,router)
})
const ADDTAG = "添加笔记";
const LOOKTAG = "查看笔记";
const DELETETAG = "删除笔记";
const EDITTAG = "编辑笔记";
const SEARCHTAG = "搜索笔记";
//菜单正确指向
$bus.on("editing", () => {
  selectedKeys.value = ["1"];
  tag.value = ADDTAG;
});
$bus.on("backEdit", () => {
  selectedKeys.value = ["4"];
  tag.value = EDITTAG;
});
function onClickMenu(e) {
  tag.value = switchRouteByKey(e.key,router) 
  console.log(" tag.value", tag.value)
}
window.addEventListener('resize', function() {
  if(document.body.offsetWidth<530){
  collapsed.value = true
}
})
</script>
<style scoped lang="less">
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
.listContainer {
  height: 100%;
}

</style>

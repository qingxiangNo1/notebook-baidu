const ADDTAG = "添加笔记";
const LOOKTAG = "查看笔记";
const DELETETAG = "删除笔记";
const EDITTAG = "编辑笔记";
const SEARCHTAG = "搜索笔记";
import { ref } from "vue";
let router;
let tag = ref("");
export function switchRouteByKey(key, r) {
  router = r;
  switch (key) {
    case "1":
      router.push("/addNotebook");
      tag.value = ADDTAG;
      console.log(1233);
      return tag.value;
    case "2":
      router.push("/lookNotebook");
      tag.value = LOOKTAG;
      return tag.value;
    case "3":
      router.push("/deleteNotebook");
      tag.value = DELETETAG;
      return tag.value;
    case "4":
      router.push("/updateNotebook");
      tag.value = EDITTAG;
      return tag.value;
    case "5":
      router.push("/searchNotebook");
      tag.value = SEARCHTAG;
      return tag.value;
    default:
      break;
  }
}
export function switchRouteByName(name, r) {
  router = r;
  switch (name) {
    case "addNotebook":
      router.push("/addNotebook");
      tag.value = ADDTAG;
      console.log(1233);
      return tag.value;
    case "lookNotebook":
      router.push("/lookNotebook");
      tag.value = LOOKTAG;
      return tag.value;
    case "deleteNotebook":
      router.push("/deleteNotebook");
      tag.value = DELETETAG;
      return tag.value;
    case "updateNotebook":
      router.push("/updateNotebook");
      tag.value = EDITTAG;
      return tag.value;
    case "searchNotebook":
      router.push("/searchNotebook");
      tag.value = SEARCHTAG;
      return tag.value;
    default:
      break;
  }
}

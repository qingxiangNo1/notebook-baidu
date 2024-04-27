export function setData(name, values) {
  let data = getData(name);
  if (!data) {
    //初次加载 创建数据 如果是对象push到数组中 如果是删除一条数据返回的数组则直接setitem
    if (values instanceof Array) {
        localStorage.setItem(name,JSON.stringify(values));
    } else {
        let res = [];
        console.log(1)
        res.push(values);
        localStorage.setItem(name,JSON.stringify(res));
    } 
  } else {
    data.push(values)
    localStorage.setItem(name, JSON.stringify(data));
  }

}
export function getData(name) {
  return JSON.parse(localStorage.getItem(name));
}
export function clearData(name) {
    return localStorage.removeItem(name);
  }
  


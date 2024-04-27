import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useNotebookStore = defineStore('notebookStore',()=>{
    let inputInfo = ref("")
    let id = ref(0)
    return{inputInfo,id}
})

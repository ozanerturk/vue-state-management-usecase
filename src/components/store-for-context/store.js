import { defineStore } from 'pinia';
import { ref, computed } from "vue";
export const useStore = defineStore('storeForContext', () => {
    const count = ref(2);
    const name = ref('Eduardo');

    const title = computed(()=>{
        return `Count is ${count.value} and Name is '${name.value}'`
    })
    function increment() {
        count.value++;
    }
    function removeLastChar(){
        name.value = name.value.substring(0,name.value.length-1)
    }
    function updateName(val) {
        name.value = val;
    }
    return { title,count, name, increment, updateName,removeLastChar };
});
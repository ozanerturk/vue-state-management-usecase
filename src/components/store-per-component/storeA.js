import { defineStore } from 'pinia';
import { ref } from "vue";
export const useStore = defineStore('storePerComponentA', () => {
    const name = ref('Eduardo');


    function updateName(val) {
        name.value = val;
    }
    function removeLastChar(){
        name.value = name.value.substring(0,name.value.length-1)
    }
    return { name, updateName ,removeLastChar};
});
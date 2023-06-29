import { defineStore } from 'pinia';
import { ref } from "vue";
export const useStore = defineStore('storePerComponentB', () => {
    const count = ref(2);

    function increment() {
        count.value++;
    }

    return { count, increment };
});
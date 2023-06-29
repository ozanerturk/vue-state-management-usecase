<script setup>
import { defineProps} from "vue"
import { useStore } from "./storeA";
const store = useStore();


const props = defineProps({
	title:String
})

function keyUpdate(e){
	console.log(e)
	store.updateName(e.target.value)
}

</script>

<template>
		{{ title }}
		<input type="text" @keydown="keyUpdate" :value="store.name" />
</template>

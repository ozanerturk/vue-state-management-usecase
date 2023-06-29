<script setup>
import { useStore } from "./storeB";
import {defineEmits} from "vue"
const store = useStore();

const emit = defineEmits(["remove"])
</script>

<template>
	<div>
		<button @click="store.increment()">Increment</button>
		<button @click="emit('remove')">RM</button>
	</div>
</template>

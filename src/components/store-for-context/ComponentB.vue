<script setup>
import { useStore } from "./store";
const store = useStore();
</script>

<template>
	<div >
		<button @click="store.increment()">Increment</button>
		<button @click="store.removeLastChar()">RM</button>
	</div>
</template>

<script setup>
import { useStore } from "./store";
const store = useStore();
</script>

<template>
	<div>
		{{ store.title }}
		<input type="text" v-model="store.name"><br>
	</div>
</template>

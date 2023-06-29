<script setup>
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";
import { useStore } from "./store";
const store = useStore();
</script>
<template>
	<div>
		<ComponentA :title="store.title" v-model:name="store.name"></ComponentA>
		<ComponentB
			@clicked="store.increment()"
			@rm="store.removeLastChar()"
		></ComponentB>
	</div>
</template>

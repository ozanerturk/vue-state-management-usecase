<script setup>
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";
import { useStore as useStoreA } from "./storeA";
import { useStore as useStoreB } from "./storeB";
import { computed } from "vue";

const storeA = useStoreA();
const storeB = useStoreB();

const title = computed(() => {
	return `Count is ${storeB.count} and Name is '${storeA.name}'`;
});

function removeLastChar() {
	storeA.removeLastChar();
}
</script>
<template>
	<div>
		<ComponentA :title="title"></ComponentA>
		<ComponentB @remove="removeLastChar"></ComponentB>
	</div>
</template>

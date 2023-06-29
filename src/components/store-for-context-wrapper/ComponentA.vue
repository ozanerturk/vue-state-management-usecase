<script setup>
import { defineProps, computed, defineEmits } from "vue";

const props = defineProps({
	title: String,
	name: String,
});

const emit = defineEmits("update:name");

const nameValue = computed({
	get() {
		return props.name;
	},
	set(val) {
		emit("update:name", val);
	},
});
</script>

<template>
	<div>
		{{ title }}
		<input type="text" v-model="nameValue" /><br />
	</div>
</template>

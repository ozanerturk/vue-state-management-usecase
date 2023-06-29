<script setup>
import { defineEmits, computed, defineProps } from "vue";

const props = defineProps({
	name: String,
});
const emit = defineEmits(["clicked", "rm","update:name"]);

</script>

<template>
	<div>
		<button @click="emit('clicked')">Increment</button>
		<button @click="emit('rm')">RM</button>
	</div>
</template>

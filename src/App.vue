<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import StorePerComponent from "./components/store-per-component/index.vue";
import StoreForContext from "./components/store-for-context/index.vue";
import StoreForContextWrapper from "./components/store-for-context-wrapper/index.vue";
</script>

<template>
	<div class="usecase">
		<div>
			<b>Store Per Component</b>
			<StorePerComponent></StorePerComponent>
			<i
				>Each component has their own store and wrapper component can
				asccess both store
			</i>
		</div>
		<div>
			<b>Store Per Context</b>
			<StoreForContext></StoreForContext>
			<i>Both component A and B access to same store</i>
		</div>
		<div>
			<b>Wrapper Managed State</b>
			<StoreForContextWrapper></StoreForContextWrapper>
			<i
				>Components has no access to store, only wrapper component
				access to store and pass variables to child components as props
				or model</i
			>
		</div>
	</div>
</template>

<style scoped>
.usecase {
	display: flex;
	gap: 10px;
}
.usecase > div {
	flex: 1;
	height: 300px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
</style>

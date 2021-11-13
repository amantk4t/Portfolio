<script lang="ts">
import Navbar from "./components/layouts/Navbar.vue";
export default {
	components: { Navbar },
	name: "App",
	data() {
		const user = {
			name: "Amanuel Tekalgn",
			email: "amantk4t@gmail.com",
			telegram: "@aman4",
			imageUrl: "avatar.webp",
		};
		return {
			user,
		};
	},
};
</script>

<template>
	<div class="w-full h-screen flex items-center">
		<Navbar :user="user" />
		<div
			class="h-screen w-full max-w-full bg-gray-800 text-white overflow-auto"
		>
			<router-view></router-view>
		</div>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

::-webkit-scrollbar {
	@apply bg-transparent w-2;
}
::-webkit-scrollbar-thumb {
	@apply bg-gray-600 rounded-full;
}
</style>

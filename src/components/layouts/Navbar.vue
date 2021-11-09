<template>
	<nav class="items-center w-80 h-screen bg-gray-700 text-white">
		<header>
			<div class="w-full bg-gray-600">
				<img
					class="
						rounded-full
						w-28
						h-28
						p-1
						border-8 border-gray-600
						m-auto
						shadow-lg
					"
					:src="user.imageUrl"
				/>
				<h4 class="text-xl text-white">{{ user.name }}</h4>
				<p class="text-green-500">Vue Developer</p>
				<p class="text-gray-700">{{ user.email }}</p>
			</div>
			<ul class="grid mt-3">
				<router-link
					v-for="(item, index) in navigation"
					:key="index"
					class="
						p-2
						text-left text-gray-500
						hover:text-white
						cursor-pointer
						transition
						flex
					"
					:class="{ 'text-red-100 bg-gray-800': $route.name == item.name }"
					:to="item.path"
				>
					<span>{{ item.name }}</span>
				</router-link>
			</ul>
		</header>
	</nav>
</template>

<script>
export default {
	props: ["user"],
	data() {
		const navigation = [
			{ name: "Dashboard", path: "/", icon: "/icons/001.svg", active: true },
			{ name: "Team", path: "/team", icon: "/icons/050.svg", active: false },
			{
				name: "Skills",
				path: "/skills",
				icon: "/icons/211.svg",
				active: false,
			},
			{
				name: "Projects",
				path: "/projects",
				icon: "/icons/000.svg",
				active: false,
			},
			{
				name: "Support",
				path: "/support",
				icon: "/icons/000.svg",
				active: false,
			},
			{
				name: "Get to know me",
				path: "/about",
				icon: "/icons/000.svg",
				active: false,
			},
		];
		return { navigation };
	},
};
</script>
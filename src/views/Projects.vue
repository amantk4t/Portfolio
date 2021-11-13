<template>
	<h2 class="text-xl">Projects</h2>
	<div class="cards-container">
		<div class="card-container" v-for="project in projects" :key="project.id">
			<div class="card relative">
				<div class="preview w-full h-full">
					<img class="m-auto" :src="project.preview" />
				</div>
				<h2 class="absolute bottom-0 left-1/4">{{ project.name }}</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			projects: [
				{
					id: 1,
					name: "Note Music Player",
					status: "Work in progress...",
					preview: "/previews/noteplayer.jpg",
				},
				{
					id: 2,
					name: "Comic News",
					status: "Work in progress...",
					preview: "/previews/noteplayer.jpg",
				},
				{
					id: 3,
					name: "Shop Inventory Management System",
					status: "Work in progress...",
					preview: "/previews/noteplayer.jpg",
				},
				{
					id: 4,
					name: "Note Music Player",
					status: "Work in progress...",
					preview: "/previews/noteplayer.jpg",
				},
				{
					id: 5,
					name: "Note Music Player",
					status: "Work in progress...",
					preview: "/previews/noteplayer.jpg",
				},
			],
		};
	},
};
</script>

<style scoped>
.cards-container {
	perspective: 20em;
	@apply w-full h-screen flex flex-wrap justify-around items-center;
}
.card-container {
	height: 21rem;
	background: linear-gradient(45deg, purple, transparent, orange);
	@apply w-64 p-1 flex
		items-center justify-center rounded;
}

.card-container:hover {
	animation: hueify 2600ms ease-out infinite alternate;
}
.card {
	transition: 600ms ease;
	@apply w-60 h-80  rounded;
}

@keyframes hueify {
	0% {
		background-position: 20px 20px;
	}

	50% {
		background-position: 40px 40px;
	}
	100% {
		background-position: 0px 0px;
	}
}
</style>
<template>
	<div>
		<h2 class="text-xl">Support me</h2>
		<p>
			If you like what I do or just want to buy me a cup of coffee, enter your
			email, donate the amount you want and then hit submit! Thank you for
			taking your time to be here.
		</p>
	</div>
	<form @submit.prevent="donate" class="p-4 grid m-4 bg-gray-700">
		<h2 class="text-lg text-left">Fill out this form</h2>
		<input
			class="text-gray-700 px-2 py-1 outline-none rounded-sm shadow-md"
			type="email"
			placeholder="E-mail"
		/>
		<h3>Choose amount</h3>
		<div class="flex justify-evenly mb-2">
			<button class="choose-btn">1</button>
			<button class="choose-btn">5</button>
			<button class="choose-btn">10</button>
			<button class="choose-btn">15</button>
			<button class="choose-btn">20</button>
			<button class="choose-btn">50</button>
			<button class="choose-btn">100</button>
		</div>
		<textarea
			class="bg-gray-600 rounded-sm outline-none p-2"
			cols="30"
			rows="10"
			placeholder="Anything you want to say to me..."
		></textarea>
		<input
			class="
				cursor-pointer
				hover:bg-gray-900
				bg-gray-800
				w-40
				p-1
				shadow-md
				mx-auto
				mt-2
				rounded-sm
			"
			type="submit"
			value="Submit"
		/>
	</form>
</template>

<script>
export default {
	methods: {
		donate: () => {},
	},
};
</script>

<style scoped>
.choose-btn {
	@apply w-12 h-12 rounded-md shadow-md text-white hover:bg-gray-800 hover:shadow-lg;
}
</style>
<script setup>
const projects = [
    { title: 'SIMS', preview: '', status: 'Under construction', clickable: false },
    { title: 'Musix Match Clone', preview: '', status: 'Under construction', clickable: true },
    { title: 'SIMS', preview: '', status: 'Under construction', clickable: false },
    { title: 'SIMS', preview: '', status: 'Under construction', clickable: false },
];
</script>

<template>
    <main>
        <h1 class="text-center text-2xl">Projects</h1>
        <section class="flex flex-wrap gap-12 justify-center mt-4">
            <section
                class="card w-96 bg-base-100 shadow-xl image-full glass"
                v-for="project, index in projects"
                :key="index"
            >
                <img src="https://api.lorem.space/image/car?w=400&h=225" :alt="project.title" />
                <div class="card-body">
                    <h3 class="card-title">{{ project.title }}</h3>
                    <span>{{ project.status }}</span>
                    <button
                        class="btn btn-outline btn-info btn-sm"
                        :class="{ 'btn-disabled': !project.clickable }"
                    >View</button>
                </div>
            </section>
        </section>
    </main>
</template>

<style scoped>
</style>
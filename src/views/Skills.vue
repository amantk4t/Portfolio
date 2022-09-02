<script setup>
import { ref } from 'vue';
const skills = ref([
    { name: 'HTML', level: 99, icon: 'assets/skills/html.png', certified: true, cat: 'Programming' },
    { name: 'CSS', level: 95, icon: 'assets/skills/css.png', certified: true, cat: 'Programming' },
    { name: 'JAVASCRIPT', level: 87, icon: 'assets/skills/javascript.png', certified: true, cat: 'Programming' },
    { name: 'jQuery', level: 80, icon: 'assets/skills/jQuery.png', certified: true, cat: 'Programming' },
    { name: 'C++', level: 60, icon: 'assets/skills/cpp.png', certified: false, cat: 'Programming' },
    { name: 'JAVA', level: 87, icon: 'assets/skills/java.png', certified: true, cat: 'Programming' },
    { name: 'Vue 3', level: 85, icon: 'assets/skills/vue.png', certified: false, cat: 'Programming' },
    { name: 'Tailwind CSS', level: 92, icon: 'assets/skills/tailwind.png', certified: false, cat: 'Programming' },
    { name: 'React JS', level: 85, icon: 'assets/skills/react.png', certified: true, cat: 'Programming' },
])
</script>

<template>
    <h1 class="-rotate-45 fixed top-1/2 bg">Skills</h1>
    <div class="flex flex-wrap justify-center items-center gap-8">
        <div v-for="skill in skills" class="py-4 ">
            <div class="radial-progress text-primary hover:bg-gray-900 hover:cursor-pointer flex flex-col justify-center items-center gap-4 shadow-2xl"
                :class="
                { 'text-success': skill.level >= 85 },
                { 'text-warning': skill.level < 85 },
                { 'text-error': skill.level <= 60 }" :style="'--value:' + skill.level"
                style="--size:12rem; --thickness: 2px;">
                <img :src="skill.icon" class="w-16" :alt="skill.name" />
                <label class="text-white">{{ skill.name }}</label>
            </div>
            <text class="progress w-56" :class="
            { 'progress-success': skill.level >= 85 },
            { 'progress-warning': skill.level < 85 },
            { 'progress-error': skill.level <= 60 }" :value="skill.level" max="100"></text>
        </div>
    </div>
</template>

<style scoped>
* {
    transition: all 0.5s;
}

.bg {
    color: #0009;
    left: 0%;
    font-size: 10rem;
    text-shadow: 2px 2px 15px #fff, -2px -2px 15px #fff;
}
</style>
<script setup>

import cardProject from '@/components/CardProject.vue'
import schoolProjects from '../assets/schoolProjects.json'
import persoProjects from '../assets/persoProjects.json'



</script>

<template>
	<main>

		<h1>School Projects</h1>

		<div class="projects">
			<div v-for="schoolProject in schoolProjects" :key="schoolProject.id" class="schoolProject">
				<cardProject :name="schoolProject.name" :img="schoolProject.img" :time="schoolProject.time"
					:desc="schoolProject.desc" :language="schoolProject.language"></cardProject>
			</div>

		</div>
		<h1>Personnal Projects</h1>
		<div class="projects">
			<div v-for="persoProject in persoProjects" :key="persoProject.id">
				<cardProject :name="persoProject.name" :img="persoProject.img" :time="persoProject.time"
					:desc="persoProject.desc" :language="persoProject.language"></cardProject>
			</div>
		</div>

	</main>
</template>
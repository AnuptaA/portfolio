<script lang="ts">
	import SkillProgressList from '$lib/components/SkillProgressList.svelte';
	import TechPill from '$lib/components/TechPill.svelte';

	const techCategories = {
		'Programming Languages': [
			'JavaScript',
			'TypeScript',
			'Python',
			'Go',
			'SQL',
			'R',
			'C/C++',
			'Bash'
		],
		Frontend: ['HTML/CSS', 'React', 'Svelte', 'Next.js', 'TailwindCSS'],
		Backend: ['Node.js', 'Express', 'Flask', 'REST APIs', 'GraphQL', 'NoSQL'],
		Databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
		'DevOps & Infrastructure': [
			'Git/GitHub',
			'CI/CD',
			'Docker',
			'AWS',
			'Vercel',
			'Render',
			'Heroku',
			'Kubernetes'
		],
		'Tools & Software': ['Figma', 'Adobe Suite', 'Google Workspace', 'Microsoft Office']
	};

	const frontendSkills = [
		{ name: 'React', level: 'Advanced', percentage: 80 },
		{ name: 'TailwindCSS', level: 'Intermediate', percentage: 55 },
		{ name: 'TypeScript', level: 'Intermediate', percentage: 50 },
		{ name: 'Next.js', level: 'Intermediate', percentage: 45 },
		{ name: 'Svelte', level: 'Beginner', percentage: 35 }
	];

	const backendSkills = [
		{ name: 'Flask', level: 'Advanced', percentage: 80 },
		{ name: 'REST API', level: 'Advanced', percentage: 75 },
		{ name: 'Node.js', level: 'Intermediate', percentage: 55 },
		{ name: 'Go', level: 'Intermediate', percentage: 40 },
		{ name: 'GraphQL', level: 'Beginner', percentage: 10 }
	];

	const devopsSkills = [
		{ name: 'Git/GitHub', level: 'Advanced', percentage: 70 },
		{ name: 'CI/CD', level: 'Intermediate', percentage: 55 },
		{ name: 'Docker', level: 'Intermediate', percentage: 45 },
		{ name: 'AWS', level: 'Beginner', percentage: 35 },
		{ name: 'Kubernetes', level: 'Beginner', percentage: 20 }
	];
</script>

<section id="skills" class="bg-secondary animate-fade-in px-4 py-24 md:px-8 lg:px-16">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-dark mb-12 text-4xl font-bold md:text-5xl">Skills</h2>

		<h3 class="text-dark mb-6 text-2xl font-bold">Featured</h3>
		<!-- Skill Categories -->
		<div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
			<!-- Frontend -->
			<div
				class="bg-primary rounded-2xl p-6 transition-all duration-300 hover:shadow-lg md:col-span-4 md:p-8"
			>
				<div class="mb-6 flex items-center">
					<div class="bg-tertiary mr-4 rounded-xl p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-accent h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="text-dark text-2xl font-bold">Frontend</h3>
				</div>
				<SkillProgressList skills={frontendSkills} />
			</div>

			<!-- Backend -->
			<div
				class="bg-primary rounded-2xl p-6 transition-all duration-300 hover:shadow-lg md:col-span-4 md:p-8"
			>
				<div class="mb-6 flex items-center">
					<div class="bg-tertiary mr-4 rounded-xl p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-accent h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
							/>
						</svg>
					</div>
					<h3 class="text-dark text-2xl font-bold">Backend</h3>
				</div>
				<SkillProgressList skills={backendSkills} />
			</div>

			<!-- DevOps & Tools -->
			<div
				class="bg-primary rounded-2xl p-6 transition-all duration-300 hover:shadow-lg md:col-span-4 md:p-8"
			>
				<div class="mb-6 flex items-center">
					<div class="bg-tertiary mr-4 rounded-xl p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-accent h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
							/>
						</svg>
					</div>
					<h3 class="text-dark text-2xl font-bold">DevOps & Tools</h3>
				</div>
				<SkillProgressList skills={devopsSkills} />
			</div>
		</div>

		<!-- Technology Pills -->
		<h3 class="text-dark mb-6 text-2xl font-bold">All Technologies</h3>
		<div class="bg-primary space-y-6 rounded-2xl p-6 md:p-8">
			{#each Object.entries(techCategories) as [category, technologies]}
				<div class="mb-4">
					<h4 class="mb-3 text-lg font-semibold">{category}</h4>
					<div class="flex flex-wrap gap-2">
						{#each technologies as tech}
							<TechPill label={tech} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

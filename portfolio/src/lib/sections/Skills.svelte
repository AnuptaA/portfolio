<script lang="ts">
	import SkillProgressList from '$lib/components/SkillProgressList.svelte';
	import TechPill from '$lib/components/TechPill.svelte';

	const techStack = [
		// Frontend
		'HTML/CSS',
		'JavaScript',
		'TypeScript',
		'Svelte',
		'React',
		'Next.js',
		'TailwindCSS',

		// Backend
		'Node.js',
		'Express',
		'REST APIs',
		'Python',
		'Flask',
		'Go',
		'SQL',
		'NoSQL',

		// Databases
		'MongoDB',
		'PostgreSQL',
		'MySQL',
		'Firebase',

		// DevOps
		'Git',
		'Docker',
		'AWS',
		'Vercel',
		'Render',
		'Heroku',

		// Design
		'Figma',

		// Misc
		'Bash',
		'R',
		'C/C++',
		'Adobe Suite',
		'Google Workspace',
		'Microsoft Office'
	];

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
		<h3 class="text-dark mb-6 text-2xl font-bold">Technologies I've Worked With</h3>
		<div class="bg-primary rounded-2xl p-6 md:p-8">
			<div class="flex items-center content-center justify-center flex-wrap gap-3">
				{#each techStack as tech}
					<TechPill label={tech} />
				{/each}
			</div>
		</div>

		<!-- Skills Showcase -->
		<!-- <div class="mt-16"> -->
		<!-- <h3 class="text-dark mb-6 text-2xl font-bold">Focus Areas</h3> -->
		<!-- <div class="grid grid-cols-1 gap-6 md:grid-cols-3"> -->
		<!-- Responsive Design -->
		<!-- <div class="bg-primary group relative overflow-hidden rounded-2xl p-6">
					<div
						class="bg-tertiary group-hover:bg-accent absolute right-0 top-0 flex h-20 w-20 items-center justify-center rounded-bl-3xl transition-colors duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-dark h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h4 class="text-dark mb-3 text-xl font-bold">Responsive Design</h4>
					<p class="text-dark opacity-80">
						Creating seamless experiences across all devices with mobile-first approach and
						accessibility best practices.
					</p>
				</div> -->

		<!-- Performance Optimization -->
		<!-- <div class="bg-primary group relative overflow-hidden rounded-2xl p-6">
					<div
						class="bg-tertiary group-hover:bg-accent absolute right-0 top-0 flex h-20 w-20 items-center justify-center rounded-bl-3xl transition-colors duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-dark h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<h4 class="text-dark mb-3 text-xl font-bold">Performance Optimization</h4>
					<p class="text-dark opacity-80">
						Enhancing application speed and efficiency through code optimization, lazy loading, and
						modern build techniques.
					</p>
				</div> -->

		<!-- UI/UX Design -->
		<!-- <div class="bg-primary group relative overflow-hidden rounded-2xl p-6">
					<div
						class="bg-tertiary group-hover:bg-accent absolute right-0 top-0 flex h-20 w-20 items-center justify-center rounded-bl-3xl transition-colors duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-dark h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
							/>
						</svg>
					</div>
					<h4 class="text-dark mb-3 text-xl font-bold">UI/UX Design</h4>
					<p class="text-dark opacity-80">
						Crafting intuitive interfaces with clean aesthetics, thoughtful interactions, and
						user-centered design principles.
					</p>
				</div> -->
		<!-- </div> -->
		<!-- </div> -->
		<!-- </div> -->
	</div>
</section>

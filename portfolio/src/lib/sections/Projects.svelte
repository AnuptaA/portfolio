<script lang="ts">
    import { base } from '$app/paths';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
    // import princeton_notes from "$lib/assets/PrincetonNotes_example.jpeg";
    // import personal_website from "$lib/assets/personal_website.jpeg"
    // import tigerrooms from "$lib/assets/TigerRooms_homepage.jpeg"
    // import tigertrain from "$lib/assets/TigerTrain_homepage.jpeg"

	const projects = [
		{
			title: 'PrincetonNotes',
			year: '2025',
			description: `A decentralized note-sharing platform for 
            Princeton courses where students and course staff 
            can create, upload, and comment on notes. Course staff can
            edit and moderate course-specific content. Admins manage
            general courses and platform content.`,
			tech: ['React', 'TailwindCSS', 'Flask', 'PostgreSQL', 'AWS S3', 'Docker'],
			imageUrl: base + '/PrincetonNotes_example.jpeg',
			projectLink: 'https://princetonnotes.onrender.com',
			githubLink: 'https://github.com/ky6374/PrincetonNotes'
		},
		{
			title: 'Personal Website',
			year: '2025',
			description: `A sleek, modern personal site that I built to showcase 
            my projects. The main goal of this project was to improve my frontend
            design skills.`,
			tech: ['Svelte', 'TypeScript', 'TailwindCSS'],
			imageUrl: base + '/personal_website.jpeg',
			projectLink: 'https://anuptaa.github.io/portfolio',
			githubLink: 'https://github.com/AnuptaA/portfolio'
		},
		{
			title: 'TigerRooms',
			year: '2024',
			description: `A COS333 project that simplifies Princeton’s 
            housing draw by parsing messy room availability PDFs and 
            presenting them in a clean, interactive UI. Additional functionalities
            include individual and group room viewing, room reviews, and room favoriting.`,
			tech: ['Flask', 'React', 'PostgreSQL', 'Pandas', 'Python PDF parsing'],
			imageUrl: base + '/TigerRooms_homepage.jpeg',
			projectLink: '#',
			githubLink: 'https://github.com/AnuptaA/TigerRooms'
		},
		{
			title: 'TigerTrain',
			year: '2024',
			description: `A study platform for Princeton’s COS226 course, 
            combining LeetCode-style practice with instant answer checking,
             step-by-step solutions, and GPT-powered help.`,
			tech: ['Next.js', 'Flask', 'OpenAI API', 'PostgreSQL', 'Auth0', 'AWS'],
			imageUrl: base + '/TigerTrain_homepage.jpeg',
			projectLink: '#',
			githubLink: 'https://github.com/AnuptaA/COS397-IW'
		}
	];
</script>

<section id="projects" class="bg-secondary animate-fade-in px-4 py-24 md:px-8 lg:px-16">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-dark mb-12 text-4xl font-bold md:text-5xl">Projects</h2>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each projects as p}
				<ProjectCard
					title={p.title}
					year={p.year}
					description={p.description}
					tech={p.tech}
					imageUrl={p.imageUrl}
					projectLink={p.projectLink}
					githubLink={p.githubLink}
				/>
			{/each}
		</div>

		<div class="mt-16 text-center">
			<a
				href="https://github.com/AnuptaA?tab=repositories"
				target="_blank"
				class="text-accent inline-flex items-center text-lg font-medium hover:underline"
			>
				<span>View all projects</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ml-2 h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
			</a>
		</div>
	</div>
</section>

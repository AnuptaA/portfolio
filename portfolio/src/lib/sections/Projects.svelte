<script lang="ts">
	import { base } from '$app/paths';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const projects = [
		{
			title: 'Ablating Semantic Underspecification',
			year: '2025',
			description: `An ablation study of Vision Transformer models revealing that 
            current VLM architectures struggle to distinguish vague from incorrect captions. 
            Includes a novel dataset and cross-model ablations exposing core robustness gaps.`,
			skills: ['PyTorch', 'OpenCLIP', 'Transformers', 'NVIDIA AM-RADIO', 'Python', 'OpenAI API'],
			imageUrl: base + '/poster.jpg',
			projectLink: '',
			githubLink: 'https://github.com/AnuptaA/COS484-Final_Project'
		},
		{
			title: 'Raft Consensus',
			year: '2025',
			description: `A from-scratch implementation of the Raft consensus protocol in Go, featuring 
            leader election, log replication, and performance optimizations. Built a fault-tolerant
            distributed key-value store on top using an exactly-once message delivery protocol.`,
			skills: ['Go', 'RPC', 'Raft', 'Linearizability', 'Concurrency', 'Message Queue Protocols'],
			imageUrl: base + '/raft.svg',
			projectLink: '',
			githubLink: 'Private'
		},
		{
			title: 'PrincetonNotes',
			year: '2025',
			description: `A decentralized note-sharing platform for 
            Princeton courses where students and course staff 
            can create, upload, and comment on notes. Course staff can
            edit and moderate course-specific content. Admins manage
            general courses and platform content.`,
			skills: ['React', 'TailwindCSS', 'Flask', 'PostgreSQL', 'AWS S3', 'Docker'],
			imageUrl: base + '/PrincetonNotes_example.jpeg',
			projectLink: 'Deprecated',
			githubLink: 'Private'
			// githubLink: 'https://github.com/ky6374/PrincetonNotes'
		},
		{
			title: 'Personal Website',
			year: '2025',
			description: `This modern personal site that I built to showcase 
            my experience. The main goal of this project was to improve my frontend
            design skills.`,
			skills: ['Svelte', 'TypeScript', 'TailwindCSS'],
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
			skills: ['Flask', 'React', 'PostgreSQL', 'Pandas', 'Python PDF parsing'],
			imageUrl: base + '/TigerRooms_homepage.jpeg',
			projectLink: 'Deprecated',
			githubLink: 'https://github.com/AnuptaA/TigerRooms'
		},
		{
			title: 'TigerTrain',
			year: '2024',
			description: `A study platform for Princeton’s COS226 course, 
            combining LeetCode-style practice with instant answer checking,
             step-by-step solutions, and GPT-powered help.`,
			skills: ['Next.js', 'Flask', 'OpenAI API', 'PostgreSQL', 'Auth0', 'AWS'],
			imageUrl: base + '/TigerTrain_homepage.jpeg',
			projectLink: 'Deprecated',
			githubLink: 'https://github.com/AnuptaA/COS397-IW'
		}
	];
</script>

<section id="projects" class="bg-secondary animate-fade-in px-4 py-24 md:px-8 lg:px-16">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-dark mb-12 text-4xl font-bold md:text-5xl">Projects</h2>
		<p class="text-dark mb-12 max-w-3xl text-lg opacity-80">
			Below are some highlighted projects. However some of my work is private or not on GitHub. If
			you would like to view private repositories or work, please reach out to me personally.
		</p>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each projects as p}
				<ProjectCard
					title={p.title}
					year={p.year}
					description={p.description}
					skills={p.skills}
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

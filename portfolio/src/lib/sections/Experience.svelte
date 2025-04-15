<script lang="ts">
	import ExperienceItem from '$lib/components/ExperienceItem.svelte';

	const experiences = [
		{
			role: 'Full-Stack Intern',
			company: 'Cofactor AI',
			date: 'Incoming',
			description: `Will be working this summer.`,
			skills: ['TBD'],
			imageUrl: '/cofactor_logo.png'
		},
		{
			role: 'Full-Stack Intern',
			company: 'Princeton University',
			date: 'April 2025 - Present',
			description: `Building a web application for a Princeton professor 
            as part of the Trenton Project, aimed at supporting the greater 
            Trenton community. Responsible for both frontend and backend 
            development, as well as DevOps infrastructure.`,
			skills: ['JavaScript', 'jQuery', 'Python', 'CSS', 'DevOps'],
			imageUrl: '/Princeton_University_Logo.png'
		},
		{
			role: 'Software Engineering Intern',
			company: 'Princeton Physics',
			date: 'Jan 2025 - Present',
			description: `Developing and maintaining the Princeton Physics
             tutoring portal used by hundreds of students, admins, and course staff. 
		    Improved platform performance by 2–3x and implemented several 3-tiered
             features with full-stack coverage.`,
			skills: ['Flask', 'Git', 'CI/CD', 'HTML/CSS', 'REST API'],
			imageUrl: '/princeton_physics_logo.png'
		},
		{
			role: 'Junior Software Developer',
			company: 'TigerApps',
			date: 'Jan 2025 - Present',
			description: `Working closely with another developer and the Office
             of Disability Services on PrincetonNotes — a decentralized note-sharing
              platform built to support accessibility for all Princeton students.
               Contributing across the full stack with a focus on inclusive design, 
               course moderation, and system-level features.`,
			skills: ['React', 'Flask', 'Git', 'CAS Auth', 'Docker', 'PostgreSQL', 'AWS S3'],
			imageUrl: '/tigerapps_logo.png'
		}
	];
</script>

<section id="experience" class="bg-primary animate-fade-in px-4 py-24 md:px-8 lg:px-16">
	<div class="mx-auto max-w-6xl">
		<h2 class="text-dark mb-12 text-4xl font-bold md:text-5xl">Recent Experience</h2>

		<div class="space-y-12">
			{#each experiences as exp}
				<ExperienceItem {...exp} />
			{/each}
		</div>
	</div>
</section>

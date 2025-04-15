<script lang="ts">
	export let title: string;
	export let year: string;
	export let description: string;
	export let tech: string[];
	export let imageUrl: string;
	export let projectLink: string;
	export let githubLink: string;
</script>

<div class="bg-primary group overflow-hidden rounded-2xl transition-all duration-500">
	<!-- fixed-height, full-width, cropping container -->
	<div class="relative h-48 w-full overflow-hidden">
		<!-- gradient overlay -->
		<div class="from-accent/30 to-tertiary/10 absolute inset-0 bg-gradient-to-tr"></div>
		<!-- image covers entire box and gets cropped -->
		<a href={projectLink} target="_blank" class="relative z-10 block h-full w-full">
			<img
				src={imageUrl}
				alt="Project screenshot"
				class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
			/>
		</a>
	</div>

	<div class="p-6">
		<div class="mb-3 flex items-center justify-between">
			<h3 class="text-dark group-hover:text-accent text-2xl font-bold transition-colors">
				{title}
			</h3>
			<span class="bg-tertiary text-dark rounded-full px-3 py-1 text-sm">{year}</span>
		</div>
		<p class="text-dark mb-4 opacity-80">{description}</p>
		<div class="mb-4 flex flex-wrap gap-2">
			{#each tech as t}
				<span class="bg-tertiary text-dark rounded-full px-3 py-1 text-xs">{t}</span>
			{/each}
		</div>
		<div class="flex gap-4">
			{#if projectLink !== '#'}
				<a href={projectLink} class="text-accent flex items-center hover:underline" target="_blank">
					<span>View Project</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ml-1 h-4 w-4"
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
			{:else}
				<span class="text-dark/50 flex items-center italic">
					<span class="text-red-500">Deprecated</span>
				</span>
			{/if}
			<a href={githubLink} target="_blank" class="text-accent flex items-center hover:underline">
				<span>GitHub</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ml-1 h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>

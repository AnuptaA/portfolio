<script lang="ts">
	export let skills: { name: string; level: string; percentage: number }[];
</script>

<div class="space-y-5">
	{#each skills as skill}
		<div>
			<div class="mb-1 flex justify-between">
				<span class="text-dark font-medium">{skill.name}</span>
				<span class="text-dark opacity-70">{skill.level}</span>
			</div>
			<div class="relative h-3 w-full overflow-hidden rounded-full bg-gray-300">
				<!-- Glow gradient background -->
				<div
					class="animate-gradient absolute h-full opacity-30 blur-md"
					style={`width: ${skill.percentage}%; background-image: linear-gradient(270deg, #22c55e, #3b82f6);`}
				></div>

				<!-- Animated gradient progress bar -->
				<div
					class="animate-gradient relative h-full rounded-full shadow-[0_0_10px_#3b82f6] transition-all duration-700 ease-in-out"
					style={`width: ${skill.percentage}%; background-image: linear-gradient(270deg, #22c55e, #3b82f6);`}
				></div>
			</div>
			<!-- <div class="mb-4 h-2 w-full rounded-full bg-tertiary">
				<div class="h-2 rounded-full bg-blue-500" style={`width: ${skill.percentage}%`}></div>
			</div> -->
		</div>
	{/each}
</div>

<style>
	/* Add animation to the gradient background */
	@keyframes gradientShift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-gradient {
		background-size: 200% 200%;
		animation: gradientShift 5s ease infinite;
	}
</style>

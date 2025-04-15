<script lang="ts">
	export let role: string;
	export let company: string;
	export let date: string;
	export let description: string;
	export let skills: string[];
	export let imageUrl: string;
</script>

<div
	class="bg-secondary rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-xl md:p-8"
>
	<!-- Small screens: Stacked layout -->
	<div class="flex flex-col gap-6 md:flex-row">
		<!-- Image container with fixed width -->
		<div class="mx-auto flex-none md:mx-0 md:w-36">
			<div class="h-28 w-28 overflow-hidden rounded-xl bg-white shadow-md md:h-36 md:w-36">
				<img src={imageUrl} alt="{company} logo" class="h-full w-full object-cover" />
			</div>
		</div>

		<!-- Small screens: Role, company and date stacked vertically -->
		<div class="text-center md:hidden">
			<h3 class="text-dark text-xl font-semibold">{role}</h3>
			<h4 class="text-dark text-base font-medium opacity-80">{company}</h4>
			<span
				class="bg-tertiary text-accent mt-2 inline-block rounded-full px-3 py-1 text-sm font-medium"
			>
				{date}
			</span>
		</div>

		<!-- Content Section -->
		<div class="flex flex-1 flex-col justify-between gap-4">
			<!-- Title and date section (visible only on medium screens) -->
			<div class="hidden md:flex md:flex-row md:items-center md:justify-between">
				<div>
					<h3 class="text-dark text-2xl font-semibold">{role}</h3>
					<h4 class="text-dark text-lg font-medium opacity-80">{company}</h4>
				</div>
				<div>
					<span
						class="bg-tertiary text-accent inline-block rounded-full px-4 py-1 text-sm font-medium"
					>
						{date}
					</span>
				</div>
			</div>

			<!-- Description -->
			<p class="text-dark text-base leading-relaxed opacity-80">{description}</p>

			<!-- Skills -->
			<div class="flex flex-wrap gap-2">
				{#each skills as skill}
					<span class="bg-tertiary text-accent rounded-full px-3 py-1 text-sm">{skill}</span>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.text-accent {
		color: #0071e3;
	}
</style>

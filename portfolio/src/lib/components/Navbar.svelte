<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let currentSection = 'about';
	let menuOpen = false;
	let isNavigatingViaClick = false;
	const sections = ['about', 'experience', 'projects', 'coursework', 'skills'];

	// Add debug tracking specifically for coursework
	let debugInfo: { courseworkVisible: boolean; lastIntersected: string | null } = {
		courseworkVisible: false,
		lastIntersected: null
	};

	onMount(() => {
		// Create a more sensitive observer specifically for troubleshooting
		const observer = new IntersectionObserver(
			(entries) => {
				// Skip intersection detection during click navigation
				if (isNavigatingViaClick) return;

				for (const entry of entries) {
					// Special debugging for coursework
					if (entry.target.id === 'coursework') {
						debugInfo.courseworkVisible = entry.isIntersecting;
					}

					if (entry.isIntersecting) {
						debugInfo.lastIntersected = entry.target.id;
						currentSection = entry.target.id;
						break; // Use the first intersecting section
					}
				}
			},
			// Use a very low threshold and adjust rootMargin
			{
				threshold: 0.05,
				rootMargin: '-80px 0px -70% 0px'
			}
		);

		// Wait a moment for the DOM to be fully loaded
		setTimeout(() => {
			sections.forEach((id) => {
				const el = document.getElementById(id);
				if (el) {
					observer.observe(el);
					console.log(`Observing section: ${id}, height: ${el.offsetHeight}px`);
				} else {
					console.warn(`Section ${id} not found in DOM`);
				}
			});
		}, 100);

		// Handle hash changes for direct navigation
		const updateSectionFromHash = () => {
			const hash = window.location.hash.slice(1);
			if (hash && sections.includes(hash)) {
				currentSection = hash;
			}
		};

		window.addEventListener('hashchange', updateSectionFromHash);
		// Initial check
		if (window.location.hash) {
			updateSectionFromHash();
		}

		return () => {
			sections.forEach((id) => {
				const el = document.getElementById(id);
				if (el) observer.unobserve(el);
			});
			window.removeEventListener('hashchange', updateSectionFromHash);
		};
	});

	function handleNavClick(section: string): void {
		// Immediately update the section
		currentSection = section;

		// Set flag to disable intersection observer during scroll
		isNavigatingViaClick = true;
		menuOpen = false;

		// Scroll to the section
		const sectionElement = document.getElementById(section);
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: 'smooth' });

			// Re-enable scroll detection after animation completes
			// Typical smooth scroll animation takes about 500ms
			setTimeout(() => {
				isNavigatingViaClick = false;
			}, 1000);
		} else {
			// If section not found, immediately re-enable
			isNavigatingViaClick = false;
		}
	}
</script>

<nav
	class="bg-navbar border-navbar fixed left-0 right-0 top-0 z-50 select-none border-b-2 px-6 py-3 shadow-sm backdrop-blur-sm"
>
	<div class="mx-auto flex max-w-7xl content-center items-center justify-between">
		<div class="text-navbar text-md font-semibold lg:text-lg">Anupta Argo</div>

		<!-- Desktop View -->
		<div class="hidden gap-8 md:flex">
			{#each sections as section}
				<a
					href="#{section}"
					on:click|preventDefault={() => handleNavClick(section)}
					class="text-navbar-hover text-sm transition-colors duration-300"
					class:active-link-desktop={currentSection === section}
				>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</a>
			{/each}
		</div>

		<!-- Mobile View (Hamburger) -->
		<div class="m-0 flex content-center items-center md:hidden">
			<button
				class="text-navbar relative mx-4 h-full w-full cursor-pointer p-0 focus:outline-none"
				on:click={() => (menuOpen = !menuOpen)}
			>
				<span class="sr-only">Open main menu</span>
				<div
					class="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform"
				>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out"
						class:rotate-45={menuOpen}
						class:-translate-y-1.5={!menuOpen}
					></span>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out"
						class:opacity-0={menuOpen}
					></span>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-5 transform bg-current transition duration-300 ease-in-out"
						class:-rotate-45={menuOpen}
						class:translate-y-1.5={!menuOpen}
					></span>
				</div>
			</button>
		</div>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if menuOpen}
		<div
			class="mt-4 no-scrollbar flex max-h-[80vh] flex-col items-start gap-4 overflow-y-auto pb-4 md:hidden"
			transition:slide={{ duration: 350 }}
		>
			{#each sections as section}
				<a
					href="#{section}"
					on:click|preventDefault={() => handleNavClick(section)}
					class="text-navbar-hover text-sm transition-colors duration-300"
					class:active-link-mobile={currentSection === section}
				>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
	@layer utilities {
		.no-scrollbar::-webkit-scrollbar {
			display: none;
		}
		.no-scrollbar {
			-ms-overflow-style: none;
			scrollbar-width: none;
		}
	}
</style>

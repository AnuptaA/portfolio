<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import type { SvelteComponent } from 'svelte';

	let navbar: SvelteComponent;
	let navbarHeight = 0;
	let navbarElement: HTMLElement;

	onMount(() => {
		// Get the actual DOM element from the component
		if (navbar && navbar.$$ && navbar.$$.dom) {
			navbarElement = navbar.$$.dom as HTMLElement;
			navbarHeight = navbarElement.offsetHeight;
			document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);

			const resizeObserver = new ResizeObserver(() => {
				navbarHeight = navbarElement.offsetHeight;
				document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
			});

			resizeObserver.observe(navbarElement);
			return () => {
				resizeObserver.disconnect();
			};
		}
	});
</script>

<Navbar bind:this={navbar} />
<main class="scroll-smooth">
	<slot />
</main>
<Footer />

<style>
	:global(html),
	:global(body) {
		overflow-x: hidden;
		height: 100%;
		scroll-behavior: smooth;
	}

	main {
		position: relative;
		z-index: 10;
	}
</style>


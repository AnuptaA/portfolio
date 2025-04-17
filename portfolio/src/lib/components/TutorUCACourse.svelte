<script lang="ts">
    import { base } from '$app/paths';
    // import princeton_university_logo from "$lib/assets/princeton_university_logo.jpeg"
	export let course: string;
	export let description: string;
</script>

<li class="bg-tertiary rounded-xl p-4">
	<div class="flex items-center">
		<img class="mr-2 h-auto w-5" src="{base}/princeton_university_logo.jpeg" alt="Princeton" />
		<div class="text-dark font-medium">{course}</div>
	</div>
	<div class="text-dark mt-1 text-sm opacity-70">{description}</div>
</li>

<script lang="ts">
	export let code: string;
	export let name: string;
	export let description: string;
</script>

<li class="bg-tertiary rounded-xl p-5 relative">
	<div class="text-dark font-medium">{code}: {name}</div>
	<div class="text-dark text-sm opacity-70">{description}</div>
</li>

<script lang="ts">
	export let code: string;
	export let name: string;
	export let description: string;
</script>

<div class="bg-tertiary rounded-xl p-5">
	<div class="mb-3 flex items-start justify-between">
		<div class="text-dark font-medium">{code}: {name}</div>
	</div>
	<div class="text-dark text-sm opacity-70">{description}</div>
</div>

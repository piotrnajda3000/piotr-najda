<script>
	/**
	 * @type {import('$lib/types').ContentItem[]}
	 */
	export let items;
</script>

<section>
	<h2 id="latest" class="mb-4 text-3xl font-light tracking-wide  text-gray-900 dark:text-white">
		Latest posts
	</h2>
	<ul class="list-disc space-y-3 px-5">
		{#each items as item (item.slug)}
			<li>
				<a class="no-underline" data-sveltekit-preload-data href={item.slug}>
					<span class="hidden text-xs text-gray-900 dark:text-200 sm:inline"
						>{new Date(item.date).toISOString().slice(0, 10)}</span
					>
					<span class="text-gray-900 dark:text-200">{item.title}</span></a
				>
			</li>
		{/each}
	</ul>
</section>

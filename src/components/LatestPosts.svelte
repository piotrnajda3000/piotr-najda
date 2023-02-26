<script>
	/**
	 * @type {import('$lib/types').ContentItem[]}
	 */
	export let items;
</script>

<section>
	<h2 id="latest" class="border-b-0 text-200">Latest posts</h2>
	<ul>
		{#each items as item (item.slug)}
			<li>
				<a class="no-underline" data-sveltekit-preload-data href={item.slug}>
					<span class="hidden text-xs sm:inline"
						>{new Date(item.date).toISOString().slice(0, 10)}</span
					>
					<span class="font-bold">{item.title}</span></a
				>
			</li>
		{/each}
	</ul>
</section>

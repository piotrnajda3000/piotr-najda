<script>
	import { page } from '$app/stores';
	$: isActive = $page.url.pathname === $$props.href;
	export let href;
</script>

<a
	class="hidden tracking-tighter text-gray-800 no-underline transition-all  dark:text-200 md:inline-block"
	class:font-semibold={isActive}
	{href}
	><span class="capsize"><slot /> </span>
</a>
